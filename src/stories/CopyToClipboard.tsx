import React, { useState } from "react";
import * as CopyToClipboards from "../UIComponents/CopyToClipboard/CopyToClipboard";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import clsx from "clsx";
/**
 * CopyToClipboard props
 */
export type CopyToClipboardProps = CopyToClipboards.CopyToClipboardProps;

/**
 * CopyToClipboard component
 */

const state =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

export const CopyToClipboard: React.FC<CopyToClipboards.CopyToClipboardProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"CopyToClipboard"}
        example={
          <div className="flex group">
            <CopyToClipboards.default {...props} />
          </div>
        }
      />

      <SizeSection />
      <VariantSection />
      <TypeSection />
      <HoverSection />
    </StoryBody>
  );
};

function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"small"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            size="small"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"standard"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"large"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            size="large"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function VariantSection() {
  return (
    <StoryContainer name={"Variants"}>
      <StoryFlexBox label={"clean"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            variant="clean"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"primary"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            variant="primary"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"secondary"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            variant="secondary"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer name={"Types"}>
      <StoryFlexBox label={"standard"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            variant="primary"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"iconOnly"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            iconOnly
            variant="primary"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"iconOnly2"}>
        <div className="w-20">
          <CopyToClipboards.default
            onGroupHover={false}
            className=""
            iconOnly
            variant="secondary"
            size="standard"
            dataSource={"Some text to copy"}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
function HoverSection() {
  return (
    <StoryContainer name={"Hover"}>
      <StoryFlexBox label={"onAreaHover"}>
        <div
          className={clsx(
            "flex flex-wrap p-2 break-words max-w-xs",
            "space-x-2 group cursor-pointer relative border border-gray-100",
            "rounded-md shadow-sm bg-white items-center"
          )}
        >
          <CopyToClipboards.default
            className="absolute top-0 right-0 mt-1 mr-1"
            dataSource={state}
          />
          <span className="font-semibold">{state}</span>
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

/* <div
className={clsx(
  "flex flex-wrap p-2 break-words max-w-xs space-x-2 group",
  "rounded-md shadow-sm bg-white items-center cursor-pointer relative"
)}
>
<CopyToClipboards.default
  className="absolute top-0 right-0 mt-1 mr-1"
  dataSource={state}
/>
<span className="font-semibold">{state}</span>
</div> */
