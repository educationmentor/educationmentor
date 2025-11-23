import React, { useState, useMemo } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { State, City } from 'country-state-city';
import { baseUrl } from '../util/baseUrl';
import callIcon from '../assets/icons/call.svg';
import mailIcon from '../assets/icons/mail.svg';
import locationIcon from '../assets/icons/location_on.svg';
import mainImg from '../assets/images/contact-us/main.png';
import mainImgInverted from '../assets/images/contact-us/main-inverted.png'
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    state: '',
    city: '',
    interest: '',
    message: '',
    agreeToContact: false
  });
  const [loading, setLoading] = useState(false);

  // Get all Indian states (India country code is 'IN')
  const indianStates = useMemo(() => {
    return State.getStatesOfCountry('IN');
  }, []);

  // Get cities for selected state
  const citiesForState = useMemo(() => {
    if (!formData.state) return [];
    const stateData = indianStates.find(s => s.name === formData.state);
    if (!stateData) return [];
    return City.getCitiesOfState('IN', stateData.isoCode);
  }, [formData.state, indianStates]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      // Reset city when state changes
      ...(name === 'state' && { city: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeToContact) {
      toast.error('Please agree to be contacted by the Educational Mentor team');
      return;
    }

    setLoading(true);
    console.log(formData)
    try {
      // You can create a separate contact endpoint or use the consultation endpoint
      const response = await axios.post(
        `${baseUrl}/api/consultationForm/contact-us-request`,
        formData
      );

      if (response.data.success) {
        toast.success('Thank you for contacting us! We will get back to you soon.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          state: '',
          city: '',
          interest: '',
          message: '',
          agreeToContact: false
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to submit contact form');
      } else {
        toast.error('An error occurred while submitting your form. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.4vw] bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 gap-[4.1vw] justify-center mt-[15vw] md:mt-[4vw]  '>
      <div className='flex md:flex-row lg:flex-col justify-between'>
        <div className='flex flex-col gap-[1vw] md:gap-[.833vw]'>
        <h2 className='text-h3Text pb-[.4vw] font-bold text-[#060C61] leading-[120%] '>Contact Us</h2>
        <p className='text-regularText pb-[.833vw]  font-bold'>Our friendly team would love to hear from you.</p>

        <div className='flex items-center gap-[2vw] md:gap-[.833vw]'>
          <img src={mailIcon} alt="mailIcon" className='w-[1.25] h-auto' />
          <a href="mailto:educationalmentor@gmail.com">
            <p className='text-smallTextPhone md:text-smallText'>educationalmentor@gmail.com</p>
          </a>
        </div>
        <div className='flex items-center gap-[2vw] md:gap-[.833vw]'>
          <img src={callIcon} alt="callIcon" className='w-[1.25] h-auto' />
          <a href="mailto:educationalmentor@gmail.com">
            <p className='text-smallTextPhone md:text-smallText '>+91 88009 07657</p>
          </a>
        </div>
        <div className='flex items-start gap-[2vw] md:gap-[.833vw] md:w-[18vw]'>
          <img src={locationIcon} alt="locationIcon" className='w-[1.25] h-auto' />
          <a href="mailto:educationalmentor@gmail.com">
            <p className='text-smallTextPhone md:text-regularText '>J-65,gautam Nagar Behind, Deepak Laxmi Property, Gautam Nagar, South Delhi, New Delhi, Delhi, India, 110049.</p>
          </a>
        </div>
        </div>

        <img src={mainImg} alt="main" className='hidden lg:block  w-[33.7vw] h-auto' />
        <img src={mainImgInverted} alt="main" className='hidden md:block lg:hidden  w-[33.7vw] h-auto' />
        
      </div>
      <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* Two Column Layout - First Name & Last Name */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-1'>
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
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-1'>
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

          {/* Two Column Layout - Email & Phone Number */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
            <div>
              <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700 mb-1'>
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
          </div>

          {/* Two Column Layout - State & City */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='state' className='block text-sm font-medium text-gray-700 mb-1'>
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
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='city' className='block text-sm font-medium text-gray-700 mb-1'>
                City
              </label>
              <select
                id='city'
                name='city'
                value={formData.city}
                onChange={handleChange}
                required
                disabled={!formData.state || formData.state === ''}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed'
              >
                <option value=''>Select one...</option>
                {citiesForState.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Select Your Interest Section */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-3'>
              Select Your Interest
            </label>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Left Column */}
              <div className='flex flex-col gap-3'>
                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='Career Mentorship'
                    checked={formData.interest === 'Career Mentorship'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />
                  <span className='text-sm text-gray-700'>Career Mentorship</span>
                </label>
                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='Internship / Placement Guidance'
                    checked={formData.interest === 'Internship / Placement Guidance'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />
                  <span className='text-sm text-gray-700'>Internship / Placement Guidance</span>
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
                  <span className='text-sm text-gray-700'>Other</span>
                </label>
              </div>
              {/* Right Column */}
              <div className='flex flex-col gap-3'>
                <label className='flex items-center cursor-pointer'>
                  <input
                    type='radio'
                    name='interest'
                    value='Academic Support'
                    checked={formData.interest === 'Academic Support'}
                    onChange={handleChange}
                    required
                    className='mr-2 text-purple-600 focus:ring-purple-500'
                  />
                  <span className='text-sm text-gray-700'>Academic Support</span>
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
                  <span className='text-sm text-gray-700'>Study Abroad</span>
                </label>
              </div>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
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

          {/* Checkbox */}
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
                I agree to be contacted by the Educational Mentor team regarding my query or enrollment.
              </span>
            </label>
          </div>

          {/* Submit Button */}
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
