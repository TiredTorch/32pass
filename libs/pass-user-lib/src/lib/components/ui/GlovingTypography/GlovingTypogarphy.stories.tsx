import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GlovingTypography } from "./GlovingTypogarphy";

export default {
  component: GlovingTypography,
  title: "GlovingTypography",
} as ComponentMeta<typeof GlovingTypography>;

const Template: ComponentStory<typeof GlovingTypography> = (args) => (
  <GlovingTypography {...args} />
);

export const Primary = Template.bind({});
Primary.args = { children: "Text example" };
