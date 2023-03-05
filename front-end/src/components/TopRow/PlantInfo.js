import { Typography, Stack, Paper, styled } from "@mui/material";
import React from "react";

const MainContainer = styled(Paper)`
  margin: 16px 16px 0 0;
  height: 100%;
`;

const PlantTitle = styled(Typography)``;

const PlantName = styled(Typography)``;

const PlantDescription = styled(Typography)``;

const PlantSpecialInfo = styled(Typography)``;

export const PlantInfo = () => {
  return (
    <Stack sx={{ flexGrow: "1" }}>
      <MainContainer>
        <Stack>
          <Stack direction="row">
            <PlantTitle>Plant Info</PlantTitle>
          </Stack>
          <PlantName>Pineapple</PlantName>
          <PlantDescription>
            asdfjlkdsfj asdjfl asldkfj asldkjf asldkfj alsdkfj laskdjf
          </PlantDescription>
          <Stack>
            <PlantSpecialInfo>Kc: </PlantSpecialInfo>
            <PlantSpecialInfo>ETo: </PlantSpecialInfo>
            <PlantSpecialInfo>Location: </PlantSpecialInfo>
          </Stack>
        </Stack>
        {/* <Graph/> */}
      </MainContainer>
    </Stack>
  );
};
