import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { GlovingTypography } from "../../components";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { aboutPageContainerStyles } from "./AboutPageContainer.styles";
import CarouselItem from "./CarouselItem/CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const AboutPageContainer = () => {

	return (
		<PageLayout
			currentPage={AppRouteEnum.ABOUT}
		>
			<Box
				sx={aboutPageContainerStyles.root}
			>
				<Box
					sx={aboutPageContainerStyles.textContainer}
				>
					<GlovingTypography variant={"body1"}>About resourse</GlovingTypography>
					<GlovingTypography
						variant={"body2"}
					>
						This website created for people, who want
						to stay in they favorite game, but dont have reasons 4 it.
						Just find some task/challenge for 1 or 3 days and enjoy yourself.
					</GlovingTypography>
					<GlovingTypography
						variant={"body2"}
					>
						Try new ways our make other improve, by sharing with them challenge of yours.
					</GlovingTypography>
					<GlovingTypography
						variant={"body2"}
					>
						In any case, enjoy and make a lot of fun.
					</GlovingTypography>
				</Box>
				<Box
					sx={aboutPageContainerStyles.imgContainer}
				>
					<GlovingTypography variant={"body1"}>Creators & developers</GlovingTypography>
					<Carousel
						autoPlay
						infiniteLoop
						showArrows={false}
						showIndicators={false}
						showThumbs={false}
						showStatus={false}
					>
						{[0, 1, 2].map((_, i) => (
							<CarouselItem
								key={i}
								index={i}
							/>
						))}
					</Carousel>

				</Box>
			</Box>
		</PageLayout>
	);
};

export default AboutPageContainer;
