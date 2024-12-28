import React from 'react';

function NavHeader() {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo or Project Title */}
                <div className="text-xl font-semibold">
                    <a href="/" className="text-white hover:text-gray-300">
                        SIPCalc
                    </a>
                </div>

                {/* Navigation Links */}
                {/* <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                    <a href="#about" className="text-white hover:text-gray-300">About</a>
                    <a href="#calculator" className="text-white hover:text-gray-300">SIP Calculator</a>
                    <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                </nav> */}

                {/* Mobile Menu Button */}
                {/* <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div> */}
            </div>
        </header>
    );
}

export default NavHeader;