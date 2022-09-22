import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";

export const LibraryPageContainer = () => {
	return (
		<PageLayout
			currentPage={AppRouteEnum.LIBRARY}
			isPrivate
		>
			Library
		</PageLayout>
	);
};

export default LibraryPageContainer;
