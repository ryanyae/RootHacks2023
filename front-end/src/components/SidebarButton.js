import React from "react";
import {
  OuterButtonShell,
  ButtonAnchor,
  ButtonHighlight,
  IconHolder,
  SideBarLabel,
} from "./Styling";
import { useNavigate } from "react-router-dom";

export const SidebarButton = (props) => {
  const { icon } = props;

  return (
    <OuterButtonShell>
      <ButtonAnchor>
        <ButtonHighlight elevation={0}>
          <IconHolder></IconHolder>
          <SideBarLabel>hi</SideBarLabel>
        </ButtonHighlight>
      </ButtonAnchor>
    </OuterButtonShell>
  );
};
