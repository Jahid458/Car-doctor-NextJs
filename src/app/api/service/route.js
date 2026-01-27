import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { NextResponse } from "next/server";



export const POST = async(req) =>{
    const body = await req.json();
    const bookingCollections = dbConnect(collectionNameObject.bookingCollection);
    const result = await bookingCollections.insertOne(body)
    return NextResponse.json(result)
}