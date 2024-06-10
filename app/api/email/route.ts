import { sendEmail } from "@/lib/SendEmail";
import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json()
    await connectMongoDB()

    try {
        const email : any = await sendEmail(body)
        return NextResponse.json(email)
    } catch (error: any) {
        throw new Error("Error: ", error.message)
    }

}