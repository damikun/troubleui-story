import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { LoadingBar, LoadingBarProps } from "./LoadingBar";

export default {
  title: "Example/LoadingBar",
  component: LoadingBar,
  argTypes: {
    color: {
      description: "Color",
      defaultValue: { summary: "gray" },
      control: {
        type: "select",
        options: ["gray", "graylight", "blue", "bluelignt"],
      },
    },
    isloading: {
      description: "Loading indicator sensor",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<LoadingBarProps> = (args) => (
  <LoadingBar {...args}></LoadingBar>
);

export const LoadingBars = Template.bind({});
LoadingBars.args = {
  isloading: true,
  color: "gray",
};
