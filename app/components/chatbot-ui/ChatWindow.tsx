"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import SuggestedPills from "./SuggestedPills";
import ImageCarousel from "./ImageCarousel";
// import ContactForm from "../ContactForm";
// import Timeline from "../Timeline";
import CTAButton from "./CTAButton";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
  images?: string[];
  response_type?: "text" | "cta" | "contact_form" | "portfolio" | "timeline";
};

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  // At the top of your component, add state for session ID
  // const [sessionId] = useState(() => uuidv4());
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I’m Vibes AI. How can I help you today?",
      response_type: "text",
    },
  ]);

  const [suggestedPills, setSuggestedPills] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages, loading]);

  const loadingTexts = [
    "typing...",
    "thinking...",
    "processing...",
    "just a second...",
    "almost ready...",
    "working on it...",
  ];

  const [loadingText, setLoadingText] = useState(loadingTexts[0]);

  useEffect(() => {
    let interval: any;

    if (loading) {
      interval = setInterval(() => {
        setLoadingText(
          loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [loading]);

  const streamAssistantMessage = (fullText: string, images: string[], response_type?: Message["response_type"]) => {
    let index = 0;
    const speed = 12;

    const interval = setInterval(() => {
      index += speed;
      const partial = fullText.slice(0, index);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: partial,
          images,
          response_type,
        };
        return updated;
      });

      if (index >= fullText.length) clearInterval(interval);
    }, 25);
  };



 const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = input;
  console.log("📤 Sending message:", userMessage);
  console.log("🔑 Current session ID:", sessionId);

  // 1️⃣ Add user message
  setMessages(prev => [...prev, { role: "user", content: userMessage }]);
  setInput("");
  setLoading(true);

  // 2️⃣ Add empty assistant message
  setMessages(prev => [
    ...prev,
    {
      role: "assistant",
      content: "",
      response_type: "text",
      images: [],
    },
  ]);

  let streamedText = "";
  let currentSessionId = sessionId;

  try {
    // ==============================
    // 3️⃣ STREAM REQUEST
    // ==============================
    console.log("🌊 Starting stream request...");
    
    const streamPayload: any = {
      message: userMessage,
    };
    
    // Include session_id if we have one from previous messages
    if (sessionId) {
      streamPayload.session_id = sessionId;
    }
    
    const streamRes = await fetch("https://wlbot.vibescom.co.in/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(streamPayload),
    });

    // ==============================
    // 🔑 EXTRACT SESSION_ID FROM HEADERS
    // ==============================    
    // Try common header names (adjust based on your API)
    const headerSessionId = 
      streamRes.headers.get('X-Session-Id') || 
      streamRes.headers.get('session_id') || 
      streamRes.headers.get('Session-Id') ||
      streamRes.headers.get('X-Session-ID');
    
      console.log("session id ", streamRes.headers)

    if (headerSessionId) {
      currentSessionId = headerSessionId;
      setSessionId(headerSessionId);
      console.log("🔑 Session ID from header:", headerSessionId);
    } else {
      console.warn("⚠️ No session_id found in headers");
    }

    if (!streamRes.ok) {
      const errorText = await streamRes.text();
      console.warn("⚠️ Stream request failed:", streamRes.status, errorText);
      throw new Error(`Stream failed: ${streamRes.status}`);
    }

    // ==============================
    // 4️⃣ READ RESPONSE TEXT
    // ==============================
    console.log("📖 Reading response...");
    const fullText = await streamRes.text();
    console.log("📝 Raw response (first 300 chars):", fullText.substring(0, 300));

    let responseText = fullText;
    
    try {
      const parsed = JSON.parse(fullText);
      console.log("✅ Parsed JSON response:", parsed);
      
      // Extract the text content (adjust based on your API structure)
      responseText = parsed.text || parsed.response || parsed.message || parsed.reply || fullText;
      
    } catch (e) {
      console.log("ℹ️ Response is plain text, not JSON");
      responseText = fullText;
    }

    streamedText = responseText;
    console.log("📊 Extracted text length:", streamedText.length);

    // ==============================
    // 5️⃣ UPDATE UI WITH STREAMING EFFECT
    // ==============================
    console.log("✨ Simulating stream in UI...");
    const words = responseText.split(' ');
    const chunkSize = 3;
    
    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize).join(' ') + ' ';
      
      setMessages(prev => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = {
          ...updated[lastIndex],
          content: updated[lastIndex].content + chunk,
        };
        return updated;
      });
      
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // ==============================
    // 6️⃣ FINALIZE (only if we have session_id)
    // ==============================
    // if (currentSessionId) {
    //   console.log("🏁 Calling finalize with session:", currentSessionId);
      
    //   const finalizeRes = await fetch("https://wlbot.vibescom.co.in/chat/finalize", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       message: userMessage,
    //       fullReply: streamedText,
    //       session_id: currentSessionId,
    //     }),
    //   });

    //   console.log("✅ Finalize response status:", finalizeRes.status);

    //   if (!finalizeRes.ok) {
    //     const errorText = await finalizeRes.text();
    //     console.warn("⚠️ Finalize failed:", errorText);
    //     console.warn("⚠️ Continuing despite finalize error");
    //   } else {
    //     const finalizeData = await finalizeRes.json();
    //     console.log("📊 Finalize data:", finalizeData);

    //     // Update suggested pills
    //     if (finalizeData.suggested_questions) {
    //       setSuggestedPills(finalizeData.suggested_questions);
    //       console.log("💊 Updated suggested pills:", finalizeData.suggested_questions.length);
    //     }

    //     // Update metadata on last assistant message
    //     setMessages(prev => {
    //       const updated = [...prev];
    //       const lastIndex = updated.length - 1;
    //       updated[lastIndex] = {
    //         ...updated[lastIndex],
    //         response_type: finalizeData.response_type ?? "text",
    //         images: finalizeData.images ?? [],
    //       };
    //       return updated;
    //     });
    //   }
    // } else {
    //   console.warn("⚠️ Skipping finalize - no session_id available");
    // }

    if (currentSessionId) {
      console.log("🏁 Calling finalize with session:", currentSessionId);
      
      // Build URL with session_id as query parameter
      const finalizeUrl = `https://wlbot.vibescom.co.in/chat/finalize?session_id=${currentSessionId}`;
      console.log("🔗 Finalize URL:", finalizeUrl);
      
      const finalizeRes = await fetch(finalizeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          fullReply: streamedText,
          // session_id NOT in body
        }),
      });

      console.log("✅ Finalize response status:", finalizeRes.status);

      if (!finalizeRes.ok) {
        const errorText = await finalizeRes.text();
        console.warn("⚠️ Finalize failed:", errorText);
      } else {
        const finalizeData = await finalizeRes.json();
        console.log("📊 Finalize data:", finalizeData);

        if (finalizeData.suggested_questions) {
          setSuggestedPills(finalizeData.suggested_questions);
        }

        // setMessages(prev => {
        //   const updated = [...prev];
        //   const lastIndex = updated.length - 1;
        //   updated[lastIndex] = {
        //     ...updated[lastIndex],
        //     response_type: finalizeData.response_type ?? "text",
        //     images: finalizeData.images ?? [],
        //   };
        //   return updated;
        // });
      }
    } else {
      console.warn("⚠️ Skipping finalize - no session_id available");
    }
    console.log("✅ Message complete!");
    
  } catch (error) {
    console.warn("⚠️ CHAT ERROR:", error);
    console.warn("Error details:", error instanceof Error ? error.message : error);

    // Update the message with error or partial content
    setMessages(prev => {
      const updated = [...prev];
      const lastIndex = updated.length - 1;
      updated[lastIndex] = {
        ...updated[lastIndex],
        content: streamedText || "⚠️ Something went wrong. Please try again.",
      };
      return updated;
    });
  } finally {
    setLoading(false);
    console.log("🔚 Complete");
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 50 }}
      className="fixed bottom-0 right-5 w-[90%] sm:w-[320px] md:w-[320px] lg:w-[320px] h-[450px] bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden border"
    >
      {/* HEADER */}
      <div className="p-4 bg-[#466e59] text-white flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">Vibes AI</h3>
          <p className="text-sm opacity-80">Your brand assistant</p>
        </div>
        <button onClick={onClose}>✖</button>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-gray-50 text-[16px]">
        {messages.map((msg, index) => (
          <div key={index}>
            <div
              className={`p-4 max-w-[85%] rounded-2xl whitespace-pre-wrap ${msg.role === "user" ? "bg-black text-white ml-auto" : "bg-white border"
                }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ node, ...props }) => (
                    <p className="mb-[2px] leading-tight text-[14px]">{props.children}</p>
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold">{props.children}</strong>
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc ml-3 space-y-[1px] text-[14px] leading-tight">
                      {props.children}
                    </ul>
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal ml-3 space-y-[1px] text-[14px] leading-tight">
                      {props.children}
                    </ol>
                  ),
                  li: ({ node, ...props }) => (
                    <li className="pl-[1px]">{props.children}</li>
                  ),
                  h1: ({ node, ...props }) => (
                    <h1 className="text-[15px] font-bold mb-[2px]">{props.children}</h1>
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-[14px] font-semibold mb-[1px] mt-[2px]">
                      {props.children}
                    </h2>
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-[2px] border-gray-300 pl-2 italic text-gray-600 my-[2px] leading-tight">
                      {props.children}
                    </blockquote>
                  ),
                  br: () => <br className="m-0 p-0" />,
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    />
                  ),
                }}
              >
                {msg.content}
              </ReactMarkdown>



            </div>

            {/* dynamic UI */}

            {msg.response_type === "contact_form" && <Button onClick={() => setShowForm(true)}><Link href="https://www.vibescom.in/contact-for-digital-requirements">Contact Form</Link></Button>}

            {/* {msg.response_type === "timeline" && (
              <Timeline steps={["Research", "Planning", "Design", "Development"]} />
            )} */}

            {msg.response_type === "portfolio" && Array.isArray(msg.images) && msg.images.length > 0 && (
              <div className="mt-2">
                {/* <imgCarousel images={msg.images} /> */}
              </div>
            )}
          </div>
        ))}
{/* 
        {loading && (
          <div className="p-3 bg-white border w-fit rounded-xl">{loadingText}</div>
        )} */}

        <div ref={messagesEndRef} />
      </div>

      {/* DYNAMIC PILLS */}
      <SuggestedPills pills={suggestedPills} onSelect={(q) => setInput(q)} />

      {/* INPUT BAR */}
      <div className="p-3 border-t flex flex-wrap gap-2 bg-white">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // optional, safe
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage} className="cursor-pointer bg-[#F4BE00] text-white px-4 rounded-lg">➤</button>
      </div>
    </motion.div>
  );
}
