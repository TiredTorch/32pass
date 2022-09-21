import { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { inputStyles } from "./Input.styles";

export const Input: FC<TextFieldProps> = ({
	value,
	onChange,
	sx,
	...rest
}) => {
	return (
		<TextField
			{...rest}
			sx={[
				inputStyles.root
			]}
			variant="outlined"
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
