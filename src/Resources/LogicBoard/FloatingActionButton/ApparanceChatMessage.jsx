// ChatMessage.js
import React from "react";

const ChatMessage = ({ text, type }) => {
  return <div className={`FloatingActionButtonLiveChatCenterChatContent ${type}`}>{text}</div>;
};

export default ChatMessage;
