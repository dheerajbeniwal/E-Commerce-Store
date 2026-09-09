import express from "express";

const router = express.Router();

import {
  create,
  read,
  readbyid,
  deletebyid,
  status,
  update,
} from "../controllers/category.controller.js";

router.post("/create", create);

router.get("/", read);

router.get("/:id", readbyid);

router.delete("/delete/:id", deletebyid);

router.patch("/status/:id", status);

router.put("/update/:id", update);
export default router;
