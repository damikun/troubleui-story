import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextTooltip, TextTooltipProps } from "./TextTooltip";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/TextTooltip",
  component: TextTooltip,
  argTypes: {
    variant: {
      description: "Position",
      defaultValue: { summary: "right" },
      control: {
        type: "select",
        options: ["left", "right", "top", "bottom"],
      },
    },
    enabled: {
      description: "Enable tooltip show",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    offsetLeft: {
      description: "Button disabled flag",
      defaultValue: 0,
      control: {
        type: "number",
      },
    },
    offsetTop: {
      description: "Button disabled flag",
      defaultValue: 0,
      control: {
        type: "number",
      },
    },
  },
} as Meta;

const Template: Story<TextTooltipProps> = (args) => (
  <Router>
    <TextTooltip {...args} />
  </Router>
);

export const TextTooltips = Template.bind({});
TextTooltips.args = {
  variant: "right",
  enabled: true,
  offsetLeft: 0,
  offsetTop: 0,
};
