export const buttonStyles = {
	root: {
		width: "100%",
		borderRadius: "0",
		display: "flex",
		justifyContent: "space-evenly"
	},
	whiteShadow: {
		background: "#F5F7FA",
		boxShadow: "2px 2px 2px rgba(9, 30, 63, 0.5)",
		height: "40px",
		color: "#707375",
		fontWeight: "700",
		fontSize: "16px",
		width: "50%",
		"&:hover": {
			boxShadow: "2px 2px 2px rgba(9, 30, 63, 0.5)",
		},
		"&:active": {
			boxShadow: "inset -2px -2px 2px rgba(9, 30, 63, 0.5)",
		},
	},
	blueNoBorder: {
		background: "#39BEE7",
		color: "black",
		fontSize: "24px",
		transition: "none",
		"&:hover": {
			background: "#39BEE7",
		},
		"&:active": {
			boxShadow: "inset 0px 0px 2px 4px rgba(9, 30, 63, 0.5)",
		},
	},
	headerNavEnabled: {
		background: "white",
		borderRadius: "50%",
		width: "calc(3vmin + 8px)",
		aspectRatio: "1",
		minWidth: "0",
		minHeight: "0",
		maxWidth: "calc(3vmin + 8px)",
		margin: "0",
		padding: "0",
		"& svg": {
			width: "calc(3vmin)",
			height: "calc(3vmin)",
		},
		"&:hover": {
			background: "white"
		}
	},
	headerNavDisabled: {
		width: "calc(3vmin + 8px)",
		maxWidth: "calc(3vmin + 8px)",
		minWidth: "0",
		"& svg": {
			width: "calc(3vmin)",
			height: "calc(3vmin)",
		}
	},
	footerLink: {
		background: "white",
		border: "1px solid black",
		width: "13%",
		
		minWidth: "0",
		aspectRatio: "1",
		borderRadius: "50%",
		margin: "0",
		padding: "0",
		"& svg": {
			width: "70%",
			height: "70%",
		},
		"&:hover": {
			background: "#39BEE7",
			boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.75)",
			"& svg": {
				filter: "invert(99%) sepia(95%) saturate(0%) hue-rotate(63deg) brightness(103%) contrast(100%)",
			}
		}
	}
};
