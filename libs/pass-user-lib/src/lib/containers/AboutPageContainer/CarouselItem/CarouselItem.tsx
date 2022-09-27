import { FC } from "react";
import { Box } from "@mui/material";
import { aboutPageContainerStyles } from "../AboutPageContainer.styles";
import { CarouselItemProps } from "./CarouselItem.types";

import vitya from "../../../assets/author/vitya.jpg";
import yarik from "../../../assets/author/yarik.jpg";
import misha from "../../../assets/author/misha.jpg";

import vityaSay from "../../../assets/author/vityaSay.png";
import yarikSay from "../../../assets/author/yarikSay.png";
import mishaSay from "../../../assets/author/mishSay.png";

const CarouselItem: FC<CarouselItemProps> = ({
	index
}) => {
	const authorImg = [vitya, yarik, misha];
	const authorSayImg = [vityaSay, yarikSay, mishaSay];
	return (
		<Box
			sx={[
				aboutPageContainerStyles.img,
				{
					backgroundImage: `url(${authorImg[index]})`
				}
			]}
		>
			<Box
				sx={aboutPageContainerStyles.imgText}
			>
				<Box
					sx={[
						aboutPageContainerStyles.imgTextImg,
						{
							backgroundImage: `url(${authorSayImg[index]})`
						}
					]}
				/>
			</Box>
		</Box>
	);
};

export default CarouselItem;
