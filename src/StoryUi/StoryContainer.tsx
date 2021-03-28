import clsx from "clsx";
import React from "react";

type StoryContainerProps = {
  name: string;
  children?: React.ReactNode;
  className?:string
};
export default function StoryContainer({ name, children,className }: StoryContainerProps) {
  return (
    <div className="flex min-h-40 pt-5 justify-center">
      <div className="flex w-full flex-col max-w-7xl space-y-5 pb-5 px-3">
        <h1 className="font-bold m-0 tracking-wide text-2xl">{name}</h1>

        <div className={clsx("flex flex-row space-x-5",className)}>{children}</div>
      </div>
    </div>
  );
}
