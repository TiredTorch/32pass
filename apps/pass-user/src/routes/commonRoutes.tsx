import { AppRouteEnum } from "@32pass/pass-user-lib";
import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

export const commonRoutes = [
	{
		element: <LoginPage />,
		path: AppRouteEnum.LOGIN,
		isAuth: false
	},
	{
		element: <RegisterPage />,
		path: AppRouteEnum.REGISTER,
		isAuth: false
	}
];
