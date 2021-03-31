import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { RouterTab, RouterTabProps } from "./RouterTab";

export default {
  title: "Example/RouterTab",
  component: RouterTab,
  argTypes: {
    Tabs: {
      Tabs: "Tabs object",
      description: "Array of tabs",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    tabWidth: {
      description: "Tab width style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<RouterTabProps> = (args) => <RouterTab {...args} />;

export const RouterTabs = Template.bind({});
RouterTabs.args = {};
