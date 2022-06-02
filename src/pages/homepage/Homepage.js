import React, {useStae, useEffect, useState} from "react";
import { Box, Typography } from "@mui/material";
import Login from "../../sharedComponents/quickLogin/Login";
import logo from "../../static/logo.png";
import "./homepage.css";

export default function Homepage() {
  return (
    <Box
      id="homepage"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        marginTop: "4rem",
      }}
    >
      <Box
        className="homepage-section"
        sx={{
          textAlign: "center",
          width: "30%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <img src={logo} width="125px" />
        <Typography>
          Welcome to SocialSpace. Where the World Connects
        </Typography>
      </Box>
      <Box
        className="homepage-section"
        sx={{
          textAlign: "center",
          width: "30%",
          height: "50%",
          
        }}
      >
        <Box
        className="homepage-section-inner"
          sx={{
            marginTop: "8rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          
          }}
        >
          <Login />
        </Box>
      </Box>
    </Box>
  );
}
