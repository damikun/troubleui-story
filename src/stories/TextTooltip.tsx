import React, { useRef } from "react";
import * as TextTooltips from "../UIComponents/TextTooltip/TextTooltip";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import clsx from "clsx";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
/**
 * TextTooltip props
 */
export type TextTooltipProps = TextTooltips.TextTooltipProps;

/**
 * TextTooltip component
 */
export const TextTooltip: React.FC<TextTooltips.TextTooltipProps> = ({
  ...props
}) => {
  const itemref = useRef<HTMLDivElement>(null);
  return (
    <StoryBody>
      <StoryHeader
        name={"TextTooltip"}
        example={
          <TextTooltips.default {...props} tooltip={<ToolTipHelper />}>
            <HoverMeHelper />
          </TextTooltips.default>
        }
      />
      <PositionSection />
    </StoryBody>
  );
};

function HoverMeHelper() {
  return (
    <div
      className={clsx(
        "flex py-0.5 px-1.5 rounded-lg md:h-6 items-center truncate-1-lines break-all",
        "rounded-md text-blue-500 bg-blue-100 md:h-6 items-center cursor-pointer",
        "text-xs md:text-sm font-semibold select-none shadow-sm"
      )}
    >
      Hover me
    </div>
  );
}

function ToolTipHelper() {
  return (
    <div
      className={clsx(
        "flex break-words px-2 rounded-md leading",
        "py-1 bg-gray-700 text-white max-w-xs font-semibold"
      )}
    >
      This is tooltip 😛
    </div>
  );
}

function PositionSection() {
  return (
    <StoryContainer variant="row" name={"Position"}>
      <StoryFlexBox label={"left"}>
        <TextTooltips.default
          enabled
          variant="left"
          tooltip={<ToolTipHelper />}
        >
          <HoverMeHelper />
        </TextTooltips.default>
      </StoryFlexBox>
      <StoryFlexBox label={"top"}>
        <TextTooltips.default enabled variant="top" tooltip={<ToolTipHelper />}>
          <HoverMeHelper />
        </TextTooltips.default>
      </StoryFlexBox>

      <StoryFlexBox label={"bottom"}>
        <TextTooltips.default
          enabled
          variant="bottom"
          tooltip={<ToolTipHelper />}
        >
          <HoverMeHelper />
        </TextTooltips.default>
      </StoryFlexBox>

      <StoryFlexBox label={"right"}>
        <TextTooltips.default
          enabled
          variant="right"
          tooltip={<ToolTipHelper />}
        >
          <HoverMeHelper />
        </TextTooltips.default>
      </StoryFlexBox>
    </StoryContainer>
  );
}
