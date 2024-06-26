import React from "react";

function TextTruncate({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  const truncatedText = text.slice(0, maxLength) + "...";

  return <span title={text}>{truncatedText}</span>;
}

export default TextTruncate;
