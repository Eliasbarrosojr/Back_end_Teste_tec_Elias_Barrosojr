import "express-async-errors";
import express, { Application } from "express";
import userRoutes from "./routes/users.routes";
import { HandleErrors } from "./error";

const app: Application = express();
app.use(express.json());

app.use("", userRoutes);

app.use(HandleErrors);

export default app;
