import { LoginForm } from "../../components";
import { FormLayout, PageLayout } from "../../layout";

export const LoginPageContainer = () => {
	return (
		<PageLayout>
			<FormLayout
				form={<LoginForm />}
				textContent={"aboba"}
			/>
		</PageLayout>
	);
};

export default LoginPageContainer;
