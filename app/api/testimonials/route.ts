import connectMongoDB from "@/lib/mongodb";
import Testimonials from "@/models/testimonials";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectMongoDB()
        const testimonies = await Testimonials.find()
        // console.log(testimonies)
        return NextResponse.json(testimonies, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
}