import { ChangeEvent, FormEvent } from "react"

export type Todo = {
    _id:string,
    task: string
}

export type AddTodoType = {
    task: string
    handleChange: (e: ChangeEvent) => void
    handleSubmitTodo: (e: FormEvent) => void
}

export type TodoProps = {
    todo: Todo,
    handleDeleteTodo: (_id:string) => void
}

export type ApiDataType = {
    message: string
    status: string
    todos: Todo[]
    todo?: Todo
  }