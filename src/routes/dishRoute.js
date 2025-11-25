import express from "express";
import { getDishes, createDish, getDishesByCategory,updateDish } from "../controllers/dishController.js";

const router = express.Router();

router.get("/", getDishes);
router.post("/", createDish);
router.get("/category/:id", getDishesByCategory);
router.patch("/:id", updateDish);

export default router;
