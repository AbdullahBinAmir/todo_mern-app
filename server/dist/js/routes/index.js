import { Router } from "express";
import { getTodos, addTodo, deleteTodo } from "../controllers/tasks/index.js";
const router = Router();
router.get("/todos", getTodos);
router.post("/add-todo", addTodo);
router.delete("/delete-todo", deleteTodo);
export default router;
