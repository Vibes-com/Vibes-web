"use client";

import { useSubscribeNowMutation } from "@/app/redux/api/subscribeApi";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function SubscribeBox() {
  const [email, setEmail] = useState("");

  const [subscribeNow, { isLoading, data, error }] =
    useSubscribeNowMutation();

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await subscribeNow({ email }).unwrap();
    } catch {
      // handled by useEffect below
    }
  };

  /* 🔔 TOASTER HANDLING */
  useEffect(() => {
    if (data) {
      if (data.success) {
        toast.success(data.message);
        setEmail("");
      } else {
        toast.error(data.message);
      }
    }

    if (error && "data" in error) {
      toast.error(
        (error.data as { message?: string })?.message ||
          "Something went wrong"
      );
    }
  }, [data, error]);

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email ID"
          className="w-full bg-[#6D6D6D54] border-[2px] border-[#7373732B] px-5 py-3 pr-40 rounded-full focus:outline-none text-[#A3A3A3]"
        />

        <button
          type="button"
          onClick={handleSubscribe}
          disabled={isLoading}
          className="absolute top-1/2 -translate-y-1/2 right-1 bg-[#161616] text-white font-semibold px-6 py-2 rounded-full disabled:opacity-60"
        >
          {isLoading ? "Submitting..." : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
}
