import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../util/baseUrl";
import consultationForm from "../assets/images/consultationForm.png";

const ConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedCountry: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestData = {
        ...formData,
        status: "pending",
      };

      const response = await axios.post(
        `${baseUrl}/api/consultationForm/request`,
        requestData
      );

      if (response.data.success) {
        toast.success(
          "Consultation request submitted successfully! We will contact you soon."
        );
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error("Consultation request error:", error);
      if (error.response) {
        toast.error(
          error.response.data.message || "Failed to submit consultation request"
        );
      } else if (error.request) {
        toast.error(
          "Unable to reach the server. Please check your internet connection."
        );
      } else {
        toast.error("An error occurred while submitting your request.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto px-4">
      {/* Click to close background */}
      <div
        className="absolute inset-0 z-0 cursor-pointer"
        onClick={onClose}
      ></div>

      <div className="relative z-50 bg-white rounded-xl shadow-lg w-full max-w-4xl mx-auto my-6 overflow-hidden">
        {/* Form Content */}
        <div
          id="form"
          className={`flex flex-col md:flex-row transition-all duration-300 ${
            success ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Left Side Image (hidden on small) */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={consultationForm}
              alt="consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-6">
              Book a Free Consultation
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 text-sm sm:text-base"
            >
              <div>
                <label className="block font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Country Interested
                </label>
                <input
                  type="text"
                  name="interestedCountry"
                  value={formData.interestedCountry}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 font-medium text-gray-700 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 font-medium text-white bg-indigo-900 rounded-full hover:bg-indigo-700 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            <ToastContainer
              className="z-[9999]"
              position="top-right"
              autoClose={4000}
            />
          </div>
        </div>

        {/* Success Message */}
        <div
          id="success"
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 ${
            success ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">
            Thank You 🎉
          </h5>
          <p className="text-center text-gray-700 text-sm sm:text-base lg:text-lg max-w-md">
            For booking a free consultation with us. We’ll reach out to you
            soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
