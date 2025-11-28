// components/ServiceContainer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const ServiceContainer = ({ icon, title, description, link ,index }) => {
    return (
        <Link to={link} key={index}             data-aos="zoom-in"

            className="border border-gray-300 group bg-gradient-to-b from-[#f8f8f8] to-transparent rounded-2xl p-6  shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-101 cursor-pointer "

        >
            {/* Icon */}
            <div  className="w-20 h-20 rounded-2xl flex items-center justify-center m-auto mb-2   group-hover:scale-110 transition-transform duration-300">
                <img src={icon} alt={title} />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className="service_heading group-hover:text-purple-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                    {description}
                </p>

                {/* Find out more link */}
                <div className="flex items-center space-x-2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
                    <div className="w-8 h-px bg-current"></div>
                    <span className="text-sm font-medium">Find out more</span>
                </div>
            </div>
        </Link>
    );
};

export default ServiceContainer;
