import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Select, SelectProps } from "./Select";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Example/Select",
  component: Select,
  argTypes: {
    searchable: {
      description: "Search enabled",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    border: {
      description: "Border",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    controldisabled: {
      description: "Disable",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    isProcessing: {
      description: "IsProcessing",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    debouncingTimeout: {
      description: "Search debounc",
      defaultValue: 350,
      control: {
        type: "number",
      },
    },
    searchPlaceholder: {
      description: "Search placeholder",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    className: {
      description: "Styling",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Selects = Template.bind({});
Selects.args = {
  controldisabled: false,
  searchable: true,
  border: true,
  className: "flex w-full bg-white",
  searchPlaceholder: "add",
  isProcessing: false,
  icon: faPlus,
  debouncingTimeout: 400,
};
