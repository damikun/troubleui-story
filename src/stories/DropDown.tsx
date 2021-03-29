import React, { useCallback, useMemo, useState } from "react";
import * as DropDowns from "../UIComponents/DropDownMenu/StayledDropDown";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

const ProjectRoles = ["lead", "manage", "user", "viewer"];

/**
 * DropDown props
 */
export type DropDownProps = DropDowns.StayledDropDownMenuProps;

/**
 * DropDown component
 */
export const DropDown: React.FC<DropDowns.StayledDropDownMenuProps> = ({
  ...props
}) => {
  const [role, setRole] = useState("manage");

  const projectUserRoles = useMemo(
    () =>
      ProjectRoles.filter((e) => e !== role).map((enity) => {
        return { value: enity, content: undefined, icon: undefined };
      }),
    [ProjectRoles, role]
  );

  const projectUserRolesSelected = useMemo(() => {
    return {
      value: role,
      content: undefined,
      style: role && GetProjectRoleColor(role),
    };
  }, [role]);

  const handleRoleUpdate = useCallback(
    (role: string) => {
      setRole(role);
    },
    [setRole]
  );

  return (
    <StoryBody>
      <StoryHeader
        name={"DropDown"}
        example={
          <div className={"flex justify-start"}>
            <DropDowns.default
              {...props}
              data={projectUserRoles}
              selected={projectUserRolesSelected}
              onSelect={handleRoleUpdate}
            >
              {props.children}
            </DropDowns.default>
          </div>
        }
      />
    </StoryBody>
  );
};

export function GetProjectRoleColor(value: string) {
  switch (value) {
    case "viewer":
      return "text-white bg-purple-400 hover:bg-purple-500 focus:ring-purple-500 font-semibold ring-transparent focus:ring-2 border-transparent border-2 focus:border-white";
    case "lead":
      return "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 font-semibold ring-transparent focus:ring-2 border-transparent border-2 focus:border-white";
    case "manage":
      return "text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-2 font-semibold ring-transparent border-transparent border-2 focus:border-white";
    case "user":
      return "text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-gray-300 font-semibold focus:ring-2 ring-transparent border-transparent border-2 focus:border-white";
    default:
      return " ";
  }
}
