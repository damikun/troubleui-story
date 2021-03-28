import React from "react";

const VARIANT = {
  col: "flex flex-col space-y-2",
  row: "flex flex-row space-x-2 flex-no-wrap",
};

type StoryFlexBoxProps = {
  label: string;
  variant?: keyof typeof VARIANT;
  children?: React.ReactNode;
};
export default function StoryFlexBox({
  label,
  children,
  variant = "col",
}: StoryFlexBoxProps) {
  const Var = VARIANT[variant] || VARIANT.row;
  return (
    <div className={Var}>
      <h1 className="font-semibold m-0 tracking-wide text-sm text-gray-400 italic">{`"${label}"`}</h1>

      <div className="flex flex-row space-x-2">{children}</div>
    </div>
  );
}
