"use client";

import {
  Facebook,
  Instagram,
  Locate,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subject: "General Inquiry",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Message sent!");

    // Optional: Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      subject: "General Inquiry",
    });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-x-10 mt-10  px-6 lg:px-20 mb-20">
        <aside className="text-4xl text-gray-500 font-semibold leading-tight">
          <h2>Explore Our Solution</h2>
          <h2>We Provide It All</h2>
        </aside>
        <aside className="text-base text-gray-500 max-w-lg">
          <p>
            The Company was a wholly owned subsidiary of The Oriental Government
            Security Life Assurance Company.
          </p>
        </aside>
      </div>

      <section className="min-h-screen  flex items-center justify-center mb-30">
        <form
          onSubmit={handleSubmit}
          className="w-full ml-20 mr-20  flex flex-col md:flex-row"
        >
          {/* Left Green Panel */}
          <div className="bg-green-500 text-white w-full md:w-1/2 p-10 m-20 h-150 space-y-14 relative rounded-xl mb-10">
            <div className="leading-14 py-6">
              <h2 className="text-4xl font-bold mb-1">Contact Information</h2>
              <p className="text-gray-300 text-base">
                Say something to start a live chat!
              </p>
            </div>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-2">
                <Phone />
                <span>+1012 3456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail />
                <span>demo@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Locate />
                <span>
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </div>
            </div>
            <div className="flex gap-6 text-xl mt-50">
              <Facebook className="rounded-[50%] bg-gray-900 h-9 w-9 p-2" />
              <Instagram className="rounded-[50%] bg-gray-900 h-9 w-9 p-2" />
              <Twitter className="rounded-[50%] bg-gray-900 h-9 w-9 p-2" />
            </div>

            <div className="absolute bottom-0 right-0 opacity-20 w-48 h-48 rounded-full bg-green-300 transform translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-20 opacity-30 w-40 h-40 rounded-full bg-green-400 transform translate-x-1/3 translate-y-1/2"></div>
          </div>

          {/* Right Form Panel */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <label className="block text-base text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-base text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-base text-gray-600 mb-1">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-base text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">
                Select Subject?
              </label>
              <div className="flex flex-wrap gap-4">
                {["General Inquiry", "Support", "Sales", "Other"].map(
                  (item, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="subject"
                        checked={formData.subject === item}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, subject: item }))
                        }
                        className="accent-green-500"
                      />
                      <span className="text-base text-gray-700">{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-base text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Write your message.."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
