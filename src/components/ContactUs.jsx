import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaChevronDown } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] -top-48 -left-24 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] bottom-0 right-0 animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="h-[30vh] relative flex items-center justify-center overflow-hidden mt-16">
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover opacity-20"
              style={{ filter: 'brightness(0.4)' }}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-light-trails-48162-large.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Get In Touch
              </h1>
              <p className="text-lg text-blue-200/70">
                Let's create something extraordinary together
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Side - Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-3 space-y-4"
            >
              {[
                {
                  icon: <FaPhone className="w-5 h-5" />,
                  title: 'Call Us',
                  info: '+1 (555) 123-4567',
                  subInfo: 'Mon-Fri 9AM-6PM'
                },
                {
                  icon: <FaEnvelope className="w-5 h-5" />,
                  title: 'Email Us',
                  info: 'hello@bytegen.com',
                  subInfo: '24/7 Support'
                },
                {
                  icon: <FaMapMarkerAlt className="w-5 h-5" />,
                  title: 'Visit Us',
                  info: '123 Innovation Drive',
                  subInfo: 'Silicon Valley, CA'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all border border-white/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-300">{item.title}</h3>
                      <p className="text-white">{item.info}</p>
                      <p className="text-sm text-gray-400">{item.subInfo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-sm font-medium text-blue-300 mb-3">Follow Us</h3>
                <div className="flex items-center space-x-3">
                  {[
                    { icon: FaTwitter, link: '#' },
                    { icon: FaLinkedinIn, link: '#' },
                    { icon: FaFacebookF, link: '#' },
                    { icon: FaInstagram, link: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all text-blue-400"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaPhone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company (Optional)"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 focus:outline-none focus:border-blue-500/50 transition-all"
                    >
                      <option value="">Select Service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500 resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 tracking-wide w-full"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="relative z-10 text-sm uppercase flex items-center justify-center">
                      <FaPaperPlane className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] via-[#FF008C] to-[#7A00FF] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition-opacity"></div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-3 space-y-4"
            >
              {/* Working Hours */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
                <h3 className="text-lg font-medium text-blue-300 mb-4">Working Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-400">{schedule.day}</span>
                      <span className="text-white">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
                <h3 className="text-lg font-medium text-blue-300 mb-4">FAQ</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-white">Response Time?</h4>
                    <p className="text-xs text-gray-400">We typically respond within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Support Available?</h4>
                    <p className="text-xs text-gray-400">24/7 customer support for urgent issues</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Free Consultation?</h4>
                    <p className="text-xs text-gray-400">Yes, schedule your free 30-min call</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">Everything you need to know about our services</p>
          </motion.div>

          <div className="grid gap-4">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, cloud solutions, and IT consulting. Our team specializes in creating custom solutions tailored to your business needs."
              },
              {
                question: "How long does it typically take to complete a project?",
                answer: "Project timelines vary depending on complexity and requirements. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What is your typical process for new projects?",
                answer: "Our process includes: 1) Initial consultation and requirements gathering, 2) Project planning and proposal, 3) Design and development sprints, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and maintenance."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support."
              },
              {
                question: "What technologies do you work with?",
                answer: "We work with the latest technologies including React, Node.js, Python, AWS, Docker, and more. We choose the best tech stack based on your project's specific requirements and goals."
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain clear communication through regular meetings, progress reports, and a dedicated project manager. We use tools like Slack, Jira, and email to ensure you're always updated on your project's status."
              }
            ].map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Quick Contact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-[#FF4D00]/10 to-[#7A00FF]/10 rounded-2xl p-8 text-center backdrop-blur-lg border border-white/10"
          >
            <h3 className="text-xl font-medium text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help. Contact us directly for any specific questions about our services.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <button className="group relative px-6 py-3 bg-transparent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 tracking-wide">
                <span className="relative z-10 text-sm uppercase flex items-center">
                  <FaPhone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] via-[#FF008C] to-[#7A00FF] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition-opacity"></div>
              </button>
              <button className="group relative px-6 py-3 bg-transparent text-white rounded-lg font-medium overflow-hidden transition-all hover:scale-105 tracking-wide">
                <span className="relative z-10 text-sm uppercase flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-2" />
                  support@bytegen.com
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7A00FF] to-[#00E5FF] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-xl transition-opacity"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden
        ${isOpen ? 'border-blue-500/30 bg-white/10' : 'hover:border-blue-500/20 hover:bg-white/[0.07]'}
        transition-all duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <h3 className="text-lg font-medium text-white flex items-center">
          <span className="text-blue-400 mr-3 text-sm px-2 py-1 rounded-lg bg-blue-400/10">
            {index + 1}
          </span>
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-400 flex-shrink-0 ml-4"
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{ 
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 pt-0 text-gray-400"
            >
              <div className="pl-11 border-l border-blue-400/20">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactUs; 