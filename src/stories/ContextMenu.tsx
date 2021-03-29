import React, { useRef } from "react";
import * as ContextMenus from "../UIComponents/ContextMenu/ContextMenu";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import ContextMenuItem from "../UIComponents/ContextMenu/ContextMenuItem";
import { faEye, faMouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
/**
 * ContextMenu props
 */
export type ContextMenuProps = ContextMenus.ContextMenuProps;

/**
 * ContextMenu component
 */
export const ContextMenu: React.FC<ContextMenus.ContextMenuProps> = ({
  ...props
}) => {
  const itemref = useRef<HTMLDivElement>(null);
  return (
    <StoryBody>
      <StoryHeader
        name={"ContextMenu"}
        example={
          <>
            <ContextMenus.default parrentref={itemref}>
              <ContextMenuItem
                icon={faEye}
                onClick={() => {}}
                name="Open detail"
              />
              <ContextMenuItem
                icon={faTrash}
                onClick={() => {}}
                name="Delete user"
              />
            </ContextMenus.default>
            <div
              ref={itemref}
              className={clsx(
                "flex flex-wrap px-2 break-words h-10 space-x-2",
                "rounded-md shadow-sm bg-white items-center cursor-pointer"
              )}
            >
              <span className="font-semibold">Right click</span>
              <span>
                <FontAwesomeIcon
                  className={clsx(
                    "align-content-center align-content-center",
                    "mx-auto my-auto justify-center align-middle "
                  )}
                  icon={faMouse}
                />
              </span>
            </div>
          </>
        }
      />
    </StoryBody>
  );
};
