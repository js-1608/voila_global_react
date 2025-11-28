import React from 'react';
import ServiceContainer from './ServiceContainer.jsx';
const Service = ({ serviceContent, heading ,subheading}) => {


  return (
    <div className="">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 bg-white">
        <div className="mb-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Heading (Left) */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 md:w-2/5">
              {heading}
            </h1>

            {/* Text (Right) */}
            <p className="text-gray-600 text-sm md:text-base md:w-3/5 text-left lg:text-right">
              {subheading}
            </p>
          </div>
        </div>


        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" >
          {serviceContent.map((item, index) => (
            <ServiceContainer
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
              index={index}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
