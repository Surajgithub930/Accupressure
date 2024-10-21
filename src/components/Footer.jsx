import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaPhone } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#676965] text-[#fffbfb] py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Contact Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <FaPhone className='inline' /> <a href="tel:+918178886499"><i className="fa-solid fa-phone text-[12px]"></i> +91 8178886499</a>

                        <a href="tel:+918178886499"><i className="fa-solid fa-phone text-[12px]"></i> +91 8178886499</a>
                    </p>

                    <p className="mb-2">Email: contact@acupressure.com</p>
                    <p>Address: 123 Acupressure St, Health City</p>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-6">
                        {/* Social Media Icons with hover effect */}
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-2xl hover:text-blue-500 transition duration-300 transform hover:scale-125" />
                        </Link>
                        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300 transform hover:scale-125" />
                        </Link>
                        <Link to="https://api.whatsapp.com/send?phone=+917408775737&text=I would like to get more information" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-2xl hover:text-green-500 transition duration-300 transform hover:scale-125" />
                        </Link>



                        {/* <li><a href="tel:+917406644449"><i className="fa-solid fa-phone text-[12px]"></i> +91 740-664-4449</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=+919731797677&text=I would like to get more information" target="_blank"><i className="fa-brands fa-whatsapp text-green-500"></i>  +91 973-179-7677</a></li> */}


                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300 transform hover:scale-125" />
                        </Link>
                    </div>
                </div>

                {/* Site Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <Link to="/about" className="mb-2 hover:underline">About Us</Link>
                    <Link to="/services" className="mb-2 hover:underline">Services</Link>
                    <Link to="/contact" className="mb-2 hover:underline">Contact Us</Link>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
                <p>© 2024 Acupressure. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
