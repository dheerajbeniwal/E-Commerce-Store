import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const categorymodel = mongoose.model("Category", categorySchema);

export default categorymodel;
