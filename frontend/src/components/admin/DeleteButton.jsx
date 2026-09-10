"use client";

import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
      title="Delete"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
