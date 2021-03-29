import React, { useState } from "react";
import * as UserPromts from "../UIComponents/UserPromt/UserPromt";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StayledButton from "../UIComponents/Buttons/StayledButton";
import CapitalizedText from "../UIComponents/CapitalizedText/CapitalizedText";
import Modal from "../UIComponents/Modal/Modal";

/**
 * UserPromt props
 */
export type UserPromtProps = UserPromts.UserPromtProps;

/**
 * UserPromt component
 */
export const UserPromt: React.FC<UserPromts.UserPromtProps> = ({
  ...props
}) => {
  const [state, setstate] = useState(false);
  return (
    <StoryBody>
      <StoryHeader
        name={"UserPromt"}
        example={
          <>
            <Modal
              position="top"
              isOpen={state}
              OnClose={() => setstate(false)}
              OnConfirm={() => setstate(false)}
              component={
                <UserPromts.default
                  {...props}
                  className="md:max-w-lg"
                  content={
                    <div className="flex flex-col space-y-4 w-full max-w-full md:w-md static">
                      <div className="flex flex-col h-full my-auto">
                        <CapitalizedText>{props.content}</CapitalizedText>
                      </div>
                    </div>
                  }
                />
              }
            />
            <StayledButton
              onClick={() => setstate(true)}
              variant="secondaryblue"
              size="normal"
            >
              Open promt
            </StayledButton>
          </>
        }
      />

      <VariantsInfoPrimary />
      <VariantsInfoSeconadry />
      <VariantsError />
      <Processing />
    </StoryBody>
  );
};

function VariantsInfoPrimary() {
  return (
    <StoryContainer variant="col" name={"Info primary"}>
      <UserPromts.default
        className="md:max-w-lg"
        buttonTitle={"Confirm"}
        promt_variant="secondaryblue"
        onConfirm={() => {}}
        isLoading={false}
        title="Action title"
        content={
          <div className="flex flex-col space-y-4 w-full max-w-full md:w-md static">
            <div className="flex flex-col h-full my-auto">
              <CapitalizedText>
                {"Place for any user message or content"}
              </CapitalizedText>
            </div>
          </div>
        }
      />
    </StoryContainer>
  );
}
function VariantsInfoSeconadry() {
  return (
    <StoryContainer variant="col" name={"Info secondary"}>
      <UserPromts.default
        className="md:max-w-lg"
        buttonTitle={"Confirm"}
        promt_variant="primaryblue"
        onConfirm={() => {}}
        isLoading={false}
        title="Action title"
        content={
          <div className="flex flex-col space-y-4 w-full max-w-full md:w-md static">
            <div className="flex flex-col h-full my-auto">
              <CapitalizedText>
                {"Place for any user message or content"}
              </CapitalizedText>
            </div>
          </div>
        }
      />
    </StoryContainer>
  );
}

function VariantsError() {
  return (
    <StoryContainer variant="col" name={"Delete"}>
      <UserPromts.default
        className="md:max-w-lg"
        buttonTitle={"Delete"}
        promt_variant="error"
        onConfirm={() => {}}
        isLoading={false}
        title="Action title"
        content={
          <div className="flex flex-col space-y-4 w-full max-w-full md:w-md static">
            <div className="flex flex-col h-full my-auto">
              <CapitalizedText>
                {"Place for any user message or content"}
              </CapitalizedText>
            </div>
          </div>
        }
      />
    </StoryContainer>
  );
}

function Processing() {
  return (
    <StoryContainer variant="col" name={"Processing"}>
      <UserPromts.default
        className="md:max-w-lg"
        buttonTitle={"Confirm"}
        promt_variant="secondaryblue"
        onConfirm={() => {}}
        isLoading={true}
        title="Action title"
        content={
          <div className="flex flex-col space-y-4 w-full max-w-full md:w-md static">
            <div className="flex flex-col h-full my-auto">
              <CapitalizedText>
                {"Place for any user message or content"}
              </CapitalizedText>
            </div>
          </div>
        }
      />
    </StoryContainer>
  );
}
