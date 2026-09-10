"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Tag, Link2, Upload, Save } from "lucide-react";
import { toast } from "sonner";
import { slugify, client } from "@/utils/helper";
import { useRouter } from "next/navigation";

export default function AddCategoryPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);

    if (name === "name") {
      setName(value);
      setSlug(slugify(value));
    }

    if (name === "slug") {
      setSlug(value);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      slug: slug,
    };
    try {
      const response = await client.post("/category/create", payload);

      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/admin/category");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Internal Server Error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Back link */}
      <Link
        href="/admin/category"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Categories
      </Link>

      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Add New Category</h1>

        <p className="text-sm text-gray-500 mt-0.5">
          Create a new product category for your store
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 space-y-6">
          {/* Category Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Category Name <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="e.g., Electronics, Fashion, Mobiles"
                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 focus:bg-white transition-all placeholder:text-gray-400"
              />
            </div>

            <p className="text-xs text-gray-400">
              This is how customers will see the category
            </p>
          </div>

          {/* Slug */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">Slug</label>

            <div className="relative">
              <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

              <input
                type="text"
                name="slug"
                value={slug}
                onChange={handleChange}
                placeholder="category-slug"
                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 focus:bg-white transition-all placeholder:text-gray-400"
              />
            </div>

            <p className="text-xs text-gray-400">URL-friendly category name</p>
          </div>

          {/* Category Image */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Category Image
            </label>

            <label
              htmlFor="category-image"
              className="flex flex-col items-center justify-center gap-3 w-full h-44 rounded-xl border-2 border-dashed cursor-pointer transition-all border-gray-200 bg-gray-50 hover:border-teal-400 hover:bg-teal-50/30"
            >
              <div className="p-3 rounded-full bg-gray-100">
                <Upload className="w-6 h-6 text-gray-400" />
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">
                  Click to upload
                </p>

                <p className="text-xs text-gray-400 mt-0.5">PNG, JPG, WEBP</p>
              </div>

              <input
                id="category-image"
                type="file"
                name="image"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {image && (
              <p className="text-xs text-gray-500">Selected: {image.name}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          <Link
            href="/admin/category"
            className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition shadow-sm shadow-teal-200"
          >
            <Save className="w-4 h-4" />
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
}
