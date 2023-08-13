import { Response, Request } from "express"
import { TodoType } from "../../types/todo.js"
import Todo from "../../models/todo.js"

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoType[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<TodoType, "task">
  
      const todo: TodoType = new Todo({
        task: body.task
      })
  
      const newTodo: TodoType = await todo.save()
      const allTodos: TodoType[] = await Todo.find()
  
      res.status(201).json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
      throw error
    }
  }

  const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedTodo: TodoType | null = await Todo.findByIdAndRemove(
        req.query.id
      )
      const allTodos: TodoType[] = await Todo.find()
      res.status(200).json({
        message: "Todo deleted",
        todo: deletedTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
  }

  export {getTodos,addTodo,deleteTodo}