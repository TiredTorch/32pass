import { Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";

export default {
  component: RegisterForm,
  title: "RegisterForm",
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <BrowserRouter>

    <Box
	sx={{
        width: "50%"
      }}
    >
      <RegisterForm {...args} />
    </Box>
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
