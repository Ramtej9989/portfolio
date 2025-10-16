// components/sections/Contact.jsx
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_ms5k3ei',
        'template_u9qc8c6',
        form.current,
        '4Ao4839wgAlhH9coH'
      );
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full bg-secondary/30 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 rounded-full bg-secondary/20 -bottom-20 -right-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-lg text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always interested in new opportunities and collaborations. Feel free to reach out through any of the channels below.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl shadow-secondary/5 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <a 
                      href="mailto:tejbonthu45@gmail.com" 
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      tejbonthu45@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Phone</h4>
                    <a 
                      href="tel:+917702441899" 
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      +91 7702441899
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">Telangana, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <a 
                    href="https://github.com/Ramtej9989" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/30 hover:bg-secondary/20 transition-colors p-3 rounded-lg text-white hover:text-secondary"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/bonthu-rama-satya-teja/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black/30 hover:bg-secondary/20 transition-colors p-3 rounded-lg text-white hover:text-secondary"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  
                  {/* Email Quick Link */}
                  <a 
                    href="mailto:tejbonthu45@gmail.com" 
                    className="bg-black/30 hover:bg-secondary/20 transition-colors p-3 rounded-lg text-white hover:text-secondary"
                    aria-label="Email"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl shadow-secondary/5">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="user_name" className="block text-white font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg py-3 px-4 text-white placeholder-gray-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="user_email" className="block text-white font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg py-3 px-4 text-white placeholder-gray-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/30 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg py-3 px-4 text-white placeholder-gray-500 transition-colors"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-black/30 border border-secondary/20 focus:border-secondary focus:ring-1 focus:ring-secondary rounded-lg py-3 px-4 text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                  >
                    There was an error sending your message. Please try again or contact me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map */}
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden h-64 bg-black/20 border border-secondary/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.0795368067614!2d81.9439128!3d16.4545739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e15cc2037b87%3A0x266950ccc723f921!2sMagatapalli%2C%20Andhra%20Pradesh%20533248!5e0!3m2!1sen!2sin!4v1728658820000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  title="Map showing my location"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </motion.div>
      </div>
    </section>
  );
}
