import React from "react";
import * as HorizontalCards from "../UIComponents/Cards/HorizontalCard";
import StoryBody from "../StoryUi/StoryBody";
import StoryHeader from "../StoryUi/StoryHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import Badge from "../UIComponents/Badge/Badge";

/**
 * HorizontalCard props
 */
export type HorizontalCardProps = HorizontalCards.HorizontalCardProps;

/**
 * HorizontalCard component
 */
export const HorizontalCard: React.FC<HorizontalCards.HorizontalCardProps> = ({
  ...props
}) => {
  return (
    <StoryBody>
      <StoryHeader
        name={"HorizontalCard"}
        example={
          <div className="flex max-w-sm">
            <HorizontalCards.default
              {...props}
              content={
                <div className="flex flex-row flex-nowrap space-x-2 overflow-hidden">
                  <Badge variant="secondaryred" size="thin">
                    ⚡ Electrical
                  </Badge>
                  <Badge variant="secondaryblue" size="thin">
                    🔧 Mechanic
                  </Badge>
                </div>
              }
              bottom={
                <div className="flex flex-row space-x-2 flex-nowrap items-center">
                  <FontAwesomeIcon icon={faFingerprint} />
                  <p className="text-xs">{"0a2f44-6bb-ec2-b49-2f4cc689"}</p>
                </div>
              }
            />
          </div>
        }
      />
    </StoryBody>
  );
};
