import React, { useState } from "react";
import { X, Plus, Terminal } from "lucide-react";

const AddSnippetModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    language: "javascript",
    tech: "",
    code: "",
    tags: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    };
    onAdd(formattedData);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#1e1e1e] w-full max-w-2xl rounded-xl border border-blue-500/20 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Plus className="text-blue-500" size={20} />
            <h2 className="text-xl font-semibold text-white">
              Create New Snippet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded-lg text-gray-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Title
              </label>
              <input
                required
                name="title"
                placeholder="e.g. MongoDB Connection"
                value={formData.title}
                onChange={handleChange}
                className="bg-[#252526] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Language
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="bg-[#252526] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Tags (comma separated)
            </label>
            <input
              name="tags"
              placeholder="frontend, auth, react"
              value={formData.tags}
              onChange={handleChange}
              className="bg-[#252526] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-500 placeholder:text-gray-600"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Technology
            </label>
            <input
              name="tech"
              placeholder="React , Angular , NodeJs, Express"
              value={formData.tech}
              onChange={handleChange}
              className="bg-[#252526] border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:border-blue-500 placeholder:text-gray-600"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Code Snippet
              </label>
              <Terminal size={14} className="text-gray-600" />
            </div>
            <textarea
              required
              name="code"
              rows={10}
              placeholder="// Paste your code here..."
              value={formData.code}
              onChange={handleChange}
              className="bg-[#0d0d0d] border border-gray-800 rounded-md px-3 py-2 text-blue-300 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none shadow-inner"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-md text-sm font-semibold transition-all shadow-lg shadow-blue-900/40 active:scale-95"
            >
              Create Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSnippetModal;
