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
					overflow: "hidden",
					[theme.breakpoints.down("md")]: {
						flexDirection: "column",
						overflowY: "auto"
					}
				},
			}
		}
	}
};
