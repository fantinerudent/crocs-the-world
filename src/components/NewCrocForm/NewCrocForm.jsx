import { useState } from "react";
import axios from "axios";
import "./NewCrocForm.css";
import { TextField, Button } from "@mui/material";

const NewCrocForm = () => {
  const [croc, setCroc] = useState({
    name: "",
    price: 0,
    description: "",
    imgUrl: "",
    color: "",
  });

  const handleSendForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/croc", croc)
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
        label="imgUrl"
        variant="outlined"
        value={croc.imgUrl}
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
      <Button type='submit' variant="contained">Send form</Button>
    </form>
  );
};

export default NewCrocForm;
