import React, { useEffect, useState } from 'react';

function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const commands = [
    '$ npx create-app',
    'const App = () => (\n  <BYTEGEN />\n);'
  ];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [isDeleting1, setIsDeleting1] = useState(false);
  const [isDeleting2, setIsDeleting2] = useState(false);
  const [activeCommand, setActiveCommand] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typeCommand = (commandIndex, currentText, currentPosition, isDeleting) => {
    const command = commands[commandIndex];
    
    if (!isDeleting) {
      if (currentPosition < command.length) {
        return command.slice(0, currentPosition + 1);
      }
      return command;
    } else {
      if (currentPosition >= 0) {
        return command.slice(0, currentPosition);
      }
      return '';
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeCommand === 1) {
        if (!isDeleting1) {
          if (index1 < commands[0].length) {
            setText1(typeCommand(0, text1, index1, false));
            setIndex1((prev) => prev + 1);
          } else {
            setTimeout(() => {
              setIsDeleting1(true);
              setIndex1(commands[0].length - 1);
            }, 1000);
          }
        } else {
          if (index1 >= 0) {
            setText1(typeCommand(0, text1, index1, true));
            setIndex1((prev) => prev - 1);
          } else {
            setTimeout(() => {
              setIsDeleting1(false);
              setIndex1(0);
              setText1('');
              setActiveCommand(2);
            }, 500);
          }
        }
      } else {
        if (!isDeleting2) {
          if (index2 < commands[1].length) {
            setText2(typeCommand(1, text2, index2, false));
            setIndex2((prev) => prev + 1);
          } else {
            setTimeout(() => {
              setIsDeleting2(true);
              setIndex2(commands[1].length - 1);
            }, 1000);
          }
        } else {
          if (index2 >= 0) {
            setText2(typeCommand(1, text2, index2, true));
            setIndex2((prev) => prev - 1);
          } else {
            setTimeout(() => {
              setIsDeleting2(false);
              setIndex2(0);
              setText2('');
              setActiveCommand(1);
            }, 500);
          }
        }
      }
    }, activeCommand === 1 ? (isDeleting1 ? 50 : 150) : (isDeleting2 ? 50 : 150));

    return () => clearTimeout(timeout);
  }, [index1, index2, isDeleting1, isDeleting2, activeCommand, text1, text2]);

  return (
    <div className="relative min-h-screen bg-black pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center pt-20">
          {/* Line + Heading */}
          <div className="relative mb-16 inline-block">
            <div
              className={`absolute -top-6 left-1/2 transform -translate-x-1/2 h-[2px] rounded-full transition-all duration-700 ease-in-out
                ${scrolled
                  ? 'w-64 bg-white shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#fff,0_0_40px_#228BE6,0_0_70px_#228BE6,0_0_80px_#228BE6,0_0_100px_#228BE6,0_0_150px_#228BE6]'
                  : 'w-20 bg-gray-400 shadow-none'}`}
            ></div>

            <h3 className="text-4xl md:text-6xl font-bold tracking-wide font-poppins text-white">
              Services
            </h3>
          </div>

          {/* First 3 cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Terminal UI Card */}
            <div className="bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(55, 65, 81, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Terminal Part */}
                <div className="flex flex-col overflow-hidden rounded-lg mb-6">
                {/* Header */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#1C1C1C] rounded-t-lg border-b border-[#2C2C2C]">
                    <div className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3L5 8L2 13" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                      <span className="text-[#4ADE80] text-sm font-semibold">Coding in progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFD93D]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="bg-[#1C1C1C] text-white font-mono text-sm px-4 py-4 rounded-b-lg h-[140px] overflow-hidden">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start">
                        <code className="text-[#4ADE80]">
                          {text1}
                          {activeCommand === 1 && <span className="animate-blink">|</span>}
                        </code>
                      </div>
                      <div className="flex items-start">
                        <pre className="text-[#4ADE80] font-mono text-sm whitespace-pre-wrap break-all">
                          <code>
                            {text2}
                            {activeCommand === 2 && <span className="animate-blink">|</span>}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L6 14L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 12L18 14L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 11L11 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  <h3 className="text-white text-xl font-bold">Web Development</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafting modern, responsive web applications with cutting-edge technologies and best practices in mind.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                Explore Services
                </div>
              </button>
            </div>

            {/* AI & ML Card */}
            <div className="bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(55, 65, 81, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Technology Icons Section */}
                <div className="relative h-[180px] w-full rounded-xl bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)] mb-6">
                  <div className="p-6 overflow-hidden h-full relative flex items-center justify-center">
                    <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                      {/* TensorFlow Icon */}
                      <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-8 w-8">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#FF6F00">
                          <path d="M12.0001 0L1.94006 5.85V17.55L12.0001 23.4L22.0601 17.55V5.85L12.0001 0ZM18.7651 15.57L12.0001 19.38L5.23506 15.57V8.43L12.0001 4.62L18.7651 8.43V15.57Z"/>
                        </svg>
                      </div>

                      {/* PyTorch Icon */}
                      <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-12 w-12">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#EE4C2C">
                          <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 13.94 9.866 9.866 0 0013.941 0l2.099-2.099a1.972 1.972 0 000-2.788l-7.883-7.882 2.788-2.788a1.972 1.972 0 000-2.788L13.446.187a1.972 1.972 0 00-1.441-.187zM9.169 9.168a1.972 1.972 0 11-2.788 2.788 1.972 1.972 0 012.788-2.788z"/>
                        </svg>
                      </div>

                      {/* OpenAI Icon */}
                      <div className="h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]">
                        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.71a.795.795 0 0 0 .392-.681v-6.617l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.326zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.71a.78.78 0 0 0 .78 0l5.843-3.325v2.337a.08.08 0 0 1-.033.061l-4.823 2.832a4.504 4.504 0 0 1-6.157-1.686zM2.34 8.268a4.469 4.469 0 0 1 2.312-1.968L4.79 6.385v5.423a.78.78 0 0 0 .392.681l5.843 3.325-2.02 1.168a.074.074 0 0 1-.071 0l-4.823-2.832a4.504 4.504 0 0 1-1.77-5.882zm16.597 3.855l-5.843-3.325 2.02-1.168a.074.074 0 0 1 .071 0l4.823 2.832a4.498 4.498 0 0 1-.676 8.13v-5.423a.78.78 0 0 0-.395-.679zM20.22 7.88l-.142-.085-4.779-2.71a.78.78 0 0 0-.784 0L8.671 8.41V6.073a.08.08 0 0 1 .033-.061l4.823-2.832a4.504 4.504 0 0 1 6.692 4.7zm-12.64 4.327L5.559 10.97a.071.071 0 0 1-.038-.052V5.335a4.504 4.504 0 0 1 7.37-3.286l-.141.085-4.779 2.71a.795.795 0 0 0-.392.681v6.617zm1.07-2.337L12 8.315l3.35 1.556v3.11L12 14.538 8.65 12.982v-3.11z"/>
                        </svg>
                      </div>

                      {/* Scikit-learn Icon */}
                      <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-12 w-12">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#F7931E">
                          <path d="M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-3.258 7.142-.73 9.67 2.527 2.527 6.739 2.2 9.67-.73 2.93-2.93 3.258-7.142.73-9.67-1.264-1.264-2.54-1.86-4.04-1.83zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                        </svg>
                      </div>

                      {/* Jupyter Icon */}
                      <div className="rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] h-8 w-8">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#F37626">
                          <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 22.5a10.5 10.5 0 1 1 10.5-10.5A10.512 10.512 0 0 1 12 22.5z"/>
                          <path d="M12 6a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 6zm0 9a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 15z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Animated Line */}
                    <div className="h-32 w-px absolute top-16 m-auto z-40 bg-gradient-to-b from-transparent via-[#228BE6] to-transparent animate-move">
                      <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                        <div className="absolute inset-0 opacity-20">
                          {[...Array(12)].map((_, i) => (
                            <span key={i} className="inline-block bg-white w-1 h-1 mx-[1px]"></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3 relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#228BE6]/10 rounded-lg">
                      <span className="text-xl">🤖</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">AI Chatbot Development</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                  Building smart AI chatbots to streamline communication and drive intelligent customer interactions.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                Discover AI Solutions
                </div>
              </button>
            </div>

            {/* Cloud Services Card -> UI/UX Design Card */}
            <div className="bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(55, 65, 81, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Animated Design Area */}
                <div className="mb-6 relative h-[180px] w-full rounded-xl bg-[#1C1C1C] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* UI Design Mockup */}
                    <div className="relative w-[280px] h-[140px] bg-[#0C0C0C] rounded-lg p-4">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        {/* Menu Bar */}
                        <div className="flex gap-3">
                          <div className="h-2 w-8 bg-[#2563EB]/30 rounded-full animate-pulse"></div>
                          <div className="h-2 w-8 bg-[#2563EB]/20 rounded-full animate-pulse delay-100"></div>
                          <div className="h-2 w-8 bg-[#2563EB]/10 rounded-full animate-pulse delay-200"></div>
                        </div>

                        {/* Content Blocks */}
                        <div className="flex gap-4 mt-4">
                          <div className="space-y-2 flex-1">
                            <div className="h-3 w-full bg-[#2563EB]/20 rounded animate-pulse"></div>
                            <div className="h-3 w-3/4 bg-[#2563EB]/15 rounded animate-pulse delay-100"></div>
                            <div className="h-3 w-1/2 bg-[#2563EB]/10 rounded animate-pulse delay-200"></div>
                          </div>
                          <div className="w-12 h-12 rounded bg-[#2563EB]/5 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#2563EB]/20 animate-ping"></div>
                          </div>
                        </div>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-lg">
                        <div className="absolute inset-0 border-2 border-[#2563EB]/20 rounded-lg"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-0 left-0 w-[2px] h-[50%] bg-gradient-to-b from-[#2563EB] to-transparent animate-[moveDown_2s_ease-in-out_infinite]"></div>
                          <div className="absolute bottom-0 right-0 w-[2px] h-[50%] bg-gradient-to-t from-[#2563EB] to-transparent animate-[moveUp_2s_ease-in-out_infinite]"></div>
                          <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-gradient-to-r from-[#2563EB] to-transparent animate-[moveRight_2s_ease-in-out_infinite]"></div>
                          <div className="absolute bottom-0 right-0 w-[50%] h-[2px] bg-gradient-to-l from-[#2563EB] to-transparent animate-[moveLeft_2s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                      <span className="text-xl">🎨</span>
                    </div>
                    <h3 className="text-white text-xl font-bold">UI/UX Design</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafting intuitive and visually stunning user interfaces with a focus on user experience, interaction design, and modern aesthetics.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                  Explore Design Services
                </div>
              </button>
            </div>
          </div>

          {/* Social Media and Graphic Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Social Media Management Card - Spans 2 columns */}
            <div className="md:col-span-2 bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(55, 65, 81, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Social Media Analytics Display */}
                <div className="mb-6 relative h-[180px] w-full rounded-xl bg-[#1C1C1C] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md p-4">
                      {/* Social Stats */}
                      <div className="grid grid-cols-3 gap-8 mb-6">
                        <div className="text-center relative">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#ee0979]/10 flex items-center justify-center group">
                            <div className="w-8 h-8 rounded-full bg-[#ee0979]/20 animate-ping"></div>
                          </div>
                          <div className="text-[#ee0979] font-bold">1.2K</div>
                          <div className="text-xs text-gray-400">Likes</div>
                        </div>
                        <div className="text-center relative">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#00c3ff]/10 flex items-center justify-center group">
                            <div className="w-8 h-8 rounded-full bg-[#00c3ff]/20 animate-ping delay-150"></div>
                          </div>
                          <div className="text-[#00c3ff] font-bold">845</div>
                          <div className="text-xs text-gray-400">Shares</div>
                        </div>
                        <div className="text-center relative">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#4ADE80]/10 flex items-center justify-center group">
                            <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 animate-ping delay-300"></div>
                          </div>
                          <div className="text-[#4ADE80] font-bold">2.3K</div>
                          <div className="text-xs text-gray-400">Views</div>
                        </div>
                      </div>
                      
                      {/* Activity Graph */}
                      <div className="h-12 flex items-end justify-between gap-1">
                        {[30, 60, 40, 80, 50, 70, 45].map((height, i) => (
                          <div
                            key={i}
                            className="w-full bg-gradient-to-t from-[#ee0979] to-[#ff6a00] rounded-t-sm transition-all duration-500"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#ee0979]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#ee0979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">Social Media Management & Ads</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Strategic social media management and targeted advertising campaigns to boost your brand's online presence and drive meaningful engagement.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                  Explore Social Media Services
                </div>
              </button>
            </div>

            {/* Graphic Design Card */}
            <div className="bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Design Tools Animation */}
                <div className="mb-6 relative h-[180px] w-full rounded-xl bg-[#1C1C1C] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      {/* Rotating Border */}
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#4ADE80]/20 animate-spin-slow"></div>
                      
                      {/* Design Elements */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1C1C1C] rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#4ADE80] to-[#2563EB] animate-pulse"></div>
                      </div>
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-[#1C1C1C] rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ee0979] to-[#ff6a00] animate-pulse delay-150"></div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1C1C1C] rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-[#00c3ff] to-[#4ADE80] animate-pulse delay-300"></div>
                      </div>
                      <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-[#1C1C1C] rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ee0979] animate-pulse delay-500"></div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-xl bg-[#1C1C1C] shadow-lg flex items-center justify-center">
                          <svg className="w-10 h-10 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">Graphic Design</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating stunning visual designs that capture your brand's essence and leave a lasting impression on your audience.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                  Explore Design Services
                </div>
              </button>
            </div>
          </div>

          {/* SEO and Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* SEO Card with new animations */}
            <div className="bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(74, 222, 128, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* SEO Analytics Animation */}
                <div className="mb-6 relative h-[180px] w-full rounded-xl bg-[#1C1C1C] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-[280px]">
                      {/* SERP Preview */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
                        {/* Search Bar */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 h-8 bg-[#2C2C2C] rounded-lg relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center px-3">
                              <div className="h-2 w-2/3 bg-[#4ADE80]/20 rounded animate-pulse"></div>
                            </div>
                          </div>
                        </div>

                        {/* Search Results */}
                        <div className="space-y-3">
                          {[1, 2, 3].map((_, i) => (
                            <div 
                              key={i} 
                              className="p-2 bg-[#2C2C2C]/50 rounded-lg transform transition-all duration-300"
                              style={{
                                animation: `slideIn 0.5s ${i * 0.1}s both`,
                                opacity: i === 0 ? 1 : 0.7,
                                transform: `scale(${1 - i * 0.05}) translateY(${i * 5}px)`
                              }}
                            >
                              <div className="h-2 w-24 bg-[#4ADE80]/40 rounded mb-2"></div>
                              <div className="h-2 w-full bg-[#4ADE80]/20 rounded"></div>
                            </div>
                          ))}
                        </div>

                        {/* Ranking Animation */}
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center animate-bounce">
                            <svg className="w-4 h-4 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                          <div className="text-[#4ADE80] text-sm font-bold">+45%</div>
                        </div>
                      </div>

                      {/* Keywords Cloud */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center overflow-hidden">
                        <div className="flex gap-2 animate-scroll">
                          {['SEO', 'Keywords', 'Analytics', 'Traffic', 'Rankings', 'Content'].map((keyword, i) => (
                            <div
                              key={i}
                              className="px-2 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] text-xs whitespace-nowrap"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            >
                              {keyword}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Analytics */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-[#4ADE80] rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animation: `float 3s infinite ${i * 0.5}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-[#4ADE80] rounded-full animate-ping"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#4ADE80]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">SEO Services</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Boost your online visibility with our expert SEO services. We optimize your website to rank higher in search results and drive organic traffic.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                  Explore SEO Services
                </div>
              </button>
            </div>

            {/* Maintenance & Support Card - Spans 2 columns */}
            <div className="md:col-span-2 bg-[#0C0C0C] backdrop-blur-md rounded-lg p-6 min-h-[450px] flex flex-col relative group transition-all duration-300" style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0C0C0C, #0C0C0C), linear-gradient(90deg, #374151, #1F2937, #374151, #1F2937)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 0 transparent',
              transition: 'box-shadow 0.3s ease-in-out'
            }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(55, 65, 81, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>
              <div className="absolute inset-[2px] rounded-lg bg-[#0C0C0C] z-0"></div>
              <div className="relative z-10 flex-1">
                {/* Support Dashboard Animation */}
                <div className="mb-6 relative h-[180px] w-full rounded-xl bg-[#1C1C1C] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2C2C2C]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md p-4">
                      {/* Support Stats */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        <div className="text-center relative">
                          <div className="w-14 h-14 mx-auto mb-2 rounded-lg bg-[#ee0979]/10 flex items-center justify-center group">
                            <div className="w-8 h-8 rounded bg-[#ee0979]/20 animate-pulse">
                              <div className="w-4 h-4 bg-[#ee0979] rounded-full mx-auto mt-2"></div>
                            </div>
                          </div>
                          <div className="text-[#ee0979] font-bold">24/7</div>
                          <div className="text-xs text-gray-400">Support</div>
                        </div>
                        <div className="text-center relative">
                          <div className="w-14 h-14 mx-auto mb-2 rounded-lg bg-[#00c3ff]/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded bg-[#00c3ff]/20 animate-pulse delay-75">
                              <div className="w-4 h-4 border-2 border-[#00c3ff] border-t-transparent rounded-full mx-auto mt-2 animate-spin"></div>
                            </div>
                          </div>
                          <div className="text-[#00c3ff] font-bold">99.9%</div>
                          <div className="text-xs text-gray-400">Uptime</div>
                        </div>
                        <div className="text-center relative">
                          <div className="w-14 h-14 mx-auto mb-2 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded bg-[#4ADE80]/20 animate-pulse delay-150">
                              <div className="w-4 h-4 bg-[#4ADE80] rounded mx-auto mt-2 animate-ping"></div>
                            </div>
                          </div>
                          <div className="text-[#4ADE80] font-bold">30m</div>
                          <div className="text-xs text-gray-400">Response</div>
                        </div>
                        <div className="text-center relative">
                          <div className="w-14 h-14 mx-auto mb-2 rounded-lg bg-[#ff6a00]/10 flex items-center justify-center">
                            <div className="w-8 h-8 rounded bg-[#ff6a00]/20 animate-pulse delay-200">
                              <div className="w-4 h-4 bg-[#ff6a00] rounded-full mx-auto mt-2"></div>
                            </div>
                          </div>
                          <div className="text-[#ff6a00] font-bold">100%</div>
                          <div className="text-xs text-gray-400">Satisfied</div>
                        </div>
                      </div>

                      {/* Support Timeline */}
                      <div className="relative h-12">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-0.5 w-full bg-[#2C2C2C]"></div>
                        </div>
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="absolute top-1/2 -translate-y-1/2"
                            style={{ left: `${i * 33}%` }}
                          >
                            <div className="w-4 h-4 rounded-full bg-[#4ADE80] -mt-2 animate-ping" 
                              style={{ animationDelay: `${i * 0.2}s` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#ee0979]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#ee0979]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-bold">Maintenance & Support</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Comprehensive maintenance and 24/7 support services to keep your digital solutions running smoothly. We ensure maximum uptime and rapid response to any issues.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 relative group/btn">
                <div className="absolute inset-0 rounded-lg" style={{
                  background: 'linear-gradient(90deg, #ff6a00, #ee0979, #00c3ff, #6ee7b7)',
                  opacity: 0.8
                }}></div>
                <div className="relative px-4 py-2 bg-[#0C0C0C] rounded-lg m-[1px] text-[#6ee7b7] text-sm font-medium transition-all duration-300 group-hover/btn:bg-opacity-90">
                  Explore Support Services
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add these keyframe animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Services;

// Add these styles at the end of the file, before the last closing brace
const styles = `
  @keyframes growBar {
    from { height: 0; }
    to { height: var(--height); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes reverse-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  
  .animate-reverse-spin {
    animation: reverse-spin 8s linear infinite;
  }
  
  .animate-count {
    @apply relative;
    animation: count 2s ease-out forwards;
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
