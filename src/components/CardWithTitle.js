import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

function CardWithTitle(props) {
  return (
    <div>
      <Card raised="true" sx={{ maxWidth: 345, m: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        
          <Link to={props.link}>
          <Button
            sx={{ mb: 2, width: 1 / 2 }}
            variant="outlined"
            color="primary"
            startIcon={<SendIcon />}
            >
            Work
          </Button>
          </Link>
        
      </Card>
    </div>
  );
}

export default CardWithTitle;
