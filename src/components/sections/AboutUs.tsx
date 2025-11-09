"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Heart, Star, Phone, Mail, MapPin } from "lucide-react";

interface AboutUsProps {
  imgPos?: "left" | "right";
}

const aboutData = {
  title: "💎 MOON MAID AGENCY 💎",
  desc: "Comprehensive maid services — housekeeping, childcare, elderly care, and cleaning every corner of your home!",
  images: ["/img/about-banner-1.png", "/img/about-banner-2.png"],
  bullets: [
    {
      title: "💖 Professionally selected and trained maids",
      desc: "Honest, patient, and trustworthy.",
      icon: <Heart />,
    },
    {
      title: "💖 Housework, cooking, laundry, elderly care, and childcare",
      desc: "Services tailored for your family's needs.",
      icon: <Heart />,
    },
    {
      title: "✨ EA License",
      desc: "Services provided by Moon Maid Agency (EA License No. 25C3128)",
      icon: <Star />,
    },
    { title: "📋 Registration No", desc: "R25158538", icon: <Star /> },
    {
      title: "📞 Contact us now!",
      desc: "Whatsapp: 97778441",
      icon: <Phone />,
    },
    { title: "📩 Email", desc: "patimar4027@gmail.com", icon: <Mail /> },
    {
      title: "📍 6-month replacement guarantee",
      desc: "Because we treat our customers like family",
      icon: <MapPin />,
    },
  ],
};

export const AboutUs = ({ imgPos = "left" }: AboutUsProps) => {
  const data = aboutData;

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:gap-12 items-center">
          {/* รูป */}
          <div
            className={`relative flex justify-center ${
              imgPos === "right" ? "lg:order-2" : ""
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* รูปบน */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
                <Image
                  src={data.images[0]}
                  width={480}
                  height={280}
                  alt="Moon Maid Agency Top"
                  className="object-cover w-full h-auto aspect-[4/3] sm:aspect-[3/2]"
                  placeholder="blur"
                  blurDataURL={data.images[0]}
                />
              </div>
              {/* รูปล่าง */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 xl:-mt-20 ml-auto w-4/5 sm:w-11/12">
                <Image
                  src={data.images[1]}
                  width={480}
                  height={280}
                  alt="Moon Maid Agency Bottom"
                  className="object-cover w-full h-auto aspect-[4/3] sm:aspect-[3/2]"
                  placeholder="blur"
                  blurDataURL={data.images[1]}
                />
              </div>
            </div>
          </div>

          {/* เนื้อหา */}
          <div
            className={`flex flex-col ${
              imgPos === "right" ? "lg:order-1" : ""
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {data.title}
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.desc}
            </p>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 md:space-y-6">
              {data.bullets.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 bg-pink-500 rounded-md w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11">
                    {React.cloneElement(item.icon, {
                      className:
                        "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white",
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl md:text-xl font-medium text-gray-800 dark:text-gray-200 leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
