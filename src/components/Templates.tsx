import React from "react";
import { Button, Box } from "@mui/material";

interface TemplatesProps {
  insertTemplate: (template: string) => void;
}

const Templates: React.FC<TemplatesProps> = ({ insertTemplate }) => {
  const templates = [
    { label: "Title", value: "# Your title\n" },
    { label: "Subtitle", value: "## Your subtitle\n" },
    { label: "Code Block", value: "```bash\n# Your code goes here\n```\n" },
    { label: "List Item", value: "- List Item \n" },
    { label: "Link", value: "[URL](http://www.example.com)\n" },
    { label: "Page Break", value: "\n" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        padding: 2,
        borderRadius: 2,
        border: "1px solid #ccc",
      }}
    >
      {templates.map((template) => (
        <Button
        key={template.label}
        variant="contained"
        onClick={() => insertTemplate(template.value)}
        sx={{
          bgcolor: "#222",
          fontFamily: "'Fira Code', monospace",
          boxShadow: "none",
          '&:hover': {
            transform: 'translateX(8px)',
            transition: 'transform 0.3s ease',
            boxShadow: "none",
          },
        }}
      >
        {template.label}
      </Button>
      
      ))}
    </Box>
  );
};

export default Templates;
