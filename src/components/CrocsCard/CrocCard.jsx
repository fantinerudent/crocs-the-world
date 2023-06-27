import "./style.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import surprise from "../../assets/surprise.png";
import { useState } from "react";
import NewCrocForm from "../NewCrocForm/NewCrocForm";

export default function CrocCard({ croc }) {
  const [displayForm, setDisplayForm] = useState(false);
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <>
      {displayForm && <NewCrocForm crocProps={croc} />}
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
        <button style={{backgroundColor: 'red'}} onClick={handleDisplayForm}> Update croc </button>
      </Card>
    </>
  );
}
