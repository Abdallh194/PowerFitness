import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

export default Root;
