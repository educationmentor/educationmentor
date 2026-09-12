import React, { useState, useMemo } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { State } from "country-state-city";

import { baseUrl } from "../util/baseUrl";

import callIcon from "../assets/icons/call.svg";
import mailIcon from "../assets/icons/mail.svg";
import locationIcon from "../assets/icons/location_on.svg";

import mainImg from "../assets/images/contact-us/main.png";
import mainImgInverted from "../assets/images/contact-us/main-inverted.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
    interest: "",
    budget: "",
    message: "",
    agreeToContact: false,
  });

  const [loading, setLoading] = useState(false);

  // Get all Indian states
  const indianStates = useMemo(() => {
    return State.getStatesOfCountry("IN");
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToContact) {
      toast.error(
        "Please agree to be contacted by the Education Saathi team"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}/api/consultationForm/contact-us-request`,
        formData
      );

      if (response.data.success) {
        toast.success(
          "Thank you for contacting us! We will get back to you soon."
        );

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          state: "",
          city: "",
          interest: "",
          budget: "",
          message: "",
          agreeToContact: false,
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      if (error.response) {
        toast.error(
          error.response.data.message ||
            "Failed to submit contact form"
        );
      } else {
        toast.error(
          "An error occurred while submitting your form. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const offices = [
    {
      number: "01",
      city: "New Delhi",
      type: "Head Office",
      phone: "+91 8800907657",
      tel: "+918800907657",
      address:
        "219, 221, 223 Second Floor, Best Arcade Market, Above Canara Bank, Near K.M. Chowk, Pocket 6, Sector 12 Dwarka, New Delhi - 110075",
    },
    {
      number: "02",
      city: "Noida",
      type: "Branch Office",
      phone: "+91 70110 43124",
      tel: "+917011043124",
      address:
        "Suite No.4, CoWorkZen, Tower B, 6th Floor, Bhutani Cyber Park, Sector 62, Noida - 201309",
    },
    {
      number: "03",
      city: "Guwahati",
      type: "Branch Office",
      phone: "+91 85100 10500",
      tel: "+918510010500",
      address:
        "3rd Floor, 6, MS Road, Fancy Bazar, Guwahati - 781001",
    },
  ];

  return (
    <div className="py-16 px-5 sm:px-8 md:py-20 md:px-[8.4vw] bg-[#F7F8FC] mt-[15vw] md:mt-[4vw]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* ================= LEFT SECTION ================= */}
        <div className="flex flex-col">

          {/* Heading */}
          <div className="mb-8">
            <p className="text-[#F07C62] text-sm font-bold uppercase tracking-[0.15em] mb-3">
              Get in Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#060C61] leading-[1.15]">
              Contact Us
            </h2>

            <p className="text-base md:text-lg text-gray-600 mt-4 max-w-lg">
              Our friendly team would love to hear from you. Reach out to the
              Education Saathi team and let us help you take the next step
              toward your academic journey.
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#060C61]/10 flex items-center justify-center flex-shrink-0">
              <img
                src={mailIcon}
                alt="Email"
                className="w-5 h-auto"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Email Us
              </p>

              <a
                href="mailto:enquiry.educationsaathi@gmail.com"
                className="text-sm md:text-base font-semibold text-[#060C61] hover:text-[#F07C62] transition-colors break-all"
              >
                enquiry.educationsaathi@gmail.com
              </a>
            </div>
          </div>

          {/* ================= OFFICE LIST ================= */}
          <div className="space-y-5">

            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Office Heading */}
                <div className="flex items-center gap-4 pb-5 border-b border-gray-100">

                  <div className="w-11 h-11 rounded-xl bg-[#060C61] text-white flex items-center justify-center font-bold flex-shrink-0">
                    {office.number}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#060C61]">
                      {office.city}
                    </h3>

                    <p className="text-sm font-semibold text-[#F07C62]">
                      {office.type}
                    </p>
                  </div>

                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mt-5">

                  <div className="w-9 h-9 rounded-lg bg-[#5964B5]/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={locationIcon}
                      alt="Location"
                      className="w-5 h-auto"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                      Office Address
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mt-5">

                  <div className="w-9 h-9 rounded-lg bg-[#F07C62]/15 flex items-center justify-center flex-shrink-0">
                    <img
                      src={callIcon}
                      alt="Call"
                      className="w-5 h-auto"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
                      Call This Office
                    </p>

                    <a
                      href={`tel:${office.tel}`}
                      className="text-sm sm:text-base font-bold text-[#060C61] hover:text-[#F07C62] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Illustration */}
          <div className="mt-10 hidden lg:block">
            <img
              src={mainImg}
              alt="Contact Education Saathi"
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className="mt-10 hidden md:block lg:hidden">
            <img
              src={mainImgInverted}
              alt="Contact Education Saathi"
              className="w-full max-w-sm h-auto"
            />
          </div>

        </div>


        {/* ================= RIGHT SECTION - FORM ================= */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10 h-fit">

          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#060C61]">
              Let's start a conversation
            </h3>

            <p className="text-gray-500 mt-2">
              Tell us a little about yourself and we'll get back to you soon.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            {/* FIRST NAME & LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition"
                />
              </div>


              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition"
                />
              </div>

            </div>


            {/* PHONE & STATE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition"
                />
              </div>


              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  State
                </label>

                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition"
                >
                  <option value="">Select your state</option>

                  {indianStates.map((state) => (
                    <option
                      key={state.isoCode}
                      value={state.name}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>


            {/* INTEREST */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Your Interest
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {[
                  "MBBS UG",
                  "MBBS PG",
                  "MBBS Abroad",
                  "Study Abroad",
                  "Other",
                ].map((option) => (

                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      formData.interest === option
                        ? "border-[#5964B5] bg-[#5964B5]/5"
                        : "border-gray-200 hover:border-[#5964B5]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value={option}
                      checked={formData.interest === option}
                      onChange={handleChange}
                      required
                      className="accent-[#5964B5]"
                    />

                    <span className="text-sm text-gray-700 font-medium">
                      {option}
                    </span>
                  </label>

                ))}

              </div>

            </div>


            {/* BUDGET */}
            <div>

              <label
                htmlFor="budget"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Budget
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition"
              >
                <option value="">Select your budget</option>
                <option value="Below ₹5 Lakhs">
                  Below ₹5 Lakhs
                </option>
                <option value="₹5 - ₹10 Lakhs">
                  ₹5 - ₹10 Lakhs
                </option>
                <option value="₹10 - ₹20 Lakhs">
                  ₹10 - ₹20 Lakhs
                </option>
                <option value="₹20 - ₹30 Lakhs">
                  ₹20 - ₹30 Lakhs
                </option>
                <option value="₹30 Lakhs and Above">
                  ₹30 Lakhs and Above
                </option>
              </select>

            </div>


            {/* MESSAGE */}
            <div>

              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5964B5]/30 focus:border-[#5964B5] transition resize-none"
              />

            </div>


            {/* AGREEMENT */}
            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 accent-[#5964B5]"
              />

              <span className="text-sm text-gray-600 leading-relaxed">
                I agree to be contacted by the Education Saathi team
                regarding my query or enrollment.
              </span>

            </label>


            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#060C61] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#5964B5] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Your Request"}
            </button>

          </form>

        </div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
};

export default ContactUs;