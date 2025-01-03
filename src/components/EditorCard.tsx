import React, { useEffect } from "react";
import { Box, TextareaAutosize } from "@mui/material";

interface EditorCardProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const EditorCard: React.FC<EditorCardProps> = ({ markdown, setMarkdown }) => {
  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  return (
    <Box
      sx={{
        minWidth: "400px",
        maxWidth: "400px",
        flex: 1,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        fontFamily: "'Fira Code', monospace",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextareaAutosize
        minRows={20}
        style={{
          width: "100%",
          height: "100%",
          resize: "none",
          border: "none",
          outline: "none",
          fontSize: "16px",
          fontFamily: "'Fira Code', monospace",
          overflow: "auto",
        }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your README.md here..."
      />
    </Box>
  );
};

export default EditorCard;
