"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronRight } from "lucide-react";

const ContactUsPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Specify the type for the service options array
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);

  // Populate the service options dynamically
  useEffect(() => {
    const subject = [
      "Crisis Management",
      "Strategic Restructing",
      "Full Spectrum Assistance",
      "Comprehensive Legal Support",
      "Strategic Financial Partnerships",
      "Corporate Training For Personality Development",
    ];
    setServiceOptions(subject);
  }, []);

  // Handle form submission with proper type for event
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent the default form submission behavior
    setIsLoading(true);

    const formData = {
      name,
      email,
      phoneNumber,
      subject,
      date,
      message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[50px] min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-[#24388F] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>HOME</span>
            <ChevronRight size={16} />
            <span>CONTACT US</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <ToastContainer />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Select Subject</label>
              <select
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Choose</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <input
                id="message"
                name="message"
                placeholder="Enter your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full py-8 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#24388F] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
