import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { percentage: '23%', text: 'Our services in Europe', icon: '🌍' },
    { percentage: '26%', text: 'Our services in Asia', icon: '🌏' },
    { percentage: '51%', text: 'Our services in other regions', icon: '🌎' }
  ];

  const achievements = [
    { number: '500+', text: 'Projects Completed', icon: '🚀' },
    { number: '50+', text: 'Expert Team Members', icon: '👥' },
    { number: '98%', text: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', text: 'Support Available', icon: '🛟' }
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We embrace new technologies to drive sustainable solutions.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency in all our interactions.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for the highest quality in every aspect of our work.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Customer Centricity',
      description: 'We prioritize the needs and satisfaction of our clients.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'We believe in strong partnerships and teamwork to achieve the best results.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
        </svg>
      ),
      title: 'Sustainability',
      description: 'We are committed to responsible practices that positively impact our environment.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Accountability',
      description: 'We take responsibility for our actions, ensuring reliability and trust.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Continuous Learning',
      description: 'We foster a culture of growth and learning by embracing digital transformation.'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker',
    'Kubernetes', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Next.js', 'TypeScript'
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-24 h-24 border border-blue-500/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff]">
              Transforming Ideas<br />
              Into Digital Reality
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              BYTEGEN is a pioneering technology company specializing in cutting-edge software development, AI solutions, and digital transformation. We're not just coding; we're crafting the future of digital innovation.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="group relative px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ee0979] hover:from-[#ee0979] hover:to-[#00c3ff] transition-all duration-300">
                <span className="relative z-10">Explore Our Vision</span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-[#00c3ff] to-[#6ee7b7]" />
              </button>
              <button className="px-8 py-3 rounded-full border border-[#00c3ff]/20 hover:border-[#00c3ff]/40 hover:bg-[#00c3ff]/5 transition-all duration-300 text-[#00c3ff]">
                Meet Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00c3ff]/20 transition-all"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">
                  {achievement.number}
                </div>
                <p className="text-gray-400 mt-2">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Founded in 2020, BYTEGEN emerged from a vision to bridge the gap between complex technology and business success. What started as a small team of passionate developers has grown into a dynamic force in the tech industry, serving clients across the globe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00c3ff]/20"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent mb-2">
                    {stat.percentage}
                  </div>
                  <p className="text-gray-400">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-gray-400">The principles that guide our journey</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 hover:border-[#00c3ff]/20 transition-all bg-gradient-to-b from-white/5 to-transparent group hover:transform hover:scale-105"
              >
                <div className="text-[#00c3ff] mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <p className="text-gray-400">Cutting-edge tools we use to build the future</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  transition: { duration: 0.3 }
                }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group perspective transform-gpu"
              >
                <div className="px-6 py-3 rounded-xl border border-white/10 hover:border-[#00c3ff]/30 
                  bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm 
                  transition-all duration-300 cursor-pointer overflow-hidden
                  hover:shadow-[0_0_15px_rgba(0,195,255,0.3)]"
                >
                  <div className="relative z-10 font-medium text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff]">
                    {tech}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300
                    bg-gradient-conic from-[#ff6a00] via-[#ee0979] to-[#00c3ff] animate-spin-slow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Modern Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ee0979]/5 to-[#00c3ff]/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#00c3ff] bg-clip-text text-transparent">
                Stay Updated with BYTEGEN
              </h3>
              <p className="text-gray-400 mb-8">Join our newsletter for the latest tech insights and company updates</p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                />
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                By subscribing you agree with our Privacy Policy
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add these keyframe animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .perspective {
          perspective: 1000px;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-gradient-conic {
          background-image: conic-gradient(from 0deg, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
