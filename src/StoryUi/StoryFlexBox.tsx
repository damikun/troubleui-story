import clsx from "clsx";
import React from "react";

const VARIANT = {
  col: "flex flex-col space-y-2",
  row: "flex flex-row space-x-2 flex-no-wrap",
};

type StoryFlexBoxProps = {
  label: string;
  variant?: keyof typeof VARIANT;
  children?: React.ReactNode;
  labelwidth?: "w-auto" | "w-10" | "w-16" | "w-20" | "w-24" | "w-32";
};

export default function StoryFlexBox({
  label,
  children,
  labelwidth = "w-auto",
  variant = "col",
}: StoryFlexBoxProps) {
  const Var = VARIANT[variant] || VARIANT.row;
  return (
    <div className={Var}>
      {label && (
        <h1
          className={clsx(
            "font-semibold m-0 tracking-wide text-sm",
            "text-gray-400 italic",
            labelwidth
          )}
        >{`"${label}"`}</h1>
      )}

      <div className="flex flex-row space-x-2">{children}</div>
    </div>
  );
}
