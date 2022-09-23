import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";

export const ProposalPageContainer = () => {
	return (
		<PageLayout
			currentPage={AppRouteEnum.PROPOSAL}
			isPrivate
		>
			Proposal
		</PageLayout>
	);
};

export default ProposalPageContainer;
