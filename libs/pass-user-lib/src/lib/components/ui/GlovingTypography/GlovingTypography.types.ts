import { TypographyProps } from "@mui/material";

export type GlovingTypogarphyProps = Pick<TypographyProps, "sx"> & {
	variant: "h4-glow" | "h3-glow" | "h3" | "body1" | "body2" | "h1" | "body3" | "body4" | "footer" | "not-found" | "game-name" | "challenge-name";
	dataCy?: string
};
