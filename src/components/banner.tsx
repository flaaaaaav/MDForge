import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface BannerProps {
  markdown: string;
}

const Banner: React.FC<BannerProps> = ({ markdown }) => {
  const downloadFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          fontFamily: "'Fira Code', monospace",
        }}
      >
        README.md Generator
      </Typography>
      <Button
  onClick={downloadFile}
  disabled={!markdown.trim()}
  sx={{
    bgcolor: "#222",
    fontFamily: "'Fira Code', monospace",
    textTransform: "none",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease", 
      boxShadow: "none",
    },
    "&.Mui-disabled": {
      bgcolor: "#222",
      color: "white", 
      opacity: 0.2,
      cursor: "not-allowed",
      boxShadow: "none",
      transform: "none",
    },
  }}
>
  Download README.md
</Button>


    </Box>
  );
};

export default Banner;
