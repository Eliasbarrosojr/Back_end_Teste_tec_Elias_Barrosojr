import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database";
import { TUserResponse } from "../../interfaces/user.interface";
import { userSchemaRes } from "../../schemas/user.schema";

const listerUserByDataService = async (
    id: number
): Promise<Array<TUserResponse> | TUserResponse> => {
    const queryString: string = `
        SELECT
        *
        FROM 
        users
        WHERE 
        id = $1;
        `;

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id],
    };

    const queryResult: QueryResult<TUserResponse> = await client.query(
        queryConfig
    );

    const activeUser = userSchemaRes.parse(queryResult.rows[0]);
    console.log(activeUser);

    return activeUser;
};

export default listerUserByDataService;
