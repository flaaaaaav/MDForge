import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box } from "@mui/material";

interface PreviewCardProps {
  markdown: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ markdown }) => {
  return (
    <Box
      sx={{
        minWidth: "500px",
        maxWidth: "500px",
        flex: 1,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        overflowY: "auto",
        fontFamily: "'Fira Code', monospace",
      }}
    >
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default PreviewCard;
