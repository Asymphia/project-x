import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { userSchema } from "@/schemas/userSchema"

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                username: { label: "username", type: "text", placeholder: "username..." },
                password: { label: "password", type: "password", placeholder: "password..." }
            },
            async authorize(credentials){
                const { username, password } = userSchema.parse(credentials)

                if(!username || !password){
                    throw new Error('Wypełnij wszystkie pola!');
                }

                const user = await prisma.users.findUnique({
                    where: { username: username }
                })
                if(!user) throw new Error('Nie znaleziono użytkownika o takiej nazwie!');

                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch) throw new Error('Niepoprawne hasło!');

                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }