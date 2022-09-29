import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChallengeList } from "./ChallengeList";

export default {
  component: ChallengeList,
  title: "ChallengeList",
} as ComponentMeta<typeof ChallengeList>;

const Template: ComponentStory<typeof ChallengeList> = (args) => (
  <ChallengeList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
