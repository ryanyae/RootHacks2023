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
import { SidebarModal } from "./SidebarModal";
import axios, * as others from "axios";

export const SideBar = (props) => {
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
    font-size: 15px;
    padding: 0;

    text-transform: none;

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

  const [plant, setPlant] = useState("");

  const { setDisplay, plants} = props;
  const [modal, setModal] = useState(false);

  const handleChange = (event, value) => {
    setPlant(value);
    setDisplay(value);
    // setCalc(plants.value)
    const size = plants[value].size
    const type = plants[value].type.props.value
    const finalVal = apiCall(size, type);
    console.log(finalVal.data + "")

    const ko = finalVal.data.ko
    const Eto = finalVal.data.Eto

    props.setCalc({
      ko: ko,
      Eto: Eto
    })
  };

  const apiCall = async (size, type) => {
    const formData = {
      size: size,
      type: type
    }
    const calc = await axios.post("http://localhost:8888/router/calculate", formData);

    console.log(calc)
  };

  var num = 0;

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
              {plants.map((plant) => {
                return <PlantButtons value={num++}>{plant.name}</PlantButtons>;
              })}
            </ToggleButtonGroup>
          </PlantListContainer>
          <SidebarFixed
            sx={{ bottom: 0, padding: "10px 0", alignItems: "center" }}
          >
            <AddButton onClick={() => setModal(true)}>New Plant</AddButton>
          </SidebarFixed>
          <SidebarModal modal={modal} setModal={setModal} plants={plants} />
        </InnerSidebarContainer>
      </SidebarContainer>
    </SidebarDrawer>
  );
};
