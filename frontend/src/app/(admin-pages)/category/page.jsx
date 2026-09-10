"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Edit } from "lucide-react";

import TableHeader from "@/components/admin/TableHeader";
import StatusButton from "@/components/admin/StatusButton";
import DeleteButton from "@/components/admin/DeleteButton";
import { fetchcategory } from "@/app/api/category";

export default function CategoryTable() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetchcategory();

        console.log("CATEGORY DATA:", response);

        if (Array.isArray(response)) {
          setCategory(response);
        } else if (Array.isArray(response?.category)) {
          setCategory(response.category);
        } else if (Array.isArray(response?.data)) {
          setCategory(response.data);
        } else {
          setCategory([]);
        }
      } catch (error) {
        console.error("CATEGORY ERROR:", error);
        setCategory([]);
      }
    };

    getCategory();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <TableHeader module="category" add_page="/admin/category/add" />

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
            {category.map((item) => (
              <tr
                key={item._id || item.id}
                className="hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md border border-gray-200"
                  />
                </td>

                <td className="py-3 px-4 font-semibold text-gray-800">
                  {item.name}
                </td>

                <td className="py-3 px-4 text-gray-500 font-mono text-xs">
                  {item.slug}
                </td>

                <StatusButton
                  status={item.status}
                  api={`category/status/${item._id}`}
                />

                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/admin/category/edit/${item._id || item.id}`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      title="Edit Category"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>

                    <DeleteButton
                      onDelete={() =>
                        console.log("Delete category:", item._id || item.id)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}

            {category.length === 0 && (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
