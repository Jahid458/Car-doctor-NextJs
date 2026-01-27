import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesSection = async () => {
  // const res = await fetch('/services.json');
  const data = await dbConnect(collectionNameObject.servicesCollection).find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
          >
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image
                src={item.img}
                width={314}
                height={208}
                alt={item.tittle}
                className="w-full h-full object-fit"
              />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-bold text-xl text-orange-500">
                  Price : ${item.price}
                </p>
              </div>
              <div>

              <Link href={`/services/${item._id}`} className="text-orange-500">
                <ArrowRight />
              </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
