"use client";

import { TermsPolicyModal } from "@/components/TermsPolicyModal";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Benefits", href: "#benefits-costs" },
  { name: "About Us", href: "#about-us" },
  { name: "FAQ", href: "#faq-section" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* ========= GRID ========= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* ========== Company Info (กินพื้นที่ 2 ช่อง) ========== */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/img/logo-moon-maid.png"
                  width={128}
                  height={128}
                  alt="Moon Maid"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h3 className="text-2xl font-semibold text-pink-700 dark:text-gray-100">
                  Moon Maid Agency
                </h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                (EA License No. 25C3128)
              </p>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We connect clients with trusted housekeepers and help domestic
              workers find good jobs. Reliable, professional, and caring
              housekeeping services for every home.
            </p>
          </div>

          {/* ========== Quick Links ========== */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-indigo-600 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== Contact + Legal รวมในคอลัมน์เดียว ========== */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a
                    href="mailto:patimar4027@gmail.com"
                    className="flex items-center gap-2"
                  >
                    ✉️ Email: patimar4027@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6697778441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    📱 Whatsapp 97778441
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Legal
              </h3>
              <TermsPolicyModal />
            </div>
          </div>
        </div>

        {/* ========= Divider ========= */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>

        {/* ========= Bottom Footer ========= */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400 space-y-3 md:space-y-0">
          <p>
            © {new Date().getFullYear()} Moon Maid Agency. All rights reserved.
          </p>
          <p>
            Crafted with ❤️ by{" "}
            <a
              href="https://wa.me/97778441"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Moon Maid Agency (EA License No. 25C3128)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
