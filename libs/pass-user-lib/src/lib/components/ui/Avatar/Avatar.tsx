import { Box } from "@mui/material";
import { FC } from "react";
import { AvatarProps } from "./Avatar.types";

export const Avatar: FC<AvatarProps> = ({source}) => {
	return (
		<>
		{source && 
		<Box 
			component={"img"}
			src={source} 
			alt="avatar"
		/>}
		</>
	);
};