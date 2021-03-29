import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ContainerSpinner, ContainerSpinnerProps } from "./ContainerSpinner";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/ContainerSpinner",
  component: ContainerSpinner,
  argTypes: {},
} as Meta;

const Template: Story<ContainerSpinnerProps> = (args) => (
  <Router>
    <div className="h-screen">
      <ContainerSpinner {...args}></ContainerSpinner>
    </div>
  </Router>
);

export const ContainerSpinners = Template.bind({});
ContainerSpinners.args = {};
