import connectMongoDB from "@/lib/mongodb";
import Team from "@/models/Team";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB()

    const teams = await Team.find()
    return NextResponse.json(teams)
}