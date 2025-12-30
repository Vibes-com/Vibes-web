"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <ChatWindow onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        💬
      </button>
    </>
  );
}
