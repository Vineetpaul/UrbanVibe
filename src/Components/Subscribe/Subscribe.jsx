import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Stay in the loop with new arrivals
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email address"
            className="w-full p-3 dark:bg-white rounded-lg border dark:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
