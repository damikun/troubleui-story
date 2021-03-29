import React from "react";
import * as Breadcrumbs from "../UIComponents/Breadcrumb/Breadcrumb";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

/**
 * Avatar props
 */
export type BreadcrumbProps = Breadcrumbs.BreadcrumbProps;

/**
 * Avatar component
 */
export const Breadcrumb: React.FC<Breadcrumbs.BreadcrumbProps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"Breadcrumb"}
        example={<Breadcrumbs.default {...props}>{props.children}</Breadcrumbs.default>}
      />
        <ExamplesSection />
    </StoryBody>
  );
};



function ExamplesSection() {
  return (
    <StoryContainer variant="col"  name={"Examples"}>
      <StoryFlexBox label={"/project/internal/dashboard"}>
        <Breadcrumbs.default location="/project/internal/dashboard" />
      </StoryFlexBox>
      <StoryFlexBox label={"/system/scheduler/failed?id=1234"}>
      <Breadcrumbs.default location="/system/scheduler/failed?id=1234" />
      </StoryFlexBox>
      <StoryFlexBox label={"/assets/1234/settings/?search_str=tes"}>
      <Breadcrumbs.default location="/assets/1234/settings/?search_str=test" />
      </StoryFlexBox>
      <StoryFlexBox label={"/user/overview/?"}>
      <Breadcrumbs.default location="/user/overview/?" />
      </StoryFlexBox>
    </StoryContainer>
  );
}
