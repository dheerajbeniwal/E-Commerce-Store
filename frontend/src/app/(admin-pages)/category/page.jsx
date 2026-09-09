"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";

export default function CategoryTable() {
  // Sample category data
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Electronics",
      slug: "electronics",
      image: "https://via.placeholder.com/50",
      status: true,
    },
    {
      id: "2",
      name: "Fashion",
      slug: "fashion",
      image: "https://via.placeholder.com/50",
      status: false,
    },
    {
      id: "3",
      name: "Home & Kitchen",
      slug: "home-kitchen",
      image: "https://via.placeholder.com/50",
      status: true,
    },
  ]);

  // Toggle status handler
  const handleToggleStatus = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, status: !cat.status } : cat,
      ),
    );
  };

  // Delete category handler
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Top Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
        <Link
          href="/admin/category/create"
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </Link>
      </div>

      {/* Category Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200 text-gray-600 uppercase text-xs">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Slug</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 transition">
                {/* Image */}
                <td className="py-3 px-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-cover rounded-md border border-gray-200"
                  />
                </td>

                {/* Name */}
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {category.name}
                </td>

                {/* Slug */}
                <td className="py-3 px-4 text-gray-500 font-mono text-xs">
                  {category.slug}
                </td>

                {/* Status Button Toggle */}
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleToggleStatus(category.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition ${
                      category.status
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    }`}
                  >
                    {category.status ? (
                      <>
                        <CheckCircle className="w-4 h-4" /> Active
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" /> Inactive
                      </>
                    )}
                  </button>
                </td>

                {/* Action Buttons (Edit & Delete) */}
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {/* Edit Button */}
                    <Link
                      href={`/admin/category/edit/${category.id}`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit Category"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete Category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan={5} className="py-6 text-center text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
