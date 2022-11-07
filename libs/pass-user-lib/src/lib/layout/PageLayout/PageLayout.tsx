import { FC, PropsWithChildren, useCallback } from "react";
import { Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { useGetUserDocument, userAuth } from "@32pass/shared";
import { Footer, Header } from "../../components";
import { pageLayoutStyles } from "./PageLayout.styles";
import { PageLayoutProps } from "./PageLayout.types";

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
	children,
	isPrivate,
	currentPage,
	isLoading
}) => {
	const userData = useGetUserDocument();

	const handleExit = useCallback(
		() => {
			signOut(userAuth);
		},
		[userAuth],
	);

	return (
		<>
			{!isLoading && (
				<Box
					sx={[
						pageLayoutStyles.root,
					]}
				>
					<Header
						isPrivate={!!isPrivate}
						avatarSource={userData?.avatar ?? "https://memepedia.ru/wp-content/uploads/2021/01/anonimus-mem-6.jpg"}
						currentPage={currentPage}
						handleExit={handleExit}
						userName={userData?.fullname ?? "Anonymus"}
					/>
					{children}
					{isPrivate && <Footer />}
				</Box>
			)}

		</>
	);
};

export default PageLayout;
