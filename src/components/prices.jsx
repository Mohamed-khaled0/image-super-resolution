import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaStar, FaTools, FaHeadset } from "react-icons/fa"; // Importing React Icons

export default function Prices() {
  return (
    <section id="pricing" className="py-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-fuchsia-400">
            Pricing Plans
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 ">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={`p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${plan.bgClass} ${plan.isPremium ? "border-[1px] border-fuchsia-600" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className={`text-3xl font-semibold mb-4 ${plan.isPremium ? "" : ""}`}>{plan.title}</h3>
                <p className={`text-2xl font-bold mb-4 ${plan.isPremium ? "" : ""}`}>{plan.price}</p>
                <ul className="mb-10 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      {feature.icon}
                      <span className="ml-2">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.link}
                className={`inline-block py-2 px-4 rounded-lg transition duration-300 ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </a>
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
    link: "/get-started",
    buttonText: "Get Started",
    bgClass: "bg-white dark:bg-gray-800",
    buttonClass: "bg-fuchsia-600 text-white hover:bg-fuchsia-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600",
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
    link: "/subscribe",
    buttonText: "Subscribe",
    bgClass: "bg-white dark:bg-gray-800",
    buttonClass: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
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
    link: "/subscribe",
    buttonText: "Subscribe",
    bgClass: "bg-white dark:bg-gray-800",
    buttonClass: "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
  },
];
