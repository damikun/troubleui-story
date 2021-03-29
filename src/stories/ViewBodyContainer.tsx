import React from "react";
import * as ViewBodyContainers from "../UIComponents/BodyContainer/BodyContainer";
import "../CSS/App.css";

/**
 * Avatar props
 */
export type ViewBodyContainerProps = ViewBodyContainers.ViewBodyContainerProps;

/**
 * Avatar component
 */
export const ViewBodyContainer: React.FC<ViewBodyContainers.ViewBodyContainerProps> = ({
  ...props
}) => {
  return (
    <ViewBodyContainers.default {...props}>
      {props.children}
    </ViewBodyContainers.default>
  );
};
