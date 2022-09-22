import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";

export const HomePageContainer = () => {
	return (
		<PageLayout
			isPrivate
			currentPage={AppRouteEnum.HOME}
		>
			aboba
		</PageLayout>
	);
};

export default HomePageContainer;
