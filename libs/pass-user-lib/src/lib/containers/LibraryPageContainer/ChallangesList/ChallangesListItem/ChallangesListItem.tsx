import { FC } from "react";
import { Box, Rating } from "@mui/material";
import { GlovingTypography } from "libs/pass-user-lib/src/lib/components";
import { ReactComponent as Lightning } from "../../../../assets/icons/lightingIcon.svg";
import { challangesListItemStyles } from "./ChallangesListItem.styles";
import { challangesListStyles } from "../ChallangesList.styles";
import { ChallangeStatus, ChallengeData } from "../../../../types"

const ChallangesListItem: FC<Omit<ChallengeData, "game" | "id" | "comments" > & { iconColor: string }> = ({
	name,
	description,
	rate,
	category,
	iconColor
}) => {
	return (
		<Box
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
					<Lightning style={challangesListItemStyles.icon} />{name}</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant={"body4"}>{description}</GlovingTypography>
			</Box>
			{category === ChallangeStatus.DONE &&
				<Box>
					<Rating
						value={rate}
						precision={0.5}
					/>
				</Box>
			}
		</Box>
	);
};

export default ChallangesListItem;
