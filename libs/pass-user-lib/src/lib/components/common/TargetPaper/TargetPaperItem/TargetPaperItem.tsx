import { FC } from "react";
import { Box } from "@mui/material";
import { GlovingTypography } from "../../../ui";
import { TargetPaperItemProps } from "./TargetPaperItem.types";
import { targetPaperItemStyles } from "./TargetPaperItem.styles";

const TargetPaperItem: FC<TargetPaperItemProps> = ({
	number,
	title
}) => {
	return (
		<Box
			sx={targetPaperItemStyles.root}
		>
			<Box
				sx={targetPaperItemStyles.numberPaper}
			>
				{number}
			</Box>
			<GlovingTypography variant={"body4"}>{title}</GlovingTypography>
		</Box>
	);
};

export default TargetPaperItem;
