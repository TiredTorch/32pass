import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { collection, CollectionReference, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseFirestore, GameChallengeData, useGetUserDocument } from "@32pass/shared";
import { Button, Input } from "../../components";
import { PageLayout } from "../../layout";
import ChallangesList from "./ChallangesList/ChallangesList";
import { AppRouteEnum, ChallangeStatus } from "../../types";
import { libraryPageContainerStyles } from "./LibraryPageContainer.styles";

export const LibraryPageContainer = () => {
	const navigate = useNavigate();

	const userData = useGetUserDocument();

	const [сhallenges, isLoadingChallenges] = useCollectionData(
		query(
			collection(firebaseFirestore,
				"challenges"
			),
			where(
				"uid",
				"in",
				// "not-in",
				userData?.challenges?.map(item => item.challangeId) ?? [""])
		) as CollectionReference<GameChallengeData>
	);

	const handleNavToProposal = useCallback(
		() => {
			navigate(AppRouteEnum.PROPOSAL);
		},
		[],
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
						<Button
							type="blue-no-border"
							onClick={handleNavToProposal}
						>
							Add
						</Button>
					</Box>
					<Box
						sx={libraryPageContainerStyles.mainSection}
					>
						{/* {(Object.values(ChallangeStatus) as [ChallangeStatus]).map((item, i) => (
							<ChallangesList
								key={i}
								sectionStatus={item as ChallangeStatus}
								items={сhallenges.filter((clg) => clg.category === item as ChallangeStatus)}
							/>
						))} */}
						<ChallangesList
							sectionStatus={ChallangeStatus.AVAILVABLE}
							items={сhallenges}
						/>
					</Box>
				</Box>}
		</PageLayout>
	);
};

export default LibraryPageContainer;
