import express, { Express, Request, Response } from "express";
import studentRouter from "./controllers/student";
import itemRouter from "./controllers/item";

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/student", studentRouter);
app.use("/item", itemRouter);

// Start server
app.listen(port, () => {
  console.log("Listening on port:", port);
});
