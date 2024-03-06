import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interface";
import createUserservice from "../services/user/createUser.service";
import listerUsersService from "../services/user/listerUsers.service";
import listerUserByDataService from "../services/user/listerUserByData.service";

const createUsers = async (req: Request, res: Response): Promise<Response> => {
    const userData: TUserRequest = req.body;
    const newUser: TUserResponse = await createUserservice(userData);
    return res.status(201).json(newUser);
};

const listerUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await listerUsersService();
    return res.json(users);
};

const getUserData = async (req: Request, res: Response): Promise<Response> => {
    const { id } = res.locals;
    const users = await listerUserByDataService(id);
    return res.json(users);
};

export { createUsers, listerUsers, getUserData };
