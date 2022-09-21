import { FC } from "react";
import { HeaderProps } from "./Header.types";

export const Header: FC<HeaderProps> = ({
	isPrivate
}) => {
	return (
		<div>
			Header
			{" "}
			{isPrivate ? "(Auth)" : "(Non auth)"}
		</div>
	);
};

export default Header;
