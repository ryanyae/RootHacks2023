import React from "react";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Stack, styled, Box, Paper } from "@mui/material";
import { Plot } from "./TopRow/Plot";
import { PlantInfo } from "./TopRow/PlantInfo";
import axios, * as others from "axios";
import { WeatherData } from "./WeatherData";

const MainContainer = styled(Stack)`
  background-color: #f1f1f1;
  margin-left: 240px;

  height: calc(100vh - 50px);
  margin-top: 50px;
  box-sizing: border-box;
`;

export const Home = () => {
  // useEffect(() => {
  //   apiCall();
  // }, []);

  // const apiCall = async () => {
  //   const value = await axios.get("http://localhost:8888/router/calculate");
  // };

  return (
    <Stack>
      <Navbar />
      <SideBar />
      <MainContainer spacing={2}>
        <Stack direction="row" spacing={2} sx={{ flexGrow: "1.25" }}>
          <Plot />
          <PlantInfo />
        </Stack>
        <Stack sx={{ flexGrow: "0.75" }}>
          <WeatherData />
        </Stack>
      </MainContainer>
    </Stack>
  );
};
