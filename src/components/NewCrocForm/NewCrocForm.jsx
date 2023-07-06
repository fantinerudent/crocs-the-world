import { useState } from "react";
import axios from "axios";
import "./NewCrocForm.css";
import { TextField, Button } from "@mui/material";

const NewCrocForm = ({ crocProps }) => {
  const [croc, setCroc] = useState(
    crocProps
      ? {
          id: crocProps.id,
          name: crocProps.name,
          price: crocProps.price,
          description: crocProps.description,
          img_url: crocProps.img_url,
          color: crocProps.color,
        }
      : {
          name: "",
          price: 0,
          description: "",
          img_url: "",
          color: "",
        }
  );

  const handleSendForm = (e) => {
    e.preventDefault();
    croc.id
      ? axios
          .post("http://localhost:3000/croc", croc)
          .then((res) => console.log(res.message))
          .catch((err) => console.error(err))
      : axios
          .put(`http://localhost:3000/croc/${crocProps.id}`, croc)
          .then((res) => console.log(res.message))
          .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const input = e.target;
    setCroc({ ...croc, [input.name]: input.value });
  };

  return (
    <form className="form-croc" onSubmit={(e) => handleSendForm(e)}>
      <TextField
        required
        id="CrocName"
        label="name"
        variant="outlined"
        value={croc.name}
        onChange={handleChange}
        name="name"
      />
      <br />
      <TextField
        required
        id="CrocPrice"
        label="price"
        variant="outlined"
        value={croc.price}
        onChange={handleChange}
        name="price"
      />
      <br />
      <TextField
        required
        id="CrocDescription"
        label="description"
        variant="outlined"
        value={croc.description}
        onChange={handleChange}
        name="description"
      />
      <br />
      <TextField
        required
        id="CrocImgUrl"
        label="img_url"
        variant="outlined"
        value={croc.img_url}
        onChange={handleChange}
        name="imgUrl"
      />
      <br />

      <TextField
        required
        id="CrocColor"
        label="color"
        variant="outlined"
        value={croc.color}
        onChange={handleChange}
        name="color"
      />
      <Button type="submit" variant="contained">
        Send form
      </Button>
    </form>
  );
};

export default NewCrocForm;
