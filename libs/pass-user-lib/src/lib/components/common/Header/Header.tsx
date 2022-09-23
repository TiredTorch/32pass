import { FC } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";
import { Button, GlovingTypogarphy } from "../../ui";
import logo from "../../../assets/icons/logo.svg";
import darkLogo from "../../../assets/icons/darkLogo.svg";
import { ReactComponent as House } from "../../../assets/icons/house.svg";
import { ReactComponent as Book } from "../../../assets/icons/book.svg";
import { Avatar } from "../../ui/Avatar/Avatar";
import { AppRouteEnum } from "../../../types/enums/paths";

export const Header: FC<HeaderProps> = ({
	isPrivate,
	avatarSource,
	currentPage,
	handleExit,
	userName
}) => {
	return (
		<Box 
			sx={headerStyles.root}
			
		>
			{!isPrivate &&
				<>
					<Box
						component={"img"}
						src={darkLogo}
						alt="Logo"
						sx = {headerStyles.unAuthorized}
					/>
				</>}
			{isPrivate &&
				<>
					<Box sx={headerStyles.authorized}>
						<Box sx={headerStyles.authorizedBox}>
							<Box
								component={"img"}
								src={logo}
								alt="Logo"
							/>
							<GlovingTypogarphy variant={"h1-glow"}>Try TO Pass</GlovingTypogarphy>
						</Box>
						<Box sx={headerStyles.authorizedBox}>
							<Avatar source={avatarSource} />
							<GlovingTypogarphy variant={"h1-glow"}>{userName}</GlovingTypogarphy>
						</Box>
						<Box sx={headerStyles.authorizedBox}>
							<Button
								type={currentPage === AppRouteEnum.HOME ? "header-nav-enabled" : "header-nav-disabled"}
								icon={<House />}
							/>
							<Button
								type={currentPage === AppRouteEnum.LIBRARY ? "header-nav-enabled" : "header-nav-disabled"}
								icon={<Book />}
							/>
							<Box
								sx={headerStyles.authorizedExit}
								onClick={handleExit}
							>
								<GlovingTypogarphy variant={"h1-glow"}>exit</GlovingTypogarphy>
							</Box>
						</Box>
					</Box>
				</>}
		</Box>
	);
};

export default Header;
