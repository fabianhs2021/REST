import express from "express";
import tasks from "./data";

const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
