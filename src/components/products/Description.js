"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";
import { useSelector } from "react-redux";

function ProductDescription({ description }) {
    const {theme}=useSelector((state) => state.userPreference);
  return (
    <div className="mt-4">
    <MarkdownPreview source={description} style={{ 
        whiteSpace: "pre-wrap", 
        background: "transparent",
    
    }} 
    wrapperElement={{
        'data-color-mode': theme,
    }}/>
    </div>
  );
}

export default ProductDescription;
