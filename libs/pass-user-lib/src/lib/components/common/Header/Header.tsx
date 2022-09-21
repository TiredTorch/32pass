import { FC } from "react";
import { Box } from "@mui/material";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";

export const Header: FC<HeaderProps> = ({
	isPrivate
}) => {
	return (
		<Box
			sx={headerStyles.root}
		>
			Header
			{" "}
			{isPrivate ? "(Auth)" : "(Non auth)"}
		</Box>
	);
};

export default Header;
