import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import TextField from '@mui/material/TextField';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        py: "4.5rem",
        px: 10,
      }}
    >
      <Grid container>
        <Grid item lg={6} xs={12}>
          <Typography variant="body1" color="white">
            Test
          </Typography>
        </Grid>
        <Grid item lg={2} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h6" color="white">
              Company
            </Typography>
            <Typography variant="body1" color="grey">
              Link 1
            </Typography>
            <Typography variant="body1" color="grey">
              Link 2
            </Typography>
            <Typography variant="body1" color="grey">
              Link 3
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={2} xs={12} display="flex">
          <Stack spacing={2} >
            <Typography variant="h6" color="white">
              Support
            </Typography>
            <Typography variant="body1" color="grey">
              Help Center
            </Typography>
            <Typography variant="body1" color="grey">
              Term of Services
            </Typography>
            <Typography variant="body1" color="grey">
              Privacy Policy
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={2}>
          <Stack spacing={2}>
            <Typography variant="h6" color="white">
              Stay up to Date
            </Typography>
            <TextField label="Your Email Address" color="secondary" focused />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
