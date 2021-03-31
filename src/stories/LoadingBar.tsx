import React, { useCallback, useEffect, useState } from "react";
import * as LoadingBars from "../UIComponents/LoadingBar/LoadingBar";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import Button from "../UIComponents/Buttons/StayledButton";
import { faSync } from "@fortawesome/free-solid-svg-icons";

/**
 * LoadingBar props
 */
export type LoadingBarProps = LoadingBars.LoadingBarProps;

/**
 * LoadingBar component
 */
export const LoadingBar: React.FC<LoadingBars.LoadingBarProps> = ({
  ...props
}) => {
  const [state, setstate] = useState(false);

  useEffect(() => {
    setstate(true);
  }, []);

  const handleReset = useCallback(() => {
    setstate(false);
    if (state) {
      setTimeout(function () {
        setstate(true);
      }, 200);
    }
  }, [setTimeout, state]);

  return (
    <StoryBody>
      <StoryHeader
        name={"LoadingBar"}
        example={
          <div className="flex w-full flex-row space-x-5 items-center">
            <div>
              <Button
                onClick={handleReset}
                variant="primarygray"
                iconLeft={faSync}
              >
                Reset
              </Button>
            </div>
            <div className="flex-1">
              <LoadingBars.default {...props} isloading={state} />
            </div>
          </div>
        }
      />
      <SizeSection />
      <ColorSection />
    </StoryBody>
  );
};

function SizeSection() {
  const [state, setstate] = useState(true);

  useEffect(() => {
    setstate(true);
  }, []);

  const handleReset = useCallback(() => {
    setstate(false);
    if (state) {
      setTimeout(function () {
        setstate(true);
      }, 200);
    }
  }, [setTimeout, state]);

  return (
    <StoryContainer variant="col" name={"Size"}>
      <div>
        <Button onClick={handleReset} variant="primarygray" iconLeft={faSync}>
          Reset
        </Button>
      </div>
      <StoryFlexBox variant="col" label={"thin"}>
        <div className="flex-1">
          <LoadingBars.default color="gray" size="thin" isloading={state} />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"small"}>
        <div className="flex-1">
          <LoadingBars.default color="gray" size="small" isloading={state} />
        </div>
      </StoryFlexBox>
      <StoryFlexBox variant="col" label={"medium"}>
        <div className="flex-1">
          <LoadingBars.default color="gray" size="medium" isloading={state} />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}

function ColorSection() {
  const [state, setstate] = useState(false);

  useEffect(() => {
    setstate(true);
  }, []);

  const handleReset = useCallback(() => {
    setstate(false);
    if (state) {
      setTimeout(function () {
        setstate(true);
      }, 200);
    }
  }, [setTimeout, state]);

  return (
    <StoryContainer variant="col" name={"Variants"}>
      <div>
        <Button onClick={handleReset} variant="primarygray" iconLeft={faSync}>
          Reset
        </Button>
      </div>
      <StoryFlexBox label={"gray"}>
        <div className="flex-1">
          <LoadingBars.default color="gray" isloading={state} />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"graylight"}>
        <div className="flex-1">
          <LoadingBars.default color="graylight" isloading={state} />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"blue"}>
        <div className="flex-1">
          <LoadingBars.default color="blue" isloading={state} />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"bluelignt"}>
        <div className="flex-1">
          <LoadingBars.default color="bluelignt" isloading={state} />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
