import React from "react";
import * as CapitalizedTexts from "../UIComponents/CapitalizedText/CapitalizedText";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

/**
 * Avatar props
 */
export type CapitalizedTextProps = CapitalizedTexts.CapitalizedTextProps;

/**
 * Avatar component
 */
export const CapitalizedText: React.FC<CapitalizedTexts.CapitalizedTextProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"CapitalizedText"}
        example={
          <CapitalizedTexts.default {...props}>
            {props.children}
          </CapitalizedTexts.default>
        }
      />
      <ExamplesSection />
    </StoryBody>
  );
};

function ExamplesSection() {
  return (
    <StoryContainer variant="col" name={"Examples"}>
      <StoryFlexBox label={"Lorem Ipsum dummy text"}>
        <CapitalizedTexts.default>Lorem ipsum dummy text</CapitalizedTexts.default>
      </StoryFlexBox>

      <StoryFlexBox label={"lorem ipsum dummy text"}>
        <CapitalizedTexts.default>lorem ipsum dummy text</CapitalizedTexts.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}
