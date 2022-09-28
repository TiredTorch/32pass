import { useCallback } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Box } from "@mui/material";
import { userAuth } from "@32pass/shared";
import { GlovingTypography, RegisterForm } from "../../components";
import { ReactComponent as UnAuthLogo } from "../../assets/icons/unauthLogo.svg";
import { FormLayout, PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { Link } from "react-router-dom";

export const RegisterPageContainer = () => {
	const [signInWithGoogle] = useSignInWithGoogle(userAuth);

	const handleAuthWithGoogle = useCallback(
		() => {
			signInWithGoogle();
		},
		[signInWithGoogle],
	);

	return (
		<PageLayout
			currentPage={AppRouteEnum.REGISTER}
		>
			<FormLayout
				form={<RegisterForm
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
								data-cy="about-link"
								to={AppRouteEnum.ABOUT}
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

export default RegisterPageContainer;
