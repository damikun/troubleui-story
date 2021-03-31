import React, { useState } from "react";
import * as FileDrops from "../UIComponents/FileDragDrop/FileDragDrop";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";
import clsx from "clsx";

/**
 * FileDrop props
 */
export type FileDropProps = FileDrops.FileDragDropProps;

/**
 * FileDrop component
 */
export const FileDrop: React.FC<FileDrops.FileDragDropProps> = ({
  ...props
}) => {
  const [state, setState] = useState("");
  return (
    <StoryBody>
      <StoryHeader
        name={"FileDrop"}
        example={
          <div
            className={clsx(
              "flex justify-start border-2 border-dashed border-opacity-70 px-5 py-3",
              "hover:bg-white transition duration-150 bg-opacity-50"
            )}
          >
            <FileDrops.default
              {...props}
              onSuccess={(token, name, response) => {
                setState(token);
              }}
              onError={(type, message, object) => {
                // toast?.pushError(message);

                if (type === "Exception") {
                  console.log(object);
                }
                setState("");
              }}
              multiple={false}
            />
          </div>
        }
      />
      <SizeSection />
    </StoryBody>
  );
};

function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"standard"}>
        <div
          className={clsx(
            "flex justify-start border-2 border-dashed border-opacity-70 px-5 py-3",
            "hover:bg-white transition duration-150 bg-opacity-50"
          )}
        >
          <FileDrops.default
            disabled={false}
            accept="image/png"
            variant="big"
            selectOnClick
            api_url="https://localhost:5001/api/Data/UploadFile"
            onSuccess={(token, name, response) => {
              setState(token);
            }}
            onError={(type, message, object) => {
              // toast?.pushError(message);

              if (type === "Exception") {
                console.log(object);
              }
              setState("");
            }}
            multiple={false}
          />
        </div>
      </StoryFlexBox>
      <StoryFlexBox label={"small"}>
        <div
          className={clsx(
            "flex justify-start border-2 border-dashed border-opacity-70 px-5 py-3",
            "hover:bg-white transition duration-150 bg-opacity-50"
          )}
        >
          <FileDrops.default
            disabled={false}
            accept="image/png"
            variant="small"
            selectOnClick
            api_url="https://localhost:5001/api/Data/UploadFile"
            onSuccess={(token, name, response) => {
              setState(token);
            }}
            onError={(type, message, object) => {
              // toast?.pushError(message);

              if (type === "Exception") {
                console.log(object);
              }
              setState("");
            }}
            multiple={false}
          />
        </div>
      </StoryFlexBox>
    </StoryContainer>
  );
}
