import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Editor from "./Editor";
import Footer from "./footer";
import "@fontsource/fira-code";
import Banner from "./banner";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(() => {
    return localStorage.getItem("markdown") || "";
  });

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdown");
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
    }
  }, []);

  return (
    <Box
      sx={{
        gap: 2,
        padding: 2,
        maxWidth: "1200px",
      }}
    >
      <Banner markdown={markdown} />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Footer />
    </Box>
  );
};

export default App;
