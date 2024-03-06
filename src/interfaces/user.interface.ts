import { z } from "zod";
import {
    userSchema,
    userSchemaReq,
    userSchemaRes,
} from "../schemas/user.schema";

type IUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaReq>;

type TUserResponse = z.infer<typeof userSchemaRes>;

export { IUser, TUserRequest, TUserResponse };
