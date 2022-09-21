import { Box } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/googleIcon.svg";
import { AppRouteEnum } from "../../../types";
import { Button, Input } from "../../ui";
import { loginFormStyles } from "./LoginForm.styles";
import { LoginFormProps } from "./LoginForm.types";

export const LoginForm: FC<LoginFormProps> = ({
	handleAuth
}) => {
	return (
		<Box
			sx={loginFormStyles.root}
		>
			<Button
				onClick={handleAuth}
				icon={<GoogleIcon />}
				type={"white-shadow"}
			>
				Google
			</Button>
			<Input
				placeholder="Email"
				disabled
			/>
			<Input
				placeholder="Password"
				disabled
			/>
			<Button type={"blue-no-border"}>Log in</Button>
			<Link to={AppRouteEnum.REGISTER}>Sign up</Link>
		</Box >
	);
};

export default LoginForm;
