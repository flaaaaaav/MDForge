import React from "react";
import { Box, Typography } from "@mui/material";

import "@fontsource/fira-code";

const Footer: React.FC = () => {
  return (
    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        maxHeight: "500px",
        flexDirection: { xs: "column", lg: "row" },
        textAlign: "center",
        margin: "0 auto",
        padding: 2,
      }}
    >

      <Typography variant="h6" sx={{fontSize: "14px", fontWeight: "bold", textAlign: "center"}}>© Flavio Salas 2024</Typography>

    </Box>
  );
};

export default Footer;
