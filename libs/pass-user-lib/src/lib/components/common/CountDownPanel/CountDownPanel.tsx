import { FC } from "react";
import { Box } from "@mui/material";
import Countdown from "react-countdown";
import { GlovingTypography } from "../../ui";
import { countDownPanelStyles } from "./CountDownPanel.styles";
import { CountDownPanelProps } from "./CountDownPanel.types";

export const CountDownPanel: FC<CountDownPanelProps> = ({
	title,
	date,
	endText
}) => {
	return (
		<Box
			sx={countDownPanelStyles.root}
		>
			<GlovingTypography variant={"body2"}>{title}</GlovingTypography>
			<Box
				sx={countDownPanelStyles.countdownBg}
			>
				<GlovingTypography variant={"body3"}>
					<Countdown date={date}>
						<GlovingTypography
							variant={"body3"}
							sx={{ textAlign: "center" }}
						>
							{endText}
						</GlovingTypography>
					</Countdown>
				</GlovingTypography>

			</Box>
		</Box>
	);
};

export default CountDownPanel;
