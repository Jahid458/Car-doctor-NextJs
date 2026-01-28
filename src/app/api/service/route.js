import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const session = await getServerSession(authOptions);
    if(session){
        const email = session?.user?.email ;
        const bookindCollections = dbConnect(collectionNameObject.bookingCollection);
        const result = await bookindCollections.find({email}).toArray();
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}
 
export const POST = async(req) =>{
    const body = await req.json();
    const bookingCollections = dbConnect(collectionNameObject.bookingCollection);
    const result = await bookingCollections.insertOne(body)
    return NextResponse.json(result)
}