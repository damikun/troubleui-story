import React, { useState } from "react";
import * as DebouncingInputs from "../UIComponents/Inputs/DebouncingInput";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import { faPen, faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * Avatar props
 */
export type DebouncingInputProps = DebouncingInputs.DebouncingInputProps;

/**
 * Avatar component
 */
export const DebouncingInput: React.FC<DebouncingInputs.DebouncingInputProps> = ({
  ...props
}) => {
  const [state, setstate] = useState("");
  return (
    <StoryBody>
      <StoryHeader
        name={"DebouncingInput"}
        example={
          <div className="flex items-center">
            <div className="mr-2">
              <DebouncingInputs.default
                {...props}
                value={state}
                onDebouncingChange={setstate}
              />
            </div>

            <div className="flex flex-wrap space-x-2">
              <div className="flex font-semibold">Test-Debounc:</div>
              <div>{state}</div>
            </div>
          </div>
        }
      />

      <HeightSection />
      <VariantSection />
      <IconSection />
      <InfoSection />
    </StoryBody>
  );
};

function HeightSection() {
  const [state, setstate] = useState("");

  return (
    <StoryContainer variant="row" name={"Size"}>
      <StoryFlexBox label={"auto"}>
        <DebouncingInputs.default
          value={state}
          height="auto"
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>

      <StoryFlexBox label={"small"}>
        <DebouncingInputs.default
          value={state}
          height="small"
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>

      <StoryFlexBox label={"normal"}>
        <DebouncingInputs.default
          value={state}
          height="normal"
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>

      <StoryFlexBox label={"medium"}>
        <DebouncingInputs.default
          value={state}
          height="medium"
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>

      <StoryFlexBox label={"large"}>
        <DebouncingInputs.default
          value={state}
          height="large"
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function VariantSection() {
  const [state, setstate] = useState("");

  return (
    <StoryContainer variant="row" name={"Variants"}>
      <StoryFlexBox label={"primaryblue"}>
        <DebouncingInputs.default
          value={state}
          icon={faSearch}
          placeholder="Search"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"primarygray"}>
        <DebouncingInputs.default
          value={state}
          icon={faSearch}
          placeholder="Search"
          variant="primarygray"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"primarygreen"}>
        <DebouncingInputs.default
          value={state}
          icon={faSearch}
          placeholder="Search"
          variant="primarygreen"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"primaryyellow"}>
        <DebouncingInputs.default
          value={state}
          icon={faSearch}
          placeholder="Search"
          variant="primaryyellow"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
      <StoryFlexBox label={"clean"}>
        <DebouncingInputs.default
          value={state}
          icon={faSearch}
          placeholder="Search"
          variant="clean"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function IconSection() {
  const [state, setstate] = useState("");

  return (
    <StoryContainer variant="row" name={"Icon"}>
      <StoryFlexBox label={"no-icon"}>
        <DebouncingInputs.default
          value={state}
          icon={undefined}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>

      <StoryFlexBox label={"icon"}>
        <DebouncingInputs.default
          value={state}
          icon={faPen}
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function InfoSection() {
  const [state, setstate] = useState("");

  return (
    <StoryContainer variant="row" name={"label"}>
      <StoryFlexBox label={"no-icon"}>
        <DebouncingInputs.default
          value={state}
          icon={undefined}
          label="Some label"
          placeholder="Type"
          variant="primaryblue"
          debouncingTimeout={500}
          onDebouncingChange={setstate}
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}
