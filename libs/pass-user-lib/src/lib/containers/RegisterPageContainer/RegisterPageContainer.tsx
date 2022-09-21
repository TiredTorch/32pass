import { RegisterForm } from "../../components";
import { FormLayout, PageLayout } from "../../layout";

export const RegisterPageContainer = () => {
	return (
		<PageLayout>
			<FormLayout
				form={<RegisterForm />}
				textContent={"aboba"}
			/>
		</PageLayout>
	);
};

export default RegisterPageContainer;
