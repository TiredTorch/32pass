import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/googleIcon.svg";
import { AppRouteEnum } from "../../../types";
import { Button, Input } from "../../ui";
import { loginFormStyles } from "./LoginForm.styles";

export const LoginForm = () => {
	return (
		<Box
			sx={loginFormStyles.root}
		>
			<Button
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
