import connectMongoDB from "@/lib/mongodb";
import Testimonials from "@/models/testimonials";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB()
    const testimonies = await Testimonials.find()
    return NextResponse.json(testimonies)
}