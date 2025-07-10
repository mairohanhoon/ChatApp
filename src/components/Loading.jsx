import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center bg-slate-900 w-full h-screen">
      <div className="flex flex-col items-center justify-center bg-white/10 w-[90%] h-[90%] overflow-auto rounded-2xl shadow-xl p-6 backdrop-blur-2xl border border-white/20 ring-1 ring-white/10">
        <div className="mb-6">
          <span className="loader block w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
        </div>
        <p className="text-white font-bold text-2xl animate-pulse">
          Loading ...
        </p>
      </div>
    </div>
  );
}