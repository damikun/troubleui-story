import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CopyToClipboard, CopyToClipboardProps } from "./CopyToClipboard";

export default {
  title: "Example/CopyToClipboard",
  component: CopyToClipboard,
  argTypes: {
    variant: {
      description: "Style variant",
      defaultValue: { summary: "primary" },
      control: {
        type: "select",
        options: ["clean", "primary", "secondary"],
      },
    },
    size: {
      description: "Size",
      defaultValue: { summary: "standard" },
      control: {
        type: "select",
        options: ["small", "standard", "large"],
      },
    },
    name: {
      description: "Name label",
      defaultValue: { summary: "Copy" },
      control: {
        type: "text",
      },
    },
    nameSuccess: {
      description: "Name label on success copy",
      defaultValue: { summary: "Done" },
      control: {
        type: "text",
      },
    },
    className: {
      description: "component style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    dataSource: {
      description: "Text to be copyed",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    copyAutoResetDuration: {
      description: "Auto rest after copy (ms)",
      defaultValue: null,
      control: {
        type: "number",
      },
    },
    iconOnly: {
      description: "Show icon only",
      defaultValue: null,
      control: {
        type: "boolean",
      },
    },
    onGroupHover: {
      description: "Show only on group hover is activated",
      defaultValue: null,
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<CopyToClipboardProps> = (args) => (
  <CopyToClipboard {...args} />
);

export const CopyToClipboards = Template.bind({});
CopyToClipboards.args = {

  variant: "clean",
  size: "standard",
  name:"Copy",
  nameSuccess:"Done",
  dataSource:"Some text to copy",
  copyAutoResetDuration: 2000,
  className:"text-blue-500",
  iconOnly : false,
  onGroupHover:false
};
