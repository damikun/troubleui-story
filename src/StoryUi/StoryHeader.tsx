import React from "react";

type StoryHeaderProps = {
  name: string;
  example?: React.ReactNode;
};
export default function StoryHeader({ name, example }: StoryHeaderProps) {
  return (
    <div className="flex min-h-48 pt-8 bg-gray-50 border-b justify-center">
      <div className="flex w-full flex-col max-w-7xl space-y-5 pb-5 px-3">
        <h1 className="font-bold m-0 tracking-wide text-4xl">{name}</h1>

        <div className="flex justify-start">{example}</div>
      </div>
    </div>
  );
}
