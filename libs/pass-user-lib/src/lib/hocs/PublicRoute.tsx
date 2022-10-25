import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { userAuth } from "@32pass/shared";
import { AppRouteEnum } from "../types";

export const PublicRoute: FC<PropsWithChildren> = ({
	children
}) => {
	const location = useLocation();
	const [user, loading] = useAuthState(userAuth);

	if (user && !loading) {
		return (
			<Navigate
				to={AppRouteEnum.HOME}
				state={{ from: location }}
				replace
			/>
		);
	}

	return <>{!loading && children}</>;
};

export default PublicRoute;
