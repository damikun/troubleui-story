import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Toast, ToastProps } from "./Toast";

export default {
  title: "Example/Toast",
  component: Toast,
  argTypes: {
    variant: {
      description: "Toast position",
      defaultValue: { summary: "top_right" },
      control: {
        type: "select",
        options: [
          "top_left",
          "top_right",
          "bottom_right",
          "bottom_left",
          "top_middle",
          "bottom_middle",
          "undefined",
        ],
      },
    },
  },
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Toasts = Template.bind({});
Toasts.args = {
  variant: "top_right",
};
