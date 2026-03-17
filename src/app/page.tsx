"use client";

import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import FloatingCall from "@/components/FloatingCall";
import { Role } from "@/data/products";

export default function Home() {
  const [role, setRole] = useState<Role>("guest");
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"snap" | "grid">("snap");

  const handleLogin = (selectedRole: Role) => {
    setRole(selectedRole);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-inter selection:bg-cyan-500/30 overflow-hidden h-svh">
      {role && (
        <div className="relative h-full w-full">
          {/* Header has absolute position in this layout to float above snap sections */}
          <div className="absolute top-0 left-0 w-full z-40">
            <Header
              role={role}
              filter={filter}
              setFilter={setFilter}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
          </div>

          <main className="h-full w-full">
            <ProductList role={role} filter={filter} viewMode={viewMode} />
          </main>

          {/* Only show floating call button if not an owner */}
          {role !== "owner" && <FloatingCall />}
        </div>
      )}
    </div>
  );
}
