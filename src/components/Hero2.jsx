import React from 'react'
import nuexusVideo from '../assets/video/nuexus.mp4'

const Hero2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full top-16">
        {/* Overlay removed */}
        {/* <div className="absolute inset-0 bg-black/75 z-10 opacity-20"></div> */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={nuexusVideo} type="video/mp4" />
        </video>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 pt-20">
        <div className="w-full max-w-6xl text-white space-y-8">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-relaxed font-poppins">
              Your Trusted Partner in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF008C] to-[#7A00FF] font-monument">
                  IT Services
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-[#FF4D00] via-[#FF008C] to-[#7A00FF] blur-2xl opacity-10"></span>
              </span>
              {' '}and{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#7A00FF] to-[#00E5FF] font-monument">
                  Trainings
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-[#7A00FF] to-[#00E5FF] blur-2xl opacity-10"></span>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
              Explore our extensive range of services and a wide variety of
              courses to grow your skills and expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
            <button className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 tracking-wide w-56">
              <span className="relative z-10 text-sm uppercase">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] via-[#FF008C] to-[#7A00FF] opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition-opacity"></div>
            </button>

            <button className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 tracking-wide w-56">
              <span className="relative z-10 text-sm uppercase">Join Training</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A00FF] to-[#00E5FF] opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition-opacity"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <div className="animate-bounce w-6 h-6 border-2 border-[#00E5FF] border-t-0 border-l-0 rotate-45 opacity-75 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
