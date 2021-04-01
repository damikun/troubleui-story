import React from "react";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import TimeLineItemStart from "../UIComponents/TimeLine/TimeLineItemStart";
import TimeLineItemSkipped from "../UIComponents/TimeLine/TimeLineItemSkipped";
import TimeLineItemEnd from "../UIComponents/TimeLine/TimeLineItemEnd";
import TimelineContainer from "../UIComponents/TimeLine/TimeLineContainer";
import TimelineItem from "../UIComponents/TimeLine/TimeLineItem";
import {
  faArrowsAltH,
  faUserPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Avatar from "../UIComponents/Avatar/Avatar";
import Section from "../UIComponents/Section/Section";
import SectionTitle from "../UIComponents/Section/SectionTitle";
import CapitalizedText from "../UIComponents/CapitalizedText/CapitalizedText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const src = "https://avatars.githubusercontent.com/u/54806834?v=4";

/**
 * Timeline props
 */
export type TimelineProps = {};

/**
 * Timeline component
 */
export const Timeline: React.FC<TimelineProps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader name={"Timeline"} />
      <TimelineSection />
    </StoryBody>
  );
};

function TimelineSection() {
  return (
    <StoryContainer variant="row">
      <Section>
        <SectionTitle name={"Timeline"} />

        <div className="flex-1 relative">
          <TimelineContainer>
            <TimeLineItemStart />
            <TimeLineItemSkipped isProcessing={false} onLoadMore={() => {}} />
            <EcampleUserAssign />
            <EcampleStatusClose />
            <EcampleStatusOpen />
            <TimeLineItemEnd />
          </TimelineContainer>
        </div>
      </Section>
    </StoryContainer>
  );
}

const ACTOR = { firstname: "John", lastname: "Smith", src: src };

function EcampleUserAssign() {
  return (
    <TimelineItem
      timestamp={new Date()}
      event_name="Assign user"
      actor={ACTOR}
      event_icon={faUserPlus}
    >
      <div className="flex">
        <div
          className={clsx(
            "flex space-x-2 leading-none flex-row text-xs",
            "justify-start border p-1 px-2 bg-gray-100 rounded-lg"
          )}
        >
          <div
            className={clsx(
              "text-white text-nowrap select-none",
              "my-auto text-cente"
            )}
          >
            <Avatar hovereffect size="w-5 h-5" src={undefined} label={"JS"} />
          </div>

          <div
            className={clsx(
              "ml-1 my-auto break-all flex-auto capitalize",
              "text-xs flex-grow self-stretch items-stretch flex-shrink"
            )}
          >{`John smith`}</div>
        </div>
      </div>
    </TimelineItem>
  );
}

function EcampleStatusClose() {
  return (
    <TimelineItem
      timestamp={new Date()}
      event_name="Status changed"
      actor={ACTOR}
      status={"closed"}
      event_icon={faArrowsAltH}
    >
      <div
        className={clsx(
          "flex flex-row text-xs font-semibold items-center py-05"
        )}
      >
        <CapitalizedText
          className={clsx(
            "rounded-md opacity-60 line-through truncate-1-lines",
            "bg-gray-100 px-1 border border-gray-300"
          )}
        >
          {"InProgress"}
        </CapitalizedText>
        <FontAwesomeIcon
          className={"mx-1 text-xs items-cente "}
          icon={faArrowRight}
        />
        <CapitalizedText
          className={clsx(
            "rounded-md truncate-1-lines bg-gray-100",
            "px-1 border border-gray-300"
          )}
        >
          {"Closed"}
        </CapitalizedText>
      </div>
    </TimelineItem>
  );
}

function EcampleStatusOpen() {
  return (
    <TimelineItem
      timestamp={new Date()}
      event_name="Status changed"
      actor={ACTOR}
      status={"opened"}
      event_icon={faArrowsAltH}
    >
      <div
        className={clsx(
          "flex flex-row text-xs font-semibold items-center py-05"
        )}
      >
        <CapitalizedText
          className={clsx(
            "rounded-md opacity-60 line-through truncate-1-lines",
            "bg-gray-100 px-1 border border-gray-300"
          )}
        >
          {"Closed"}
        </CapitalizedText>
        <FontAwesomeIcon
          className={"mx-1 text-xs items-cente "}
          icon={faArrowRight}
        />
        <CapitalizedText
          className={clsx(
            "rounded-md truncate-1-lines bg-gray-100",
            "px-1 border border-gray-300"
          )}
        >
          {"InProgress"}
        </CapitalizedText>
      </div>
    </TimelineItem>
  );
}
