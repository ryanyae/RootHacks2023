import { Typography, Stack, Paper, styled } from "@mui/material";
import React, { useState, useEffect } from "react";

const MainContainer = styled(Paper)`
  margin: 16px 16px 0 0;
  border-radius: 30px;
  height: 100%;
`;

const PlantInfoStack = styled(Stack)`
  padding: 15px 20px;
`;

const PlantInfoTitle = styled(Typography)`
  background-color: #9e3fff;
  margin-right: auto;
  border-radius: 20px;
  color: white;
  padding: 5px 10px;
`;

const PlantTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;

const PlantName = styled(Typography)`
  font-size: 40px;
  font-weight: 700;
  margin-top: 5px;
`;

const PlantDescription = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  padding-top: 5px;
`;

const PlantSpecialInfo = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

export const PlantInfo = (props) => {
  const { plant } = props;

  const [info, setInfo] = useState("");

  useEffect(() => {
    if (plant != null) {
      setInfo(plant);
    }
  }, [plant]);

  return (
    <Stack sx={{ flexGrow: "0.75", width: "300px" }}>
      <MainContainer>
        <PlantInfoStack>
          <PlantInfoTitle direction="row">
            <PlantTitle>{plant.type}</PlantTitle>
          </PlantInfoTitle>
          <PlantName>{info.name}</PlantName>
          <PlantDescription>{info.description}</PlantDescription>
          <p></p>
          <Stack>
            <PlantSpecialInfo>Kc: </PlantSpecialInfo>
            <PlantSpecialInfo>ETo: </PlantSpecialInfo>
            <PlantSpecialInfo>
              Location:{" "}
              {info ? (info.location ? "House Plant" : "Outside") : ""}
            </PlantSpecialInfo>
          </Stack>
        </PlantInfoStack>
        {/* <Graph/> */}
      </MainContainer>
    </Stack>
  );
};
