import { FC, PropsWithChildren } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	children,
	icon,
	onClick,
	sx
}) => {
	return (
		<MUIButton
			disableElevation
			disableFocusRipple
			disableRipple
			disableTouchRipple
			sx={[
				buttonStyles.root,
				type === "white-shadow" && buttonStyles.whiteShadow,
				type === "blue-no-border" && buttonStyles.blueNoBorder,
				type === "header-nav-enabled" && buttonStyles.headerNavEnabled,
				type === "header-nav-disabled" && buttonStyles.headerNavDisabled,
				type === "footer-link" && buttonStyles.footerLink,
				type === "not-found" && buttonStyles.notFound,
				sx as Record<string, unknown>,
			]}
			onClick={onClick}
		>
			{icon}
			{children}
		</MUIButton>
	);
};

export default Button;
