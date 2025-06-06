import React from 'react'
import Logo from './Logo'

export const Footer = () => {
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Large BYTEGEN Text */}
        <div className="flex justify-center mb-16 relative">
          <div className="relative group">
            {/* Default state with white outline */}
            <div className="text-6xl md:text-8xl font-extrabold tracking-widest font-mono" style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.2)',
              color: 'transparent',
              letterSpacing: '0.2em'
            }}>
              BYTEGEN
            </div>
            
            {/* Hover state with colored outlines */}
            <div className="text-6xl md:text-8xl font-extrabold tracking-widest font-mono absolute inset-0 opacity-0 group-hover:opacity-100 flex" style={{
              letterSpacing: '0.2em',
              transition: 'opacity 0.3s ease'
            }}>
              <span style={{ WebkitTextStroke: '1.5px #ff6a00', color: 'transparent' }}>B</span>
              <span style={{ WebkitTextStroke: '1.5px #ee0979', color: 'transparent' }}>Y</span>
              <span style={{ WebkitTextStroke: '1.5px #ff008c', color: 'transparent' }}>T</span>
              <span style={{ WebkitTextStroke: '1.5px #7a00ff', color: 'transparent' }}>E</span>
              <span style={{ WebkitTextStroke: '1.5px #00c3ff', color: 'transparent' }}>G</span>
              <span style={{ WebkitTextStroke: '1.5px #00e5ff', color: 'transparent' }}>E</span>
              <span style={{ WebkitTextStroke: '1.5px #6ee7b7', color: 'transparent' }}>N</span>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Trainings Section */}
          <div className="relative">
            <div className="absolute -top-4 left-0 w-12 h-1 bg-gradient-to-r from-[#FF4D00] to-[#FF008C]"></div>
            <h3 className="text-white text-lg font-semibold mb-6">Trainings</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Mobile Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">DevOps</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="relative">
            <div className="absolute -top-4 left-0 w-12 h-1 bg-gradient-to-r from-[#FF008C] to-[#7A00FF]"></div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Press</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="relative">
            <div className="absolute -top-4 left-0 w-12 h-1 bg-gradient-to-r from-[#7A00FF] to-[#00E5FF]"></div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Support</a></li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="relative">
            <div className="absolute -top-4 left-0 w-12 h-1 bg-gradient-to-r from-[#00E5FF] to-[#FF4D00]"></div>
            <h3 className="text-white text-lg font-semibold mb-6">Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Logo />
              <p className="text-gray-400 text-sm">© 2024 ByteGen. All rights reserved.</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
