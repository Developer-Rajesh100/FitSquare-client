"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";

const Services = () => {
  // Fetching Services Data from API http://127.0.0.1:8000/membership/ and storing it in services state
  const [services, setServices] = useState([]);

  // Fetching Services Data from API using axios
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/membership/")
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // First 15 words of description
  const first5Words = (str) => {
    return str.split(" ").slice(0, 15).join(" ");
  };

  return (
    <section id="services" className="max-w-[75%] mx-auto my-20">
      <h1 className="text-center text-4xl font-medium my-12">
        This is Services Section
      </h1>
      <div>
        <div className="flex justify-center items-center gap-10">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={service.image} className="" alt={service.title} />
                {/* <Image src={service.image} height={200} width={200} alt={service.title} /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {service.title}
                  <div className="badge badge-secondary">
                    {" "}
                    {parseInt(service.discount)}% off{" "}
                  </div>
                </h2>
                <p>{first5Words(service.description)}.....</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline p-3">
                    {" "}
                    <MdCurrencyRupee /> {parseInt(service.price)}
                  </div>
                  <div className="badge badge-outline p-3">
                    {" "}
                    Validity {service.validity} Days{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
