
import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { State, City } from 'country-state-city';

import { baseUrl } from '../util/baseUrl';

import callIcon from '../assets/icons/call.svg';
import mailIcon from '../assets/icons/mail.svg';
import locationIcon from '../assets/icons/location_on.svg';

import mainImg from '../assets/images/contact-us/main.png';
import mainImgInverted from '../assets/images/contact-us/main-inverted.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    state: '',
    city: '',
    interest: '',
    budget: '',
    message: '',
    agreeToContact: false,
  });

  const [loading, setLoading] = useState(false);

  // Get all Indian states
  const indianStates = useMemo(() => {
    return State.getStatesOfCountry('IN');
  }, []);

  // Get cities for selected state
  const citiesForState = useMemo(() => {
    if (!formData.state) return [];

    const stateData = indianStates.find(
      (state) => state.name === formData.state
    );

    if (!stateData) return [];

    return City.getCitiesOfState('IN', stateData.isoCode);
  }, [formData.state, indianStates]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,

      // Reset city when state changes
      ...(name === 'state' && { city: '' }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToContact) {
      toast.error(
        'Please agree to be contacted by the Education Saathi team'
      );
      return;
    }

    setLoading(true);

    console.log(formData);

    try {
      const response = await axios.post(
        `${baseUrl}/api/consultationForm/contact-us-request`,
        formData
      );

      if (response.data.success) {
        toast.success(
          'Thank you for contacting us! We will get back to you soon.'
        );

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          state: '',
          city: '',
          interest: '',
          budget: '',
          message: '',
          agreeToContact: false,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);

      if (error.response) {
        toast.error(
          error.response.data.message || 'Failed to submit contact form'
        );
      } else {
        toast.error(
          'An error occurred while submitting your form. Please try again.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.4vw] bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 gap-[4.1vw] justify-center mt-[15vw] md:mt-[4vw]'>

      {/* LEFT SECTION */}
      <div className='flex md:flex-row lg:flex-col justify-between'>

        <div className='flex flex-col gap-[1vw] md:gap-[.833vw]'>

          <h2 className='text-h3Text pb-[.4vw] font-bold text-[#060C61] leading-[120%]'>
            Contact Us
          </h2>

          <p className='text-regularText pb-[.833vw] font-bold'>
            Our friendly team would love to hear from you.
          </p>

          {/* EMAIL */}
          <div className='flex items-center gap-[2vw] md:gap-[.833vw]'>
            <img
              src={mailIcon}
              alt='mailIcon'
              className='w-[1.25] h-auto'
            />

            <a href='mailto:enquiry.educationsaathi@gmail.com'>
              <p className='text-smallTextPhone md:text-smallText'>
                enquiry.educationsaathi@gmail.com
              </p>
            </a>
          </div>

          {/* PHONE */}
          <div className='flex items-center gap-[2vw] md:gap-[.833vw]'>

            <img
              src={callIcon}
              alt='callIcon'
              className='w-[1.25] h-auto mb-auto'
            />

            <div>
              <a href='tel:+918800907657'>
                <p className='text-smallTextPhone md:text-smallText'>
                  +91 8800907657 Head Office
                </p>
              </a>

              <a href='tel:+918510010500'>
                <p className='text-smallTextPhone md:text-smallText'>
                  +91 85100 10500 Guwahati Branch office
                </p>
              </a>

              <a href='tel:+917011043124'>
                <p className='text-smallTextPhone md:text-smallText'>
                  +91 70110 43124 Noida Branch office
                </p>
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className='flex items-start gap-[2vw] md:gap-[.833vw] md:w-[18vw]'>

            <img
              src={locationIcon}
              alt='locationIcon'
              className='w-[1.25] h-auto'
            />

            <div>
              <p className='text-smallTextPhone md:text-regularText'>
                New Delhi (Head Office) - 219, 221, 223 Second Floor,
                Best Arcade Market, Above Canara Bank, Near K.M. Chowk,
                Pocket 6, Sector 12 Dwarka, New Delhi - 110075
              </p>

              <br />

              <p className='text-smallTextPhone md:text-regularText'>
                Noida: Suite No.4, CoWorkZen, Tower B, 6th Floor,
                Bhutani Cyber Park, Sector 62, Noida - 201309
              </p>

              <br />

              <p className='text-smallTextPhone md:text-regularText'>
                Guwahati: 3rd Floor, 6, MS Road, Fancy Bazar,
                Guwahati - 781001
              </p>
            </div>
          </div>

        </div>

        <img
          src={mainImg}
          alt='main'
          className='hidden lg:block w-[33.7vw] h-auto'
        />

        <img
          src={mainImgInverted}
          alt='main'
          className='hidden md:block lg:hidden w-[33.7vw] h-auto'
        />

      </div>

      {/* RIGHT SECTION - FORM */}
      <div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-6'
        >

          {/* FIRST NAME & LAST NAME */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                First name
              </label>

              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Last name
              </label>

              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>

          </div>

          {/* PHONE NUMBER & STATE */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div>
              <label
                htmlFor='phoneNumber'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Phone number
              </label>

              <input
                type='tel'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='state'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                State
              </label>

              <select
                id='state'
                name='state'
                value={formData.state}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              >
                <option value=''>Select one...</option>

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

          {/* SELECT YOUR INTEREST */}
          <div>

            <label className='block text-sm font-medium text-gray-700 mb-3'>
              Select Your Interest
            </label>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

              {/* LEFT COLUMN */}
              <div className='flex flex-col gap-3'>

                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='MBBS UG'
                    checked={formData.interest === 'MBBS UG'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />

                  <span className='text-sm text-gray-700'>
                    MBBS UG
                  </span>
                </label>

                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='MBBS PG'
                    checked={formData.interest === 'MBBS PG'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />

                  <span className='text-sm text-gray-700'>
                    MBBS PG
                  </span>
                </label>

                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='Other'
                    checked={formData.interest === 'Other'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />

                  <span className='text-sm text-gray-700'>
                    Other
                  </span>
                </label>

              </div>

              {/* RIGHT COLUMN */}
              <div className='flex flex-col gap-3'>

                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='MBBS Abroad'
                    checked={formData.interest === 'MBBS Abroad'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />

                  <span className='text-sm text-gray-700'>
                    MBBS Abroad
                  </span>
                </label>

                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='Study Abroad'
                    checked={formData.interest === 'Study Abroad'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />

                  <span className='text-sm text-gray-700'>
                    Study Abroad
                  </span>
                </label>

              </div>

            </div>
          </div>

          {/* BUDGET */}
          <div>

            <label
              htmlFor='budget'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Your Budget
            </label>

            <select
              id='budget'
              name='budget'
              value={formData.budget}
              onChange={handleChange}
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
            >
              <option value=''>
                Your budget...
              </option>

              <option value='Below ₹5 Lakhs'>
                Below ₹5 Lakhs
              </option>

              <option value='₹5 - ₹10 Lakhs'>
                ₹5 - ₹10 Lakhs
              </option>

              <option value='₹10 - ₹20 Lakhs'>
                ₹10 - ₹20 Lakhs
              </option>

              <option value='₹20 - ₹30 Lakhs'>
                ₹20 - ₹30 Lakhs
              </option>

              <option value='₹30 Lakhs and Above'>
                ₹30 Lakhs and Above
              </option>
            </select>

          </div>

          {/* MESSAGE */}
          <div>

            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Message
            </label>

            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder='Type your message...'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none'
            />

          </div>

          {/* CONTACT AGREEMENT */}
          <div>

            <label className='flex items-start cursor-pointer'>

              <input
                type='checkbox'
                name='agreeToContact'
                checked={formData.agreeToContact}
                onChange={handleChange}
                required
                className='mt-1 mr-2 text-purple-600 focus:ring-purple-500'
              />

              <span className='text-sm text-gray-700'>
                I agree to be contacted by the Education Saathi team
                regarding my query or enrollment.
              </span>

            </label>

          </div>

          {/* SUBMIT BUTTON */}
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

        </form>

        <ToastContainer
          position='top-right'
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

    </div>
  );
};

export default ContactUs;

