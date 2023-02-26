import { Box, Grid } from "@mui/material";
import BlogIndividual from "./BlogIndividual";

export default function Blog() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        py: "4.5rem",
        px: 10,
      }}
    >
      <Grid container>

          <BlogIndividual/>
          <BlogIndividual/>
          <BlogIndividual/>
          <BlogIndividual/>
      
      </Grid>
    </Box>
  );
}
