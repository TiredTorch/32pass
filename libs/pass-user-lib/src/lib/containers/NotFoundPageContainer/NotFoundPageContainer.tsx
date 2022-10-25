import { Box } from "@mui/material";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { notFoundPageContainerStyles } from "./NotFoundPageContainer.styles";
import { ReactComponent as TrollFace } from "../../assets/icons/trollFace.svg";
import { Button, GlovingTypography } from "../../components";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPageContainer = () => {
	
	const navigate = useNavigate();
	
	const handleNavToHome = useCallback(
		() => {
			navigate(AppRouteEnum.HOME);
		},
		[],
	);

	return (
		<PageLayout
			isPrivate={false}
			currentPage={AppRouteEnum.NOTFOUND}

		>
			<Box
				sx={notFoundPageContainerStyles.root}
			>
				<Box
					sx={notFoundPageContainerStyles.row}
				>
					<TrollFace
						style={notFoundPageContainerStyles.trollFace}
					/>
					<GlovingTypography
						variant="not-found"
					>
						404
					</GlovingTypography>
				</Box>
				<GlovingTypography
					variant="not-found"
				>
					Not Found
				</GlovingTypography>
				<GlovingTypography
					variant="body2"
				>
					Oh no... We can’t find this page!
				</GlovingTypography>
				<Button
					type="not-found"
					sx={notFoundPageContainerStyles.buttonRow}
					onClick={handleNavToHome}
				>
					<GlovingTypography
						variant="body2"
					>
						Back
					</GlovingTypography>
				</Button>
			</Box>

		</PageLayout>
	);
};

export default NotFoundPageContainer;