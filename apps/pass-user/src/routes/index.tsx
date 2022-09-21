import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRoutes = () => {
	return (
		<Suspense
			fallback={
				<Box
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<CircularProgress />
				</Box>
			}
		>
			<Routes>
				{[...commonRoutes, ...privateRoutes].map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={route.element}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
