import { FC } from "react";
import { Box } from "@mui/material";
import { GlovingTypography } from "../../../components";
import { ProposalPageResultProps } from "./ProposalPageResult.types";
import { proposalPageResultStyles } from "./ProposalPageResult.styles";

export const ProposalPageResult: FC<ProposalPageResultProps> = ({
	gameName,
	clgName,
	description
}) => {
	const imgUrl = undefined;

	return (
		<Box
			sx={proposalPageResultStyles.root}
		>
			{imgUrl &&
				<Box
					component="img"
					src={imgUrl}
				/>
			}
			<Box>
				<GlovingTypography variant="h3-glow">Game Name: </GlovingTypography>
				<GlovingTypography variant="body3">{gameName}</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant="h3-glow">Challenge Name:</GlovingTypography>
				<GlovingTypography variant="body3">{clgName}</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant="h3-glow">Description: </GlovingTypography>
				<GlovingTypography variant="body3">{description}</GlovingTypography>
			</Box>
		</Box>
	);
};

export default ProposalPageResult;
