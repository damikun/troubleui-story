import React from "react";
import * as ContainerSpinners from "../UIComponents/Spinner/ContainerSpinner";
import "../CSS/App.css";

/**
 * Avatar props
 */
export type ContainerSpinnerProps = ContainerSpinners.ContainerSpinnerProps;

/**
 * Avatar component
 */
export const ContainerSpinner: React.FC<ContainerSpinners.ContainerSpinnerProps> = ({
  ...props
}) => {
  return (
    <ContainerSpinners.default {...props} />
  );
};
