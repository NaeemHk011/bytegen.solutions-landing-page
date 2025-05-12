'use client'
import React from 'react';
import Logo from './Logo';

const Navbar = () => {
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
                    <div className="flex items-center mr-8">
                        <Logo />
                        <span className="ml-4 text-white text-xl font-extrabold tracking-tight font-sans">BYTEGEN</span>
                    </div>
                    {/* Nav Links */}
                    <div className="flex-1 flex justify-center space-x-8">
                        {['Pricing', 'Features', 'Enterprise', 'Blog', 'Forum', 'Careers'].map(link => (
                            <a key={link} href="#" className="text-gray-300 text-sm font-medium hover:text-[#6EE7B7] transition-colors uppercase tracking-wider">{link}</a>
                        ))}
                    </div>
                    {/* Contact Button Only */}
                    <div className="flex items-center">
                        <button className="flex items-center bg-[#6EE7B7] text-black text-sm font-semibold px-4 py-1.5 rounded-xl shadow hover:bg-[#34D399] transition-colors">
                            {/* Mail Icon */}
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