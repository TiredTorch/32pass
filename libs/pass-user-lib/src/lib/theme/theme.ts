import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: "Audiowide Regular"
	}
});

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				"#root": {
					minHeight: "100vh",
					maxHeight: "100vh",
					minWidth: "100vw",
					maxWidth: "100vw",
					overflowX: "hidden",
					[theme.breakpoints.down("md")]: {
						flexDirection: "column",
						overflowY: "auto"
					},
					/* width */
					"::-webkit-scrollbar": {
						width: "10px"
					},

					/* Track */
					"::-webkit-scrollbar-track": {
						background: "#f1f1f1"
					},

					/* Handle */
					"::-webkit-scrollbar-thumb": {
						background: "#888"
					},

					/* Handle on hover */
					"::-webkit-scrollbar-thumb:hover": {
						background: "#555"
					}
				},
			}
		}
	}
};
