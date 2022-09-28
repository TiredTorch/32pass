import { Box } from "@mui/material";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { homePageContainerStyles } from "./HomePageContainer.styles";

export const HomePageContainer = () => {
	return (
		<PageLayout
			isPrivate
			currentPage={AppRouteEnum.HOME}
		>
			<Box
				sx={homePageContainerStyles.root}
			>
				aaa
			</Box>
		</PageLayout>
	);
};

export default HomePageContainer;
