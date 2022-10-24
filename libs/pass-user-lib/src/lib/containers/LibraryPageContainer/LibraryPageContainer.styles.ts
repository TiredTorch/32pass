import { theme } from "../../theme/theme";

export const libraryPageContainerStyles = {
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "2vh 4vw",
	},
	inputWrapper: {
		borderTop: "3px solid #39BEE7",
		width: "100%",
		display: "flex",
		gap: 30,
		justifyContent: "space-evenly",
		padding: "2vh 0vw",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			gap: 3
		}
	},
	mainSection: {
		width: "100%"
	}
};
