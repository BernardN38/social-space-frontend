import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

export default function ({ formData, setFormData, loading, setLoading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  async function handleClick() {
    setLoading(true);
    const json = JSON.stringify(formData);
    axios
      .post("http://localhost:8080/api/auth/signin", json, {
        withCredentials: true,
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        dispatch({type:"SET_USER"})
        setLoading(false);
        navigate("/timeline");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data);
      });
  }
  function checkData() {
    const json = JSON.stringify({});
    axios
      .post("http://localhost:8080/api/testauth", json, {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp.data);
      });
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        type="username"
        name="username"
        id="username"
        label="Username"
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        margin="dense"
        onChange={handleChange}
      />
      <LoadingButton
        size="small"
        onClick={handleClick}
        loading={loading}
        loadingPosition="center"
        variant="outlined"
        sx={{ marginBottom: "3px", height: "2rem" }}
      >
        Login
      </LoadingButton>
      <Button
        variant="contained"
        color="success"
        type="submit"
        sx={{ marginBottom: "3px", height: "2rem" }}
        onClick={() => {
          navigate("/register");
        }}
      >
        Create Account
      </Button>
      <Button onClick={checkData}> check data</Button>
    </Box>
  );
}
