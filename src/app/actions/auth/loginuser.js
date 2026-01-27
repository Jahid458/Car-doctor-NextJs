"use server";
import bcrypt from 'bcrypt'
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";


export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNameObject.userCollection);
  const user = await userCollection.findOne({ email });
  console.log(user);
  if(!user) return null ; 

  const isPasswordOK = bcrypt.compare(user.password, password);
  if(!isPasswordOK) return null 


  return user;
};
