import React from "react";
import * as Avatars from "../UIComponents/Avatar/Avatar";
import "../CSS/App.css";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import StoryContainer from "../StoryUi/StoryContainer";
import StoryFlexBox from "../StoryUi/StoryFlexBox";

const src = "https://avatars.githubusercontent.com/u/54806834?v=4";
/**
 * Avatar props
 */
export type AvatarProps = Avatars.AvatarProps;

/**
 * Avatar component
 */
export const Avatar: React.FC<Avatars.AvatarProps> = ({ ...props }) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"Avatar"}
        example={<Avatars.default {...props}>{props.children}</Avatars.default>}
      />

      <VariantSection />
      <SizeSection />
      <InfoSection />
      <TypeSection />
      <GroupSection />
    </StoryBody>
  );
};

function VariantSection() {
  return (
    <StoryContainer name={"Variant"}>
      <StoryFlexBox label={"square"}>
        <Avatars.default variant="square" src={src} size="w-12 h-12" />
      </StoryFlexBox>
      <StoryFlexBox label={"rounded"}>
        <Avatars.default variant="rounded" src={src} size="w-12 h-12" />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function SizeSection() {
  return (
    <StoryContainer name={"Size"}>
      <StoryFlexBox label={"5"}>
        <Avatars.default variant="rounded" src={src} size="w-5 h-5" />
      </StoryFlexBox>
      <StoryFlexBox label={"6"}>
        <Avatars.default variant="rounded" src={src} size="w-6 h-6" />
      </StoryFlexBox>
      <StoryFlexBox label={"8"}>
        <Avatars.default variant="rounded" src={src} size="w-8 h-8" />
      </StoryFlexBox>
      <StoryFlexBox label={"10"}>
        <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
      </StoryFlexBox>
      <StoryFlexBox label={"12"}>
        <Avatars.default variant="rounded" src={src} size="w-12 h-12" />
      </StoryFlexBox>
      <StoryFlexBox label={"16"}>
        <Avatars.default variant="rounded" src={src} size="w-16 h-16" />
      </StoryFlexBox>
      <StoryFlexBox label={"20"}>
        <Avatars.default variant="rounded" src={src} size="w-20 h-20" />
      </StoryFlexBox>
      <StoryFlexBox label={"32"}>
        <Avatars.default variant="rounded" src={src} size="w-32 h-32" />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function InfoSection() {
  return (
    <StoryContainer name={"Info"}>
      <StoryFlexBox label={"role1"}>
        <Avatars.default
          variant="rounded"
          info="Admin"
          infoVariant="secondaryblue"
          src={src}
          size="w-16 h-16"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"role2"}>
        <Avatars.default
          variant="rounded"
          info="User"
          infoVariant="secondarygreen"
          src={src}
          size="w-16 h-16"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"role3"}>
        <Avatars.default
          variant="rounded"
          info="Superuser"
          infoVariant="secondaryellow"
          src={src}
          size="w-16 h-16"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"role4"}>
        <Avatars.default
          variant="rounded"
          info="Service"
          infoVariant="secondarygray"
          src={src}
          size="w-16 h-16"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"name"}>
        <Avatars.default
          variant="rounded"
          info="Dalibor"
          infoVariant="secondarydark"
          src={src}
          size="w-16 h-16"
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function TypeSection() {
  return (
    <StoryContainer name={"Type"}>
      <StoryFlexBox label={"label"}>
        <Avatars.default
          variant="rounded"
          label="DK"
          src={undefined}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"classic"}>
        <Avatars.default
          variant="rounded"
          label="DK"
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"effect"}>
        <Avatars.default
          variant="rounded"
          hovereffect
          label="DK"
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"online"}>
        <Avatars.default
          variant="rounded"
          showStatus
          label="DK"
          status={true}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"online"}>
        <Avatars.default
          variant="square"
          showStatus
          label="DK"
          status={true}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"offline"}>
        <Avatars.default
          variant="rounded"
          showStatus
          label="DK"
          status={false}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"info"}>
        <Avatars.default
          variant="rounded"
          label="DK"
          info={"Admin"}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"info online"}>
        <Avatars.default
          variant="rounded"
          info={"Admin"}
          label="DK"
          showStatus
          status={true}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
      <StoryFlexBox label={"info offline"}>
        <Avatars.default
          variant="rounded"
          info={"Admin"}
          label="DK"
          showStatus
          status={false}
          src={src}
          size="w-12 h-12"
        />
      </StoryFlexBox>
    </StoryContainer>
  );
}

function GroupSection() {
  return (
    <StoryContainer name={"Grouping"}>
      <div className="flex -space-x-3 froup">
        <StoryFlexBox>
          <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
        </StoryFlexBox>
        <StoryFlexBox>
          <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
        </StoryFlexBox>
        <StoryFlexBox>
          <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
        </StoryFlexBox>
        <StoryFlexBox>
          <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
        </StoryFlexBox>
        <StoryFlexBox>
          <Avatars.default variant="rounded" src={src} size="w-10 h-10" />
        </StoryFlexBox>
      </div>
    </StoryContainer>
  );
}
