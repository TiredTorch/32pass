import { ChangeEvent, useCallback, useState } from "react";
import { Box } from "@mui/material";
import { Button, Input } from "../../components";
import { PageLayout } from "../../layout";
import { AppRouteEnum } from "../../types";
import { proposalPageContainerStyles } from "./ProposalPageContainer.styles";
import ProposalPageExample from "./ProposalPageExample/ProposalPageExample";
import ProposalPageResult from "./ProposalPageResult/ProposalPageResult";

// Ярик, я не делал валидацию для формы и мне в целом было впадлу делать форму верно. Не бери пример с этой страницы
// и с меня в целом хд
export const ProposalPageContainer = () => {
	const [formData, setFormData] = useState({
		gameName: "",
		clgName: "",
		description: ""
	});

	const handleChangeGameName = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData((prev) => ({
				...prev,
				gameName: e.target.value
			}));
		},
		[setFormData],
	);

	const handleChangeClgName = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData((prev) => ({
				...prev,
				clgName: e.target.value
			}));
		},
		[setFormData],
	);

	const handleChangeDescription = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFormData((prev) => ({
				...prev,
				description: e.target.value
			}));
		},
		[setFormData],
	);

	return (
		<PageLayout
			currentPage={AppRouteEnum.PROPOSAL}
			isPrivate
		>
			<Box
				sx={proposalPageContainerStyles.root}
			>
				<Box
					sx={proposalPageContainerStyles.topPart}
				>
					<Input
						placeholder="Game name"
						onChange={handleChangeGameName}
						value={formData.gameName}
					/>
					<Input
						placeholder="Challenge name"
						onChange={handleChangeClgName}
						value={formData.clgName}
					/>
					<Button type="blue-no-border">Send</Button>
				</Box>
				<Box
					sx={proposalPageContainerStyles.botPart}
				>
					<Box
						sx={proposalPageContainerStyles.mainPart}
					>
						{
							formData.gameName.length > 0 &&
								formData.clgName.length > 0 ?
								<ProposalPageResult
									gameName={formData.gameName}
									clgName={formData.clgName}
									description={formData.description}
								/> : <ProposalPageExample />
						}
					</Box>
					{formData.gameName.length > 0 && formData.clgName.length > 0 &&
						<Input
							sx={proposalPageContainerStyles.descriptionPart}
							placeholder="Challenge Description"
							onChange={handleChangeDescription}
							value={formData.description}
							multiline
						/>
					}
				</Box>
			</Box>
		</PageLayout>
	);
};

export default ProposalPageContainer;
