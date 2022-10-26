import { Box, InputAdornment, OutlinedInput, Rating, useMediaQuery, IconButton } from "@mui/material";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { GlovingTypography } from "../../components";
import { PageLayout } from "../../layout";
import { theme } from "../../theme/theme";
import { AppRouteEnum } from "../../types";
import { challengePageContainerStyles } from "./ChallengePageContainer.styles";
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import ReviewList from "./ReviewList/ReviewList";

export const ChallengePageContainer = () => {

	const challengeMock = {
		gameName: "The Elder Scrolls V SKYRIM",
		gamePoster: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/skyrim-dragonborn-i29157.jpg",
		challengeName: "Pass the game with only spoon",
		challengeHardRate: 4,
		challengeDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur vitae minima fuga ab officiis error vel assumenda suscipit quos qui, corrupti, rerum, vero sunt dicta ratione maiores rem natus.",
		challengeReviews: [
			{
				user: {
					avatar: "https://i1.sndcdn.com/avatars-000751801549-98zlio-t240x240.jpg",
					name: "Kiril_420"
				},
				postDate: new Date(2011, 0, 1, 2, 3),
				rating: 4,
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore dolorem reiciendis labore!",
			},
			{
				user: {
					avatar: "https://i1.sndcdn.com/avatars-000751801549-98zlio-t240x240.jpg",
					name: "Kiril_420"
				},
				postDate: new Date(2011, 0, 1, 2, 3),
				rating: 4,
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore dolorem reiciendis labore!",
			},
			{
				user: {
					avatar: "https://i1.sndcdn.com/avatars-000751801549-98zlio-t240x240.jpg",
					name: "Kiril_420"
				},
				postDate: new Date(2011, 0, 1, 2, 3),
				rating: 4,
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore dolorem reiciendis labore!",
			},
		]
	};

	const fetchChallengeByIdMock = (id: string) => challengeMock;

	const { clgId } = useParams();
	const challenge = clgId ? fetchChallengeByIdMock(clgId) : undefined;

	const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

	const [reviewInput, setReviewInput] = useState("");

	return (
		<>
			{!challenge ?
				<Navigate to="/not-found" />
				:
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
									src={challenge.gamePoster}
									sx={challengePageContainerStyles.poster}
								/>
							</Box>
							<Box
								sx={challengePageContainerStyles.challengeDataSection}
							>
								<GlovingTypography
									variant="game-name"
								>
									{challenge.gameName}
								</GlovingTypography>
								<Box
									sx={challengePageContainerStyles.challengeMainInfoContainer}
								>
									<GlovingTypography
										variant="challenge-name"
									>
										{challenge.challengeName}
									</GlovingTypography>
									<Rating
										value={challenge.challengeHardRate}
										readOnly
										sx={challengePageContainerStyles.hardRate}
									/>
								</Box>
								<GlovingTypography
									variant="body3"
									sx={challengePageContainerStyles.description}
								>
									{challenge.challengeDescription}
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
											items={challenge.challengeReviews}
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
									items={challenge.challengeReviews}
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