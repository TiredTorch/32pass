import { TypographyProps } from "@mui/material";

export type GlovingTypogarphyProps = Pick<TypographyProps, "sx"> & {
	variant: "h3-glow" | "h3" | "body1" | "body2" | "h1";
	dataCy?: string
};
