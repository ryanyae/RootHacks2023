import React from "react";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Stack, styled, Box, Paper } from "@mui/material";
import { Plot } from "./TopRow/Plot";
import { PlantInfo } from "./TopRow/PlantInfo";
import axios, * as others from 'axios';

const MainContainer = styled(Stack)`
  background-color: black;
  height: calc(100% - 56px);
  width: calc(100% - 240px);
  margin-left: 240px;
  margin-top: 56px;
`;

export const Home = () => {

  useEffect(() => {
    apiCall();
  }, [])

  const apiCall = async () => {
    const value = await axios.get("http://localhost:8888/router/calculate")
    
    console.log(value)
  }

  return (
    <Stack>
      <Navbar />
      <SideBar />
      <MainContainer>
        <Stack direction="row">
          <Plot />
          <PlantInfo />
        </Stack>
        <Stack>{/* <WeatherData /> */}</Stack>
        {/* <Box sx={{ minWidth: "1500px", minHeight: "1500px" }}></Box> */}
      </MainContainer>
    </Stack>
  );
};
