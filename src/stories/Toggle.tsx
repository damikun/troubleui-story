import React from "react";
import * as Toggles from "../UIComponents/Toggle/Toggle";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
/**
 * Toggle props
 */
export type ToggleProps = Toggles.ToggleProps;

/**
 * Toggle component
 */
export const Toggle: React.FC<Toggles.ToggleProps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader name={"Toggle"} example={<Toggles.default {...props} />} />
      <SizeVariantsSection />
      <StyleVariantsSection />
    </StoryBody>
  );
};

function SizeVariantsSection() {
  return (
    <StoryContainer variant="row" name={"Size"}>
      <StoryFlexBox label={"sm"}>
        <Toggles.default styleVariant="green" sizeVariant="sm" />
      </StoryFlexBox>
      <StoryFlexBox label={"md"}>
        <Toggles.default styleVariant="green" sizeVariant="md" />
      </StoryFlexBox>
      <StoryFlexBox label={"xl"}>
        <Toggles.default styleVariant="green" sizeVariant="xl" />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function StyleVariantsSection() {
  return (
    <StoryContainer variant="row" name={"Variant"}>
      <StoryFlexBox label={"gray"}>
        <Toggles.default styleVariant="gray" />
      </StoryFlexBox>
      <StoryFlexBox label={"green"}>
        <Toggles.default styleVariant="green" />
      </StoryFlexBox>
      <StoryFlexBox label={"red"}>
        <Toggles.default styleVariant="red" />
      </StoryFlexBox>
      <StoryFlexBox label={"yellow"}>
        <Toggles.default styleVariant="yellow" />
      </StoryFlexBox>
    </StoryContainer>
  );
}
