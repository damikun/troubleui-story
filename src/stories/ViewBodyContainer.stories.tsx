import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ViewBodyContainer, ViewBodyContainerProps } from "./ViewBodyContainer";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/ViewBodyContainer",
  component: ViewBodyContainer,
  argTypes: {
    header: {
      description: "Text",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    children: {
      description: "Text",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    fallback: {
      description: "Text",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    breadcrumbs: {
      description: "Enable/Dissable breadcrumbs",
      defaultValue: { summary: false },
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<ViewBodyContainerProps> = (args) => (
  <Router>
    <ViewBodyContainer {...args}></ViewBodyContainer>
  </Router>
);

export const ViewBodyContainers = Template.bind({});
ViewBodyContainers.args = {
  children: "Lorem ipsum dummy text",
  header:"Some header",
  location: "project/internal/dashboard"
};
