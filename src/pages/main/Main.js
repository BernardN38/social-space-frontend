import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from '../../sharedComponents/navbar/Navbar';

export default function Main() {

  return (
    <Box height="100vh">
      <Navbar/>
      <Outlet />
    </Box>
  );
}
