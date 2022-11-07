import { Box, InputAdornment, OutlinedInput, Rating, useMediaQuery, IconButton, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlovingTypography } from "../../components";
import { PageLayout } from "../../layout";
import { theme } from "../../theme/theme";
import { AppRouteEnum, GameData } from "../../types";
import { challengePageContainerStyles } from "./ChallengePageContainer.styles";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import ReviewList from "./ReviewList/ReviewList";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc, DocumentReference } from "firebase/firestore";
import { firebaseFirestore, GameChallengeData } from "@32pass/shared";

export const ChallengePageContainer = () => {
	const { clgId } = useParams();
	const navigate = useNavigate();

	const handleNavToNotFound = useCallback(
		() => {
			navigate("/404");
		},
		[],
	);

	const [clgData, clgLoading, clgError] = useDocumentData(
		doc(firebaseFirestore, "challenges", clgId ?? " ") as DocumentReference<GameChallengeData>
	);

	const [gameData, gameLoading, gameError] = useDocumentData(
		doc(firebaseFirestore, "games", clgData?.game ?? " ") as DocumentReference<GameData>
	);

	const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
	const [reviewInput, setReviewInput] = useState("");

	useEffect(() => {
		if (clgLoading) return;
		if (!clgData) handleNavToNotFound();
	}, [gameData, gameLoading]);

	return (
		<>
			{!clgId && <CircularProgress />}
			{!clgLoading && !clgError && clgData && clgId && gameData && !gameLoading && !gameError &&
				<PageLayout
					isPrivate={true}
					currentPage={AppRouteEnum.CHALLENGE}
				>
					<Box
						sx={challengePageContainerStyles.root}
					>
						<Box
							sx={challengePageContainerStyles.upperSection}
						>
							<Box
								sx={challengePageContainerStyles.posterContainer}
							>
								<Box
									component="img"
									src={gameData?.img}
									sx={challengePageContainerStyles.poster}
								/>
							</Box>
							<Box
								sx={challengePageContainerStyles.challengeDataSection}
							>
								<GlovingTypography
									variant="game-name"
								>
									{gameData?.name}
								</GlovingTypography>
								<Box
									sx={challengePageContainerStyles.challengeMainInfoContainer}
								>
									<GlovingTypography
										variant="challenge-name"
									>
										{clgData.challengeName}
									</GlovingTypography>
									<Rating
										value={clgData.challengeHardRate}
										readOnly
										sx={challengePageContainerStyles.hardRate}
									/>
								</Box>
								<GlovingTypography
									variant="body3"
									sx={challengePageContainerStyles.description}
								>
									{clgData.challengeDescription}
								</GlovingTypography>
								<OutlinedInput
									id="outlined-adornment-password"
									type="text"
									value={reviewInput}
									onChange={(e) => setReviewInput(e.target.value)}
									multiline={isDownMd}
									endAdornment={
										<InputAdornment position="end">
											<IconButton

												aria-label="send review"
												onClick={() => undefined}
												edge="end"
											>
												<SendIcon />
											</IconButton>
										</InputAdornment>
									}
									sx={challengePageContainerStyles.input}
								/>
								{
									!isDownMd &&
									<Box
										sx={challengePageContainerStyles.lowerSection}
									>
										<ReviewList
											items={clgData.challengeReviews}
										/>
									</Box>
								}
							</Box>

						</Box>
						{
							isDownMd &&
							<Box
								sx={challengePageContainerStyles.lowerSection}
							>
								<ReviewList
									items={clgData.challengeReviews}
								/>
							</Box>
						}
					</Box>
				</PageLayout>
			}
		</>
	);
};

export default ChallengePageContainer;
