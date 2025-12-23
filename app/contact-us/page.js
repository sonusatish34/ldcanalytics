"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for reaching out!');
            setIsSubmitting(false);
            setFormData({ name: '', phone: '', email: '' });
        }, 1500);
    };

    return (
        <div>
            <Header />
            <div className="py-12 lg:px-12 px-3 bg-white/90 text-black">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-black pb-3">Contact Us</h1>
                    <p className="text-lg text-gray-500">We are here to help! Reach out for any queries about our 30-minute shirt delivery service.</p>
                </div>

                <div className="text-black flex flex-col justify-center items-center gap-y-10">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 text-center">Get in Touch</h2>
                    <div className="p-6 rounded-lg shadow-md w-fit flex gap-y-4 justify-center items-center gap-x-4  text-black">
                        <Link className='xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit ' href="tel:9111911162" target='_blank'><span><FiPhoneCall className='size-4 lg:size-6 text-blue-500' /></span>
                            <span>9111-9111-62</span></Link>
                        <Link className='xl:text-3xl lg:text-xl font-bold text-base flex items-center gap-1 lg:gap-2 lg:pt-2 border-2 p-2 rounded-md w-fit' href={`https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+am+looking+for+farmhouse+booking&type=phone_number&app_absent=0`} target='_blank'><span><FaWhatsapp className='size-4 lg:size-8 text-green-500' /></span>
                            <span>9111-9111-62</span></Link>
                    </div>
                    </div>
                    

                    {/* Contact Form */}
                    <div className="lg:w-2/3 p-8 rounded-lg shadow-md border border-white">
                        <h2 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 block w-full px-4 py-2 border bg-gray-100/40 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 block w-full px-4 py-2 bg-gray-100/40 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 block w-full px-4 bg-gray-100/40 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto mt-4 bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contact;
