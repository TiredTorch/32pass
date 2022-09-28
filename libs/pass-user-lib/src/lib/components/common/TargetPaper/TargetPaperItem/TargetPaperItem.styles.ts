export const targetPaperItemStyles = {
	root: {
		minHeight: "80%",
		width: "30%"
	},
	numberPaper: {
		background: "#D9D9D9",
		boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
		width: "100%",
		aspectRatio: "1",
		fontSize: "calc(2.5vmax + 10px)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "20px",
		"&:hover": {
			boxShadow: "4px 6px 4px rgba(0, 0, 0, 0.25)",
			transition: "box-shadow .3s"
		}
	}
};
