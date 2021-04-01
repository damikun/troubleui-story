import React, { useRef } from "react";
import * as ActivityTimeStamps from "../UIComponents/Timestamp/ActivityTimeStamp";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
/**
 * ActivityTimeStamp props
 */
export type ActivityTimeStampProps = ActivityTimeStamps.ActivityTimeStampProps;

/**
 * ActivityTimeStamp component
 */
export const ActivityTimeStamp: React.FC<ActivityTimeStamps.ActivityTimeStampProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"ActivityTimeStamp"}
        example={<ActivityTimeStamps.default {...props} />}
      />
      <ExamplesSection />
    </StoryBody>
  );
};

function ExamplesSection() {
  return (
    <StoryContainer variant="row" name={"Examples"}>
      <StoryFlexBox label={"Recent"}>
        <ActivityTimeStamps.default date={new Date()} currentDT={new Date()} />
      </StoryFlexBox>
      <StoryFlexBox label={"minutes-ago"}>
        <ActivityTimeStamps.default
          date={new Date(new Date().getTime() - 10 * 60000)}
          currentDT={new Date()}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"hours-ago"}>
        <ActivityTimeStamps.default
          date={new Date().getTime() - 2 * 60 * 60 * 1000}
          currentDT={new Date()}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"days-ago"}>
        <ActivityTimeStamps.default
          date={new Date().getTime() - 72 * 60 * 60 * 1000}
          currentDT={new Date()}
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}
