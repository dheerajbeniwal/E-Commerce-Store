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

    const category = await categorymodel.findOne({ name });

    if (category) {
      return sendConflict(res, "Category already exists");
    }

    await categorymodel.create({ name, slug });

    return sendCreated(res, "Category created successfully");
  } catch (error) {
    return sendServerError(res, error);
  }
};

// Get All Categories
export const read = async (req, res) => {
  try {
    const categories = await categorymodel.find();

    return sendSuccess(res, "Categories found successfully", categories);
  } catch (error) {
    return sendServerError(res, error);
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
    return sendBadRequest(res, "Invalid category id");
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
    return sendBadRequest(res, "Invalid category id");
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
    return sendBadRequest(res, "Invalid category id");
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
    return sendBadRequest(res, "Invalid category id or duplicate category");
  }
};
