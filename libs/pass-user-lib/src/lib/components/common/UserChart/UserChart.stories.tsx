import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserChart } from "./UserChart";

export default {
  component: UserChart,
  title: "UserChart",
} as ComponentMeta<typeof UserChart>;

const Template: ComponentStory<typeof UserChart> = () => (
  <UserChart />
);

export const Primary = Template.bind({});
Primary.args = {};
