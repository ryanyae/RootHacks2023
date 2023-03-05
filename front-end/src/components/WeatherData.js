import { Stack, styled, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from 'react'
import axios, * as others from "axios";


const MainContainer = styled(Stack)`
  flex: 1;
`;

const PaperContainer = styled(Paper)`
  margin: 0 16px 16px 16px;
  height: 100%;
`;

const WeatherInfoStack = styled(Stack)`
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const WeatherInfoCity = styled(Typography)`
  font-size: 50px;
  line-height: 50px;
  padding: 10px 0;
`;
const WeatherInfoTemp = styled(Typography)`
  font-size: 80px;
  line-height: 80px;
  padding: 10px 0;
`;
const WeatherInfoRH = styled(Typography)`
  font-size: 30px;
  line-height: 30px;
  padding: 10px 0;
`;


export const WeatherData = () => {

  const [currentTemp, setTemp] = useState("")
  useEffect(async () => {
    var temp = await axios.get("http://localhost:8888/router/getCurrentData")
    console.log(temp.data)
    setTemp(temp.data.temp)
  },[])

  // const apiCall = async () => {
  //   const value = await axios.get("http://localhost:8888/router/calculate");
  //   console.log(value)
  // };

  return (
    <MainContainer>
      <PaperContainer>
        <Stack direction="row" sx={{ height: "100%" }}>
          <WeatherInfoStack flexGrow={1}>
            <WeatherInfoCity>Vancouver</WeatherInfoCity>
            <WeatherInfoTemp>{currentTemp}°</WeatherInfoTemp>
            <WeatherInfoRH>RH: 9.8%</WeatherInfoRH>
          </WeatherInfoStack>
          <Stack flexGrow={1} direction="row">
            <Stack>
              <Typography>Mon</Typography>
              <Typography>19*</Typography>
            </Stack>
            <Stack>
              <Typography>Mon</Typography>
              <Typography>19*</Typography>
            </Stack>
            <Stack>
              <Typography>Mon</Typography>
              <Typography>19*</Typography>
            </Stack>
          </Stack>
          <Stack flexGrow={1}>
            <Typography>Wind</Typography>
            <Typography>Precip</Typography>
          </Stack>
        </Stack>
      </PaperContainer>
    </MainContainer>
  );
};
