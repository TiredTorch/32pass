import aboutBg from "../../assets/images/aboutBg.jpg";
import { theme } from "../../theme/theme";

export const aboutPageContainerStyles = {
	root: {
		background: `url(${aboutBg})`,
		filter: "sepia(90%)",
		height: "calc(100vh - 100px)",
		minHeight: "calc(100vh - 100px)",
		width: "100%",
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		justifyContent: "space-around",
		padding: "20px 30px 0px",

		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			alignItems: "center",
			padding: "130px 0px 120px",
		}
	},
	imgContainer: {
		width: "40%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		"& .slider-wrapper": {
			height: "100%",
			"& ul": {
				height: "100%"
			}
		},
		"& .carousel-root": {
			width: "100%",
			height: "100%",
			"& .carousel.carousel-slider": {
				height: "100%"
			},
		},

		[theme.breakpoints.down("md")]: {
			width: "90%",
			minHeight: "100%"
		}
	},
	textContainer: {
		display: "flex",
		width: "40%",
		flexDirection: "column",
		[theme.breakpoints.down("md")]: {
			width: "90%"
		}
	},
	img: {
		width: "100%",
		height: "80%",
		backgroundSize: "cover",
		borderRadius: "5%",
		[theme.breakpoints.down("md")]: {
			marginTop: "10px"
		}
	},
	imgText: {
		width: "100%",
		height: "100%",
		borderRadius: "5%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transition: "backdrop-filter .5s, opacity .5s",
		opacity: "0",

		"&:hover": {
			backdropFilter: "blur(5px)",
			opacity: "1",
			transition: "backdrop-filter .5s, opacity .5s"
		}
	},
	imgTextImg: {
		width: "50%",
		aspectRatio: "1",
		backgroundSize: "cover",
		backgroundPosition: "center",
		borderRadius: "1%",
		[theme.breakpoints.down("md")]: {
			width: "80%",
		}
	}
};
