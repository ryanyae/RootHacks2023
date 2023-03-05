import { Stack, styled, Paper, Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import React from "react";
import { useEffect, useState } from "react";
import axios, * as others from "axios";

const MainContainer = styled(Stack)`
  flex: 1;
`;

const PaperContainer = styled(Paper)`
  margin: 0 16px 16px 16px;
  border-radius: 30px;
  height: 100%;
`;

const WeatherInfoStack = styled(Stack)`
  align-items: center;
  height: 100%;
  justify-content: center;
  padding-left: 50px;
`;

const WeatherInfoCity = styled(Typography)`
  font-size: 40px;
  line-height: 50px;
`;
const WeatherInfoTemp = styled(Typography)`
  font-size: 65px;
  line-height: 80px;
`;


const WeatherInfoFutureStack = styled(Stack)`
  justify-content: center;
  align-items: center;
`;

const WeatherInfoFutureT = styled(Typography)`
  font-size: 30px;
`;

const WeatherInfoFutureExtra = styled(Stack)`
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const WeatherInfoFutureExtraT = styled(Typography)`
  font-size: 30px;
`;

export const WeatherData = () => {

  const [currentTemp, setTemp] = useState("")
  useEffect( () => {
    doStuff()
    getForecast()
  }, [])

  async function doStuff() {
    var temp = await axios.get("http://localhost:8888/router/getCurrentData")
    setTemp(temp.data.temp)
  }

  async function getForecast() {
    var forecast = await axios.get("http://localhost:8888/router/getForecast")
  }

  // const apiCall = async () => {
  //   const value = await axios.get("http://localhost:8888/router/calculate");
  //   console.log(value)
  // };


const WeatherInfoLabelStack = styled(Stack)`
  padding-top: 15px;
  padding-left: 15px;
  position: fixed;
`;

const WeatherInfoLabel = styled(Typography)`
  background-color: #ff9900;
  margin-right: auto;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
`;

  return (
    <MainContainer>
      <PaperContainer>
        <WeatherInfoLabelStack direction="row">
            <WeatherInfoLabel>Weather</WeatherInfoLabel>
        </WeatherInfoLabelStack>
        <Stack direction="row" sx={{ height: "100%" }}>
          <WeatherInfoStack flexGrow={1}>
            <WeatherInfoCity>Vancouver</WeatherInfoCity>
            <Stack
              direction="row"
              justifyContent="space-around"
              sx={{ width: "100%", padding: "0 80px", boxSizing: "border-box" }}
            >
              <WeatherInfoTemp>20°</WeatherInfoTemp>
              <Stack justifyContent="center" sx={{ width: "62px" }}>
                <CloudIcon sx={{ transform: "scale(3)" }} />
              </Stack>
            </Stack>
          </WeatherInfoStack>
          <WeatherInfoFutureStack flexGrow={2} spacing={6} direction="row">
          <WeatherInfoFutureExtra flexGrow={1}>
            <WeatherInfoFutureExtraT>Relative Humidity: 60%</WeatherInfoFutureExtraT>
            <WeatherInfoFutureExtraT>Average Temperature: 15</WeatherInfoFutureExtraT>
          </WeatherInfoFutureExtra>
          </WeatherInfoFutureStack>
          <WeatherInfoFutureExtra flexGrow={1} sx={{paddingRight: "30px"}}>
            <WeatherInfoFutureExtraT>Wind: 1km/hr</WeatherInfoFutureExtraT>
            <WeatherInfoFutureExtraT>Precip: 40mm</WeatherInfoFutureExtraT>
          </WeatherInfoFutureExtra>
        </Stack>
      </PaperContainer>
    </MainContainer>
  );
};

