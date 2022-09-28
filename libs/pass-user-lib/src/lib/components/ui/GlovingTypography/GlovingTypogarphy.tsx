import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { glovingTypographyStyles } from "./GlovingTypography.style";
import { GlovingTypogarphyProps } from "./GlovingTypography.types";

export const GlovingTypography: FC<
	PropsWithChildren<GlovingTypogarphyProps>
> = ({ children, variant, sx, dataCy }) => {
	return (
		<Typography
			data-cy={dataCy}
			sx={[
				glovingTypographyStyles.root,
				variant === "h3-glow" && glovingTypographyStyles.h3Glow,
				variant === "h1" && glovingTypographyStyles.h1,
				variant === "h3" && glovingTypographyStyles.h3,
				variant === "body1" && glovingTypographyStyles.body1,
				variant === "body2" && glovingTypographyStyles.body2,
				sx as unknown as Record<string, unknown>
			]}
		>
			{children}
		</Typography>
	);
};
export default GlovingTypography;
