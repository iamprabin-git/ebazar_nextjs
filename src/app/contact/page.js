"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
   return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 mt-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 py-8 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl h-fit">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Godawari Municipality-5, lele<br />
                      Lalitpur<br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <FaPhone className="text-green-600 dark:text-green-300 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Phone Number</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +977-9765726294
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <FaEnvelope className="text-purple-600 dark:text-purple-300 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Email Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      dprabin23@gmail.com<br />
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Location
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.8175903821144!2d85.33305485701393!3d27.57204344007455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb14212a8436db%3A0x9e0805ab0f1be891!2sLele%2044700!5e1!3m2!1sen!2snp!4v1749521392213!5m2!1sen!2snp"  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Send Us a Message
            </h2>
            
            <form  className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                 
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                 
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                 
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;