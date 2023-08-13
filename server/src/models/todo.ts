import { TodoType } from "./../types/todo.js"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
  {
    task: {
      type: String,
      required: true,
    }
  },
)

export default model<TodoType>("Todo", todoSchema)