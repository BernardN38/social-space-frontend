import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  TextField,
  Avatar,
  IconButton,
  Card,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import serverUrl from "../../config";

export default function SubmitPostForm({
  profileName = "bernard narvaez",
  posts,
  setPosts,
  userId,
}) {
  const [formData, setFormData] = useState({ textContent: ""  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const submitForm = () => {
    const json = JSON.stringify(formData);
    axios
      .post(`${serverUrl}/api/users/${userId}/posts`, json, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((resp) => {
        setFormData({ textContent: "" });
        setPosts([...posts, resp.data]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "5rem",
        marginLeft: "0.25rem",
        marginRight: "0.25rem",
      }}
    >
      <Avatar sx={{ marginRight: "0px" }} />
      <Box>
        <FormControl>
          <TextField
            name="textContent"
            id="outlined-name"
            label={`Leave a message`}
            value={formData.textContent}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <IconButton onClick={submitForm} color="primary">
        <SendIcon />
      </IconButton>
    </Card>
  );
}
