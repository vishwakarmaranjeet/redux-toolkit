import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

function NavHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-xl font-semibold">
                    <a href="/" className="text-white hover:text-gray-300">SIPCalc</a>
                </div>
                <nav className="hidden md:flex space-x-8">
                    {/* <Link to="/" className="text-white hover:text-gray-300">Home</Link> */}
                    {/* <Link to="/calculator" className="text-white hover:text-gray-300">Return Calculator</Link> */}
                </nav>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        {/* {isMobileMenuOpen ? (
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
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
                        )} */}
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white pt-3`}>
                <nav className="space-y-4">
                    {/* <Link to="/" className="block text-white hover:text-gray-300">Home</Link> */}
                    {/* <Link to="/calculator" className="block text-white hover:text-gray-300">Calculator</Link> */}
                </nav>
            </div>
        </header>
    );
}

export default NavHeader;
