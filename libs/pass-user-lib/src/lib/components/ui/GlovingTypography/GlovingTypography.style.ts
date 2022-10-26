export const glovingTypographyStyles = {
	root: {
		fontSize: "2rem",
		textShadow: "0px 0px 4px #39BEE7",
		transition: "text-shadow .2s",
		"&:hover": {
			textShadow: "0px 0px 6px #39BEE7",
			transition: "text-shadow .2s"
		}
	},
	h1: {
		fontSize: "calc(3vmax + 10px)"
	},
	h3Glow: {

	},
	h4Glow: {
		fontSize: "calc(2vmax + 10px)"
	},
	h3: {
		fontSize: "calc(2vmax + 10px)"
	},
	body1: {
		fontSize: "calc(2.2vmax + 10px)",
		textShadow: "none"
	},
	body2: {
		fontSize: "calc(1.1vmax + 7px)",
		textShadow: "none"
	},
	body3: {
		fontSize: "calc(1vmax + 6px)",
		textShadow: "none"
	},
	body4: {
		fontSize: "calc(.6vmax + 6px)",
		textShadow: "none",
		color: "#707070",
		textAlign: "center",
		"&:hover": {
			textShadow: "none",
		}
	},
	footer: {
		fontSize: "calc(1.1vmax + 5px)",
	},
	notFound: {
		color: "#39BEE7",
		fontSize: "calc(2rem + 6vw)",
		textShadow: "0px 4px 4px #000000",
		"&:hover": {
			textShadow: "0px 4px 4px #000000",
		}
	},
	gameName: {
		color: "black",
		textShadow: "0px 4px 4px rgba(0,0,0,0.75)",
		"-webkit-text-stroke": "1px #39BEE7",
		fontSize: "3vw",
		"&:hover": {
			textShadow: "0px 4px 4px rgba(0,0,0,0.75)",
		}
	},
	challengeName: {
		color: "#39BEE7",
		"-webkit-text-stroke": "1px black",
		textShadow: "none",
		fontSize: "1.7vw",
		"&:hover": {
			textShadow: "none",
		}
	}
};
