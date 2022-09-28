import { Box } from "@mui/material";
import { FC } from "react";
import { avatarStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

export const Avatar: FC<AvatarProps> = ({source, hideWhenLarge}) => {
	return (
		<>
		{source && 
		<Box 
			component={"img"}
			src={source} 
			alt="avatar"
			sx={[avatarStyles.root, hideWhenLarge ? avatarStyles.hideWhenLarge : {}]}
		/>}
		</>
	);
};