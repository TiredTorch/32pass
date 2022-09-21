import { FC } from "react";
import { Box } from "@mui/material";
import { formLayoutStyles } from "./FormLayout.styles";
import { FormLayoutProps } from "./FormLayout.types";

export const FormLayout: FC<FormLayoutProps> = ({
	form,
	textContent
}) => {
	return (
		<Box
			sx={formLayoutStyles.root}
		>
			<Box
				sx={formLayoutStyles.formWrapper}
			>
				{form}
			</Box>
			<Box
				sx={formLayoutStyles.textWrapper}
			>
				{textContent}
			</Box>
		</Box>
	);
};

export default FormLayout;
