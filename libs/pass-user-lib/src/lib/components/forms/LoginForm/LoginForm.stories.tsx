import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export default {
  component: LoginForm,
  title: "LoginForm",
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <BrowserRouter>

    <Box
	sx={{
        width: "50%"
      }}
    >
      <LoginForm {...args} />
    </Box>
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
