import React, {FormEvent, ChangeEvent, useState} from "react";

import { Row } from "../components/Row";
import { AddTodo } from "../components/AddTodos";
import { data } from "../todos";
import { Todo } from "../types";

export const Todolist = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState<string>("");

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        setTask("");
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();

        const todo = {
            id: '2',
            task: task,
            isCompleted: false
        }
        task && handleAddTodo(todo);
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    }

    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos);
    }

    return (
        <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-3 bg-gray-100 shadow overflow-hidden sm:rounded-lg space-y-8">
                <div className="flex justify-between">
                    <h1 className="font-medium text-black">Todo App</h1>
                </div>
                <AddTodo handleSubmitTodo={handleSubmitTodo}
                         handleChange={handleChange}
                         task={task}
                />
                <div className="h-80 overflow-x-hidden overflow-y-auto todo-list">
                    {todos.map((todo) => (
                        <Row key={todo.id}
                             todo={todo}
                             handleDeleteTodo={handleDeleteTodo}
                        />
                    )).reverse()}
                </div>
            </div>
        </section>
    )
}