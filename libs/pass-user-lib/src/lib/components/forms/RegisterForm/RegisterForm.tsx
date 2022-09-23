import { FC } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, Input } from "../../ui";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/googleIcon.svg";
import { AppRouteEnum } from "../../../types";
import { registerFormStyles } from "./RegisterForm.styles";
import { RegisterFormProps } from "./RegisterForm.types";

export const RegisterForm: FC<RegisterFormProps> = ({
	handleAuth
}) => {
	return (
		<Box
			sx={registerFormStyles.root}
		>
			<Button
				onClick={handleAuth}
				icon={<GoogleIcon />}
				type={"white-shadow"}
			>
				Google
			</Button>
			<Input
				placeholder="Username"
				disabled
			/>
			<Input
				placeholder="Email"
				disabled
			/>
			<Input
				placeholder="Password"
				disabled
			/>
			<Input
				placeholder="Confirm Password"
				disabled
			/>
			<Button type={"blue-no-border"}>SignUp</Button>
			<Link to={AppRouteEnum.LOGIN}>Log in</Link>
		</Box >
	);
};

export default RegisterForm;
