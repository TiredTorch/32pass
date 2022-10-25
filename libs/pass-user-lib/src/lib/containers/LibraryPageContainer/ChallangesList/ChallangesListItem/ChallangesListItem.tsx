import { FC } from "react";
import { Box, Rating } from "@mui/material";
import { ChallangeItemShort, ChallangeStatus } from "../ChallangesList.types";
import { GlovingTypography } from "libs/pass-user-lib/src/lib/components";
import { ReactComponent as Lightning } from "../../../../assets/icons/lightingIcon.svg";
import { challangesListItemStyles } from "./ChallangesListItem.styles";
import { challangesListStyles } from "../ChallangesList.styles";

const ChallangesListItem: FC<ChallangeItemShort & { iconColor: string }> = ({
	gameName,
	description,
	rate,
	status,
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
					<Lightning style={challangesListItemStyles.icon} />{gameName}</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant={"body4"}>{description}</GlovingTypography>
			</Box>
			{status === ChallangeStatus.DONE &&
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
