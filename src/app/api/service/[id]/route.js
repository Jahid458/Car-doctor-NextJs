import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const bookingCollections = dbConnect(collectionNameObject.bookingCollection);
  const p = await params;
  const query = { _id: new ObjectId(p.id) };

  //validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollections.findOne(query);


  const isOwnerOk = session?.user?.email == currentBooking?.email;

  if (isOwnerOk) {
    //Delete user specific booking
    const deleteResponse = await bookingCollections.deleteOne(query);
    revalidatePath("/my-booking");
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json( { success: false, message: "Forbidden Action" }, {status: 401});
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const servicesCollections = dbConnect(
    collectionNameObject.servicesCollection,
  );
  const data = await servicesCollections.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data);
};
