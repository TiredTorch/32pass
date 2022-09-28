import { Box } from "@mui/material";
import { FC } from "react";
import { GlovingTypography } from "../../ui";
import { targetPaperStyles } from "./TargetPaper.styles";
import { TargetPaperProps } from "./TargetPaper.types";
import TargetPaperItem from "./TargetPaperItem/TargetPaperItem";

export const TargetPaper: FC<TargetPaperProps> = ({
	data
}) => {
	return (
		<Box
			sx={targetPaperStyles.root}
		>
			<Box
				sx={targetPaperStyles.header}
			>
				<GlovingTypography variant={"body1"}>My Target</GlovingTypography>

			</Box>
			<Box
				sx={targetPaperStyles.wrapper}
			>
				{data.map((item, i) =>
					<TargetPaperItem
						key={i}
						{...item}
					/>)}
			</Box>
		</Box>
	);
};

export default TargetPaper;
