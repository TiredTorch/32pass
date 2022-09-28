import { useCallback } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Box } from "@mui/material";
import { userAuth } from "@32pass/shared";
import { GlovingTypography, LoginForm } from "../../components";
import { ReactComponent as UnAuthLogo } from "../../assets/icons/unauthLogo.svg";
import { FormLayout, PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { Link } from "react-router-dom";

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
		<PageLayout
			currentPage={AppRouteEnum.LOGIN}
		>
			<FormLayout
				form={<LoginForm
					handleAuth={handleAuthWithGoogle}
				/>}
				textContent={
					<>
						<GlovingTypography
							variant={"h1"}
							sx={{
								textAlign: "center"
							}}
						>
							To begin your experience, log in or sign up
						</GlovingTypography>
						<Box>
							<UnAuthLogo />
						</Box>
						<GlovingTypography
							variant={"h3"}
							sx={{
								textAlign: "center"
							}}
						>
							Also, check information
							{" "}
							<Link
								to={AppRouteEnum.ABOUT}
								data-cy="about-link"
							>
								about us

							</Link>
						</GlovingTypography>
					</>
				}
			/>
		</PageLayout>
	);
};

export default LoginPageContainer;
