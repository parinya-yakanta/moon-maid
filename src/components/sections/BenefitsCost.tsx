"use client";

import React from "react";
import Image from "next/image";

const BenefitsCost = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          💰 Fresh Helper Cost
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Details of expenses for hiring a housekeeper (Costs of Hiring Helper)
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-auto">
          <Image
            src="/img/benefits-costs.jpg"
            alt="Helper Costs Illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover rounded-l-2xl lg:rounded-l-2xl rounded-t-2xl lg:rounded-t-none"
          />
        </div>

        {/* Costs Content */}
        <div className="p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 border-b pb-4 mb-6 border-gray-100 dark:border-gray-700">
              Service Fee
            </h3>

            <dl className="space-y-4">
              {[
                ["Agency fee", "$324"],
                ["Transportation", "$200"],
                ["Lodging", "$150"],
                ["Medication Check", "$105"],
                ["Air ticket", "$300"],
                ["Training", "$200"],
                ["SIP program", "$77"],
              ].map(([label, price], idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-2 ${
                    idx !== 6
                      ? "border-b border-gray-100 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <dt className="text-gray-700 dark:text-gray-300 font-medium">
                    {label}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {price}
                  </dd>
                </div>
              ))}
            </dl>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <dl className="space-y-4">
              {[
                ["Insurance and security bond", "$550"],
                ["Work permit fee", "$70"],
              ].map(([label, price], idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-2 ${
                    idx !== 1
                      ? "border-b border-gray-100 dark:border-gray-700"
                      : ""
                  }`}
                >
                  <dt className="text-gray-700 dark:text-gray-300 font-medium">
                    {label}
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                    {price}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Highlight Placements Fee */}
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                Placements fee{" "}
                <span className="text-xs font-normal ml-2">
                  (1 month - 6 months)
                </span>
              </p>
              <p className="mt-1 text-xs text-yellow-700 dark:text-yellow-400 italic">
                ***Free replacement within first six months***
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              TOTAL
            </div>
            <div className="text-3xl font-extrabold text-pink-600 dark:text-pink-400">
              $1976
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg text-center">
            <h4 className="text-pink-700 dark:text-pink-300 font-semibold mb-2">
              Placements fee note:
            </h4>
            <p className="text-sm text-pink-600 dark:text-pink-400">
              This fee is paid upfront by the employer and recovered over the
              first few months of the employment through (helper loan).
            </p>
            <p className="mt-2 text-xs text-pink-500 dark:text-pink-500 italic">
              ***Price does not include placements fee***
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCost;
