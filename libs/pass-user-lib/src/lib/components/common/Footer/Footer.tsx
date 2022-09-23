import { Box } from "@mui/material";
import { footerStyles } from "./Footer.styles";
import footerLogo from "../../../assets/icons/footerLogo.svg";
import {ReactComponent as LinkedInLogo } from "../../../assets/icons/linkedInLogo.svg";
import {ReactComponent as InstagramLogo } from "../../../assets/icons/instagramLogo.svg";
import {ReactComponent as FacebookLogo } from "../../../assets/icons/facebookLogo.svg";
import {ReactComponent as FigmaLogo } from "../../../assets/icons/figmaLogo.svg";
import { Button, GlovingTypography } from "../../ui";

export const Footer = () => {
	return (
		<Box
			sx={footerStyles.root}
		>
			<Box sx={footerStyles.logoLinksSection}>
				<Box
					component={"img"}
					src={footerLogo}
					alt="Footer logo"
				/>
				<Button
					type="footer-link"
					icon={<LinkedInLogo />}
				/>
				<Button
					type="footer-link"
					icon={<InstagramLogo />}
				/>
				<Button
					type="footer-link"
					icon={<FacebookLogo />}
				/>
				<Button
					type="footer-link"
					icon={<FigmaLogo />}
				/>
			</Box>
			<GlovingTypography
				variant="footer"
			>
				{"© Provided by P@z3t1ffff43k!_v_K3da)( in 2022"}
			</GlovingTypography>
		</Box>
	);
};

export default Footer;
