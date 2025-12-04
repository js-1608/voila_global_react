import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQ = ({faqs}) => {
  const [openQuestion, setOpenQuestion] = useState();



  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className={`rounded-4xl transition-all duration-300 ${
                openQuestion === faq.id 
                  ? 'bg-[#662D91] text-white' 
                  : 'bg-white border border-gray-200 hover:border-purple-300'
              }`}
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full p-2 lg:p-4 text-left flex items-center justify-between focus:outline-none "
              >
                <span className={`text-sm lg:text-lg font-medium  ml-4 ${
                  openQuestion === faq.id ? 'text-white' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`w-10 h-10 rounded-full lg:flex items-center justify-center transition-all duration-300 hidden ${
                  openQuestion === faq.id 
                    ? 'bg-white text-purple-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100'
                }`}>
                  {openQuestion === faq.id ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {openQuestion === faq.id && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-purple-400">
                    <p className="text-purple-100 leading-relaxed ml-2 text-sm lg:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default FAQ;