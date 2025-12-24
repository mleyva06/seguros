'use client';

import { useState } from 'react';

const faqItems = [
  { 
    question: "What is Obamacare and who qualifies?",
    answer: "Obamacare, officially known as the Affordable Care Act (ACA), is a health insurance program that provides coverage to millions of Americans. You qualify if you're a U.S. citizen or legal resident, not incarcerated, and not covered by Medicare. There's no age limit, and pre-existing conditions don't affect your eligibility. You can enroll during the annual open enrollment period or during a special enrollment period if you experience a qualifying life event like losing job-based coverage, getting married, or having a baby."
  },
  { 
    question: "When is open enrollment for health insurance?",
    answer: "Open enrollment for Obamacare health insurance typically runs from November 1st to January 15th each year. During this period, anyone can enroll in or change their health insurance plan. If you miss open enrollment, you may still be able to enroll if you qualify for a Special Enrollment Period due to a qualifying life event such as losing health coverage, moving, getting married, having a baby, or experiencing other significant life changes."
  },
  { 
    question: "Can I change my plan during the year?",
    answer: "Generally, you can only change your Obamacare plan during the annual open enrollment period or during a Special Enrollment Period if you experience a qualifying life event. Qualifying events include losing other health coverage, moving to a new area, changes in household size (marriage, divorce, birth, adoption), or changes in income that affect your subsidy eligibility. Outside of these periods, you typically cannot change plans unless you qualify for an exception."
  },
  { 
    question: "What are essential health benefits?",
    answer: "Essential health benefits are a set of 10 categories of services that all Obamacare plans must cover: 1) Ambulatory patient services, 2) Emergency services, 3) Hospitalization, 4) Maternity and newborn care, 5) Mental health and substance use disorder services, 6) Prescription drugs, 7) Rehabilitative and habilitative services and devices, 8) Laboratory services, 9) Preventive and wellness services and chronic disease management, and 10) Pediatric services, including oral and vision care. These benefits ensure comprehensive coverage regardless of which plan tier you choose."
  },
  { 
    question: "How much does Obamacare health insurance cost?",
    answer: "The cost of Obamacare health insurance varies based on several factors including your age, location, household size, income, and the plan tier you select. Premiums can range from $0 per month (with subsidies) to several hundred dollars per month. Most people qualify for premium tax credits that reduce their monthly costs. Additionally, plans are categorized into four metal tiers (Bronze, Silver, Gold, Platinum) with different premium and out-of-pocket cost structures. Use our quote tool to get personalized pricing based on your specific situation."
  },
  { 
    question: "Am I eligible for subsidies or tax credits?",
    answer: "You may be eligible for premium tax credits (subsidies) if your household income is between 100% and 400% of the Federal Poverty Level (FPL). For 2024, this generally means incomes between $14,580 and $58,320 for an individual, or between $30,000 and $120,000 for a family of four. These subsidies can significantly reduce your monthly premium costs, and in some cases, make coverage completely free. You can also qualify for cost-sharing reductions if you choose a Silver plan and your income is between 100% and 250% of the FPL, which reduces your deductibles and out-of-pocket costs."
  },
  { 
    question: "What's the difference between Bronze, Silver, Gold, and Platinum plans?",
    answer: "The four metal tiers represent different cost-sharing structures: Bronze plans have the lowest monthly premiums but highest out-of-pocket costs (typically cover 60% of costs), making them ideal for those who want basic coverage and don't expect many medical expenses. Silver plans have moderate premiums and out-of-pocket costs (cover 70% of costs) and are required for cost-sharing reductions. Gold plans have higher premiums but lower out-of-pocket costs (cover 80% of costs), suitable for those who expect regular medical care. Platinum plans have the highest premiums but lowest out-of-pocket costs (cover 90% of costs), best for those with frequent medical needs. All tiers cover the same essential health benefits."
  },
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
            <div 
              className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

