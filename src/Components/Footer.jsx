import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 px-4 md:px-8 py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm flex-1">
                    <div>
                        <h3 className="font-semibold mb-3">CUSTOMER SERVICES</h3>
                        <ul className="space-y-1">
                            <li>Contact Us</li>
                            <li>Track your Order</li>
                            <li>Shipping & Returns</li>
                            <li>Frequently Asked Questions</li>
                            <li>Schedule an appointment</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">ABOUT US</h3>
                        <ul className="space-y-1">
                            <li>Origins</li>
                            <li>Our Purpose</li>
                            <li>Careers</li>
                            <li>Sustainability</li>
                            <li>Giving Back</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">MATERIAL CARE</h3>
                        <ul className="space-y-1">
                            <li>Jewelry Repair</li>
                            <li>Ring Sizing</li>
                            <li>Metal Allergy Resources</li>
                            <li>Styling Tips</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">MAIN LOCATIONS</h3>
                        <ul className="space-y-1">
                            <li>Chicago, IL</li>
                            <li>San Francisco, CA</li>
                            <li>New York, NY</li>
                            <li>Seattle, WA</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center md:items-end md:justify-end gap-6 md:gap-14 my-6 md:my-8 text-xl text-gray-800">
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                    <FaYoutube />
                    <FaLinkedinIn />
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 border-t pt-4 mt-4">
                <div className="flex items-center gap-2">
                    <span>©</span>
                    <span>DIICENT</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 text-center">
                    <span>PRIVACY POLICY</span>
                    <span>TERMS AND CONDITIONS</span>
                    <span>SITEMAP</span>
                    <span>DO NOT SELL MY INFORMATION</span>
                    <span>COOKIES</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;