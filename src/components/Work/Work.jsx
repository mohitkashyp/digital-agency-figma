import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import logoPlaceholder from "../assets/download.jpeg";
export default function Work() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#ebe2d9",
          py: "4.5rem",
          px: "7rem",
        }}
      >
        <Typography variant="h3" color="initial">
          Our Work
        </Typography>
        <Grid container>
          <Grid item xs={6} md={6} lg={6} spacing={2}>
            <Card
              sx={{ maxWidth: 345, px: "5rem", pt: "3rem", bgcolor: "#FFC42C" }}
            >
              <CardMedia
                sx={{ height: 300 }}
                image={logoPlaceholder}
                title="green iguana"
              />
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} lg={6} spacing={2} >
            
            <Grid item lg={12} >
              <Card>
                <CardMedia
                  sx={{ height: 175 }}
                  image={logoPlaceholder}
                  title="green iguana"
                />
              </Card>
            </Grid>
            
            <Grid item lg={12} sx={{mt:"2.5rem"}}>
              <Card>
                <CardMedia
                  sx={{ height: 175 }}
                  image={logoPlaceholder}
                  title="green iguana"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
