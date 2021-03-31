import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { EditableInput, EditableInputProps } from "./EditableInput";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Example/EditableInput",
  component: EditableInput,
  argTypes: {
    placeholder: {
      description: "Placeholder",
      defaultValue: null,
      control: {
        type: "text",
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
    inFlight: {
      description: "Processing / inFlight",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Disabled",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    border: {
      description: "Border show/hide",
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    autoFocus: {
      description: "Autofocus",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    capitalize: {
      description: "Capilaize input text",
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    label: {
      description: "Label",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    type: {
      description: "Input type",
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

const Template: Story<EditableInputProps> = (args) => (
  <Router>
    <EditableInput {...args}></EditableInput>
  </Router>
);

export const EditableInputs = Template.bind({});
EditableInputs.args = {
  name: "",
  placeholder: undefined,
  float: "left",
  inFlight: false,
  disabled: false,
  border: true,
  autoFocus: true,
  capitalize: true,
  label: undefined,
};
