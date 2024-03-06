import express, { Application } from "express";
import userRoutes from "./routes/users.routes";

const app: Application = express();
app.use(express.json());

app.use("", userRoutes);

export default app;
