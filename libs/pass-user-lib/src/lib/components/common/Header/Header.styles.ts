export const headerStyles = {
	root: {
		width: "100%",
		height: "100px",
		borderBottom: "2px solid black",
		boxShadow: "0px 2px 8px 1px black",
		padding: "0 5%",
	},
	unAuthorized: {
		marginLeft: "2%",
	},
	authorized: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	authorizedBox: {
		width: "calc(100%/3)",
		display: "flex",
		height: "100px",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

	},
	authorizedExit: {
		"&::before": {
			content: "''",
			display: "block",
			cursor: "pointer",
			height: "24px",
			border: "1px solid black",
			background: "black",
			marginRight: "5px",
		},
		display: "flex",
		justifyContent: "space between",
		alignItems: "center",
	},
};
