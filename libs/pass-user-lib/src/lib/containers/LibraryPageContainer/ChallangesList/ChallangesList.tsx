import { FC } from "react";
import { Box } from "@mui/material";
import { GlovingTypography } from "../../../components";
import ChallangesListItem from "./ChallangesListItem/ChallangesListItem";
import { ChallangesListProps, ChallangeStatus } from "./ChallangesList.types";
import { getListPreset } from "./ChallangesList.utils";
import { challangesListStyles } from "./ChallangesList.styles";

const ChallangesList: FC<ChallangesListProps> = ({
	sectionStatus,
	items
}) => {
	const listPreset = getListPreset(sectionStatus);

	return (
		<Box
			sx={challangesListStyles.root}
		>
			<GlovingTypography
				variant="h1"
				sx={challangesListStyles.title}
			>
				{listPreset.title}
			</GlovingTypography>
			<Box
				sx={challangesListStyles.descriptionWrapper}
			>
				<Box><GlovingTypography variant="h3-glow">Game name</GlovingTypography></Box>
				<Box><GlovingTypography variant="h3-glow">Challenge text</GlovingTypography></Box>
				{sectionStatus === ChallangeStatus.DONE &&
					<Box>
						<GlovingTypography variant="h3-glow">Hard rate</GlovingTypography>
					</Box>
				}
			</Box>
			<Box
				sx={challangesListStyles.mainWrapper}
			>
				{items.map((item, i) => (
					<ChallangesListItem
						key={i}
						gameName={item.gameName}
						description={item.description}
						rate={item.rate}
						status={sectionStatus}
						iconColor={listPreset.iconColor}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ChallangesList;
