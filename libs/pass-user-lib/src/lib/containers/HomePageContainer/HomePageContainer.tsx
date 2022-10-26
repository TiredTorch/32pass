import { Box } from "@mui/material";
import { ChallengeList, CountDownPanel, TargetPaper, UserChart } from "../../components";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { homePageContainerStyles } from "./HomePageContainer.styles";
import { TargetPaperItemProps } from "../../components/common/TargetPaper/TargetPaperItem/TargetPaperItem.types";

export const HomePageContainer = () => {

	const targetData: TargetPaperItemProps[] = [
		{
			number: 6,
			title: "amount of challenges"
		},
		{
			number: 12,
			title: "amount of days"
		},
		{
			number: 2,
			title: "challenges left"
		}
	];

	return (
		<PageLayout
			isPrivate
			currentPage={AppRouteEnum.HOME}
		>
			<Box
				sx={homePageContainerStyles.root}
			>
				<Box
					sx={homePageContainerStyles.leftWrapper}
				>
					<Box
						sx={homePageContainerStyles.countdownWrapper}
					>
						<CountDownPanel
							date={new Date(new Date().getFullYear() + 1, 0, 1)}
							endText={"Happy new year"}
							title={"End of the year"}
						/>
						<CountDownPanel
							date={Date.now() + 5000000}
							endText={"You've got no tasks"}
							title={"End of the task"}
						/>
					</Box>
					<ChallengeList challengesArray={[]} />
					<UserChart />
				</Box>
				<Box
					sx={homePageContainerStyles.rightWrapper}
				>
					<TargetPaper data={targetData} />
					<TargetPaper data={targetData} />
				</Box>
			</Box>
		</PageLayout>
	);
};

export default HomePageContainer;
