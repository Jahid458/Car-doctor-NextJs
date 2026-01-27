import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async (req,{params}) =>{
  const p = await params;
  const servicesCollections = dbConnect(collectionNameObject.servicesCollection);
  const data = await servicesCollections.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data) ; 
}