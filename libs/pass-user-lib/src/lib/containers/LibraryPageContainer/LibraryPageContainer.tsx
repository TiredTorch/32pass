import { Box } from "@mui/material";
import { Button, Input } from "../../components";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import ChallangesList from "./ChallangesList/ChallangesList";
import { ChallangeStatus } from "./ChallangesList/ChallangesList.types";
import { libraryPageContainerStyles } from "./LibraryPageContainer.styles";

export const LibraryPageContainer = () => {

	const mockClg = [
		{
			gameName: "Dota 2",
			description: "desk 1",
			status: ChallangeStatus.RUNNING
		},
		{
			gameName: "TES V",
			description: "desk 1",
			status: ChallangeStatus.AVAILVABLE
		},
		{
			gameName: "RDR 2",
			description: "desk 1",
			rate: 4,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Minecraft",
			description: "desk 1",
			rate: 1,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		},
		{
			gameName: "WOW",
			description: "desk 5",
			rate: 5,
			status: ChallangeStatus.DONE
		},
		{
			gameName: "Tes V",
			description: "desk 6",
			status: ChallangeStatus.FAILED
		}
	];

	return (
		<PageLayout
			currentPage={AppRouteEnum.LIBRARY}
			isPrivate
		>
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
							items={mockClg.filter((clg) => clg.status === item as ChallangeStatus)}
						/>
					))}
				</Box>
			</Box>
		</PageLayout>
	);
};

export default LibraryPageContainer;
