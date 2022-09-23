import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { glovingTypographyStyles } from "./GlovingTypography.style";
import { GlovingTypogarphyProps } from "./GlovingTypography.types";

export const GlovingTypography: FC<
	PropsWithChildren<GlovingTypogarphyProps>
> = ({ children, variant }) => {
	return (
		<Typography
			sx={[
				glovingTypographyStyles.root,
				variant === "h1-glow" && glovingTypographyStyles.h1Glow,
				variant === "h1" && glovingTypographyStyles.h1,
				variant === "footer" && glovingTypographyStyles.footer,
			]}
		>
			{children}
		</Typography>
	);
};
export default GlovingTypography;
