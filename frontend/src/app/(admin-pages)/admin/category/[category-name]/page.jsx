"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  MoreVertical,
  Pencil,
  Trash2,
  ToggleLeft,
  ImageOff,
} from "lucide-react";

const initialCategories = [
  { id: 1, name: "Laptop", slug: "laptop", image: null, status: "active" },
  { id: 2, name: "Watches", slug: "watches", image: null, status: "active" },
  {
    id: 3,
    name: "Gardening",
    slug: "gardening",
    image: null,
    status: "active",
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    image: null,
    status: "inactive",
  },
  { id: 5, name: "Fashion", slug: "fashion", image: null, status: "active" },
  { id: 6, name: "Kitchen", slug: "kitchen", image: null, status: "inactive" },
];

function ActionMenu({ onEdit, onDelete, onToggleStatus, status }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    // position:static on td, so we use fixed-like portal via overflow-visible
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500 hover:text-gray-700"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 z-[999] overflow-hidden">
          <button
            onClick={() => {
              onEdit();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            <Pencil className="w-3.5 h-3.5 text-teal-500" />
            Edit
          </button>
          <button
            onClick={() => {
              onToggleStatus();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            <ToggleLeft className="w-3.5 h-3.5 text-blue-500" />
            {status === "active" ? "Set Inactive" : "Set Active"}
          </button>
          <div className="border-t border-gray-100" />
          <button
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function CategoryPage() {
  const [categories, setCategories] = useState(initialCategories);

  const handleDelete = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const handleToggleStatus = (id) => {
    setCategories((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "inactive" : "active" }
          : c,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Category Management
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage Get, Create, Update, and Delete
          </p>
        </div>
        <Link
          href="/admin/category/add"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition shadow-sm shadow-teal-200 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </Link>
      </div>

      {/* Table Card — overflow-visible so dropdown never clips */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-visible">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">
                  Image
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-20">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {categories.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-16 text-gray-400 text-sm"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50/60 transition">
                  {/* Image */}
                  <td className="px-6 py-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center border border-gray-200">
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageOff className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {cat.name}
                  </td>

                  {/* Slug */}
                  <td className="px-6 py-4 text-gray-500">{cat.slug}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    {cat.status === "active" ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 border border-gray-200">
                        Inactive
                      </span>
                    )}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">
                    <ActionMenu
                      status={cat.status}
                      onEdit={() => {}}
                      onDelete={() => handleDelete(cat.id)}
                      onToggleStatus={() => handleToggleStatus(cat.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
