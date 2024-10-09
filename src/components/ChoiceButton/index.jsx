import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ChoiceButton({ title, content, path }) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <br />
        <Typography variant="h4">{content}</Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        <Button size="small" component={Link} to={path}>
          Click here to continue
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box
      sx={{
        width: 360,
        height: 500,
        borderRadius: 1,
        marginRight: 3,
      }}
    >
      <Card variant="outlined" sx={{ height: 500 }}>
        {card}
      </Card>
    </Box>
  );
}
