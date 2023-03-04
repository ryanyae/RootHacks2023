import { Typography, Stack, Paper, styled } from "@mui/material";
import React from "react";

const MainContainer = styled(Paper)`
  margin: 12px;
  height: 200px;
`;

const PlantTitle = styled(Typography)``;

export const PlantInfo = () => {
  return (
    <Stack sx={{ flexGrow: "1" }}>
      <MainContainer>
        <Stack>
          <Stack direction="row">
            <PlantTitle>Plant Info</PlantTitle>
          </Stack>
        </Stack>
        {/* <Graph/> */}
      </MainContainer>
    </Stack>
  );
};
