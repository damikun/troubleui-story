import React from "react";

type StoryBodyProps = {
  children: React.ReactNode;
};
export default function StoryBody({ children }: StoryBodyProps) {
  return (
    <div className="flex w-full h-full flex-col bg-white justify-center">
      {children}
    </div>
  );
}
