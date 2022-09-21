import { AppRouteEnum } from "@32pass/pass-user-lib";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const LibraryPage = lazy(() => import("../pages/LibraryPage"));
const ProposalPage = lazy(() => import("../pages/ProposalPage"));

export const privateRoutes = [
	{
		element: <HomePage/>,
		path: AppRouteEnum.HOME,
		isAuth: true
	},
	{
		element: <LibraryPage/>,
		path: AppRouteEnum.LIBRARY,
		isAuth: true
	},
	{
		element: <ProposalPage/>,
		path: AppRouteEnum.PROPOSAL,
		isAuth: true
	}
];
