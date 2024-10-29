import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section  id="process" className="py-12 fade-in  bg-white dark:bg-gray-900  dark:text-white">
      <div className="container mx-auto text-center">
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
<h3 className="text-4xl font-bold mb-4 px-4 dark:text-fuchsia-400  text-gray-800">Revive Process</h3>
        <p className="text-2xl mt-2 dark:text-white/[.7] text-gray-700 mb-8 px-8">
          Our photo Revive is quick, easy, and free to use. Just follow these three
          steps to bring your photo back to life in no time.
        </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-8 mt-12 mx-4 ">
          {/* Card 1 */}
          <motion.div 
            className="dark:bg-gray-800 dark:text-white w-full p-6 lg:w-80 rounded-2xl shadow-xl  transition duration-300 ease-in-out flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-upload fa-3x mb-4" />
            <h4 className="font-bold text-xl mb-4">Step 1: Upload Image</h4>
            <p className="text-xl lg:text-base w-[80%]">
              Upload the image you want to revive from your computer or mobile device.
            </p>
          </motion.div>
          {/* Arrow between Card 1 and Card 2 */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <span className="text-fuchsia-700 text-3xl mx-4">→</span>
          </motion.div>
          {/* Card 2 */}
          <motion.div 
            className="dark:bg-gray-800 dark:text-white p-6  w-full lg:w-80 rounded-3xl shadow-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-magic fa-3x mb-4" />
            <h4 className="font-bold text-xl mb-4 w-[80%]">Step 2: Revive Image</h4>
            <p className="text-xl lg:text-base">
              Our AI will process the image to remove imperfections and restore its
              former glory.
            </p>
          </motion.div>
          {/* Arrow between Card 2 and Card 3 */}
          <motion.div 
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <span className="text-fuchsia-700 text-3xl mx-4">→</span>
          </motion.div>
          {/* Card 3 */}
          <motion.div 
            className="dark:bg-gray-800 dark:text-white p-6  w-full lg:w-80 rounded-3xl shadow-xl hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-download fa-3x mb-4" />
            <h4 className="font-bold text-xl mb-4 w-[80%]">Step 3: Download Result</h4>
            <p className="text-xl lg:text-base">
              Download your restored photo and enjoy the revived memories.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
