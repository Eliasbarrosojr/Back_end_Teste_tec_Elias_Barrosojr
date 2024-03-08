import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes";
import { HandleErrors } from "./error";

const app: Application = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("", userRoutes);

app.use(HandleErrors);

export default app;
