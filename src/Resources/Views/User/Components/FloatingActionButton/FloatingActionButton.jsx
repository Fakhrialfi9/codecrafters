import React, { useState } from "react";

import "./../../../../Style/Components/FloatingActionButton/FloatingActionButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faTimes } from "@fortawesome/free-solid-svg-icons";

import ChatMessage from "./../../../../LogicBoard/FloatingActionButton/ApparanceChatMessage";
import { useChatLogic } from "./../../../../LogicBoard/FloatingActionButton/LiveChat";

function FloatingActionButton() {
  const { user, inputText, messages, handleInputChange, handleSendMessage } = useChatLogic(); // Gunakan logika chat yang telah diimpor

  const handleSendMessageClick = () => {
    handleSendMessage(inputText);
  };

  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      // Menonaktifkan scrolling
      document.documentElement.style.overflow = "hidden"; // Untuk <html>
      document.body.style.overflow = "hidden"; // Untuk <body>
    } else {
      // Mengaktifkan scrolling
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseSlideBar = () => {
    setIsActive(false);
    // Mengaktifkan scrolling ketika menutup
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };
  return (
    <main>
      <section>
        <div className="FloatingActionButtonContainer">
          <div className="FloatingActionButtonContent">
            <button onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faMessage} />
            </button>
          </div>
        </div>
      </section>
      <div onClick={handleCloseSlideBar} className={`OpacityBackgroundSliderBar  ${isActive ? "active" : ""}`}></div>
      <div className={`FloatingActionButtonLiveChat  ${isActive ? "active" : ""}`}>
        <div className="FloatingActionButtonLiveChatContainer">
          <div className="FloatingActionButtonLiveChatContent">
            {/* Start Top Content Live Chat */}
            <div className="FloatingActionButtonLiveChatTop">
              <div className="FloatingActionButtonLiveChatTopLeft">Chat Assistant</div>
              <div className="FloatingActionButtonLiveChatTopRight">
                <button className="FloatingActionButtonLiveChatTopRightButton">
                  <FontAwesomeIcon onClick={handleCloseSlideBar} icon={faTimes} />
                </button>
              </div>
            </div>
            {/* End Top Content Live Chat */}

            {/* Start Center Content Live Chat */}
            <div className="FloatingActionButtonLiveChatCenter">
              <div className="FloatingActionButtonLiveChatCenterChatContainer">
                {messages.map((message, index) => (
                  <ChatMessage key={index} text={message.text} type={message.type} />
                ))}
              </div>
            </div>
            {/* End Center Content Live Chat */}

            {/* Start Bottom Content Live Chat */}
            <div className="FloatingActionButtonLiveChatBottom">
              <div className="FloatingActionButtonLiveChatBottomContent">
                <div class="FloatingActionButtonLiveChatBottomtButton">
                  <input autoComplete="off" type="text" placeholder="What You Need?" name="textarea" value={inputText} onChange={handleInputChange} />
                  <button onClick={handleSendMessageClick} type="send">
                    Send
                  </button>
                </div>
              </div>
            </div>
            {/* End Bottom Content Live Chat */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default FloatingActionButton;
