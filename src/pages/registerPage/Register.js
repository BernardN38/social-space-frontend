import React, { useState } from "react";
import serverUrl from "../../config";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
export default function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const submitRegisterUser = () => {
    const json = JSON.stringify(credentials);
    axios
      .post(`${serverUrl}/api/auth/signup`, json, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3rem",
        width: "100%",
      }}
    >
      <TextField
        type="username"
        name="username"
        id="username"
        label="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        margin="dense"
        password={credentials.password}
        onChange={handleChange}
      />
      <TextField
        type="email"
        name="email"
        id="email"
        label="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <TextField
        type="name"
        name="name"
        label="Name"
        margin="dense"
        password={credentials.name}
        onChange={handleChange}
      />
      <Button onClick={submitRegisterUser}>Register</Button>
    </Box>
  );
}
