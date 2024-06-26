import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req, res) {
    try {
        const body = await req.json()
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
        }

        const newUser = await prisma.users.create({
            data: { username, password },
        });

        return NextResponse.json(newUser, { status: 201 })
    } catch (e) {
        console.log(e)
        return NextResponse.error("Internal Server Error", 500)
    }
}

export async function GET() {
    try {
        const users = await prisma.users.findMany()
        const response = NextResponse.json(users)

        response.headers.set('Access-Control-Allow-Origin', '*')
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

        return response
    } catch (e){
        console.log(e)
        return NextResponse.error("Internal Server Error", 500)
    }
}