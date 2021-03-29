import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    location: {
      description: "Location",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => (
  <Router>
    <Breadcrumb {...args} />
  </Router>
);

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  location: "/Project/internall/dashboard",
};
