// "use client";

import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { DeleteBookingButton } from "@/app/my-booking/components/DeleteBookingButton";


export default function MyBookingTables({ data }) {
  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-3xl my-4">
        My All Bookings
      </h1>

      <div className="w-11/12 mx-auto overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead className="border">
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th>Phone</th>
              <th>Address</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr className="border" key={item._id}>
                <td>
                  <Image
                    src={item.service_img}
                    alt={item.service_name}
                    width={80}
                    height={60}
                    className="rounded object-cover"
                    unoptimized
                  />
                </td>

                <td>{item.service_name}</td>
                <td>{item.date}</td>
                <td>{item.service_price}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>

                <td>
                  <FaRegEdit className="h-6 w-6 cursor-pointer" />
                </td>

                <td>
                  <DeleteBookingButton id={item._id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
