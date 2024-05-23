import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 ">
            <div className="container mx-auto flex flex-wrap justify-between px-8 font-mono">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">MS Tech</h2>
                    <p>MS Tech is a leading tech company specializing in...</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
                    <p>Email: contact@mstech.com</p>
                    <p>Phone: +1234567890</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
