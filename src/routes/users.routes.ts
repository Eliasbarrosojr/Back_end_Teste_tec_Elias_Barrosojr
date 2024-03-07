import { Router } from "express";
import {
    createUsersControllers,
    listerUserDataControllers,
    listerUsersControllers,
} from "../controllers/users.controllers";
import emailExistMiddleware from "../middlewares/emailExistMiddlewares";
import validBodyMiddleware from "../middlewares/validatesbody.middleware";
import { userSchemaReq } from "../schemas/user.schema";

const userRoutes: Router = Router();

userRoutes.post(
    "/users",
    validBodyMiddleware(userSchemaReq),
    emailExistMiddleware,
    createUsersControllers
);
userRoutes.get("/users", listerUsersControllers);
userRoutes.get("/users/info/", listerUserDataControllers);

export default userRoutes;
