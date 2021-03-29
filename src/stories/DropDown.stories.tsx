import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DropDown, DropDownProps } from "./DropDown";

export default {
  title: "Example/DropDown",
  component: DropDown,
  argTypes: {
    size: {
      type: "select",
      options: ["auto", "small", "medium", "big"],
    },
    position: {
      type: "select",
      options: ["topright", "topleft", "bottomright", "bottomleft"],
    },
    orientation: {
      type: "select",
      options: ["upleft", "upright", "downleft", "downright"],
    },
    init: {
      description: "Empty label",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    deletable: {
      description: "Is deletable flag",
      defaultValue: { summary: "false" },
      control: {
        type: "boolean",
      },
    },
    enabled: {
      description: "Enabled",
      defaultValue: { summary: "true" },
      control: {
        type: "boolean",
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

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />;

export const DropDowns = Template.bind({});
DropDowns.args = {
  size: "medium",
  enabled: true,
  deletable: true,
  position: "bottomright",
  orientation: "downleft",
  init: "Select role",
};
