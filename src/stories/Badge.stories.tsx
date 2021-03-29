import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Badge, BadgeProps } from "./Badge";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    variant: {
      description: "Badge style variant",
      defaultValue: { summary: "primarydark" },
      control: {
        type: "select",
        options: [
          "secondarydark",
          "secondarygray",
          "secondarygreen",
          "secondaryellow",
          "secondaryblue",
          "secondaryred",
          "primarydark",
          "primarygray",
          "primarypink",
          "primarygreen",
          "primaryellow",
          "primaryblue",
          "primaryred",
          "ternarygray",
          "ternaryyellow",
          "ternaryblue",
          "ternaryred",
          "clean",
        ],
      },
    },
    children: {
      description: "Text or any react compoennt",
      defaultValue: { summary: "undefined" },
      control: {
        type: "text",
      },
    },
    size: {
      description: "Badge size",
      defaultValue: { summary: "auto" },
      control: {
        type: "select",
        options: ["auto", "thin", "small", "normal", "medium", "large"],
      },
    },
    rounding: {
      description: "Badge rounding",
      defaultValue: { summary: "medium" },
      control: {
        type: "select",
        options: ["small", "normal", "medium", "large", "full", "none"],
      },
    },
    turncate: {
      description: "Turncate on overflow with breake-all",
      defaultValue: { summary: true },
      control: {
        type: "boolean",
      },
    },
    border: {
      description: "Border",
      defaultValue: { summary: true },
      control: {
        type: "boolean",
      },
    },
    shadow: {
      description: "Shadow",
      defaultValue: { summary: false },
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
    classNameWrapper: {
      description: "component wrapper style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Badgets = Template.bind({});
Badgets.args = {
  children: "dsdsd",
  size: "small",
  variant: "secondaryblue",
  rounding: "medium",
  turncate: true,
  shadow: false,
  border: true,
};
