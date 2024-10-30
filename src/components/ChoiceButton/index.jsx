import * as React from "react";
import { Box, Card, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ChoiceButton({ title, path }) {
  const card = (
    <React.Fragment>
      <CardActions sx={{ alignSelf: "flex-end" }}>
        <Button size="small" component={Link} to={path} sx={{ color: "white" }}>
          {title}
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box
      sx={{
        width: "auto",
        height: "10px",
        borderRadius: 1,
        marginRight: 3,
      }}
    >
      <Card variant="outlined" sx={{ height: "auto", bgcolor: "#1E1E1E" }}>
        {card}
      </Card>
    </Box>
  );
}
