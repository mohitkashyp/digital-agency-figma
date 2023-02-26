import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function TestimonialCard(props) {
  return (
    <Grid item p={"2rem"} bgcolor={props.type} lg={4} md={3}>
      <Grid item direction={"row"} display="flex" pb="2rem" alignContent={"center"}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <Grid direction={"row"} ml={"2rem"}>
          <Typography variant="h5" color="white">
            Username
          </Typography>
          <Typography variant="h7" justifyContent={"bottom"} color="grey">
            Designation
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="white">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Velit officia consequat duis enim
        velit mollit.

        </Typography>
      </Grid>
    </Grid>
  );
}
