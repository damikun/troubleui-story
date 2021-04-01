import React, { useState } from "react";
import * as Selects from "../UIComponents/Select/Select";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import SelectOption from "../UIComponents/Select/SelectOption";
import Selected from "../UIComponents/Select/Selected";
import UserSelectOption from "../UIComponents/Select/SelectHelpers/UserSelectOption";
import UserSelected from "../UIComponents/Select/SelectHelpers/UserSelected";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const DummyPremissions = ["create", "edit", "update", "delete"];

/**
 * Select props
 */
export type SelectProps = Selects.SelectProps;

/**
 * Select component
 */
export const Select: React.FC<Selects.SelectProps> = ({ ...props }) => {
  const [search, setSearch] = useState("");

  const [state, setstate] = useState(["create", "edit"]);

  const handleRemoveItem = (item: any) => {
    const index = state.indexOf(item);
    if (index !== -1) {
      const temp = [...state];
      temp.splice(index, 1);
      setstate(temp);
    }
  };

  const handleAddItem = (item: any) => {
    const testExist = state.indexOf(item);

    if (testExist === -1) {
      const temp = [...state];
      temp.push(item);
      setstate(temp);
    }
  };

  return (
    <StoryBody>
      <StoryHeader
        name={"Select"}
        example={
          <div className={"flex justify-start min-w-32"}>
            <Selects.default {...props} onDebouncingChange={setSearch}>
              {DummyPremissions?.filter(
                (s) => state?.find((e) => e === s) !== s
              )
                .filter((e) => e?.includes(search))
                .map((enity, index) => {
                  return (
                    <SelectOption
                      key={index}
                      id={enity}
                      name={enity}
                      className="capitalize"
                      OnClick={handleAddItem}
                    >
                      {enity}
                    </SelectOption>
                  );
                })}

              {state?.map((enity, index) => {
                return (
                  <Selected
                    className="mt-1 mr-2 capitalize"
                    deletable={!props.controldisabled}
                    key={enity}
                    id={enity}
                    name={`${enity}`}
                    OnDelete={handleRemoveItem}
                  />
                );
              })}
            </Selects.default>
          </div>
        }
      />
      <UsersExample />
      <div className="h-screen"></div>
    </StoryBody>
  );
};

const DummyUsers = [
  { id: 1, firstname: "John", lastname: "Smith" },
  { id: 2, firstname: "Tod", lastname: "Bear" },
  { id: 3, firstname: "Thomas", lastname: "Hubert" },
  { id: 4, firstname: "Peater", lastname: "Marson" },
];

type userItem = {
  id: number;
  firstname: string;
  lastname: string;
};

function UsersExample() {
  const [search, setSearch] = useState("");

  const [state, setstate] = useState([
    { id: 1, firstname: "John", lastname: "Smith" },
    { id: 2, firstname: "Tod", lastname: "Bear" },
    ,
  ]);

  const handleRemoveItem = (deleteid: number | string) => {
    if (typeof deleteid == "number") {
      const index = state.findIndex((e) => e?.id === deleteid);

      if (index !== -1) {
        const temp = [...state];
        temp.splice(index, 1);
        setstate(temp);
      }
    }
  };

  const handleAddItem = (
    id: string | number | null | undefined,
    name: string | null | undefined
  ) => {
    if (typeof id == "number") {
      const index = state.findIndex((e) => e?.id === id);

      if (index === -1) {
        const item = DummyUsers.find((e) => e.id === id);

        const temp = [...state];
        temp.push(item);
        setstate(temp);
      }
    }
  };

  return (
    <StoryContainer name={"Example users"}>
      <StoryFlexBox>
        <div className={"flex justify-start min-w-32"}>
          <Selects.default
            icon={faPlus}
            debouncingTimeout={400}
            controldisabled={false}
            searchPlaceholder={"add"}
            border
            searchable
            className={"flex w-full bg-white"}
            onDebouncingChange={setSearch}
          >
            {DummyUsers?.filter(
              (s) => state?.find((e) => e?.id === s?.id) === undefined
            )
              .filter(
                (e) =>
                  e?.firstname?.includes(search) ||
                  e?.lastname?.includes(search)
              )
              .map((enity, index) => {
                return (
                  enity && (
                    <SelectOption
                      key={enity.id}
                      id={enity.id}
                      className="capitalize"
                      OnClick={handleAddItem}
                    >
                      <UserSelectOption
                        firstName={enity?.firstname}
                        lastName={enity?.lastname}
                        id={enity?.id}
                        avatarName={undefined}
                      />
                    </SelectOption>
                  )
                );
              })}

            {state?.map((enity, index) => {
              return (
                enity && (
                  <Selected
                    key={enity?.id}
                    id={enity?.id}
                    name={`${enity?.firstname} ${enity?.lastname}`}
                  >
                    <UserSelected
                      deletable={true}
                      className="bg-gray-100 mr-2 mt-1"
                      firstName={enity?.firstname}
                      lastName={enity?.lastname}
                      id={enity?.id}
                      avatarName={undefined}
                      handleRemove={handleRemoveItem}
                    />
                  </Selected>
                )
              );
            })}
          </Selects.default>
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
