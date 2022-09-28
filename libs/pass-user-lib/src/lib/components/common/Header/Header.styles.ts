import { theme } from "../../../theme/theme";

export const headerStyles = {
	root: {
		width: "100%",
		height: "100px",
		borderBottom: "2px solid black",
		boxShadow: "0px 2px 8px 1px black",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
	},
	unAuthorizedCon: {
		[theme.breakpoints.down("md")] : {
			justifyContent: "center",
			height: "95%"
		},
		width: "100%",
		display: "flex",
	},
	unAuthorizedLogo : {
		cursor: "pointer",
	},
	authorized: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("sm")] : {
			justifyContent: "start",
		},
	},
	authorizedBox: {
		width: "calc(100%/3)",
		display: "flex",
		height: "100px",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 1,
		[theme.breakpoints.down("lg")] : {
			width: "45%"
		},
		[theme.breakpoints.down("sm")] : {
			width: "20%",
		},
	},
	boxWhenSmall: {
		[theme.breakpoints.down("sm")] : {
			width: "80%",
		},
	},
	authorizedExit: {
		"&::before": {
			content: "''",
			display: "block",
			cursor: "pointer",
			height: "calc(2vmax + 10px)",
			minHeight: "30px",
			border: "0.5px solid black",
			background: "black",
			marginRight: "5px",
		},
		display: "flex",
		justifyContent: "space between",
		alignItems: "center",
		cursor: "pointer",
		gap: 2,
		[theme.breakpoints.down("sm")] : {
			gap: 0.5,
			marginRight: "-30px"
		},
	},
	hideWhenNotLarge: {
		[theme.breakpoints.down("lg")] : {
			display : "none"
		}
	},
	hideWhenSmall: {
		[theme.breakpoints.down("sm")] : {
			display : "none"
		}
	},
};
