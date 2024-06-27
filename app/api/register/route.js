import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST (req, res) {
    const body = await req.json()
    const { username, password } = body

    if(!username || !password) {
        return new NextResponse("Fill all the fields!", { status: 400 })
    }

    const exist = await prisma.users.findUnique({
        where: { username: username }
    })

    if(exist) return new NextResponse("User already exists", { status: 400 })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.users.create({
        data: { username: username, password: hashedPassword }
    })

    return NextResponse.json(user)
}