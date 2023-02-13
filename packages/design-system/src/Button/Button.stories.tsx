import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A button component with different variants and sizes. It can be used as a button or an anchor. Other than the defined props button component accepts all the props of the button and a elements. ",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>button</Button>;
};

export const ButtonStory = Template.bind({});
ButtonStory.storyName = "Button";
ButtonStory.args = {
  onPress: () => alert("Button clicked!"),
  startIcon: "arrow-left-line",
  endIcon: "arrow-right-line",
  size: "md",
  kind: "primary",
};
