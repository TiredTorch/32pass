import { Box, Rating } from "@mui/material";
import { FC } from "react";
import { GlovingTypography } from "../../../components";
import { Avatar } from "../../../components/ui/Avatar/Avatar";
import { reviewListStyles } from "./ReviewList.styles";
import { ReviewListProps } from "./ReviewList.types";

const ReviewList: FC<ReviewListProps> = ({ items }) => {
	return (
		<Box
			sx={reviewListStyles.root}
		>
			{
				items.map((item, index) => (
					<Box
						key={index}
						sx={reviewListStyles.item}
					>
						<Box
							sx={reviewListStyles.itemHeader}
						>
							<Box
								sx={reviewListStyles.leftHeader}
							>
								<Avatar
									source={item.user.avatar}
									hideWhenLarge={false}
								/>
								<GlovingTypography
									variant="body3"
								>
									{item.user.name}
								</GlovingTypography>
								<GlovingTypography
									variant="body4"
								>
									{item.postDate}
								</GlovingTypography>
							</Box>
							<Rating
								value={item.rating}
								sx={reviewListStyles.rating}
								readOnly
							/>
						</Box>
						<Box>
							<GlovingTypography
								variant="body4"
								sx={reviewListStyles.itemContent}
							>
								{item.content}
							</GlovingTypography>
						</Box>
					</Box>
				))
			}
		</Box>
	);
};

export default ReviewList;
