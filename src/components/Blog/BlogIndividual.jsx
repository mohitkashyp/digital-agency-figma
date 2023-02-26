import { Grid, Typography, Button } from "@mui/material";
import image from "./download.jpeg";
import { LaunchOutlined } from "@mui/icons-material";
export default function BlogIndividual() {
  return (
    <Grid item lg={6} sm={12} my={4}> 
      <Grid container>
        <Grid item lg={6}>
          <img src={image} width={"100%"} height={"100%"} alt="comp" />
        </Grid>
        <Grid item lg={6} p={4} pb={0}>
          <Typography variant="body1" color="grey">
            June 19, 2022
          </Typography>
          <Typography variant="h6" color="black" mb={1}>
            Title
          </Typography>
          <Typography variant="body1" color="initial" mb={3}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Typography>
          <Button variant="text" endIcon={<LaunchOutlined />}>
            Read More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
