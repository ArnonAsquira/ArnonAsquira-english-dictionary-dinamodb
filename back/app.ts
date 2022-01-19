import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

app.get("/", (_req, res) => {
  res.send("hello");
});

export default app;
