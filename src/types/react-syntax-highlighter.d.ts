declare module "react-syntax-highlighter" {
    import React from "react";
  
    export const Prism: React.FC<{
      children: string;
      style?: any;
      language?: string;
      PreTag?: React.ElementType;
    }>;
  
    export const Light: React.FC<{
      children: string;
      style?: any;
      language?: string;
      PreTag?: React.ElementType;
    }>;
  
    export const registerLanguage: (name: string, language: any) => void;
  
    export default Prism;
  }
  
  declare module "react-syntax-highlighter/dist/esm/styles/prism" {
    export const vscDarkPlus: any;
    export const dracula: any;
  }
  