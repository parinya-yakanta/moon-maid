"use client";

import Image from "next/image";

const servicesData = [
  {
    title: "full-time housekeeper",
    description: "Professional housekeepers come to take care of your home every day.",
    icon: "/img/services/housekeeping.png",
  },
  {
    title: "Hourly housekeeper",
    description: "Suitable for temporary cleaning tasks or specific chores.",
    icon: "/img/services/clock.png",
  },
  {
    title: "Housewife cooking",
    description: "A housekeeper who can cook every meal for your family.",
    icon: "/img/services/cooking.png",
  },
  {
    title: "Child and elderly care housekeeper",
    description: "Housekeepers who can take care of your loved ones.",
    icon: "/img/services/care.png",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We have professional housekeepers for you to choose according to your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
                <div className="flex items-center justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  height={128}
                  width={168}
                  className="h-36 w-auto"
                />
                </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
