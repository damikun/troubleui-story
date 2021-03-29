import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { UserPromt, UserPromtProps } from "./UserPromt";

export default {
  title: "Example/UserPromt",
  component: UserPromt,
  argTypes: {
    promt_variant: {
      description: "Promt variant",
      defaultValue: { summary: "secondaryblue" },
      control: {
        type: "select",
        options: [
          "error",
          "primarygray",
          "primaryblue",
          "secondaryblue",
          "secondarygray",
          "ternarygray",
          "primaryred",
        ],
      },
    },
    promt_position: {
      description: "Promt buttons position",
      defaultValue: { summary: "justify-start" },
      control: {
        type: "select",
        options: [
          "justify-start",
          "justify-end",
          "justify-center",
          "justify-around",
        ],
      },
    },
    buttonTitle: {
      description: "Button title",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    title: {
      description: "Promt title",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    isLoading: {
      description: "Command is processing",
      defaultValue: { summary: "false" },
      control: {
        type: "boolean",
      },
    },
    className: {
      description: "component style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<UserPromtProps> = (args) => <UserPromt {...args} />;

export const UserPromts = Template.bind({});
UserPromts.args = {
  buttonTitle: "Confirm",
  promt_position: "justify-end",
  promt_variant: "secondaryblue",
  isLoading: false,
  title: "Action title",
  content: "Place for any user message or content",
};
