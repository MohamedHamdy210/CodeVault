'use client'
import React, { useState } from "react";
import SnippetCard from "./SnippetCard"; 
import AddSnippetModal from "./AddModal";
import AddButton from "./AddButton";

const SnippetGrid = ({ snippets}) => {
  const [isAddModal,setIsAddModal]=useState(false)
  const handleAddSnippet = async (newData) => {
    const res = await fetch("/api/snippets", {
      method: "POST",
      body: JSON.stringify(newData),
    });

    if (res.ok) {
      setIsAddModal(false);
      router.refresh(); 
    }
  };
  if (snippets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-800 rounded-2xl">
        <p className="text-gray-500 font-medium">
          No snippets found in your vault.
        </p>
        <button onClick={()=>{
          setIsAddModal(true)
        }} className="mt-4 text-blue-500 hover:underline text-sm cursor-pointer">
          Create your first one
        </button>
        <AddSnippetModal
          isOpen={isAddModal}
          onClose={() => setIsAddModal(false)}
          onAdd={handleAddSnippet}
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-350 my-10 mx-auto px-6 pb-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
          Recent Snippets{" "}
          <span className="ml-2 text-gray-600">({snippets.length})</span>
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet._id}
            snippet={snippet}
            
          />
        ))}
      </div>
      <AddButton/>
    </div>
  );
};

export default SnippetGrid;
