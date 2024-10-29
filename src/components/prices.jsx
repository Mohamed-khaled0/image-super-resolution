import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaTools, FaHeadset } from "react-icons/fa"; // Importing React Icons
import { Link } from "react-router-dom";

export default function Prices() {
  return (
    <section id="pricing" className="py-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-fuchsia-400">
            Pricing Plans
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 text-center ">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={`p-6 rounded-lg shadow-xl transform mt-8  transition-transform duration-300  hover:shadow-xl cursor-pointer ${plan.bgClass} ${plan.isPremium ? "border-[1px] border-fuchsia-600" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale:1.05
              }}
            >
              <div className="">
                <h3 className="text-3xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-10 text-left">
                  <li className="mb-4">
                    <Link
                      to={plan.link}
                      className={`w-full inline-block py-2 px-10 rounded-lg transition duration-300 ${plan.buttonClass}`}
                    >
                      {plan.buttonText}
                    </Link>
                  </li>
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      {feature.icon}
                      <span className="ml-2">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    title: "Basic Plan",
    price: "Free",
    features: [
      { text: "Restore up to 10 photos only", icon: <FaTools className="text-fuchsia-600" /> },
      { text: "Basic restoration tools", icon: <FaStar className="text-fuchsia-600" /> },
      { text: "Watermarked output", icon: <FaHeadset className="text-fuchsia-600" /> },
    ],
    link: "/signup",
    buttonText: "Get Started",
    bgClass: "bg-white dark:bg-gray-800 ",
    buttonClass: "bg-fuchsia-600 text-white text-center hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600",
  },
  {
    title: "Premium Plan",
    price: "$9.99/month",
    features: [
      { text: "Restore unlimited photos", icon: <FaStar className="text-fuchsia-600" /> },
      { text: "Advanced restoration tools", icon: <FaTools className="text-fuchsia-600" /> },
      { text: "No watermarks", icon: <FaHeadset className="text-fuchsia-600" /> },
      { text: "Priority support", icon: <FaGithub className="text-fuchsia-600" /> },
    ],
    link: "/payment",
    buttonText: "Subscribe",
    bgClass: "bg-white dark:bg-gray-800",
    buttonClass: "bg-fuchsia-600 text-white text-center hover:bg-fuchsia-700",
    isPremium: true,
  },
  {
    title: "Pro Plan",
    price: "$19.99/month",
    features: [
      { text: "Restore unlimited photos", icon: <FaStar className="text-fuchsia-600" /> },
      { text: "Premium restoration tools", icon: <FaTools className="text-fuchsia-600" /> },
      { text: "No watermarks", icon: <FaHeadset className="text-fuchsia-600" /> },
      { text: "24/7 support", icon: <FaGithub className="text-fuchsia-600" /> },
      { text: "Exclusive features", icon: <FaStar className="text-fuchsia-600" /> },
    ],
    link: "/payment",
    buttonText: "Subscribe",
    bgClass: "bg-white dark:bg-gray-800",
    buttonClass: "bg-fuchsia-600 text-white  text-center hover:bg-fuchsia-700",
  },
];
