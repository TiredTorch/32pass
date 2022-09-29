import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TargetPaper } from "./TargetPaper";
import { TargetPaperItemProps } from "./TargetPaperItem/TargetPaperItem.types";

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

export default {
  component: TargetPaper,
  title: "TargetPaper",
} as ComponentMeta<typeof TargetPaper>;

const Template: ComponentStory<typeof TargetPaper> = (args) => (
  <TargetPaper {...args} />
);

export const Primary = Template.bind({});
Primary.args = { data: targetData };
