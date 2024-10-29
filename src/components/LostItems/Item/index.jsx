import { useState } from "react";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { MoreVertIcon } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function Item({ title, image, date, description }) {
  const [expanded, setExpanded] = useState(false);
  const [heartColor, setHeartColor] = useState("#FFFFFF");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleHeart = () => {
    if (heartColor === "#FFFFFF") setHeartColor("#FF0132");
    else setHeartColor("#FFFFFF");
  };

  return (
    <Card
      sx={{
        width: 600,
        marginTop: 3,
        marginBottom: 3,
        backgroundColor: "#181818",
        color: "#FFFFFF",
        borderRadius: 5,
      }}
    >
      <CardHeader
        sx={{ color: "#FFFFFF" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        }
        title={`${title} ${date}`}
      />
      <CardMedia
        component="img"
        height="500"
        image={image}
        alt={title}
        sx={{ width: "400px", marginLeft: "100px", borderRadius: 5 }}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            sx={{ color: heartColor }}
            onClick={() => handleHeart()}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "#FFFFFF" }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Description:</Typography>
          <Typography sx={{ marginBottom: 2 }}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
