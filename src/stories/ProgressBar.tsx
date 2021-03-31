import React from "react";
import * as ProgressBars from "../UIComponents/Progress/ProgressBar";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

/**
 * ProgressBar props
 */
export type ProgressBarProps = ProgressBars.ProgressBarProps;

/**
 * ProgressBar component
 */
export const ProgressBar: React.FC<ProgressBars.ProgressBarProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"ProgressBar"}
        example={
          <div className={"flex md:w-40"}>
            <ProgressBars.default {...props} />
          </div>
        }
      />
      <SizeSection />
      <ColorSection />
      <TypeSection />
    </StoryBody>
  );
};

function SizeSection() {
  return (
    <StoryContainer variant="col" name={"Size"}>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"small"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={50} barOnly height="small" />
        </div>
      </StoryFlexBox>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"medium"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={50} barOnly height="medium" />
        </div>
      </StoryFlexBox>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"big"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={50} barOnly height="big" />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer variant="col" name={"Type"}>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"status-0"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={0} height="small" />
        </div>
      </StoryFlexBox>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"status"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={50} height="small" />
        </div>
      </StoryFlexBox>
      <StoryFlexBox labelwidth="w-20" variant="row" label={"bar-only"}>
        <div className={"flex min-w-40 max-w-xs"}>
          <ProgressBars.default value={50} barOnly height="small" />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function ColorSection() {
  return (
    <StoryContainer variant="row" name={"Color"}>
      <StoryFlexBox variant="col" label={"blue"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="blue"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightblue"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightblue"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"yellow"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="yellow"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightyellow"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightyellow"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"red"}>
        <div className={"flex w-32"}>
          <ProgressBars.default value={50} barOnly color="red" height="small" />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightred"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightred"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"green"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="green"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightgreen"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightgreen"
            height="small"
          />
        </div>
      </StoryFlexBox>

      <StoryFlexBox variant="col" label={"gray"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="gray"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightgray"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightgray"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"purple"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="purple"
            height="small"
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"lightpurple"}>
        <div className={"flex w-32"}>
          <ProgressBars.default
            value={50}
            barOnly
            color="lightpurple"
            height="small"
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
