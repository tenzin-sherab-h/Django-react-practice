import React, { useState } from "react";
import { Dialog, DialogTitle, Description } from "@headlessui/react";

function Card({ title, author, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">Author: {author}</p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          More Info
        </button>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded max-w-md mx-auto p-6 shadow-lg">
            <DialogTitle className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {title}
            </DialogTitle>
            <Description className="text-gray-700 dark:text-gray-300 mb-4">
              {description || "No additional details available."}
            </Description>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default Card;
