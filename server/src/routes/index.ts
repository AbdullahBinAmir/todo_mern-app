import express,{ Router } from "express"
import { getTodos, addTodo, deleteTodo } from "../controllers/tasks/index.js"

const router: Router = Router()

router.use(express.json());

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)


router.delete("/delete-todo", deleteTodo)

export default router