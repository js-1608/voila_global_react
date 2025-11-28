import React from 'react';
import Carousel from './Carousel';

const Client = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-82">

                {/* ---------------- Left Section ---------------- */}
                <div className="w-full lg:w-[70%] bg-white rounded-2xl border border-gray-300 p-3 sm:p-6 shadow-sm flex flex-col">
                    {/* Header Text */}
                    <div>
                        <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed">
                            Combining e-commerce, digital marketing, and photography services to empower
                            brands, engage audiences, and accelerate their growth effectively.
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            OUR WORK, THEIR SUCCESS
                        </h2>

                        {/* Arrow Decoration */}
                        <div className="mb-4 sm:mb-6">
                            <div className="flex items-center">
                                <div className="w-12 sm:w-16 h-0.5 bg-purple-600"></div>
                                <div className="w-0 h-0 border-l-6 sm:border-l-8 border-l-purple-600 border-y-4 border-y-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative overflow-hidden">
                        <Carousel />
                    </div>
                </div>

                {/* ---------------- Right Section ---------------- */}
                <div className="w-full lg:w-[30%] relative h-72 lg:h-auto mt-6 lg:mt-0">
                    {/* Stack of Cards */}
                    <div className="absolute inset-0 hidden lg:block">
                        {/* Background stack cards */}
                        <div className="absolute top-2 left-2 w-full h-full bg-gray-100 rounded-2xl border border-gray-300"></div>
                        <div className="absolute top-1 left-1 w-full h-full bg-gray-50 rounded-2xl border border-gray-300"></div>
                    </div>

                    {/* Main card */}
                    <div className="relative w-full h-full bg-white rounded-2xl border border-gray-300 shadow-sm p-4 flex flex-col justify-center">
                            {/* <div className="bg-[#662D91] text-white px-6 py-4 rounded-xl inline-block mb-6 shadow-lg">
                                <span className="font-semibold text-sm sm:text-base leading-tight">
                                    We bring strategy first, not guesswork.
                                </span>
                            </div> */}
                            <img src='trust.png' className='w-full h-auto'/>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Client;
