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
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] w-full overflow-hidden h-full">
      <div className="preloader-section-wrapper flex flex-col justify-center items-center  text-white leading-tight">
            <h1 className="text-[85px] font-semibold ">TOGETHER WE BUILD</h1>
            <div className="flex items-center space-x-4">
                <span className="w-[80px] border-b-6 border-[#F4BE00]"></span>
                <h2 className="text-[85px] font-semibold  whitespace-nowrap">TOMORROW</h2>
                <span className="w-[80px] border-b-6 border-[#F4BE00]"></span>
            </div>
        </div>
    </div>
  );
}
