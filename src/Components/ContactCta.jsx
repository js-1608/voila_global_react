
export default function ContactCta() {


    return (
        <div className="bg-transparent " >
            <h3 className="text-xl font-semibold mb-4 text-[#F4D525]">
                Ready to Elevate?
            </h3>
            <p className="text-white mb-6">
                Take the next step toward transforming your business with expert support tailored for real impact and growth.
            </p>

            <form className="space-y-3 mt-auto ">
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 text-white focus:outline-none"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 text-white focus:outline-none"
                    />
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Enter Your Number"
                        className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2  focus:outline-none text-white"
                    />
                </div>

                <button
                    type="submit"
                    className="w-1/2 py-3 bg-transparent text-white font-medium  border transition"
                >
                    Get Free Quote
                </button>
            </form>
        </div>
    );
}
