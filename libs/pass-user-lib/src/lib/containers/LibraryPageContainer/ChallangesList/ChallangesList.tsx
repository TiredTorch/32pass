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
				variant="body1"
				sx={challangesListStyles.title}
			>
				{listPreset.title}
			</GlovingTypography>
			<Box
				sx={challangesListStyles.descriptionWrapper}
			>
				<Box><GlovingTypography variant={"body2"}>Game name</GlovingTypography></Box>
				<Box><GlovingTypography variant={"body2"}>Challenge text</GlovingTypography></Box>
				{sectionStatus === ChallangeStatus.DONE &&
					<Box>
						<GlovingTypography variant={"body2"}>Hard rate</GlovingTypography>
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
