import { theme } from "../../theme/theme";

export const challengePageContainerStyles = {
	root: {
		height: "70vh",
		width: "98%",
		alignSelf: "center",
		background: "white",
		border: "1px solid #39BEE7",
		boxShadow: "2px 4px 4px 0px #000000BF",
		padding: "2vh",
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			rowGap: "1vh",
		},
	},
	upperSection: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "space-around",
		paddingRight: "3vh",
		[theme.breakpoints.down("md")]: {
			height: "60%",
			paddingRight: "0",
		},
	},
	posterContainer: {
		display: "flex",
		justifyContent: "center",
		width: "40%",
		height: "100%",
		[theme.breakpoints.down("md")]: {
			width: "50%",
		},
	},
	poster: {
		height: "100%",
		aspectRatio: "1",
		width: "auto",
		maxWidth: "100%",
		objectFit: "contain",
	},
	challengeDataSection: {
		width: "50%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		rowGap: "2vh",
		[theme.breakpoints.down("md")]: {
			width: "50%",
		}
	},
	challengeMainInfoContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			alignItems: "flex-start",
		}
	},
	hardRate: {
		color: "#FAFF00",
		fontSize: "2vw"
	},
	description: {
		textAlign: "justify",
		fontSize: "1.3vw",
	},
	input: {
		width: "100%",
		height: "4vh",
		border: "1px solid black",
		borderRadius: "0",
		alignItems: "center",
		"&::selection": {
			border: "1px solid #39BEE7"
		},
		[theme.breakpoints.down("md")]: {
			height: "50%",
			alignItems: "flex-start",
		}
	},
	lowerSection: {
		width: "100%",
		maxHeight: "30vh",
		overflow: "auto"
	}
};