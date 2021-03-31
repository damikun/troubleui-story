import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { FileDrop, FileDropProps } from "./FileDrop";

export default {
  title: "Example/FileDrop",
  component: FileDrop,
  argTypes: {
    accept: {
      description: "Client file tipe validation",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    api_url: {
      description: "Upload server url",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    autoreset: {
      description: "Auto reset on fail",
      defaultValue: null,
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Controls disabled",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    selectOnClick: {
      description: "Select on area touchclick",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },

    className: {
      description: "Aditional container styles",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    api_RequestConfig: {
      description: "Request cfg",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    onSuccess: {
      description: "Callback on success",
      defaultValue: null,
      control: {
        type: "function",
      },
    },
    onError: {
      description: "Callback on error",
      defaultValue: null,
      control: {
        type: "function",
      },
    },
  },
} as Meta;

const Template: Story<FileDropProps> = (args) => <FileDrop {...args} />;

export const FileDrops = Template.bind({});
FileDrops.args = {
  autoreset: true,
  api_url: "https://www.someurltoupload.com/api/uploadfile",
  disabled: false,
  accept: "image/png",
  selectOnClick: true,
};
