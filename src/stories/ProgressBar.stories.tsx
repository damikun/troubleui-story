import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: {
      description: "Progres percentage value",
      defaultValue: null,
      control: {
        type: "number",
      },
    },
    height: {
      description: "Bar height",
      defaultValue: { summary: "medium" },
      control: {
        type: "select",
        options: ["small", "medium", "big"],
      },
    },
    color: {
      description: "Color scheme",
      defaultValue: { summary: "medium" },
      control: {
        type: "select",
        options: [
          "blue",
          "lightblue",
          "yellow",
          "lightyellow",
          "red",
          "lightred",
          "green",
          "lightgreen",
          "gray",
          "lightgray",
          "purple",
          "lightpurple",
        ],
      },
    },
    barOnly: {
      description: "Show bar only",
      defaultValue: null,
      control: {
        type: "boolean",
      },
    },
    barStatusFlexible: {
      description: "Proges bar flexible grow",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const ProgressBars = Template.bind({});
ProgressBars.args = {
  value: 50,
  height: "medium",
  barOnly: false,
  barStatusFlexible: false,
  color: "blue",
};
