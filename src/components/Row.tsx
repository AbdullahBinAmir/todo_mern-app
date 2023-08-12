import { TodoProps } from "../types";

export const Row = ({
        todo: {id, task},
        handleDeleteTodo
   }: TodoProps) => {
    return (
        <div className="shadow rounded-lg p-3 mt-4 bg-slate-700 flex justify-between">
            <div className="flex items-center">
                <label className="ml-2 font-medium text-gray-50 text-sm">{ task }</label></div>
            <div>
                <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-yellow-700 px-2 py-1 text-sm leading-5 rounded-full font-semibold text-white" aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
                    X
                </button>
            </div>
        </div>
    )
}