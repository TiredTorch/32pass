import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CountDownPanel } from "./CountDownPanel";

export default {
  component: CountDownPanel,
  title: "CountDownPanel",
} as ComponentMeta<typeof CountDownPanel>;

const Template: ComponentStory<typeof CountDownPanel> = (args) => (
  <CountDownPanel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  date: new Date(new Date().getFullYear() + 1, 0, 1),
  endText: "Happy new year",
  title: "End of the year"
};
