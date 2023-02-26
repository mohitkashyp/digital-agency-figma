import { Box, Grid, Typography } from "@mui/material";
import Stamp from "./new.svg";

export default function ServicesNew() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        py: "4.5rem",
        px: 10,
      }}
    >
      <Grid container>
        <Grid item lg={6} sm={12}>
          <Grid item direction={"row"}>
            <Typography variant="h1" color="black">
              Want you to boost your business growth? Solution is here.
            </Typography>
            <Typography variant="body1" color="initial" mb={3}>
              We provide various services to make your business grow and get
              bigger. Your satisfaction is our first priority.
            </Typography>
           <img src={Stamp} alt="Stamp" />
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  );
}
