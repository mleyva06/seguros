'use client';

import { useState } from 'react';

const faqItems = [
  { question: "What is Obamacare and who qualifies?" },
  { question: "When is open enrollment for health insurance?" },
  { question: "Can I change my plan during the year?" },
  { question: "What are essential health benefits?" },
  { question: "How much does Obamacare health insurance cost?" },
  { question: "Am I eligible for subsidies or tax credits?" },
  { question: "What's the difference between Bronze, Silver, Gold, and Platinum plans?" },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg mb-3 shadow-sm bg-white hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
            style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
          >
            <span className="text-[#4A4A4A] text-base font-normal pr-4">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 text-sm">
              {/* Content can be added here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

