import aboutBg from "../../assets/images/aboutBg.jpg";

export const aboutPageContainerStyles = {
	root: {
		background: `url(${aboutBg})`,
		filter: "sepia(90%)",
		height: "100vh",
		width: "100%",
		backgroundSize: "cover",
		backgroundPosition: "center",
		display: "flex",
		justifyContent: "space-around",
		padding: "30px 0"
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
		}
	},
	textContainer: {
		display: "flex",
		width: "40%",
		flexDirection: "column"
	},
	container: {
		width: "100%",
		height: "100%",
		background: "red"
	},
	img: {
		width: "100%",
		height: "80%",
		backgroundSize: "cover",
		borderRadius: "5%",
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
		borderRadius: "1%"
	}
};
