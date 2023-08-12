import Todo from "../../models/todo.js";
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
};
const addTodo = async (req, res) => {
    try {
        const body = req.body;
        const todo = new Todo({
            name: body.task
        });
        const newTodo = await todo.save();
        const allTodos = await Todo.find();
        res.status(201).json({ message: "Todo added", todo: newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
};
const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndRemove(req.query.id);
        const allTodos = await Todo.find();
        res.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
};
export { getTodos, addTodo, deleteTodo };
