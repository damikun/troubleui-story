import React, { useCallback, useState } from "react";
import * as Selects from "../UIComponents/Select/Select";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import SelectOption from "../UIComponents/Select/SelectOption";
import Selected from "../UIComponents/Select/Selected";

const DummyPremissions = ["Create", "Edit", "Update", "Delete"];

/**
 * Select props
 */
export type SelectProps = Selects.SelectProps;

/**
 * Select component
 */
export const Select: React.FC<Selects.SelectProps> = ({ ...props }) => {
  const [search, setSearch] = useState("");

  const [state, setstate] = useState(["Create", "Edit"]);

  const handleAdd = useCallback(() => {}, []);

  return (
    <StoryBody>
      <StoryHeader
        name={"Select"}
        example={
          <div className={"flex justify-start"}>
            <Selects.default {...props} onDebouncingChange={setSearch}>
              {DummyPremissions?.map((enity, index) => {
                return (
                  <SelectOption
                    key={index}
                    id={enity}
                    name={enity}
                    OnClick={handleAdd}
                  >
                    {enity}
                  </SelectOption>
                );
              })}

              {state?.map((enity, index) => {
                return (
                  <Selected key={enity} id={enity} OnDelete={() => {}}>
                    {enity}
                  </Selected>
                );
              })}
            </Selects.default>
          </div>
        }
      />
    </StoryBody>
  );
};
