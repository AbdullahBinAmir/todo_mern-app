import { model, Schema } from "mongoose";
const todoSchema = new Schema({
    task: {
        type: String,
        required: true,
    }
});
export default model("Todo", todoSchema);
