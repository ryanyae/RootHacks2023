import {
  Paper,
  styled,
  Typography,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button
} from "@mui/material";
import React, { useState } from "react";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  options: {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 14
                }
            }
        }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['2023-03-04', '2023-03-05', '2023-03-06', '2023-03-07', '2023-03-08', '2023-03-09', '2023-03-10', '2023-03-11', '2023-03-12','2023-03-13','2023-03-14'];
const weatherData = [
  { avgTemp: 4.6, avgHumid: 77 },
  { avgTemp: 4.25, avgHumid: 76 },
  { avgTemp: 2.85, avgHumid: 84 },
  { avgTemp: 4.1, avgHumid: 75 },
  { avgTemp: 2.95, avgHumid: 86 },
  { avgTemp: 3.8, avgHumid: 73 },
  { avgTemp: 4.6499999999999995, avgHumid: 74 },
  { avgTemp: 5.35, avgHumid: 74 },
  { avgTemp: 7.85, avgHumid: 76 },
  { avgTemp: 7.75, avgHumid: 78 },
  { avgTemp: 6.45, avgHumid: 88 },
  { avgTemp: 7.25, avgHumid: 86 },
  { avgTemp: 8.05, avgHumid: 93 },
  { avgTemp: 8.1, avgHumid: 97 }
]

/* CALL FUNCTION TO GET CURRENT KC */

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};


const UpdateButton = styled(Button)``;



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

const CustomWrapper = styled(Stack)`
height: 400px;
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
          <Stack direction="row" sx={{ justifyContent: "space-between"}}>
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
          <CustomWrapper sx={{paddingLeft: "20px"}}>
            <Line options={options} data={data} />
            <UpdateButton onClick={() => console.log('yes')}>Update</UpdateButton>
          </CustomWrapper>
          
        </Stack>
        
        {/* <Graph/> */}
      </PlotContainer>
    </Stack>
  );
};

