import React, { useState } from 'react';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState([false, false, false]);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const questions = [
    { question: "How do I restore old photos?", answer: "You can restore old photos by uploading your image to our website, and our AI will process it to remove imperfections." },
    { question: "What formats do you support?", answer: "We support JPG, JPEG, PNG, BMP, WEBP, and more." },
    { question: "Is there a limit to the number of photos I can restore?", answer: "The Basic Plan allows restoring up to 10 photos only, while the Premium and Pro Plans allow unlimited restorations." },
    { question: "Do I need to create an account?", answer: "Creating an account is optional, but it allows you to access additional features and manage your restored photos." },
    { question: "What is the cost of the Premium Plan?", answer: "The Premium Plan is priced at $9.99 per month." },
    { question: "Can I download the restored photos?", answer: "Yes, after the restoration process, you can download your photos directly." },
    { question: "How long does the restoration process take?", answer: "The restoration process is usually completed in a few seconds." },
    { question: "Is there customer support available?", answer: "Yes, we offer priority support for Premium Plan users." },
    { question: "Can I use the service on mobile devices?", answer: "Yes, our service is compatible with both desktop and mobile devices." },
    { question: "What if I encounter issues during restoration?", answer: "Feel free to reach out to our support team for assistance." },
  ];

  return (
    <section id="faq" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-fuchsia-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {questions.slice(0, showMore ? questions.length : 3).map((item, index) => (
            <div
              key={index}
              className={`faq-item rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer`}
            >
              <button
                className="w-full text-left text-xl font-semibold flex items-center justify-between p-6 text-gray-900 dark:text-white"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${expandedItems[index] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`faq-answer transition-all duration-300 ease-in-out`}>
                {expandedItems[index] && (
                  <div className={`p-4 text-gray-900 dark:text-gray-300`}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button 
            onClick={handleShowMore} 
            className="text-blue-500 font-semibold hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
