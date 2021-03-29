import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { CapitalizedText, CapitalizedTextProps } from "./CapitalizedText";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/CapitalizedText",
  component: CapitalizedText,
  argTypes: {
    children: {
      description: "Text",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    enable: {
      description: "Enable/Dissable fature",
      defaultValue: { summary: true },
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<CapitalizedTextProps> = (args) => (
  <Router>
    <CapitalizedText className="text-xl font-semibold" {...args} />
  </Router>
);

export const CapitalizedTexts = Template.bind({});
CapitalizedTexts.args = {
  children: "lorem ipsum dummy text",
  enable:true,
};
