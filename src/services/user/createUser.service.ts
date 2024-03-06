import { TUserRequest, TUserResponse } from "../../interfaces/user.interface";
import { client } from "../../database";
import { QueryResult } from "pg";
import format from "pg-format";
import { userSchemaRes } from "../../schemas/user.schema";

const createUserservice = async (
    userData: TUserRequest
): Promise<TUserResponse> => {
    const queryString: string = format(
        `
        INSERT INTO
        users(%I)
        VALUES 
        (%L)
        RETURNING *;
        `,
        Object.keys(userData),
        Object.values(userData)
    );

    const queryResult: QueryResult<TUserResponse> = await client.query(
        queryString
    );

    const newUser = userSchemaRes.parse(queryResult.rows[0]);

    return newUser;
};

export default createUserservice;
