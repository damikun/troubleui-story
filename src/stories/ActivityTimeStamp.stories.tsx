import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ActivityTimeStamp, ActivityTimeStampProps } from "./ActivityTimeStamp";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/ActivityTimeStamp",
  component: ActivityTimeStamp,
  argTypes: {
    recentLimit: {
      description: "Border of recent/past",
      defaultValue: 5,
      control: {
        type: "number",
      },
    },
    textOnly: {
      description: "Show text only",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    date: {
      description: "Timestamp dateTime",
      control: {
        type: "object",
      },
    },
    currentDT: {
      description: "Current server time",
      control: {
        type: "object",
      },
    },
    className: {
      description: "Aditional style",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<ActivityTimeStampProps> = (args) => (
  <Router>
    <ActivityTimeStamp {...args} />
  </Router>
);

export const ActivityTimeStamps = Template.bind({});
ActivityTimeStamps.args = {
  textOnly: false,
  recentLimit: 5,
  currentDT: new Date(),
  date: new Date(new Date().getTime() - 7 * 60000),
};
