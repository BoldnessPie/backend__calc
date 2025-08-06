import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
