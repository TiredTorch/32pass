import { FC, PropsWithChildren } from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	children,
	icon
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
			]}
		>
			{icon}
			{children}
		</MUIButton>
	);
};

export default Button;
