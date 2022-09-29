import { FC } from "react";
import { Box } from "@mui/material";
import { GlovingTypography } from "../../ui";
import { ChallengeListProps } from "./ChallengeList.types";
import { challengeListStyles } from "./ChallengeList.styles";

export const ChallengeList: FC<ChallengeListProps> = ({
	challengesArray
}) => {
	return (
		<Box
			sx={challengeListStyles.root}
		>
			<GlovingTypography variant={"body2"}>Game-Name/Challenge</GlovingTypography>
			<Box
				sx={challengeListStyles.list}
			>

			</Box>
		</Box>
	);
};

export default ChallengeList;
