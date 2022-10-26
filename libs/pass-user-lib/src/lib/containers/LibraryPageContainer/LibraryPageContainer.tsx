import { Box } from "@mui/material";
import { collection, CollectionReference } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseFirestore } from "@32pass/shared";
import { Button, Input } from "../../components";
import { PageLayout } from "../../layout";
import ChallangesList from "./ChallangesList/ChallangesList";
import { AppRouteEnum, ChallangeStatus, ChallengeData } from "../../types";
import { libraryPageContainerStyles } from "./LibraryPageContainer.styles";

export const LibraryPageContainer = () => {
	const [сhallenges, isLoadingChallenges] = useCollectionData(
		collection(firebaseFirestore, "challenges") as CollectionReference<ChallengeData>
	);

	return (
		<PageLayout
			currentPage={AppRouteEnum.LIBRARY}
			isPrivate
			isLoading={isLoadingChallenges}
		>
			{сhallenges &&
				<Box
					sx={libraryPageContainerStyles.root}
				>
					<Box
						sx={libraryPageContainerStyles.inputWrapper}
					>
						<Input placeholder="Game name" />
						<Input placeholder="Challange text" />
						<Button type="blue-no-border">Add</Button>
					</Box>
					<Box
						sx={libraryPageContainerStyles.mainSection}
					>
						{(Object.values(ChallangeStatus) as [ChallangeStatus]).map((item, i) => (
							<ChallangesList
								key={i}
								sectionStatus={item as ChallangeStatus}
								items={сhallenges.filter((clg) => clg.category === item as ChallangeStatus)}
							/>
						))}
					</Box>
				</Box>}
		</PageLayout>
	);
};

export default LibraryPageContainer;
