import { theme } from "../../../theme/theme";

export const avatarStyles = {
	root: {
		borderRadius: "50%",
		border: "1px solid black",
		width: "10%",
	},
	hideWhenLarge: {
		[theme.breakpoints.up("md")] : {
			display : "none"
		},
		width: "calc(5vmax + 5px)",
		minWidth: "40px",
		//gap: 5,
		[theme.breakpoints.down("sm")] : {
			//gap: 0,
		},
	},
};