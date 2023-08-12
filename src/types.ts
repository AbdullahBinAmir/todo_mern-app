import { ChangeEvent, FormEvent } from "react"

export type Todo = {
    id: string
    task: string
}

export type AddTodoType = {
    task: string
    handleChange: (e: ChangeEvent) => void
    handleSubmitTodo: (e: FormEvent) => void
}

export type TodoProps = {
    todo: Todo,
    handleDeleteTodo: (id:string) => void
}