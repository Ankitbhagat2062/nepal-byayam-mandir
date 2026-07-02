"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, User, ShieldAlert } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Namaste! I am the Nepal Byayam Mandir AI Assistant. Ask me about our 1953 pioneer heritage, the prestigious Dharma Shree Bodybuilding tournament, our 6 fitness programs, or our 9 membership categories.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = { sender: "user", text: textToSend, timestamp };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await response.json();

      setIsLoading(false);

      if (data.reply) {
        // Stream effect: append character by character (simplified fast interval)
        const fullReply = data.reply;
        const botMsg: Message = { sender: "bot", text: "", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
        
        setMessages((prev) => [...prev, botMsg]);
        
        let currentText = "";
        let charIndex = 0;
        
        const interval = setInterval(() => {
          if (charIndex < fullReply.length) {
            currentText += fullReply[charIndex];
            setMessages((prev) => {
              const next = [...prev];
              if (next.length > 0) {
                next[next.length - 1] = {
                  ...next[next.length - 1],
                  text: currentText,
                };
              }
              return next;
            });
            charIndex += 4; // Add a few chars at a time to speed it up while looking natural
            if (scrollRef.current) {
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
          } else {
            clearInterval(interval);
            // Ensure the exact full text is set at the end
            setMessages((prev) => {
              const next = [...prev];
              if (next.length > 0) {
                next[next.length - 1] = {
                  ...next[next.length - 1],
                  text: fullReply,
                };
              }
              return next;
            });
          }
        }, 15);
      }
    } catch (error) {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I apologize, I am having trouble connecting to my knowledge base edge routes. Please try again shortly.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  };

  const samplePrompts = [
    "Tell me about Dharma Shree legacy",
    "What are the 9 memberships?",
    "Tell me about your 1953 history",
    "Sauna usage rules",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Circle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:bg-gold-hover hover:scale-105 transition-all duration-200 border border-primary/20 relative"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-background" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-100 h-137.5 bg-card border border-border/80 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          
          {/* Header */}
          <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm tracking-wide">NBM AI Assistant</h4>
                <p className="text-[10px] text-white/80">Edge Knowledge Node • Est. 1953</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/15 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 bg-background/50 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                    msg.sender === "user"
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-card border-border text-primary"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble */}
                <div className="space-y-1">
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-card border border-border/80 text-foreground rounded-tl-none"
                    }`}
                  >
                    {msg.text || (
                      <span className="flex items-center gap-1.5 py-0.5">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </span>
                    )}
                  </div>
                  <span className="block text-[8px] text-muted-foreground px-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="p-3 bg-card border-t border-border/40 space-y-2">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Suggested Questions</p>
              <div className="flex flex-wrap gap-1.5">
                {samplePrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[10px] font-semibold bg-background hover:bg-primary/5 hover:text-primary transition-all border border-border/70 rounded-full px-3 py-1.5 text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-card border-t border-border/50 flex gap-2">
            <input
              type="text"
              placeholder="Ask anything about the gymnasium..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
              disabled={isLoading}
              className="flex-1 px-3 py-2 bg-background border border-border rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-gold-hover transition-colors disabled:opacity-50 flex items-center justify-center"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
