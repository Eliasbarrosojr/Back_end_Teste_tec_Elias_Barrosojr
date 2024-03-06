import { Router } from "express";

const userRoutes: Router = Router();

userRoutes.post("/users");
userRoutes.get("/users");

export default userRoutes;
