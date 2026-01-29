import dbConnect, { collectionNameObject } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

 

export const GET = async(req,{params}) =>{

    const p = await params ;
    const bookingCollections = dbConnect(collectionNameObject.bookingCollection);

    const query ={_id: new ObjectId(p.id)}
    const singleBooking = await bookingCollections.findOne(query);

    return NextResponse.json(singleBooking)
}