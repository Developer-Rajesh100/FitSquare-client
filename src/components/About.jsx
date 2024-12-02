import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="my-20 mx-20">
      <h1 className="text-4xl text-center font-semibold mb-10">About Us</h1>
      <div className="flex justify-evenly items-center">
        <div>
          <Image
            src="/home_about.jpg"
            width={300}
            height={700}
            alt="About Image"
          />
        </div>
        <div className="max-w-[50%]">
          <div className="bg-indigo-200 my-8 p-4 rounded-lg">
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
            elit. Laudantium aut sint animi quia reprehenderit tenetur tempora
            sunt, iste odio obcaecati debitis voluptas consequuntur architecto
            repudiandae in eaque porro consequatur tempore.
          </div>
          <div className="bg-indigo-200 my-8 p-4 rounded-lg">
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
            elit. Laudantium aut sint animi quia reprehenderit tenetur tempora
            sunt, iste odio obcaecati debitis voluptas consequuntur architecto
            repudiandae in eaque porro consequatur tempore.
          </div>
          <div className="bg-indigo-200 my-8 p-4 rounded-lg">
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
            elit. Laudantium aut sint animi quia reprehenderit tenetur tempora
            sunt, iste odio obcaecati debitis voluptas consequuntur architecto
            repudiandae in eaque porro consequatur tempore.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
