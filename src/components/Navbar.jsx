'use client'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Blog', path: '#' },
        { name: 'Forum', path: '#' },
        { name: 'Careers', path: '#' }
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="w-full flex justify-center items-center py-3 px-4">
                <div className="w-[95%] flex items-center justify-between rounded-3xl p-3 shadow-lg backdrop-blur-md" style={{
                    background: 'rgba(0,0,0,0.85)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    borderRadius: '24px'
                }}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center mr-8">
                        <Logo />
                        <span className="ml-4 text-white text-xl font-extrabold tracking-tight font-sans">BYTEGEN</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-300 text-sm font-medium hover:text-[#6EE7B7] transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Button - Desktop */}
                    <div className="hidden md:flex items-center">
                        <button className="flex items-center bg-[#6EE7B7] text-black text-sm font-semibold px-4 py-1.5 rounded-xl shadow hover:bg-[#34D399] transition-colors">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="mr-2">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="black" />
                            </svg>
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-[4.5rem] left-0 w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <div className="mx-4 p-4 rounded-2xl shadow-lg backdrop-blur-md" style={{
                    background: 'rgba(0,0,0,0.85)',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    borderRadius: '24px'
                }}>
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-300 text-sm font-medium hover:text-[#6EE7B7] transition-colors uppercase tracking-wider text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="flex items-center justify-center bg-[#6EE7B7] text-black text-sm font-semibold px-4 py-2 rounded-xl shadow hover:bg-[#34D399] transition-colors mx-auto">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="mr-2">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="black" />
                            </svg>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 