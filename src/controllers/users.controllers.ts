import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interface";
import createUserservice from "../services/user/createUser.service";
import listerUsersService from "../services/user/listerUsers.service";
import listerUserByDataService from "../services/user/listerUserByData.service";
import IntFilters from "../interfaces/filters.interface";

const createUsersControllers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUserRequest = req.body;
    const newUser: TUserResponse = await createUserservice(userData);
    return res.status(201).json(newUser);
};

const listerUsersControllers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const users = await listerUsersService();
    return res.json(users);
};

const listerUserDataControllers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { name, email, phone } = req.query;

    const filters: IntFilters = {};
    if (typeof name === "string") {
        filters.name = name;
    }

    if (typeof email === "string") {
        filters.email = email;
    }

    if (typeof phone === "string") {
        filters.phone = phone;
    }
    const users = await listerUserByDataService(filters);
    return res.json(users);
};

export {
    createUsersControllers,
    listerUsersControllers,
    listerUserDataControllers,
};
