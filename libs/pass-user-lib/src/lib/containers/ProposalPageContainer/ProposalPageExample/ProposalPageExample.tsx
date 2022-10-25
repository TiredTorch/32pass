import { Box } from "@mui/material";
import { GlovingTypography } from "../../../components";
import { proposalPageExampleStyles } from "./ProposalPageExample.styles";

export const ProposalPageExample = () => {
	return (

		<Box
			sx={proposalPageExampleStyles.root}
		>
			<Box>
				<GlovingTypography variant="h3-glow">Step 1</GlovingTypography>
				<GlovingTypography variant="body3">Fill all textfields with necessary information</GlovingTypography>
			</Box>
			<Box>
				<GlovingTypography variant="h3-glow">Step 2</GlovingTypography>
				<GlovingTypography variant="body3">Send form to the reviewer</GlovingTypography>
			</Box>
		</Box>
	);
};

export default ProposalPageExample;
