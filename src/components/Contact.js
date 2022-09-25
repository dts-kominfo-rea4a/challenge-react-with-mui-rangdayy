// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// Kalian bisa membuat CSS sendiri di src/components/data.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={data.photo} sx={{ width: 60, height: 60, marginRight: "1rem" }} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component={"p"} sx={{ fontWeight: 500 }}>
              {data.name}
            </Typography>
          }
          secondary={
            <>
              <Typography component={"p"}>{data.phone}</Typography>
              <Typography component={"p"}>{data.email}</Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default Contact;
