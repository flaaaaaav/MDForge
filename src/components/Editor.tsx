import React from "react";
import { Box } from "@mui/material";
import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import Templates from "./Templates";

interface EditorProps {
  markdown: string;
  setMarkdown: (value: string | ((prevMarkdown: string) => string)) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  const insertTemplate = (template: string) => {
    setMarkdown((prevMarkdown: string) => prevMarkdown + template);
  };

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "500px",
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
        padding: 2,
      }}
    >
      <Templates insertTemplate={insertTemplate} />
      <EditorCard markdown={markdown} setMarkdown={setMarkdown} />
      <PreviewCard markdown={markdown} />
    </Box>
  );
};

export default Editor;
