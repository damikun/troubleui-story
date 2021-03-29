import React from "react";
import * as Spinners from "../UIComponents/Spinner/Spinner";
import "../CSS/App.css";

/**
 * Avatar props
 */
export type SpinnerProps = Spinners.StyledSpinnerProps;

/**
 * Avatar component
 */
export const Spinner: React.FC<Spinners.StyledSpinnerProps> = ({
  ...props
}) => {
  return (
    <Spinners.default {...props} />
  );
};
