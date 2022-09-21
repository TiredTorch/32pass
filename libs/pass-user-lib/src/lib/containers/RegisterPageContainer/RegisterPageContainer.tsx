import { useCallback } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Box } from "@mui/material";
import { userAuth } from "@32pass/shared";
import { RegisterForm } from "../../components";
import { ReactComponent as UnAuthLogo } from "../../assets/icons/unauthLogo.svg";
import { FormLayout, PageLayout } from "../../layout";

export const RegisterPageContainer = () => {
	const [signInWithGoogle] = useSignInWithGoogle(userAuth);

	const handleAuthWithGoogle = useCallback(
		() => {
			signInWithGoogle();
		},
		[signInWithGoogle],
	);

	return (
		<PageLayout>
			<FormLayout
				form={<RegisterForm
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

export default RegisterPageContainer;
