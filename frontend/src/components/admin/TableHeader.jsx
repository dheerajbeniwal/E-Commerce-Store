"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function TableHeader({
  module = "category",
  add_page = "/admin/category/add",
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{module}</h2>

      <Link
        href={`/${add_page.replace(/^\/+/, "")}`}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        <Plus className="w-5 h-5" />
        Add {module}
      </Link>
    </div>
  );
}
