import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Box
	sx={{
      minWidth: "200px",
      minHeigth: "200px",
    }}
  >
    <Avatar {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { source: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200924121343/dwayne-rock-johnson-today-151117-tease_fa2964ebc5d893d08bc04514766b9aa1-1110x1065.jpg" };
