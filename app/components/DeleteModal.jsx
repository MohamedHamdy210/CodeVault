import React from "react";
import { AlertTriangle, Trash2, X } from "lucide-react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#1e1e1e] w-full max-w-md rounded-xl border border-red-900/30 shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center gap-3 p-6 pb-2">
          <div className="p-2 bg-red-500/10 rounded-full">
            <AlertTriangle className="text-red-500" size={24} />
          </div>
          <h2 className="text-xl font-semibold text-white">Delete Snippet?</h2>
        </div>

        <div className="p-6 pt-2">
          <p className="text-gray-400 text-sm leading-relaxed">
            Are you sure you want to delete{" "}
            <span className="text-gray-200 font-medium">{itemName}</span>? This
            action cannot be undone and will permanently remove it from your
            vault.
          </p>

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-red-900/20"
            >
              <Trash2 size={16} />
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
