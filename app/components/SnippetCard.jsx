"use client";
import { Copy, Edit3, Trash2, Code2, Check } from "lucide-react";
import { useState } from "react";
import EditSnippetModal from "./EditModal";
import { useRouter } from "next/navigation";
import DeleteConfirmModal from "./DeleteModal";
import { useAuth } from "@clerk/nextjs";

const SnippetCard = (props) => {
  const { userId } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [snippet, setSnippet] = useState(props.snippet || {});
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  const handleEditClick = (snippet) => {
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (updatedData) => {
    const res = await fetch(`/api/snippets/${snippet._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      setIsEditModalOpen(false);
      const updatedSnippet = await res.json();
      setSnippet(updatedSnippet);
    }
  };
  const handleDelete = async () => {
    const res = await fetch(`/api/snippets/${snippet._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setIsDeleteModalOpen(false);
      router.refresh();
    }
  };
  return (
    <>
      <div className="group relative bg-[#1e1e1e] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl  ">
        <div className="flex items-center justify-between px-2 py-3 bg-[#252526] border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Code2 size={18} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-200 truncate w-40">
                {snippet.title}
              </h3>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                {snippet.tech}
              </span>
            </div>
          </div>

          {snippet.ownerCId == userId && (
            <div className="  flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity  ">
              <button
                onClick={handleEditClick}
                className="p-2 hover:bg-gray-700 rounded-md text-gray-400 hover:text-white transition-colors"
              >
                <Edit3 size={16} />
              </button>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
                className="p-2 hover:bg-red-500/10 rounded-md text-gray-400 hover:text-red-400 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="relative p-4 bg-[#1e1e1e] min-h-50 overflow-auto custom-scrollbar">
          <pre className="text-xs font-mono text-blue-300 leading-relaxed whitespace-pre">
            <code>{snippet.code}</code>
          </pre>
        </div>

        <div className="px-4 py-3 bg-[#1e1e1e] flex gap-2 flex-wrap">
          {snippet.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:border-blue-500/50 cursor-default"
            >
              #{tag}
            </span>
          ))}
          
          <button
            onClick={handleCopy}
            className={`absolute bottom-3 right-3 p-2 border rounded-md backdrop-blur-sm transition-all transform 
    ${
      copied
        ? "bg-green-500/20 border-green-500 text-green-400"
        : "bg-gray-800/80 border-gray-700 text-white hover:bg-blue-600 translate-y-2 group-hover:translate-y-0"
    }`}
          >
            {copied ? (
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold">Copied!</span>
                <Check size={14} />
              </div>
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>

      <EditSnippetModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        snippet={snippet}
        onSave={handleUpdate}
      />
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        itemName={snippet.title}
      />
    </>
  );
};

export default SnippetCard;
