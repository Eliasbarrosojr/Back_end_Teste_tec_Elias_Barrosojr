import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        super(), (this.message = message), (this.statusCode = statusCode);
    }
}

const HandleErrors = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json(err.flatten().fieldErrors);
    }

    console.log(err);

    return res.status(500).json({
        message: "Internal server error",
    });
};

export { AppError, HandleErrors };
