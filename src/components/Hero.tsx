"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/banner-hero.png";

export const Hero = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <Container className="flex flex-col-reverse lg:flex-row items-center pt-24 lg:pt-28">
        {/* ✅ เนื้อหาด้านซ้าย (แต่จะอยู่ล่างใน mobile) */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-gray-800 dark:text-white bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Moon Maid Agency
              <br />
              <span className="block text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Professional housekeeping services ✨
              </span>
            </h1>

            <p className="py-5 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
              We help you find trustworthy housekeepers or make it easier for
              housekeepers to find jobs. Various services including full-time,
              hourly, cooking, childcare, and elderly care.
            </p>

            <div className="flex flex-row justify-center lg:justify-start items-center gap-4 mt-4">
              <a
                href="#about-us"
                className="px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition"
              >
                Get Started
              </a>

              <a
                href="https://wa.me/97778441"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-base font-medium text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Apply as Housekeeper
              </a>
            </div>
          </div>
        </div>

        {/* ✅ รูปด้านขวา (แต่จะอยู่บนใน mobile) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            src={heroImg}
            width={600}
            height={600}
            alt="Moon Maid Hero"
            className="object-cover rounded-2xl shadow-xl w-full h-auto lg:w-11/12"
            placeholder="blur"
            priority
          />
        </div>
      </Container>
    </section>
  );
};
