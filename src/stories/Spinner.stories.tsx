import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Spinner, SpinnerProps } from "./Spinner";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

export default {
  title: "Example/Spinners",
  component: Spinner,
  argTypes: {
    label: {
      description: "Text",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    size: {
      description: "Spinner size",
      defaultValue: { summary: "default" },
      control: {
        type: "select",
        options: ["small", "medium", "default", "large", "extralarge"],
      },
    },
    flex: {
      description: "Flex type",
      defaultValue: { summary: "row" },
      control: {
        type: "select",
        options: ["row", "col"],
      },
    },
    className: {
      description: "component style",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => (
  <StoryBody>
    <StoryHeader
      name={"Spinner"}
      example={
        <div>
          <Spinner {...args}></Spinner>
        </div>
      }
    />
    <SizeSection />
    <TypeSection />
  </StoryBody>
);

export const Spinners = Template.bind({});

Spinners.args = {
  label: "Loading...",
  size: "default",
  flex: "row",
  className: "text-blue-500",
};

function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"small"}>
        <Spinner size="small" />
      </StoryFlexBox>
      <StoryFlexBox label={"medium"}>
        <Spinner size="medium" />
      </StoryFlexBox>
      <StoryFlexBox label={"default"}>
        <Spinner size="default" />
      </StoryFlexBox>
      <StoryFlexBox label={"large"}>
        <Spinner size="large" />
      </StoryFlexBox>
      <StoryFlexBox label={"extralarge"}>
        <Spinner size="extralarge" />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer name={"Flex"}>
      <StoryFlexBox label={"spinner-only"}>
        <Spinner flex="col" size="medium" />
      </StoryFlexBox>
      <StoryFlexBox label={"row"}>
        <Spinner flex="row" label="Loading..." size="medium" />
      </StoryFlexBox>
      <StoryFlexBox label={"col"}>
        <Spinner flex="col" label="Loading..." size="medium" />
      </StoryFlexBox>
    </StoryContainer>
  );
}
