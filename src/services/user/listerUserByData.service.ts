import { QueryResult } from "pg";
import { client } from "../../database";
import { TUserResponse } from "../../interfaces/user.interface";
import { userSchemaRes } from "../../schemas/user.schema";
import IntFilters from "../../interfaces/filters.interface";

const listerUserByDataService = async (
    filters: IntFilters
): Promise<TUserResponse | Array<TUserResponse>> => {
    let queryString = `SELECT * FROM users`;
    const conditions: string[] = [];
    const values: Array<string | undefined> = [];

    Object.keys(filters).forEach((key, index) => {
        if (filters[key] !== undefined) {
            conditions.push(`${key} = $${index + 1}`);
            values.push(filters[key]!);
        }
    });

    if (conditions.length !== 0) {
        queryString += ` WHERE ${conditions.join(" AND ")}`;

        const queryConfig = {
            text: queryString,
            values: values,
        };

        const queryResult: QueryResult<TUserResponse> = await client.query(
            queryConfig
        );

        const user = userSchemaRes.parse(queryResult.rows[0]);

        return user;
    }

    const queryResult: QueryResult<TUserResponse> = await client.query(
        queryString
    );

    const listUser = queryResult.rows.map((user) => userSchemaRes.parse(user));

    return listUser;
};

export default listerUserByDataService;
