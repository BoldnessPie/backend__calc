import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middleware/error-handler.js";
dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT, 10);

app.use(cors());
app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ error: "Маршрут не найден" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
