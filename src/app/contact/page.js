"use client";

import SocialIcons from "@/components/Social";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Contact Us
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: Contact Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Prabin Dangol"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Godawari Municipality-5, Lele, Lalitpur"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* SUBJECT: Radio buttons */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Subject
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="subject"
                  value="sale"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">Sale Property</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="subject"
                  value="rent"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">Rent Property</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="subject"
                  value="other"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">Other Request</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="enquiry" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Enquiry
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              rows="4"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Write your enquiry here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit Enquiry
          </button>
        </form>

        {/* RIGHT: Static Contact Details */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-5">
  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>

  <div className="mb-4 text-gray-700 dark:text-gray-300">
    <p className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-red-500" />
      <span><strong>Office Address:</strong> Godawari Municipality-6, Phaidol, Lalitpur</span>
    </p>
  </div>

  <div className="mb-4 text-gray-700 dark:text-gray-300">
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-green-500" />
      <span><strong>Phone 1:</strong> +977-9765726294 (Prabin Dangol)</span>
    </p>
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-green-500" />
      <span><strong>Phone 2:</strong> +977-9849150004 (Sujan Bhandari)</span>
    </p>
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-green-500" />
      <span><strong>Phone 3:</strong> +977-9818366209 (Manoj Nagarkoti) </span>
    </p>
  </div>

  <div className="text-gray-700 dark:text-gray-300">
    <p className="flex items-center gap-2">
      <FaEnvelope className="text-blue-500" />
      <span><strong>Email:</strong> info.lelesastogharjaggakarobar@gmail.com</span>
    </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default ContactPage;
