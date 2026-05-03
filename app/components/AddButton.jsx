"use client";
import { Plus } from "lucide-react";
import AddSnippetModal from "./AddModal";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddButton() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const router = useRouter()
  const handleAddSnippet = async (newData) => {
    const res = await fetch("/api/snippets", {
      method: "POST",
      body: JSON.stringify(newData),
    });

    if (res.ok) {
      setIsAddOpen(false);
      router.refresh(); 
    }
  };

  return (
    <>
      <button
        onClick={() => setIsAddOpen(true)} 
        className="fixed bottom-8 right-8 z-100 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-900/40 hover:bg-blue-500 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Add new snippet"
      >
        <Plus
          size={28}
          strokeWidth={2.5}
          className="group-hover:rotate-90 transition-transform duration-300"
        />

        
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700 whitespace-nowrap pointer-events-none">
          Add New Snippet
        </span>
      </button>
      <AddSnippetModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAddSnippet}
      />
    </>
  );
}
