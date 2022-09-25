// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Uncomment untuk memuat daftar kontak
import { useState } from "react";

const ContactForm = ({formSubmitHandler}) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputOnChangeHandler = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    formSubmitHandler(newContact);
    setNewContact({ name: "", phone: "", email: "", photo: "" });
  };
  return (
    <>
      <Card sx={{ padding: 4, backgroundColor: "#ffffff" }}>
        <form onSubmit={submit}>
          <TextField style={{ width: "100%", margin: "5px" }} type="text" label="Name" name="name" variant="filled" required value={newContact.name} onChange={inputOnChangeHandler} fullWidth />
          <TextField style={{ width: "100%", margin: "5px" }} type="text" label="Phone" name="phone" variant="filled" required value={newContact.phone} onChange={inputOnChangeHandler} fullWidth />
          <TextField style={{ width: "100%", margin: "5px" }} type="text" label="Email" name="email" variant="filled" required value={newContact.email} onChange={inputOnChangeHandler} fullWidth />
          <TextField style={{ width: "100%", margin: "5px" }} type="text" label="Photo URL" name="photo" variant="filled" required value={newContact.photo} onChange={inputOnChangeHandler} fullWidth />
          <Button color="success" type="submit">
            ADD NEW
          </Button>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
