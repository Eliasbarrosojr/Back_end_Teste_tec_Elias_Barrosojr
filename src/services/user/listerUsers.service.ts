import { QueryResult } from "pg";
import { client } from "../../database";
import { TUserResponse } from "../../interfaces/user.interface";
import { userSchemaRes } from "../../schemas/user.schema";

const listerUsersService = async (): Promise<Array<TUserResponse>> => {
    const queryString: string = `
    SELECT
     *
    FROM 
     users
    `;

    const queryResult: QueryResult<TUserResponse> = await client.query(
        queryString
    );

    const listUser = queryResult.rows.map((user) => userSchemaRes.parse(user));

    return listUser;
};

export default listerUsersService;
