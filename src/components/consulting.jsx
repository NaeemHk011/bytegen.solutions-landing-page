import React, { useEffect, useState } from 'react';

const Consulting = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('consulting-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    const handleMouseMove = (e) => {
      const element = document.getElementById('consulting-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const steps = [
    {
      title: "Discovery & Analysis",
      description: "Perform an analysis of the client's existing IT systems.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Tailored Solutions",
      description: "Develop IT solutions based on the analysis phase.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Deployment & Support",
      description: "Regularly communicate with our client to address any concerns.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ];

  return (
    <div id="consulting-section" className="relative min-h-screen bg-black pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74,222,128,0.1) 0%, transparent 60%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[rgba(74,222,128,0.05)] to-black"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `rgba(74,222,128,${Math.random() * 0.3})`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center pt-20">
          {/* Line + Heading */}
          <div className="relative mb-16 inline-block">
            <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 h-[2px] rounded-full transition-all duration-700 ease-in-out ${isVisible ? 'w-64 bg-white shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff,0_0_40px_#4ADE80,0_0_70px_#4ADE80,0_0_80px_#4ADE80,0_0_100px_#4ADE80,0_0_150px_#4ADE80]' : 'w-20 bg-gray-400 shadow-none'}`}></div>
            <div className="flex flex-col items-center gap-4">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C1C1C] text-[#4ADE80] border border-[#4ADE80]/20">
                Consulting Excellence
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-wide font-poppins text-white">
                Your Success, Our Priority
              </h2>
              <p className="max-w-2xl text-gray-400 text-lg mt-4">
                Our consulting process is built to optimize your IT infrastructure, tackle challenges, and support growth.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            {/* Left Side - Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`p-6 rounded-lg bg-[#1C1C1C] relative group transition-all duration-300 hover:bg-[#1C1C1C]/90 ${
                    activeStep === index ? 'border-[#4ADE80] shadow-[0_0_20px_rgba(74,222,128,0.2)]' : 'border-transparent'
                  }`} style={{ borderWidth: '2px' }}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        activeStep === index ? 'bg-[#4ADE80]/20 text-[#4ADE80]' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                      </div>
                      <div className={`absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                        activeStep === index ? 'bg-[#4ADE80]' : 'bg-gray-600'
                      }`}>
                        <div className={`absolute inset-0 rounded-full ${
                          activeStep === index ? 'animate-ping bg-[#4ADE80]/50' : ''
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Interactive Visualization */}
            <div className={`relative h-[600px] transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              {/* Animated Connection Lines */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4ADE80] to-transparent"></div>
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className="absolute left-1/2 w-16 h-px"
                    style={{
                      top: `${(index + 1) * 25}%`,
                      background: 'linear-gradient(90deg, #4ADE80, transparent)',
                      transform: 'translateX(-100%)',
                      opacity: activeStep >= index ? 1 : 0.2,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  ></div>
                ))}
              </div>

              {/* Animated Icons/Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Rotating Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#4ADE80]/20 animate-[spin_8s_linear_infinite]"></div>
                  
                  {/* Pulsing Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#1C1C1C] flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-[#4ADE80]/5"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-[#4ADE80]/20 animate-ping"></div>
                      <svg className="w-16 h-16 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 rounded-lg bg-[#1C1C1C] flex items-center justify-center"
                      style={{
                        top: `${Math.sin((index * 2 * Math.PI) / 3) * 100 + 50}%`,
                        left: `${Math.cos((index * 2 * Math.PI) / 3) * 100 + 50}%`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: activeStep >= index ? '0 0 20px rgba(74,222,128,0.2)' : 'none',
                        border: `2px solid ${activeStep >= index ? '#4ADE80' : 'transparent'}`,
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {step.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Consulting;
