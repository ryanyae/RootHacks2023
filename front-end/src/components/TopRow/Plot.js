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
  margin: 16px 0 0 16px;
  height: 100%;
  border-radius: 30px;
`;

const PlotTitle = styled(Typography)`
  padding: 15px 30px;
  font-size: 30px;
  font-weight: 500;
`;

export const Plot = () => {
  const [plotSelect, setPlotSelect] = useState(1);

  const handleChange = (event, value) => {
    setPlotSelect(value);
  };

  return (
    <Stack sx={{ flexGrow: "2" }}>
      <PlotContainer>
        <Stack>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <PlotTitle>Plot Title</PlotTitle>
            <FormControl sx={{ width: "120px" }}>
              <InputLabel id="plot-selector">Plot</InputLabel>
              <Select defaultValue={1} label="plot" onChange={handleChange}>
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
