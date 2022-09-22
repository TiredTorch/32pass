import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { Footer, Header } from "../../components";
import { pageLayoutStyles } from "./PageLayout.styles";
import { PageLayoutProps } from "./PageLayout.types";
import { AppRouteEnum } from "../../types";

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
	children,
	isPrivate
}) => {
	return (
		<Box
			sx={pageLayoutStyles.root}
		>
			<Header
				isPrivate={!!isPrivate}
				avatarSource={""}
				currentPage={AppRouteEnum.HOME}
			/>
			{children}
			{isPrivate && <Footer />}
		</Box>
	);
};

export default PageLayout;
