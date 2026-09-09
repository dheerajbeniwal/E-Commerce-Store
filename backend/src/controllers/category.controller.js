import categorymodel from "../models/category.model.js";
import {
  sendBadRequest,
  sendConflict,
  sendCreated,
  sendNotFound,
  sendServerError,
  sendSuccess,
} from "../utils/response.js";

// Create Category
export const create = async (req, res) => {
  try {
    const { name, slug } = req.body;

    if (!name || !slug) {
      return sendBadRequest(res, "Name and slug are required");
    }

    const category = await categorymodel.findOne({ name });

    if (category) {
      return sendConflict(res, "Category already exists");
    }

    await categorymodel.create({ name, slug });

    return sendCreated(res, "Category created successfully");
  } catch (error) {
    console.error("Error creating category:", error);

    return sendServerError(res, "Failed to create category");
  }
};

// Get All Categories
export const read = async (req, res) => {
  try {
    const categories = await categorymodel.find();

    return sendSuccess(res, "Categories found successfully", categories);
  } catch (error) {
    console.error("Error fetching categories:", error);

    return sendServerError(res, "Failed to fetch categories");
  }
};

// Get Category By ID
export const readbyid = async (req, res) => {
  try {
    const category = await categorymodel.findById(req.params.id);

    if (!category) {
      return sendNotFound(res, "Category not found");
    }

    return sendSuccess(res, "Category found successfully", category);
  } catch (error) {
    console.error("Error fetching category:", error);

    return sendServerError(res, "Failed to fetch category");
  }
};

// Delete Category By ID
export const deletebyid = async (req, res) => {
  try {
    const category = await categorymodel.findByIdAndDelete(req.params.id);

    if (!category) {
      return sendNotFound(res, "Category not found");
    }

    return sendSuccess(res, "Category deleted successfully", category);
  } catch (error) {
    console.error("Error deleting category:", error);

    return sendServerError(res, "Failed to delete category");
  }
};

// Update Category Status
export const status = async (req, res) => {
  try {
    const category = await categorymodel.findById(req.params.id);

    if (!category) {
      return sendNotFound(res, "Category not found");
    }

    category.status = !category.status;

    await category.save();

    return sendSuccess(res, "Category status updated successfully", category);
  } catch (error) {
    console.error("Error updating category status:", error);

    return sendServerError(res, "Failed to update category status");
  }
};

// Update Category Name and Slug
export const update = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const category = await categorymodel.findById(req.params.id);

    if (!category) {
      return sendNotFound(res, "Category not found");
    }

    category.name = name;
    category.slug = slug;

    await category.save();

    return sendSuccess(res, "Category updated successfully", category);
  } catch (error) {
    console.error("Error updating category:", error);

    return sendServerError(res, "Failed to update category");
  }
};
