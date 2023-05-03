import "./style.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import surprise from "../../assets/surprise.png";

export default function CrocCard({ croc }) {
  return (
    <Card className="card" sx={{ minWidth: 400 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={croc.img_url ? croc.img_url : surprise}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {croc.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {croc.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
