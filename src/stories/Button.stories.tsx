import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "./Button";
import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";

const ICON_TYPES_EXAMPLE_OPTIONS = {
  ExampleFolderIcon: faFolder,
  ExamplePlusIcon: faPlus,
  undefined: undefined,
};

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: {
      description:"Button style variant",
      defaultValue: { summary: "primarygray" },
      control: {
        type: "select",
        options: [
          "primarygray",
          "primaryblue",
          "primaryred",
          "secondarygray",
          "secondaryblue",
          "secondarygreen",
          "ternarygray",
          "error",
          "invisible",
        ],
      },
    },
    size: {
      description:"Button size",
      defaultValue: { summary: "auto" },
      control: {
        type: "select",
        options: [
          "auto",
          "small",
          "normal",
          "medium",
          "large",
        ],
      },
    },
    children: {
      description:"Text or any react compoennt",
      defaultValue: { summary: "undefined" },
      control: {
        type: "text",
      },
    },
    iconLeft: {
      description:"Left Icon prop",
      defaultValue: { summary: "undefined" },
      control: {
        type: "select",
        options: ICON_TYPES_EXAMPLE_OPTIONS,
      },
    },
    iconRight: {
      description:"Right Icon prop",
      defaultValue: { summary: "undefined" },
      control: {
        type: "select",
        options: ICON_TYPES_EXAMPLE_OPTIONS,
      },
    },
    isloading: {
      description:"Loading indicator",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description:"Button disabled flag",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    turncate: {
      description:"Turncate on overflow with breake-all",
      defaultValue: { summary: true },
      control: {
        type: "boolean",
      },
    },
    iconOnly: {
      description:"Show only icon and ignor other content",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    onMobileIconOnly: {
      description:"For mobile resolution show only icon and ignor other content",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
    transitionTime: {
      description:"React suspense transition time",
      defaultValue: { summary: 500 },
      control: {
        type: "number",
      },
    },
    className: {
      description:"component style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    onClick: {
      description:"Onclick/Touch callback",
      defaultValue: null,
      control: {
        type: "function",
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  variant: "secondaryblue",
  children: "Button",
  iconLeft: faFolder,
  iconRight: undefined,
  isloading: undefined,
  disabled: undefined,
  iconOnly: undefined,
  turncate: true,
  transitionTime: 500,
  onMobileIconOnly: undefined,
  className: "",
  size: "normal"
};
