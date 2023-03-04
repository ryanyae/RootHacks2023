import {
  Paper,
  styled,
  Typography,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React, { useState } from "react";

const PlotContainer = styled(Paper)`
  margin: 12px;
  height: 200px;
`;

const PlotTitle = styled(Typography)``;

export const Plot = () => {
  const [plotSelect, setPlotSelect] = useState("");

  const handleChange = (event, value) => {
    setPlotSelect(value);
  };

  return (
    <Stack sx={{ flexGrow: "1" }}>
      <PlotContainer>
        <Stack>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <PlotTitle>Plot Title</PlotTitle>
            <FormControl>
              <InputLabel id="plot-selector">Plot</InputLabel>
              <Select onChange={handleChange}>
                <MenuItem value={1}>Apple</MenuItem>
                <MenuItem value={2}>Orange</MenuItem>
                <MenuItem value={3}>Grape</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        {/* <Graph/> */}
      </PlotContainer>
    </Stack>
  );
};
