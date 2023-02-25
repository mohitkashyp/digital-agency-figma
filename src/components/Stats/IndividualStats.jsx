import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const IndividualStats = (props) => {
  return (
    <Grid
      sx={{
        boxShadow: "none",
        borderRadius: "none",
        bgcolor: "#020E10",
        py: "1rem",
      }}
      xs={6}
      md={3}
      lg={3}
      spacing={2}  
    >
      <Item sx={{ boxShadow: "none", borderRadius: 0, bgcolor: "transparent" }} >
        <Stack
          spacing={0}
          sx={{ justifyContent: "right",alignContent:"right", bgcolor: "transparent" }}
        >
          <Item
            sx={{
              boxShadow: "none",
              borderRadius: "none",
              bgcolor: "transparent",
              textAlign:"left"
            }}
            >
            <Typography sx={{ color: "white" }} variant="h3">
              {props.number}
            </Typography>
          </Item>
          <Item
            sx={{
                boxShadow: "none",
                borderRadius: "none",
                bgcolor: "transparent",
                textAlign:"left",
                mb:"0.4rem"
            }}
            >
            <Typography sx={{color:"white"}}>
              {props.label}
                </Typography>
          </Item>
          <Divider sx={{bgcolor:"white"}}/>
        </Stack>
      </Item>
    </Grid>
  );
};
