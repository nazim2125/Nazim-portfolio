import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../style.css";

const markdownComponents = {
  a: ({ children, node, ...props }) => {
    void node;

    return (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  table: ({ node, ...props }) => {
    void node;

    return (
      <div className="career-chatbot-table-wrapper">
        <table {...props} />
      </div>
    );
  },
};

function CareerChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Nazim's AI Career Assistant. 👋 Ask me about his experience, skills, projects, or QA/SDET expertise.",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "What are Nazim's strongest skills?",
    "Tell me about his Selenium experience.",
    "Does Nazim have API testing experience?",
    "What personal projects has he built?",
    "How does his experience match a Senior SDET role?",
  ];

  const sendMessage = async (text = input) => {
    const question = text.trim();

    if (!question || isLoading) {
      return;
    }

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        text: question,
      },
    ]);

    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error("Career chatbot error:", error);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: "bot",
          text: "Sorry, I couldn't process that question right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="career-chatbot-button"
          aria-label="Open AI Career Assistant"
        >
          🤖
        </button>
      )}

      {isOpen && (
        <div className="career-chatbot-window">

          {/* Header */}
          <div className="career-chatbot-header">
            <div>
              <strong>🤖 Nazim AI Career Assistant</strong>

              <div className="career-chatbot-status">
                <span>●</span> Online
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="career-chatbot-close"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="career-chatbot-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "bot"
                    ? "career-chatbot-bot-message"
                    : "career-chatbot-user-message"
                }
              >
                {message.sender === "bot" ? (
                  <ReactMarkdown
                    className="career-chatbot-markdown"
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents}
                    skipHtml
                  >
                    {message.text}
                  </ReactMarkdown>
                ) : (
                  message.text
                )}
              </div>
            ))}

            {isLoading && (
              <div className="career-chatbot-bot-message">
                <div className="career-chatbot-markdown">Thinking...</div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="career-chatbot-quick-questions">

                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(question)}
                    className="career-chatbot-quick-button"
                  >
                    {question}
                  </button>
                ))}

              </div>
            )}
          </div>

          {/* Input */}
          <div className="career-chatbot-input-area">

            <input
              type="text"
              placeholder="Ask about Nazim..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
              className="career-chatbot-input"
              disabled={isLoading}
            />

            <button
              onClick={() => sendMessage()}
              className="career-chatbot-send"
              disabled={isLoading}
              aria-label="Send message"
            >
              {isLoading ? "..." : "➤"}
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default CareerChatbot;
