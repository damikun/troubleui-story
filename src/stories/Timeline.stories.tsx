import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Timeline, TimelineProps } from "./Timeline";

export default {
  title: "Example/Timeline",
  component: Timeline,
  argTypes: {},
} as Meta;

const Template: Story<TimelineProps> = (args) => <Timeline {...args} />;

export const Timelines = Template.bind({});
Timelines.args = {};
