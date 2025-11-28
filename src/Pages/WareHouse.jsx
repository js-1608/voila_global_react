import React, { useState } from 'react';
import { Warehouse, ClipboardList, Truck, ShieldCheck, Building2, HardHat, Trophy, Phone } from "lucide-react";
import Button_Gradient from '../Components/Button_Gradient';
import Review from '../Components/Review';
import FAQ from '../Components/Faq';
import { warehouse } from '../data/Data';
import { Package, CheckCircle } from 'lucide-react';

export default function WarehouseService() {
    const [space, setSpace] = useState(1000);
    const [duration, setDuration] = useState(12);
    const [climate, setClimate] = useState(0);
    const [services, setServices] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [costs, setCosts] = useState({
        baseCost: 0,
        climateCost: 0,
        servicesCost: 0,
        monthlyTotal: 0,
        grandTotal: 0
    });

    const calculateCost = () => {
        const baseRate = 2;
        const baseCost = space * baseRate;
        const climateCost = space * climate;
        const servicesCost = services;
        const monthlyTotal = baseCost + climateCost + servicesCost;
        const grandTotal = monthlyTotal * duration;

        setCosts({
            baseCost: baseCost.toFixed(2),
            climateCost: climateCost.toFixed(2),
            servicesCost: servicesCost.toFixed(2),
            monthlyTotal: monthlyTotal.toFixed(2),
            grandTotal: grandTotal.toFixed(2)
        });

        setShowResults(true);
    };


    const stages = [
        {
            id: 1,
            title: "PICK",
            subtitle: "WMS Stage - 1",
            icon: 'https://imageio.forbes.com/specials-images/imageserve/5f2d9e1ac8d22cd067de4e86/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
            iconColor: "text-blue-600",
            description: "Goods received are inwarded carefully and stored and properly labeled RACKs as per layouts approved by Amazon, Flipkart and other marketplaces, as applicable. When an order is received from the marketplace(s), goods are picked from the BINs as per labels/SKU/FSN/ASIN/Barcodes/LID for further processing."
        },
        {
            id: 2,
            title: "PACK",
            subtitle: "WMS Stage - 2",
            icon: 'https://imageio.forbes.com/specials-images/imageserve/5f2d9e1ac8d22cd067de4e86/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
            iconColor: "text-green-600",
            description: "Orders received from Marketplaces is carefully checked for quantity and combos etc and packed as per specific packaging needs. Voila provides the external packaging material as required by the marketplaces. Also, items are checked for quality (visual) so that returns are less. Also fake orders, if any, are highlighted/cancelled."
        },
        {
            id: 3,
            title: "SHIP",
            subtitle: "WMS Stage - 3",
            icon: 'https://imageio.forbes.com/specials-images/imageserve/5f2d9e1ac8d22cd067de4e86/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
            iconColor: "text-purple-600",
            description: "Post Packing shipping labels are pasted on packets and delivery is scheduled for pick up by courier companies based on availability of slots etc. Voila operates on all 7 days, allowing you to enjoy your holidays and festivals. Also, our team follows up with delivery and marketplaces for pick-ups, etc to ensure you stay within SLAs defined."
        }
    ];

    return (
        <div >
            <img src="warehouse.png" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}



                <section className="bg-white text-[#662D91]  px-4">
                    {/* Top Icons */}
                    {/* <div className="flex flex-col md:flex-row justify-center items-center gap-18 border-b border-gray-200 pb-10">
                        <div className="flex flex-col items-center text-center">
                            <Warehouse className="w-10 h-10 mb-2 text-[#662D91]" />
                            <h3 className="font-bold">Warehouse<br />Storage</h3>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <ClipboardList className="w-10 h-10 mb-2 text-[#662D91]" />
                            <h3 className="font-bold">Inventory<br />Management</h3>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Truck className="w-10 h-10 mb-2 text-[#662D91]" />
                            <h3 className="font-bold">Freight<br />Management</h3>
                        </div>
                    </div> */}

                    {/* Main Content */}
                    <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 ">Warehouse Storage</h2>

                            <p className="text-gray-600 font-semibold mb-4">Choose growth with us.</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Let us handle the heavy lifting while you focus on your business needs.
                                Save on storage costs, security deposits, and brokerage fees. Your goods
                                will be stored safely while you invest your saved time and resources
                                into other aspects of your business.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button_Gradient text={"Enquiry Now"} link={"/"} />
                                {/* <button className="bg-black text-white px-6 py-3 rounded-md  flex items-center gap-2 transition-all duration-300 text-sm font-medium ">
                                    <Phone className="w-4 h-4" />
                                    
                                </button> */}
                            </div>

                        </div>

                        {/* Right Image */}
                        <div>
                            <img
                                src="https://www.storemygoods.in/assets/images/updated-img/Warehouse%20Management.jpg"
                                alt="Warehouse"
                                className="rounded-xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center border p-4 border-gray-200 rounded-2xl shadow-md bg-gray-50 text-black hover:bg-white">
                            <Building2 className="w-8 h-8 mb-2 text-[#662D91]" />
                            <p>Present in all metropolitan cities</p>
                        </div>
                        <div className="flex flex-col items-center border p-4 border-gray-200 rounded-2xl shadow-md bg-gray-50 text-black hover:bg-white">
                            <ShieldCheck className="w-8 h-8 mb-2 text-[#662D91]" />
                            <p>Legally compliant facilities as per Govt. fire norms</p>
                        </div>
                        <div className="flex flex-col items-center border p-4 border-gray-200 rounded-2xl shadow-md bg-gray-50 text-black hover:bg-white">
                            <HardHat className="w-8 h-8 mb-2 text-[#662D91]" />
                            <p>Workers' safety protocols are heeded</p>
                        </div>
                        <div className="flex flex-col items-center border p-4 border-gray-200 rounded-2xl shadow-md bg-gray-50 text-black hover:bg-white">
                            <Trophy className="w-8 h-8 mb-2 text-[#662D91]" />
                            <p>Best in class service levels</p>
                        </div>
                    </div>
                </section>







                {/* Calculator Section */}
                <section className="py-16">
                    <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-xl shadow-lg">
                        <h2 className="text-4xl font-bold text-center mb-4 ">Warehouse Cost Calculator</h2>
                        <p className="text-center text-gray-600 mb-12 text-lg">Calculate your monthly warehouse costs and optimize your storage budget</p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div>
                                <label className="block text-sm font-bold mb-3 ">Space Required (sq ft)</label>
                                <input
                                    type="number"
                                    value={space}
                                    onChange={(e) => setSpace(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                                    placeholder="Enter space in sq ft"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-3 ">Duration (months)</label>
                                <input
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                                    placeholder="Enter duration"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-3 ">Storage Type</label>
                                <select
                                    value={climate}
                                    onChange={(e) => setClimate(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                                >
                                    <option value="0">Standard Storage</option>
                                    <option value="0.5">Climate Controlled (+$0.5/sq ft)</option>
                                    <option value="1">Premium Cold Storage (+$1/sq ft)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-3 ">Additional Services</label>
                                <select
                                    value={services}
                                    onChange={(e) => setServices(Number(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-200 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all"
                                >
                                    <option value="0">No Additional Services</option>
                                    <option value="200">Inventory Management (+$200/mo)</option>
                                    <option value="500">Complete Fulfillment (+$500/mo)</option>
                                    <option value="800">Premium Package (+$800/mo)</option>
                                </select>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <button
                                onClick={calculateCost}
                                className="border border-blue-500  px-6 py-2.5 rounded-md font-semibold text-sm text-blue-500 transition w-fit"
                            >
                                Calculate Your Costs
                            </button>
                        </div>

                        {showResults && (
                            <div className="mt-12">
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-xl border-2 border-gray-100 shadow-lg">
                                    <h3 className="text-3xl font-bold mb-8 text-center ">Your Cost Breakdown</h3>
                                    <div className="space-y-5 text-lg max-w-2xl mx-auto">
                                        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                                            <span className="text-gray-700 font-medium">Base Storage Cost:</span>
                                            <span className="font-bold text-xl ">${costs.baseCost}/month</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                                            <span className="text-gray-700 font-medium">Climate Control:</span>
                                            <span className="font-bold text-xl ">${costs.climateCost}/month</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-4">
                                            <span className="text-gray-700 font-medium">Additional Services:</span>
                                            <span className="font-bold text-xl ">${costs.servicesCost}/month</span>
                                        </div>
                                        <div className="flex justify-between items-center text-2xl font-bold pt-6">
                                            <span className="">Monthly Total:</span>
                                            <span className="">${costs.monthlyTotal}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xl mt-4 pt-4 border-t-2 border-amber-800">
                                            <span className="text-gray-700">Total for {duration} months:</span>
                                            <span className="font-bold text-2xl text-orange-700">${costs.grandTotal}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <div className="flex flex-wrap gap-4 justify-center m-auto">
                                            {/* <Button_Gradient text={"Explore Our Services"} link={"/"} /> */}
                                            <button className="bg-black text-white px-6 py-3 rounded-md  flex items-center gap-2 transition-all duration-300 text-sm font-medium ">
                                                <Phone className="w-4 h-4" />
                                                Book Free Call With Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <div className=" bg-white py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8 animate-fadeIn">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                {/* Heading (Left) */}
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 md:w-2/5">
                                    Warehouse Management System

                                </h1>

                                {/* Text (Right) */}
                                <p className="text-gray-600 text-sm md:text-base md:w-3/5 text-left lg:text-right">
                                    Streamlined 3-Stage Process for E-commerce Excellence


                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stages.map((stage) => {
                                const Icon = stage.icon;
                                return (
                                    <div
                                        key={stage.id}
                                        className="border border-gray-300 group bg-gradient-to-b from-[#f8f8f8] to-transparent rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-101"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-6 transform  transition-transform duration-500">
                                                {/* <Icon className={`w-20 h-20 ${stage.iconColor}`} strokeWidth={1.5} /> */}
                                                <img src={stage.icon} />
                                            </div>

                                            <h2 className="service_heading group-hover:text-purple-600 transition-colors duration-300">
                                                {stage.title}
                                            </h2>

                                            <p className="text-lg text-gray-500 mb-6 font-medium">
                                                {stage.subtitle}
                                            </p>

                                            <p className="text-xs text-gray-700 leading-relaxed text-left">
                                                {stage.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* <div className="mt-16 text-center">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="text-3xl mb-2">🎯</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
                                    <p className="text-gray-600">Visual quality checks to minimize returns</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="text-3xl mb-2">📅</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">24/7 Operations</h4>
                                    <p className="text-gray-600">All 7 days service, enjoy your holidays</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-xl">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <h4 className="font-semibold text-gray-900 mb-2">SLA Compliant</h4>
                                    <p className="text-gray-600">Consistent follow-ups to meet deadlines</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                {/* Testimonial */}
                <Review />

                {/* FAQ Section */}
                <FAQ faqs={warehouse} />


            </div>
        </div>
    );
}