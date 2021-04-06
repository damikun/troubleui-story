import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { HorizontalCard, HorizontalCardProps } from "./HorizontalCard";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";

export default {
  title: "Example/HorizontalCard",
  component: HorizontalCard,
  argTypes: {
    image_url: {
      description: "Image url/src",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    name: {
      description: "Name",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    description: {
      description: "Description",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    imageLabel: {
      description: "Image Label",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    timeStamp: {
      description: "Timestamp",
      defaultValue: null,
      control: {
        type: "text",
      },
    },
    recentLimit: {
      description: "Timestamp recent limit",
      defaultValue: null,
      control: {
        type: "number",
      },
    },
    imageLabelIcon: {
      description: "Image label icon",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    content: {
      description: "Middle content",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
    bottom: {
      description: "Bottom content",
      defaultValue: null,
      control: {
        type: "object",
      },
    },
  },
} as Meta;

const Template: Story<HorizontalCardProps> = (args) => (
  <HorizontalCard {...args} />
);

export const HorizontalCards = Template.bind({});
HorizontalCards.args = {
  image_url:
    "https://gastopowerjournal.com/media/k2/items/cache/b4992d149d01e2d7750cf10ee5d3b189_XL.jpg",
  name: "Assembly S4",
  description:
    "Station responsible for final assembly of inner shaft to body of composer.",
  imageLabel: "Hall ELB4",
  timeStamp: new Date().toLocaleDateString(),
  recentLimit: 5,
  imageLabelIcon: faHome,
};
