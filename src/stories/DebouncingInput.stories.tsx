import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DebouncingInput, DebouncingInputProps } from "./DebouncingInput";
import { BrowserRouter as Router } from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Example/DebouncingInput",
  component: DebouncingInput,
  argTypes: {
    label: {
      description: "Label",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    debouncingTimeout: {
      description: "Debounc timeout",
      defaultValue: null,
      control: {
        type: "number",
      },
    },
    placeholder: {
      description: "Placeholder",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    height: {
      description: "Height",
      defaultValue: { summary: "normal" },
      control: {
        type: "select",
        options: ["auto", "small", "normal", "medium", "large"],
      },
    },
    variant: {
      description: "Variant",
      defaultValue: { summary: "primaryblue" },
      control: {
        type: "select",
        options: [
          "clean",
          "primaryblue",
          "primarygray",
          "primarygreen",
          "primaryyellow",
        ],
      },
    },
    float: {
      description: "Float",
      defaultValue: { summary: "left" },
      control: {
        type: "select",
        options: ["right", "left"],
      },
    },
    fullwidth: {
      description: "Width behaviour",
      defaultValue: { summary: "left" },
      control: {
        type: "select",
        options: ["w-auto", "w-full", "md:w-full", "w-full md:w-auto"],
      },
    },
    capitalize: {
      description: "Capilaize input text",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    startValue: {
      description: "Init value set on first render",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    className: {
      description: "input style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<DebouncingInputProps> = (args) => (
  <Router>
    <DebouncingInput {...args}></DebouncingInput>
  </Router>
);

export const DebouncingInputs = Template.bind({});
DebouncingInputs.args = {
  icon: faPen,
  debouncingTimeout: 500,
  startValue: "",
  variant: "primaryblue",
  height: "normal",
  capitalize: true,
  labelstyle: undefined,
  label: undefined,
  float: "left",
  fullwidth: "w-auto",
  placeholder: "Type",
};
