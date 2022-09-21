import { useCallback } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Box } from "@mui/material";
import { userAuth } from "@32pass/shared";
import { LoginForm } from "../../components";
import { ReactComponent as UnAuthLogo } from "../../assets/icons/unauthLogo.svg";
import { FormLayout, PageLayout } from "../../layout";

export const LoginPageContainer = () => {

	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(userAuth);

	const handleAuthWithGoogle = useCallback(
		() => {
			signInWithGoogle();
		},
		[signInWithGoogle],
	);
	console.log(user);
	console.log(loading);
	console.log(error);

	return (
		<PageLayout>
			<FormLayout
				form={<LoginForm
					handleAuth={handleAuthWithGoogle}
				/>}
				textContent={
					<Box>
						<UnAuthLogo />
					</Box>
				}
			/>
		</PageLayout>
	);
};

export default LoginPageContainer;
