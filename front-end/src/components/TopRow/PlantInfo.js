import { Typography, Stack, Paper, styled } from "@mui/material";
import React from "react";

const MainContainer = styled(Paper)`
  margin: 16px 16px 0 0;
  border-radius: 30px;
  height: 100%;
`;

const PlantInfoStack = styled(Stack)`
  padding: 15px 30px;
  width: 300px;
`;

const PlantTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;

const PlantName = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;

const PlantDescription = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
`;

const PlantSpecialInfo = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
`;

export const PlantInfo = () => {
  return (
    <Stack sx={{ flexGrow: "0.75", width: "300px" }}>
      <MainContainer>
        <PlantInfoStack>
          <Stack direction="row">
            <PlantTitle>Plant Info</PlantTitle>
          </Stack>
          <PlantName>Pineapple</PlantName>
          <PlantDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </PlantDescription>
          <p></p>
          <Stack>
            <PlantSpecialInfo>Kc: </PlantSpecialInfo>
            <PlantSpecialInfo>ETo: </PlantSpecialInfo>
            <PlantSpecialInfo>Location: </PlantSpecialInfo>
          </Stack>
        </PlantInfoStack>
        {/* <Graph/> */}
      </MainContainer>
    </Stack>
  );
};
