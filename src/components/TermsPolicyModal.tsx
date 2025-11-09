"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

export const TermsPolicyModal = () => {
  const [openModal, setOpenModal] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      {/* Trigger Buttons */}
      <div className="flex flex-col space-y-2 items-start">
        <button
          onClick={() => setOpenModal("terms")}
          className="space-y-2 text-gray-600 dark:text-gray-400 text-sm"
        >
          Terms of Service
        </button>
        <button
          onClick={() => setOpenModal("privacy")}
          className="space-y-2 text-gray-600 dark:text-gray-400 text-sm"
        >
          Privacy Policy
        </button>
      </div>

      {/* ================= TERMS MODAL ================= */}
      <Dialog
        open={openModal === "terms"}
        onClose={() => setOpenModal(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={22} />
            </button>

            <Dialog.Title className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Terms of Service
            </Dialog.Title>

            <div className="text-gray-600 dark:text-gray-300 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <p>
                Welcome to <strong>Moon Maid Agency</strong>! By accessing or using our website and
                services, you agree to the following terms and conditions.
              </p>
              <p>
                1. You agree to use our services only for lawful purposes and in compliance with
                applicable laws.
              </p>
              <p>
                2. Moon Maid Agency reserves the right to modify, suspend, or terminate any part of
                the service at any time without prior notice.
              </p>
              <p>
                3. We are not responsible for any damages resulting from your use of our services.
              </p>
              <p>
                4. These terms may be updated periodically. Continued use of our site constitutes
                acceptance of the revised terms.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
              >
                Close
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="px-5 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
              >
                I Accept
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* ================= PRIVACY POLICY MODAL ================= */}
      <Dialog
        open={openModal === "privacy"}
        onClose={() => setOpenModal(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={22} />
            </button>

            <Dialog.Title className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Privacy Policy
            </Dialog.Title>

            <div className="text-gray-600 dark:text-gray-300 space-y-3 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <p>
                At <strong>Moon Maid Agency</strong>, we respect and protect your privacy. This
                policy explains how we collect, use, and safeguard your personal information.
              </p>
              <p>
                1. We collect personal information such as your name, contact number, and email for
                the purpose of connecting clients and housekeepers.
              </p>
              <p>
                2. Your data will never be sold or shared with unauthorized third parties.
              </p>
              <p>
                3. We use secure methods to store your information and prevent unauthorized access.
              </p>
              <p>
                4. You may request correction or deletion of your personal data at any time.
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
              >
                Close
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="px-5 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
              >
                I Accept
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
