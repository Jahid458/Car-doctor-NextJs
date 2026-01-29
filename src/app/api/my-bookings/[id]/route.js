import dbConnect, { collectionNameObject } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

 

export const GET = async(req,{params}) =>{

    const p = await params ;
    const bookingCollections = dbConnect(collectionNameObject.bookingCollection);
    const query ={_id: new ObjectId(p.id)}
    const singleBooking = await bookingCollections.findOne(query);

    return NextResponse.json(singleBooking)
}

export const PATCH = async(req, {params}) => {
    const p = await params ;
    const bookingCollections = dbConnect(collectionNameObject.bookingCollection);
    const query = {_id: new ObjectId(p.id)};

    const body = await req.json();
    const filter = {
        $set: {...body}
    }
    const option = {
        upsert: true ,
    }
    const updateResponse = await bookingCollections.updateOne(query,filter,option);
    revalidatePath('/my-bookings')
    return NextResponse.json(updateResponse)
}