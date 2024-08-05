// import { NextApiRequest, NextApiResponse } from "next";
// import z from 'zod';

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/db";
// import cors, { runMiddleware } from "@/app/_components/cors";

export const GET = async (req: Request, res: Response) => {
    console.log("Get Request")
    const users = await prisma.users.findMany();

    return NextResponse.json(users);
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    console.log("Post Request")

    // await runMiddleware(req, res, cors);

    const data = await req.json();

    try {
        const user = await prisma.users.findUnique({
            where: {
                username: data.username
            },
            select: {
                username: true,
                password: true,
                role: true
            }
        });

        if(!user || user.password !== data.password){
            return NextResponse.json({message: "Invalid Credentials"}, {status: 401})
        }
        
        return NextResponse.json(user, {status: 200})
        

    } catch(e: any){
        console.log(e.message);
        return NextResponse.json({}, {status: 400});
    }
};


export const OPTIONS = async (req: NextRequest, res: NextResponse) => {
    console.log("Options Request")

    // await runMiddleware(req, res, cors);

    const data = await req.json();

    try {
        const user = await prisma.users.findUnique({
            where: {
                username: data.username
            },
            select: {
                username: true,
                password: true,
                role: true
            }
        });

        if(!user || user.password !== data.password){
            return NextResponse.json({message: "Invalid Credentials"}, {status: 401})
        }
        
        return NextResponse.json(user, {status: 200})
        

    } catch(e: any){
        console.log(e.message);
        return NextResponse.json({}, {status: 400});
    }
};


// export const DELETE = async (req: NextRequest, res: NextResponse) => {
//     console.log("Delete Request");

//     const data = await res.json();

//     try {
//         const product = prisma.users.delete({
//             where: {
//                 id: data.id
//             }
//         });
//     }catch(e: any) {
//         return NextResponse.json({}, {status: 400});
//     }
// };