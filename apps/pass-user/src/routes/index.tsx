import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoute, PublicRoute } from "@32pass/pass-user-lib";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

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
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
				{[...commonRoutes, ...privateRoutes].map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={
							route.isAuth ? (
								<PrivateRoute>{route.element}</PrivateRoute>
							) : (
								<PublicRoute>{route.element}</PublicRoute>
							)
						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
