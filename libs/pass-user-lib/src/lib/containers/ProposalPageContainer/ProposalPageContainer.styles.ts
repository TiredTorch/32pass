import { theme } from "../../theme/theme";

export const proposalPageContainerStyles = {
	root: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "calc(100vh - 210px)",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column-reverse",
		}
	},
	topPart: {
		padding: "2vh 5vw",
		display: "flex",
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		gap: 10,
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			gap: 3,
		}
	},
	botPart: {
		width: "100%",
		height: "100%",
		padding: "2vh 5vw",
		display: "flex",
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 10,
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			gap: 3,
			padding: "1vh 5vw 0vh",
		}
	},
	mainPart: {
		width: "69%",
		maxWidth: "69%",
		height: "80%",
		background: "white",
		boxShadow: "2px 4px 2px rgba(0, 0, 0, 0.5)",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			maxWidth: "100%",
		},
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	descriptionPart: {
		width: "31%",
		height: "50%",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		}
	}
};
