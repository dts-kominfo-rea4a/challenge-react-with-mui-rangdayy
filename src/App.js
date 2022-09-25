import "./App.css";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header.js";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm.js";
import { useState } from "react";
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const formOnSubmitHandler = (newContact) => {
    setContacts([...contacts, newContact])
  };
  return (
    <div className="App">
      <Header />
      <Grid container spacing={1} sx={{ width: "100%", height: "100%", padding: 5 }}>
        <Grid item={true} md={6} >
          <ContactForm formSubmitHandler={formOnSubmitHandler} />
        </Grid>
        <Grid item={true} md={6}>
          <Card>
            <List sx={{ width: "100%", bgcolor: "#ffffff" }}>
              {contacts.map((contact, id) => (
                <Contact data={contact} key={id} />
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
