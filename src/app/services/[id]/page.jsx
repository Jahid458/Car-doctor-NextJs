// import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServiceDeatilsPage = async ({ params }) => {

  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();


  return (
    <div>
      <section className="flex justify-center ">
        <figure className="relative">
          <Image
            src={`/assets/images/checkout/checkout.png`}
            alt="banner"
            width={1130}
            height={170}
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
                <div className="w-full h-full flex items-center ps-12 font-bold text-2xl">
                    <div>
                    <h1 className="text-white">Services Details </h1>

                    </div>
                </div>
          </div>
        </figure>
      </section>

     <section className="container mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Left Side */}
        <div className="col-span-9 space-y-4">
          <Image
            className="w-full"
            src={data?.img}
            width={400}
            height={280}
            alt={data?.title}
          />
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="text-justify">{data?.description}</p>
        </div>
        {/* Right Side */}
        <div className="col-span-3 space-y-4">
    
            <button className="w-full text-white h-9 bg-orange-500">
              Checkout
            </button>
  
          <p className="text-center text-xl font-bold">
            Price: $ {data?.price}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceDeatilsPage;
