import formBg from "../../assets/images/formUnAuthBg.png";
import { theme } from "../../theme/theme";

export const formLayoutStyles = {
	root: {
		display: "flex",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column"
		}
	},
	formWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		boxSizing: "border-box",
		height: "calc(100vh - 100px)",
		width: "45%",
		backgroundImage: `url(${formBg})`,
		backgroundSize: "cover",
		backgroundPosition: "50% 0",
		padding: "8% 8%",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		}
	},
	textWrapper: {
		boxSizing: "border-box",
		borderTop: "2px solid black",
		height: "calc(100vh - 100px)",
		width: "55%",
		background: "#D9D9D9",
		padding: "10px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			justifyContent: "space-between",
		}
	}
};
