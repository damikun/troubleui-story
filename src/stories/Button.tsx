import React from "react";
import { StayledButtonPorps } from "../UIComponents/Buttons/StayledButton";
import StayledButton from "../UIComponents/Buttons/StayledButton";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import { faFolder, faPlus, faTable } from "@fortawesome/free-solid-svg-icons";

export type ButtonProps = StayledButtonPorps;

/**
 * Button component
 */
export const Button: React.FC<StayledButtonPorps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"Button"}
        example={<StayledButton {...props}>{props.children}</StayledButton>}
      />

      <VariantSection />
      <SizeSection />
      <IconsSection />
      <TypeSection />
    </StoryBody>
  );
};

function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"auto"}>
        <StayledButton variant="secondaryblue" size="auto">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"small"}>
        <StayledButton variant="secondaryblue" size="small">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"normal"}>
        <StayledButton variant="secondaryblue" size="normal">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"medium"}>
        <StayledButton variant="secondaryblue" size="medium">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"large"}>
        <StayledButton variant="secondaryblue" size="large">
          Button
        </StayledButton>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function VariantSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Variant"}>
      <StoryFlexBox label={"primarygray"}>
        <StayledButton variant="primarygray">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"primaryblue"}>
        <StayledButton variant="primaryblue">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"primaryred"}>
        <StayledButton variant="primaryred">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"secondaryblue"}>
        <StayledButton variant="secondaryblue">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"secondarygray"}>
        <StayledButton variant="secondarygray">
          Button
        </StayledButton>
      </StoryFlexBox>

      <StoryFlexBox label={"secondarygreen"}>
        <StayledButton variant="secondarygreen">
          Button
        </StayledButton>
      </StoryFlexBox>

      <StoryFlexBox label={"ternarygray"}>
        <StayledButton variant="ternarygray">
          Button
        </StayledButton>
      </StoryFlexBox>

      <StoryFlexBox label={"error"}>
        <StayledButton variant="error">
          Button
        </StayledButton>
      </StoryFlexBox>

      <StoryFlexBox label={"invisible"}>
        <StayledButton variant="invisible">
          Button
        </StayledButton>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function IconsSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Icons"}>
      <StoryFlexBox label={"iconLeft"}>
        <StayledButton variant="secondaryblue" iconLeft={faPlus}>
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"iconRight"}>
        <StayledButton variant="secondaryblue" iconRight={faTable}>
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"onMobileIconOnly"}>
        <StayledButton variant="secondaryblue" onMobileIconOnly iconRight={faFolder}>
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"iconOnly"}>
        <StayledButton variant="secondaryblue" iconOnly iconRight={faFolder}>
          Button
        </StayledButton>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Type"}>
      <StoryFlexBox label={"isloading"}>
        <StayledButton variant="secondaryblue" isloading size="normal">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"disabled"}>
        <StayledButton variant="secondaryblue" disabled size="normal">
          Button
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox  label={"turncate"}>
        <StayledButton className="w-16" variant="secondaryblue" turncate size="normal">
          Button
        </StayledButton>
      </StoryFlexBox>

    </StoryContainer>
  );
}






