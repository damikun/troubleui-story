import React, { useCallback, useState } from "react";
import * as EditableInputs from "../UIComponents/Inputs/EditableInput";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

/**
 * EditableInput props
 */
export type EditableInputProps = EditableInputs.EditableInputProps;

/**
 * EditableInput component
 */
export const EditableInput: React.FC<EditableInputs.EditableInputProps> = ({
  ...props
}) => {
  const [state, setstate] = useState(false);

  const [stateValue, setStateValue] = useState("Some text");

  const handleCommit = useCallback((value: string) => {
    setStateValue(value);
    setstate(true);

    start();
  }, []);

  var myTimer;

  function start() {
    myTimer = setInterval(myClock, 1000);

    function myClock() {
      setstate(false);
      end();
    }
  }

  function end() {
    clearInterval(myTimer);
  }

  return (
    <StoryBody>
      <StoryHeader
        name={"EditableInput"}
        example={
          <div className="flex items-center w-48">
            <EditableInputs.default
              {...props}
              name={stateValue}
              inFlight={props.inFlight || state}
              onCommit={handleCommit}
            />
          </div>
        }
      />
      <TypeSection />
      <FloatSection />
    </StoryBody>
  );
};

function TypeSection() {
  return (
    <StoryContainer variant="row" name={"Type"}>
      <StoryFlexBox label={"normal"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            border
            name={"Some text"}
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>

      <StoryFlexBox label={"disabled"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            border
            name={"Some text"}
            disabled
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>

      <StoryFlexBox label={"disabled"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            border
            name={"Some text"}
            inFlight
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>

      <StoryFlexBox label={"no-border"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            leftPadding={15}
            name={"Some text"}
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function FloatSection() {
  return (
    <StoryContainer variant="row" name={"Float"}>
      <StoryFlexBox label={"left"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            border
            inFlight
            float="left"
            name={"Some text"}
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>

      <StoryFlexBox label={"right"}>
        <div className="flex items-center w-48">
          <EditableInputs.default
            border
            inFlight
            name={"Some text"}
            float="right"
            onCommit={() => {}}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
