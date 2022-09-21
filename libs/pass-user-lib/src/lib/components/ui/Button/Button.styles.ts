export const buttonStyles = {
	root: {
		width: "100%",
		borderRadius: "0",
		display: "flex",
		justifyContent: "space-evenly"
	},
	whiteShadow: {
		background: "#F5F7FA",
		boxShadow: "2px 2px 2px rgba(9, 30, 63, 0.5)",
		height: "40px",
		color: "#707375",
		fontWeight: "700",
		fontSize: "16px",
		width: "50%",
		"&:hover": {
			boxShadow: "2px 2px 2px rgba(9, 30, 63, 0.5)",
		},
		"&:active": {
			boxShadow: "inset -2px -2px 2px rgba(9, 30, 63, 0.5)",
		},
	},
	blueNoBorder: {
		background: "#39BEE7",
		color: "black",
		fontSize: "24px",
		transition: "none",
		"&:hover": {
			background: "#39BEE7",
		},
		"&:active": {
			boxShadow: "inset 0px 0px 2px 4px rgba(9, 30, 63, 0.5)",
		},
	}
};
