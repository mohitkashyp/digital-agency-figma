import React from "react";
import Grid from "@mui/material/Grid";
import { IndividualStats } from "./IndividualStats";

import { Box } from "@mui/system";

export default function Stats() {
  return (
    <Box 
      sx={{
        bgcolor: "#020E10",
        py: "4.5rem",
        px: "7rem",
      }}
    >
      <Grid container sx={{m:"0"}} spacing={10}>
        <IndividualStats number="40+" label="Happy Clients"/>
        <IndividualStats number="540" label="Projects Completed" />
        <IndividualStats number="300" label="Dedicated Members" />
        <IndividualStats number="25+" label="Awards Won" />
      </Grid>
    </Box>
  );
}
