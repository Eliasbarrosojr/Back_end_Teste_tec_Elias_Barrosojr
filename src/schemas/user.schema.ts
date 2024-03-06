import { z } from "zod";

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
});

const userSchemaReq = userSchema.omit({ id: true });

const userSchemaRes = userSchema;

export { userSchema, userSchemaReq, userSchemaRes };
