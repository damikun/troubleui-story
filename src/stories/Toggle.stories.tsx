import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Example/Toggle",
  component: Toggle,
  argTypes: {
    sizeVariant: {
      description: "Size",
      defaultValue: { summary: "sm" },
      control: {
        type: "select",
        options: ["sm", "md", "xl"],
      },
    },
    styleVariant: {
      description: "Style",
      defaultValue: { summary: "green" },
      control: {
        type: "select",
        options: ["gray", "green", "red", "yellow"],
      },
    },
    disabled: {
      description: "Disable control",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    onToggleChange: {
      description: "On toogle callback",
      control: {
        type: "function",
      },
    },
  },
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Toggles = Template.bind({});
Toggles.args = {
  sizeVariant: "sm",
  styleVariant: "green",
  disabled: false,
};
