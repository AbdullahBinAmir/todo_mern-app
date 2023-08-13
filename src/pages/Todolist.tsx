import React, {FormEvent, ChangeEvent, useState, useEffect} from "react";

import { Row } from "../components/Row";
import { AddTodo } from "../components/AddTodos";
import { data } from "../todos";
import { Todo } from "../types";
import { addTodo, deleteTodo, getTodos } from "../API";

export const Todolist = () => {
    const [todos, setTodos] = useState<Todo[]>(data);
    const [task, setTask] = useState<string>("");

    useEffect(() => {
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        getTodos()
        .then(({ data: { todos } }: Todo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
    }

    const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault();
        addTodo(task)
        .then(({ status, data }) => {
         if (status !== 201) {
           throw new Error('Error! Todo not saved')
         }
         setTodos(data.todos)
       })
       .catch((err) => console.log(err))
    }

    const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement;
        setTask(value);
    }

    const handleDeleteTodo = (_id: string) => {
        deleteTodo(_id)
        .then(({ status, data }) => {
            if (status !== 200) {
              throw new Error('Error! Todo not deleted')
            }
            setTodos(data.todos)
          })
          .catch((err) => console.log(err))
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
                    {todos.map((todo,index) => (
                        <Row key={index}
                             todo={todo}
                             handleDeleteTodo={handleDeleteTodo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}