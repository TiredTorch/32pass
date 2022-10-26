export const reviewListStyles = {
	root: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		rowGap: "2vh",
		alignItems: "center",
	},
	item: {
		padding: "1vh",
		width: "100%",
		height: "11vh",
		border: "1px solid black",
		overflow: "hidden",
	},
	itemHeader: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftHeader: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	rating: {
		fontSize: "1.5vw",
		color: "#FAFF00",
	},
	itemContent: {
		textAlign: "justify",
	},
};