import { ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonProps = Pick<MuiButtonProps, "sx"> & {
	type: "white-shadow" | "blue-no-border" | "blue-border" | "header-nav-disabled" | "header-nav-enabled";
	icon?: ReactNode;
	onClick?: () => void;
	
};
