import React from "react";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import { useToast } from "../UIComponents/Toast/ToastProvider";
import * as Toasts from "../UIComponents/Toast/ToastProvider";
import ToastProvider from "../UIComponents/Toast/ToastProvider";
import StayledButton from "../UIComponents/Buttons/StayledButton";
/**
 * Toast props
 */
export type ToastProps = Toasts.ToastProviderProps;

/**
 * Toast component
 */
export const Toast: React.FC<Toasts.ToastProviderProps> = ({ ...props }) => {
  return (
    <ToastProvider {...props}>
      <StoryBody>
        <StoryHeader name={"Toast"} example={<ToastExample />} />
      </StoryBody>

      <VariantsSection />
    </ToastProvider>
  );
};

function ToastExample() {
  const toast = useToast();
  return (
    <StayledButton
      variant="secondaryblue"
      size="normal"
      onClick={() => toast?.pushInfo("Some example message")}
    >
      👆 Show
    </StayledButton>
  );
}

function VariantsSection() {
  const toast = useToast();
  return (
    <StoryContainer variant="row" name={"Variant"}>
      <StoryFlexBox label={"info"}>
        <StayledButton
          variant="secondarygreen"
          size="normal"
          onClick={() => toast?.pushSuccess("Some success message")}
        >
          👆 Success
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"info"}>
        <StayledButton
          variant="secondaryblue"
          size="normal"
          onClick={() => toast?.pushInfo("Some info message")}
        >
          👆 Info
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"warning"}>
        <StayledButton
          variant="secondaryyellow"
          size="normal"
          onClick={() => toast?.pushWarning("Some warning message")}
        >
          👆 Warning
        </StayledButton>
      </StoryFlexBox>
      <StoryFlexBox label={"error"}>
        <StayledButton
          variant="error"
          size="normal"
          onClick={() => toast?.pushError("Some error message")}
        >
          👆 Error
        </StayledButton>
      </StoryFlexBox>
    </StoryContainer>
  );
}
