import React from "react";

const ContactForm = () => {
    return (
        <section className="w-full py-16">
            <div className="container mx-auto px-4">

                {/* Top Contact Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Email Card */}
                    <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-3 bg-black text-white rounded-full">
                            📧
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">Our Email</h4>
                            <p className="text-gray-600 text-sm">info@panchratnarealestate.ae</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-3 bg-black text-white rounded-full">
                            📞
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">Phone</h4>
                            <p className="text-gray-600 text-sm">+971522176638</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
                        <div className="p-3 bg-black text-white rounded-full">
                            📍
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-1">Address</h4>
                            <p className="text-gray-600 text-sm">
                                1501, Sidra tower, al sufouh, sheikh zayed road, Dubai
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form + Map Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Left Form Section */}
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>

                        <form className="space-y-4">

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name*"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                            />

                            {/* Phone + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                                />
                            </div>

                            {/* Property Type */}
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-black"
                            >
                                <option>Property Type</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Commercial</option>
                            </select>

                            {/* Message */}
                            <textarea
                                placeholder="Your Message (Optional)"
                                rows={5}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
                            ></textarea>

                            {/* Button */}
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                                Submit Now ↗
                            </button>

                        </form>
                    </div>

                    {/* Right Map Section */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[420px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14437.420752818217!2d55.1713218!3d25.1042683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433f1e2d5bb7%3A0x8f5e0d9e6a3bff3e!2sSidra%20Tower!5e0!3m2!1sen!2sae!4v1700000000000"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
