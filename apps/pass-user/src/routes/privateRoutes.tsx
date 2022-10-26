import { AppRouteEnum } from "@32pass/pass-user-lib";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const LibraryPage = lazy(() => import("../pages/LibraryPage"));
const ProposalPage = lazy(() => import("../pages/ProposalPage"));
const ChallengePage = lazy(() => import("../pages/ChallengePage"));

export const privateRoutes = [
	{
		element: <HomePage />,
		path: AppRouteEnum.HOME,
		isAuth: true
	},
	{
		element: <LibraryPage />,
		path: AppRouteEnum.LIBRARY,
		isAuth: true
	},
	{
		element: <ProposalPage />,
		path: AppRouteEnum.PROPOSAL,
		isAuth: true
	},
	{
		element: <ChallengePage />,
		path: AppRouteEnum.CHALLENGE,
		isAuth: true
	}
];
