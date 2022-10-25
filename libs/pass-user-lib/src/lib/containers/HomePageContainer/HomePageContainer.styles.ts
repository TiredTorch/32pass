import { theme } from "../../theme/theme";

export const homePageContainerStyles = {
	root: {
		paddingTop: "15px",
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column"
		},
	},
	leftWrapper: {
		display: "flex",
		flexDirection: "column",
		gap: 4,
		alignItems: "center",
		width: "60%",
		[theme.breakpoints.down("md")]: {
			width: "100%"
		}

	},
	rightWrapper: {
		width: "40%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "start",

		[theme.breakpoints.down("md")]: {
			width: "100%",
			paddingBottom: "160px"
		}

	},
	countdownWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	}
};
