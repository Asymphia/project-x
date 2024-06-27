import { z } from "zod"

const userSchema = z.object({
    username: z
        .string()
        .min(1, { message: "Nazwa użytkownika jest wymagana" })
        .regex(/^[a-zA-Z0-9!?#+-]*$/, {
            message: "Nazwa użytkownika zawiera niedozwolone znaki",
        }),
    password: z
        .string()
        .min(1, { message: "Hasło jest wymagane" })
        .regex(/^[a-zA-Z0-9!?#+-]*$/, {
            message: "Hasło zawiera niedozwolone znaki",
        }),
});

export { userSchema }