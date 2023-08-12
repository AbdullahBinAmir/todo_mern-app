import { Router } from "express"
import { getTodos, addTodo, deleteTodo } from "../controllers/tasks"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)


router.delete("/delete-todo", deleteTodo)

export default router