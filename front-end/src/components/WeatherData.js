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
  padding: 10px;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const WeatherInfoCity = styled(Typography)`
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  padding: 10px 0;
`;
const WeatherInfoTemp = styled(Typography)`
  font-size: 70px;
  line-height: 80px;
  padding: 10px 0;
`;
const WeatherInfoRH = styled(Typography)`
  font-size: 30px;
  line-height: 30px;
  padding: 10px 0;
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
  font-size: 40px;
`;

export const WeatherData = () => {
  const [currentTemp, setTemp] = useState("");
  useEffect(async () => {
    var temp = await axios.get("http://localhost:8888/router/getCurrentData");
    console.log(temp.data);
    setTemp(temp.data.temp);
  }, []);

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
            <Stack
              direction="row"
              justifyContent="space-around"
              sx={{ width: "100%", padding: "0 80px", boxSizing: "border-box" }}
            >
              <WeatherInfoTemp>{currentTemp}°</WeatherInfoTemp>
              <Stack justifyContent="center" sx={{ width: "72px" }}>
                <CloudIcon sx={{ transform: "scale(3)" }} />
              </Stack>
            </Stack>
            <WeatherInfoRH>RH: 9.8%</WeatherInfoRH>
          </WeatherInfoStack>
          <WeatherInfoFutureStack flexGrow={2} spacing={6} direction="row">
            <Stack>
              <WeatherInfoFutureT>Mon</WeatherInfoFutureT>
              <WeatherInfoFutureT>19°</WeatherInfoFutureT>
            </Stack>
            <Stack>
              <WeatherInfoFutureT>Mon</WeatherInfoFutureT>
              <WeatherInfoFutureT>19°</WeatherInfoFutureT>
            </Stack>
            <Stack>
              <WeatherInfoFutureT>Mon</WeatherInfoFutureT>
              <WeatherInfoFutureT>19°</WeatherInfoFutureT>
            </Stack>
          </WeatherInfoFutureStack>
          <WeatherInfoFutureExtra flexGrow={1}>
            <WeatherInfoFutureExtraT>Wind: 1km/hr</WeatherInfoFutureExtraT>
            <WeatherInfoFutureExtraT>Precip: 40mm</WeatherInfoFutureExtraT>
          </WeatherInfoFutureExtra>
        </Stack>
      </PaperContainer>
    </MainContainer>
  );
};
