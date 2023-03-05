import {
  Drawer,
  Stack,
  styled,
  Typography,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Switch,
  FormGroup,
  FormControlLabel,
  Collapse,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

export const SideBar = () => {
  const PlantListContainer = styled(Stack)`
    margin-top: 65.5px;
  `;

  const SidebarDrawer = styled(Drawer)`
    .MuiDrawer-paper {
      background-color: transparent;
      border-right: transparent;
      position: absolute;
    }
  `;

  const SidebarFixed = styled(Stack)`
    position: absolute;
    background-color: white;
    width: 100%;
    justify-content: center;
    z-index: 1;
  `;

  const mainButtons = [
    [0, "Home"],
    [1, "Shorts"],
    [2, "Subscriptions"],
  ];

  const SidebarTitle = styled(Typography)`
    font-weight: bold;
    padding: 20px 0;
    padding-left: 30px;
  `;

  const AddButton = styled(Button)`
    border-radius: 80px;
    background-color: #9e3fff;
    min-width: 0px;
    width: 120px;
    height: 32px;
    color: white;

    font-weight: bold;
    font-size: 12px;
    padding: 0;

    :hover {
      background-color: #b063ff;
    }
  `;

  const PlantButtons = styled(ToggleButton)`
    background-color: white;
    width: 100%;
    border-radius: 0;
    justify-content: left;
    padding-left: 30px;
  `;

  const SidebarContainer = styled(Stack)`
    flex: 1;
    flex-basis: 1e-9px;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    ::-webkit-scrollbar {
      width: 0.6vw;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #717171;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 1vw;
    }

    ::-webkit-scrollbar-track {
      background-color: #201f1f;
    }
  `;

  const HeaderSpacer = styled(Box)`
    margin-top: 50px;
  `;

  const InnerSidebarContainer = styled(Stack)`
    overflow: hidden;
    flex: 1;
    flex-basis: 1e-9px;
    overflow-y: auto;
    width: 240px;
    :hover {
      ::-webkit-scrollbar-thumb {
        background-color: rgba(113, 113, 113);
        border-radius: 1vw;
      }
    }

    ::-webkit-scrollbar {
      width: 0.6vw;
    }

    ::-webkit-scrollbar-track {
      background-color: #201f1f;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  `;

  const [plant, setPlant] = useState(0);

  const handleChange = (event, value) => {
    setPlant(value);
  };

  const [modal, setModal] = useState(false);

  const AddPlantModal = styled(Modal)``;

  const ModalContainer = styled(Stack)`
    position: absolute;
    top: 30%;
    left: 37%;
    transform: 50%;
    width: 400px;
    background-color: white;
    border: 2px solid #000;
    boxshadow: 24;
    padding: 0 15px;
    border-radius: 15px;
    padding-bottom: 15px;
  `;

  const [expand, setExpand] = useState(false);

  const handleChecked = (event) => {
    setExpand(event.target.checked);
  };

  return (
    <SidebarDrawer variant="permanent">
      <HeaderSpacer />
      <SidebarContainer>
        <InnerSidebarContainer>
          <SidebarFixed sx={{ borderBottom: "solid #e5e5e5" }}>
            <SidebarTitle>Plant List</SidebarTitle>
          </SidebarFixed>
          <PlantListContainer>
            <ToggleButtonGroup
              exclusive
              onChange={handleChange}
              value={plant}
              orientation="vertical"
            >
              {mainButtons.map((icon) => {
                return <PlantButtons value={icon[0]}>hi</PlantButtons>;
              })}
            </ToggleButtonGroup>
          </PlantListContainer>
          <SidebarFixed
            sx={{ bottom: 0, padding: "10px 0", alignItems: "center" }}
          >
            <AddButton onClick={() => setModal(true)}>New Plant</AddButton>
          </SidebarFixed>
          <AddPlantModal open={modal} onClose={() => setModal(false)}>
            <ModalContainer>
              <h2>Create New Plant</h2>
              <TextField placeholder="Plant Name" />
              <TextField placeholder="Description" />
              <TextField placeholder="Plant Size" />
              <FormControl>
                <Select defaultValue={1} onChange={handleChange}>
                  <MenuItem value={1}>Apple</MenuItem>
                  <MenuItem value={2}>Orange</MenuItem>
                  <MenuItem value={3}>Grape</MenuItem>
                </Select>
              </FormControl>
              <FormGroup sx={{ paddingLeft: "5px" }}>
                <FormControlLabel
                  control={
                    <Checkbox checked={expand} onChange={handleChecked} />
                  }
                  label="House Plant"
                />
              </FormGroup>
              <Collapse in={expand} timeout="auto">
                <Stack>
                  <TextField placeholder="Temperature" />
                  <TextField placeholder="Humidity" />
                </Stack>
              </Collapse>
            </ModalContainer>
          </AddPlantModal>
        </InnerSidebarContainer>
      </SidebarContainer>
    </SidebarDrawer>
  );
};
