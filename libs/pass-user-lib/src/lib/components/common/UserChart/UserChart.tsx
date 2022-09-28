import { Box } from "@mui/material";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { userChartStyles } from "./UserChart.styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const UserChart = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Challenges / Done",
				font: {
					family: "Audiowide Regular",
					size: 20
				}
			},
		},
	};
	const labels = ["3 days ago", "2 days ago", "yesterday", "today"];
	const data = {
		labels,
		datasets: [
			{
				label: "Planned",
				data: [3, 5, 6, 4],
				borderColor: "#39BEE7",
				backgroundColor: "#39BEE7"
			},
			{
				label: "Fact",
				data: [1, 5, 4, 5],
				borderColor: "#FF0000",
				backgroundColor: "#FF0000"
			}
		]
	};

	return (
		<Box
			sx={userChartStyles.root}
		>
			<Line
				options={options}
				data={data}
			/>
		</Box>
	);
};

export default UserChart;
