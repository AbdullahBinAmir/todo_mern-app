import { AddTodoType } from "../types"

export const AddTodo = ({ task, handleChange, handleSubmitTodo }: AddTodoType) => {
    return (
        <div className="flex">
            <input placeholder="New Task" className="h-10 px-3 py-2 bg-slate-700 text-slate-200 border-slate-500 border shadow-sm  placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-tl-lg rounded-bl-lg sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" 
                id="add-todo" type="text" name="task" value={task} onChange={handleChange}/>
            <button 
                    aria-label="Add todo" onClick={handleSubmitTodo}
                    className="h-10 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-yellow-700 px-5 py-2 text-sm leading-5 rounded-tr-lg rounded-br-lg font-semibold text-white">
                Add
            </button>
        </div>
        )
}