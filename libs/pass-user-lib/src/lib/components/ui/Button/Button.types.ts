import { ReactNode } from "react";

export type ButtonProps = {
	type: "white-shadow" | "blue-no-border" | "blue-border";
	icon?: ReactNode;
	onClick?: () => void;
};
