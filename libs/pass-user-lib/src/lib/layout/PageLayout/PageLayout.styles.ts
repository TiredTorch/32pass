import background from "../../assets/images/bg.png";

export const pageLayoutStyles = {
	root: {
		minWidth: "100vw",
		maxWidth: "100vw",
		minHeight: "100vh",
		backgroundImage: `url(${background})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	}
};
