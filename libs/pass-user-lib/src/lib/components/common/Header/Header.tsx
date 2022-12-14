import { FC, useCallback } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRouteEnum } from "../../../types/enums/paths";
import { Button, GlovingTypography } from "../../ui";
import { Avatar } from "../../ui/Avatar/Avatar";
import { HeaderProps } from "./Header.types";
import { headerStyles } from "./Header.styles";
import logo from "../../../assets/icons/logo.svg";
import darkLogo from "../../../assets/icons/darkLogo.svg";
import { ReactComponent as House } from "../../../assets/icons/house.svg";
import { ReactComponent as Book } from "../../../assets/icons/book.svg";

export const Header: FC<HeaderProps> = ({
	isPrivate,
	avatarSource,
	currentPage,
	handleExit,
	userName
}) => {
	const navigate = useNavigate();

	const handleNavToHome = useCallback(
		() => {
			navigate(AppRouteEnum.HOME);
		},
		[],
	);

	const handleNavToLib = useCallback(
		() => {
			navigate(AppRouteEnum.LIBRARY);
		},
		[],
	);

	return (
		<Box
			sx={[
				headerStyles.root,
				{
					background: isPrivate ? "" : "white"
				}
			]}

		>
			{!isPrivate &&
				<Box
					sx={headerStyles.unAuthorizedCon}
				>
					<Box
						data-cy="unauth-header-home-button"
						onClick={handleNavToHome}
						component={"img"}
						src={darkLogo}
						alt="Logo"
						sx={headerStyles.unAuthorizedLogo}
					/>
				</Box>}
			{isPrivate &&
				<>
					<Box sx={headerStyles.authorized}>
						<Box sx={headerStyles.authorizedBox}>
							<Box
								component={"img"}
								src={logo}
								alt="Logo"
							/>
							<GlovingTypography
								sx={headerStyles.hideWhenSmall}
								variant={"h3-glow"}
							>
								Try TO Pass
							</GlovingTypography>
						</Box>
						<Box sx={[headerStyles.authorizedBox, headerStyles.hideWhenNotLarge]}>
							<Avatar
								source={avatarSource}
								hideWhenLarge={false}
							/>
							<GlovingTypography variant={"h3-glow"}>{userName}</GlovingTypography>
						</Box>
						<Box sx={[headerStyles.authorizedBox, headerStyles.boxWhenSmall]}>
							<Button
								onClick={handleNavToHome}
								type={currentPage === AppRouteEnum.HOME ? "header-nav-enabled" : "header-nav-disabled"}
								icon={<House style={{ cursor: "pointer" }} />}
							/>
							<Button
								onClick={handleNavToLib}
								type={currentPage === AppRouteEnum.LIBRARY ? "header-nav-enabled" : "header-nav-disabled"}
								icon={<Book />}
							/>
							<Box
								sx={headerStyles.authorizedExit}
								onClick={handleExit}
							>
								<Avatar
									source={avatarSource}
									hideWhenLarge={true}
								/>
								<GlovingTypography variant={"h4-glow"}>Exit</GlovingTypography>
							</Box>
						</Box>
					</Box>
				</>}
		</Box>
	);
};

export default Header;
