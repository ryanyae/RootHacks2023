import { Drawer, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  HeaderSpacer,
  InnerSidebarContainer,
  NotLoggedMsg,
  NotLoggedSubContainer,
  SecondaryButtonsContainer,
  SectionLabel,
  SidebarContainer,
  SideBarLabel,
  SignInButton,
  SignInContainer,
} from "./Styling";
import { SidebarButton } from "./SidebarButton";

export const SideBar = () => {
  const OuterButtonContainer = styled(Stack)`
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  `;

  const SidebarDrawer = styled(Drawer)`
    .MuiDrawer-paper {
      background-color: transparent;
      border-right: transparent;
    }
  `;

  const mainButtons = [
    ["/", "Home"],
    ["/", "Shorts"],
    ["/", "Subscriptions"],
  ];

  const secondaryButtons = [
    ["/", "Library"],
    ["/", "History"],
  ];

  const exploreButtons = [
    ["/", "Trending"],
    ["/", "Music"],
    ["/", "Movies & Shows"],
    ["/", "Live"],
    ["/", "Gaming"],
    ["/", "News"],
    ["/", "Sports"],
    ["/", "Learning"],
    ["/", "Fashion & Beauty"],
  ];

  const SidebarTitle = styled(Typography)``;

  return (
    <SidebarDrawer variant="permanent">
      <HeaderSpacer />
      <SidebarContainer>
        <InnerSidebarContainer>
          <Stack>
            <SidebarTitle>Plant</SidebarTitle>
          </Stack>
          <OuterButtonContainer>
            {mainButtons.map((icon) => {
              return <SidebarButton />;
            })}
          </OuterButtonContainer>
          <OuterButtonContainer>
            <SidebarButton />
          </OuterButtonContainer>
        </InnerSidebarContainer>
      </SidebarContainer>
    </SidebarDrawer>
  );
};
