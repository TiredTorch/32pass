import { SxProps } from "@mui/material";

export const notFoundPageContainerStyles = {
	root: {
		width: "100%",
		height: "calc(100vh - 100px)",
		overflow: "hidden",
		background: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"
	} as SxProps,
	trollFace: {
		width: "40%",
		height: "auto"
	},
	row: {
		display: "flex",
		flexDirection: "row",
		columnGap: "7vw",
		justifyContent: "center",
		alignItems: "center"
	} as SxProps,
	buttonRow:{
		marginTop: "3vh"
	}
};