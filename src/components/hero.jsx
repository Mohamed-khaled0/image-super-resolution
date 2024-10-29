import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section  className="hero-section bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-[3rem]  ">
      <div className="container  w-[80%] mx-auto flex flex-col sm:flex-col xl:flex-row xl:items-center mt-[4rem]">
        {/* Left Text Section */}
        <motion.div
          className="w-full xl:w-1/2 xl:pr-12 text-center xl:text-left mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-fuchsia-400 ">
            Restore Old Photos Online To Make Memories Alive
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-2xl mb-6 mx-6 xl:mx-0">
            PhotoRevive helps automatically restore old photos online in JPG,
            JPEG, PNG, BMP, WEBP, and more. Your old images can be instantly
            restored online by removing scratches, tears, spots, dust, and sepia.
          </p>
          <ScrollLink
        to="process"
        duration={500}
        offset={-50} 
      >
        <button
          className="bg-gradient-to-r from-fuchsia-700 via-fuchsia-600 to-pink-600 dark:from-fuchsia-500 dark:via-pink-500 dark:to-pink-400 text-xl text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
        >
          Get Started
        </button>
      </ScrollLink>
        </motion.div>

        {/* Right Image Section */}
        <div className="w-full xl:w-1/2 xl:pl-12 flex justify-center xl:justify-end">
          <motion.img
            src="https://imgv3.fotor.com/images/videoImage/before-and-after-result-of-face-editing-girl-portrait.jpg"
            alt="Old Photo Example"
            className="hidden xl:block rounded-lg shadow-lg w-3/4 h-auto object-cover transition-transform duration-500"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          {/* Image for small screens */}
          <motion.img
            src="https://imgv3.fotor.com/images/videoImage/before-and-after-result-of-face-editing-girl-portrait.jpg"
            alt="Old Photo Example"
            className="block xl:hidden rounded-lg shadow-lg w-3/4 h-auto object-cover transition-transform duration-500 mt-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
