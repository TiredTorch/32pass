import { AppRouteEnum } from "../../../types";

export type HeaderProps = {
	isPrivate: boolean,
	avatarSource: string,
	currentPage: AppRouteEnum,
	handleExit: () => void,
	userName: string
};
