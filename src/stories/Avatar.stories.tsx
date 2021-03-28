import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Example/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      description:"Style variant",
      defaultValue: { summary: "rounded" },
      control: {
        type: "select",
        options: [
          "rounded",
          "square",
        ],
      },
    },

    size: {
      description:"Avatar size",
      defaultValue: { summary: "w-12 h-12" },
      control: {
        type: "select",
        options: [
          "w-5 h-5",
          "w-6 h-6",
          "w-8 h-8",
          "w-10 h-10",
          "w-12 h-12",
          "w-16 h-16",
          "w-20 h-20",
          "w-32 h-32",
        ],
      },
    },
    infoVariant: {
      description:"Avatar info variants",
      defaultValue: { summary: "secondaryblue" },
      control: {
        type: "select",
        options: [
          "secondarydark",
          "secondarygray",
          "secondarygreen",
          "secondaryellow",
          "secondaryblue",
          "secondaryred",
          "secondarypink",
        ],
      },
    },

    label: {
      description:"Label",
      defaultValue:null,
      control: {
        type: "text",
      },
    },
    src: {
      description:"URL sourc address",
      defaultValue: { summary: "undefined" },
      control: {
        type: "text",
      },
    },
    status: {
      description:"Status value",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    hideImage: {
      description:"Hide image",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    hovereffect: {
      description:"Mouse hover effect",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    showStatus: {
      description:"Show online status",
      defaultValue: { summary: true },
      control: {
        type: "boolean",
      },
    },
    info: {
      description:"Info badge",
      defaultValue:null,
      control: {
        type: "text",
      },
    },
    className: {
      description:"Aditional styling",
      defaultValue:null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Avatars = Template.bind({});
Avatars.args = {
  size: "w-12 h-12",
  label: "DK",
  src: "https://avatars.githubusercontent.com/u/54806834?v=4",
  hideImage:false,
  info:"Admin",
  hovereffect: false,
  variant:"rounded",
  infoVariant: "secondaryblue"
};
