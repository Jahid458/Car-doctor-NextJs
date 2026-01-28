
'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from "react-icons/md";
export const DeleteBookingButton = ({id}) => {

    const router = useRouter()
    const handleDelete = async(id) =>{
        const response = await fetch(`http://localhost:3000/api/service/${id}`,{
            method: 'DELETE'
        })
        const data = await response.json();
        console.log(data);
        router.refresh();
    }
  return (
    <>
        <MdDelete onClick={() => handleDelete(id)} className="text-2xl cursor-pointer text-red-500" />
    </>
  )
}
