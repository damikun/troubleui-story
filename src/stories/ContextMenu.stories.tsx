import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ContextMenu, ContextMenuProps } from "./ContextMenu";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/ContextMenu",
  component: ContextMenu,
  argTypes: {

  },
} as Meta;

const Template: Story<ContextMenuProps> = (args) => (
  <Router>
    <ContextMenu {...args} />
  </Router>
);

export const ContextMenus = Template.bind({});
ContextMenus.args = {

};
