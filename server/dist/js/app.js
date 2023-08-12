//mongodb+srv://rajaabdullah678901:<password>@cluster0.85rm8pc.mongodb.net/
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(todoRoutes);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.85rm8pc.mongodb.net/`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
//mongoose.set("useFindAndModify", false)
mongoose
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
