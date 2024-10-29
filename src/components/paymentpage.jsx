// PaymentPage.jsx
import React from "react";
import { FaCreditCard, FaPaypal, FaApplePay, FaGoogleWallet } from "react-icons/fa";

export default function PaymentPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8  mt-[10rem]">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-fuchsia-400">
          Payment Page
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
          Choose your preferred payment method.
        </p>
        
        <div className="grid gap-6">
          {/* Credit Card */}
          <button className="w-full flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            <FaCreditCard className="mr-2" /> Credit Card
          </button>
          
          {/* PayPal */}
          <button className="w-full flex items-center justify-center py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            <FaPaypal className="mr-2" /> PayPal
          </button>

          {/* Apple Pay */}
          <button className="w-full flex items-center justify-center py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300">
            <FaApplePay className="mr-2" /> Apple Pay
          </button>
          
          {/* Google Wallet */}
          <button className="w-full flex items-center justify-center py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            <FaGoogleWallet className="mr-2" /> Google Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
