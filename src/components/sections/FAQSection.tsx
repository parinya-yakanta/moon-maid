"use client";

import React, { useState } from "react";
import { Container } from "@/components/Container";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "💖 How are the maids selected?",
    answer:
      "All our maids are professionally selected, trained, and verified for honesty, patience, and trustworthiness.",
  },
  {
    question: "💖 What services do you provide?",
    answer:
      "We provide housework, cooking, laundry, elderly care, childcare, and general housekeeping tailored to your family’s needs.",
  },
  {
    question: "✨ Do you have a license?",
    answer:
      "Yes, Moon Maid Agency is fully licensed (EA License No. 25C3128) and registered (Registration No: R25158538).",
  },
  {
    question: "📞 How can I contact you?",
    answer: "You can contact us via WhatsApp: 97778441 or Email: patimar4027@gmail.com.",
  },
  {
    question: "📍 What about the replacement guarantee?",
    answer:
      "We offer a 6-month replacement guarantee because we treat our customers like family.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-4 sm:py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <Container>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          ❓<span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"> Frequently Asked Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-left text-gray-800 dark:text-gray-200 font-medium">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
