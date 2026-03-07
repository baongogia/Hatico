"use client";

import React, { useState } from "react";
import { Role } from "@/data/products";

interface AuthModalProps {
  onLogin: (role: Role) => void;
}

export default function AuthModal({ onLogin }: AuthModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === "8") {
      onLogin("owner");
    } else if (code.trim() === "hatico") {
      onLogin("guest");
    } else {
      setError("Mã định danh không hợp lệ !");
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-100 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm border border-slate-200 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-1 text-slate-900 text-center tracking-tight font-space-grotesk">
            HATICO
          </h2>
          <p className="text-slate-500 text-sm mb-8 text-center font-medium">
            Hệ thống nội bộ & đối tác
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="password"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
                className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-900 placeholder-slate-400 font-medium transition-all text-center tracking-widest text-lg"
                placeholder="Nhập mã truy cập"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md flex justify-center items-center text-sm"
            >
              Truy Cập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
