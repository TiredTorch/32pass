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
				inputStyles.root,
				sx as Record<string, unknown>
			]}
			variant="outlined"
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
