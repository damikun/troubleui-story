import clsx from "clsx";
import React from "react";

const FLEX_VARIANT = {
  col: "flex-col space-y-5",
  row: "flex-row space-x-5 flex-wrap",
};

type StoryContainerProps = {
  name: string;
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof FLEX_VARIANT;
};
export default function StoryContainer({
  name,
  children,
  className,
  variant = "row",
}: StoryContainerProps) {
  const Var = FLEX_VARIANT[variant] || FLEX_VARIANT.row;
  return (
    <div className="flex min-h-40 pt-5 justify-center">
      <div className="flex w-full flex-col max-w-7xl space-y-5 pb-5 px-3">
        <h1 className="font-bold m-0 tracking-wide text-2xl">{name}</h1>

        <div className={clsx("flex", Var, className)}>{children}</div>
      </div>
    </div>
  );
}
