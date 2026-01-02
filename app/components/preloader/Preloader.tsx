"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 sec
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
   <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] w-full h-full overflow-hidden">
  <div className="preloader-section-wrapper flex flex-col items-center justify-center text-white leading-tight px-4">
    <h1 className="text-[28px] sm:text-[36px] md:text-[85px] font-semibold text-center">
      TOGETHER WE BUILD
    </h1>
    <div className="flex items-center space-x-2 sm:space-x-4 mt-2">
      <span className="w-[40px] sm:w-[60px] md:w-[80px] border-b-[4px] md:border-b-6 border-[#F4BE00]"></span>

      <h2 className="text-[42px] sm:text-[60px] md:text-[85px] font-semibold whitespace-nowrap">
        TOMORROW
      </h2>

      <span className="w-[40px] sm:w-[60px] md:w-[80px] border-b-[4px] md:border-b-6 border-[#F4BE00]"></span>
    </div>

  </div>
</div>
  );
}
