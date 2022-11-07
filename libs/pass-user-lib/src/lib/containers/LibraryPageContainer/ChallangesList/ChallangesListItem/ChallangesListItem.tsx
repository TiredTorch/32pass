import { FC, useCallback } from "react";
import { Box, Rating } from "@mui/material";
import { GlovingTypography } from "libs/pass-user-lib/src/lib/components";
import { GameChallengeData } from "@32pass/shared";
import { ReactComponent as Lightning } from "../../../../assets/icons/lightingIcon.svg";
import { challangesListItemStyles } from "./ChallangesListItem.styles";
import { challangesListStyles } from "../ChallangesList.styles";
import { ChallangeStatus, ChallengeData } from "../../../../types"
import { useNavigate } from "react-router-dom";

const ChallangesListItem: FC<Partial<GameChallengeData> & { iconColor: string; category: ChallangeStatus }> = ({
	challengeName,
	challengeDescription,
	challengeHardRate,
	category,
	iconColor,
	uid
}) => {
	const navigate = useNavigate();

	const handleNavToProposal = useCallback(
		() => {
			navigate(`/challenge/${uid}`);
		},
		[],
	);

	return (
		<Box
			onClick={handleNavToProposal}
			sx={[
				challangesListStyles.descriptionWrapper,
				challangesListItemStyles.root,
				{
					"& path": {
						fill: iconColor
					}
				}
			]}
		>
			<Box>
				<GlovingTypography variant={"body3"}>
					<Lightning style={challangesListItemStyles.icon} />{challengeName}
				</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant={"body4"}>{challengeDescription}</GlovingTypography>
			</Box>
			{category === ChallangeStatus.DONE &&
				<Box>
					<Rating
						value={challengeHardRate}
						precision={0.5}
					/>
				</Box>
			}
		</Box>
	);
};

export default ChallangesListItem;
