import { FC, PropsWithChildren, useCallback } from "react";
import { Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { userAuth } from "@32pass/shared";
import { Footer, Header } from "../../components";
import { pageLayoutStyles } from "./PageLayout.styles";
import { PageLayoutProps } from "./PageLayout.types";

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
	children,
	isPrivate,
	currentPage,
	isLoading
}) => {
	const [user, loading] = useAuthState(userAuth);

	const handleExit = useCallback(
		() => {
			signOut(userAuth);
		},
		[userAuth],
	);

	return (
		<>
			{!loading && !isLoading && (
				<Box
					sx={[
						pageLayoutStyles.root,
					]}
				>
					<Header
						isPrivate={!!isPrivate}
						avatarSource={user?.photoURL ?? ""}
						currentPage={currentPage}
						handleExit={handleExit}
						userName={user?.displayName ?? "Anonymous"}
					/>
					{children}
					{isPrivate && <Footer />}
				</Box>
			)}

		</>
	);
};

export default PageLayout;
