import React from "react";
import * as RouterTabs from "../UIComponents/RouterTab/RouterTabList";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import { MemoryRouter } from "react-router-dom";
import clsx from "clsx";

export const SCHEDULER_TABS = [
  {
    label: "Failed",
    path: ``,
  },
  {
    label: "Succeded",
    path: `Succeded`,
  },
  {
    label: "Recruing",
    path: `Recruing`,
  },
] as RouterTabs.RouterTabItemType[];

/**
 * RouterTab props
 */
export type RouterTabProps = RouterTabs.RouterTabListProps;

/**
 * RouterTab component
 */
export const RouterTab: React.FC<RouterTabs.RouterTabListProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"RouterTab"}
        example={
          <MemoryRouter initialEntries={["/"]}>
            <div className="flex">
              <RouterTabs.default
                tabWidth="w-16 md:w-24"
                defaultIndex={0}
                Tabs={SCHEDULER_TABS}
              />
            </div>
          </MemoryRouter>
        }
      />
      <IsPendingSection />
    </StoryBody>
  );
};

function IsPendingSection() {
  return (
    <StoryContainer name={"Transition"}>
      <StoryFlexBox label={"normal"}>
        <div className="flex">
          <div
            tabIndex={0}
            className={clsx(
              "flex justify-center cursor-pointer",
              "flex-no-wrap text-center font-normal ",
              "items-end pb-1 select-none p-0 md:p-1",
              "transition duration-200 focus:outline-none outline-none",
              "min-w-24 w-24"
            )}
          >
            Failed
          </div>
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"is-pending"}>
        <div className="flex">
          <div
            tabIndex={0}
            className={clsx(
              "flex justify-center cursor-pointer",
              "flex-no-wrap text-center font-normal ",
              "items-end pb-1 select-none p-0 md:p-1",
              "transition duration-200 focus:outline-none outline-none",
              "min-w-24 w-24 animate-pulse border-b-2 border-blue-500 font-bold px-2"
            )}
          >
            Failed
          </div>
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"hover"}>
        <div className="flex">
          <div
            tabIndex={0}
            className={clsx(
              "flex justify-center cursor-pointer",
              "flex-no-wrap text-center font-normal ",
              "items-end pb-1 select-none p-0 md:p-1",
              "transition duration-200 focus:outline-none outline-none",
              "min-w-24 w-24 border-b-2 border-transparent border-gray-300"
            )}
          >
            Failed
          </div>
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
