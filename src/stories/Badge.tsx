import React from "react";
import  * as Badgets from "../UIComponents/Badge/Badge";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

/**
 * Badge props
 */
export type BadgeProps = Badgets.BadgeProps;

/**
 * Badge component
 */
export const Badge: React.FC<Badgets.BadgeProps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"Badge"}
        example={< Badgets.default {...props}>{props.children}</ Badgets.default>}
      />

      <PrimaryVariantSection />
      <SeconadryVariantSection />
      <TernaryVariantSection />
      <SizeSection />
      <TypeSection />
    </StoryBody>
  );
};


function PrimaryVariantSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Variant primary"}>
      <StoryFlexBox label={"primarydark"}>
        <Badgets.default variant="primarydark">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"primarygray"}>
        <Badgets.default variant="primarygray">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"primarygreen"}>
        <Badgets.default variant="primarygreen">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"primaryellow"}>
        <Badgets.default variant="primaryellow">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"primaryblue"}>
        <Badgets.default variant="primaryblue">
          Badge
        </Badgets.default>
      </StoryFlexBox>

      <StoryFlexBox label={"primaryred"}>
        <Badgets.default variant="primaryred">
          Badge
        </Badgets.default>
      </StoryFlexBox>

      <StoryFlexBox label={"primarypink"}>
        <Badgets.default variant="primarypink">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"clean"}>
        <Badgets.default variant="clean">
          Badge
        </Badgets.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}


function SeconadryVariantSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Variant secondary"}>
      <StoryFlexBox label={"secondarydark"}>
        <Badgets.default variant="secondarydark">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"secondarygray"}>
        <Badgets.default variant="secondarygray">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"secondarygreen"}>
        <Badgets.default variant="secondarygreen">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"secondaryellow"}>
        <Badgets.default variant="secondaryellow">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"secondaryblue"}>
        <Badgets.default variant="secondaryblue">
          Badge
        </Badgets.default>
      </StoryFlexBox>

      <StoryFlexBox label={"secondaryred"}>
        <Badgets.default variant="secondaryred">
          Badge
        </Badgets.default>
      </StoryFlexBox>

      <StoryFlexBox label={"secondarypink"}>
        <Badgets.default variant="secondarypink">
          Badge
        </Badgets.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TernaryVariantSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Variant ternary"}>
      <StoryFlexBox label={"ternarygray"}>
        <Badgets.default variant="ternarygray" rounding="none">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"ternaryblue"}>
        <Badgets.default variant="ternaryblue" rounding="none">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"ternaryyellow"}>
        <Badgets.default variant="ternaryyellow" rounding="none">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"ternaryred"}>
        <Badgets.default variant="ternaryred" rounding="none">
          Badge
        </Badgets.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}


function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"auto"}>
        <Badgets.default variant="secondaryblue" size="auto">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"thin"}>
        <Badgets.default variant="secondaryblue" size="thin">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"small"}>
        <Badgets.default variant="secondaryblue" size="small">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"normal"}>
        <Badgets.default variant="secondaryblue" size="normal">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"medium"}>
        <Badgets.default variant="secondaryblue" size="medium">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"large"}>
        <Badgets.default variant="secondaryblue" size="large">
          Badge
        </Badgets.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer className="flex-wrap" name={"Type"}>
      <StoryFlexBox label={"no-border"}>
        <Badgets.default variant="secondaryblue" border={false} size="small">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"border"}>
        <Badgets.default variant="secondaryblue"  border={true} size="small">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox label={"shadow"}>
        <Badgets.default variant="secondaryblue"  border={false} shadow size="small">
          Badge
        </Badgets.default>
      </StoryFlexBox>
      <StoryFlexBox  label={"turncate"}>
        <Badgets.default className="w-12" variant="secondaryblue" turncate size="small">
          Badge
        </Badgets.default>
      </StoryFlexBox>

    </StoryContainer>
  );
}






