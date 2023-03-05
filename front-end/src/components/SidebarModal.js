import React, { useState } from "react";
import {
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
  Stack,
  styled,
  Button,
} from "@mui/material";

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

export const SidebarModal = (props) => {
  const [expand, setExpand] = useState(false);

  const handleChecked = (event) => {
    setExpand(event.target.checked);
  };

  const { modal, setModal, plants } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [temp, setTemp] = useState("");
  const [humid, setHumidity] = useState("");

  var plant = {
    name: "",
    description: "",
    size: "",
    location: false,
    temp: "",
    humidity: "",
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleTemp = (event) => {
    setTemp(event.target.value);
  };
  const handleHumidity = (event) => {
    setHumidity(event.target.value);
  };

  const createPlant = () => {
    plant.name = name;
    plant.description = description;
    plant.size = size;
    plant.location = expand;
    plant.temp = temp;
    plant.humidity = humid;

    console.log(plant);

    plants.push(plant);
    console.log(plants);
    setModal(false);
  };

  const handleSelect = (event, value) => {
    setType(value);
  };

  const [type, setType] = useState("");

  return (
    <AddPlantModal open={modal} onClose={() => setModal(false)}>
      <ModalContainer>
        <h2>Create New Plant</h2>
        <TextField
          value={name}
          onChange={handleName}
          placeholder="Plant Name"
        />
        <TextField
          value={description}
          onChange={handleDescription}
          placeholder="Description"
        />
        <TextField
          value={size}
          onChange={handleSize}
          placeholder="Plant Size"
        />
        <FormControl>
          <Select onChange={handleSelect}>
            <MenuItem value="Broccoli">Broccoli</MenuItem>
            <MenuItem value="Potato">Potato</MenuItem>
            <MenuItem value="Corn">Corn</MenuItem>
            <MenuItem value="Zucchini">Zucchini</MenuItem>
            <MenuItem value="Pineapple">Pineapple</MenuItem>
          </Select>
        </FormControl>
        <FormGroup sx={{ paddingLeft: "5px" }}>
          <FormControlLabel
            control={<Checkbox checked={expand} onChange={handleChecked} />}
            label="House Plant"
          />
        </FormGroup>
        <Collapse in={expand} timeout="auto">
          <Stack>
            <TextField
              value={temp}
              onChange={handleTemp}
              placeholder="Temperature"
            />
            <TextField
              value={humid}
              onChange={handleHumidity}
              placeholder="Humidity"
            />
          </Stack>
        </Collapse>
        <Button onClick={createPlant}>Create</Button>
      </ModalContainer>
    </AddPlantModal>
  );
};
