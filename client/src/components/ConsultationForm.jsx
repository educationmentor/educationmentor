import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../util/baseUrl';
import consultationForm from '../assets/images/consultationForm.png';
const ConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestedCountry: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send request without requiring login
      const requestData = {
        ...formData,
        status: 'pending'
      };

      const response = await axios.post(
        `${baseUrl}/api/consultationForm/request`, 
        requestData
      );

      if (response.data.success) {
        toast.success('Consultation request submitted successfully! We will contact you soon.');
        // Wait for toast to appear before closing modal
        setTimeout(() => {
          onClose();
        }, 1000); // 2 second delay
      }
    } catch (error) {
      console.error('Consultation request error:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to submit consultation request');
      } else if (error.request) {
        console.error('Request made but no response received:', error);
        toast.error('Unable to reach the server. Please check your internet connection.');
      } else {
        toast.error('An error occurred while submitting your request.');
      }
    } finally {
      setLoading(false);
    }
  };
  // console.log('Form data:', formData);

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,.5)]  flex items-center justify-center z-50 overflow-y-auto"  >
      <div className='absolute h-full w-full top-0 left-0  z-0' onClick={onClose}> </div>
      <div className="z-50 relative bg-white   rounded-[2vw] md:rounded-[.5vw] w-[90vw] md:w-[55vw] h-[85vw] md:h-[37vw] max-h-[95vh] overflow-y-auto my-[2vh]">
        <div id='form' className={`absolute p-4 md:p-0  md:flex top-0 left-0 ${success ? 'opacity-0' : 'opacity-100'} z-50 w-full transition-all duration-100 h-full`}>
          <img src={consultationForm} alt='consultation' className='hidden md:block w-[28vw] h-full  shadow-2xl' />
          <div className='md:flex md:flex-col items-center  md:pt-[2vw] lg:md:pt-[4vw] w-full h-full'>
        <h2 className="text-h6TextPhone md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold text-gray-900  text-center">Book a Free Consultation</h2>
        <form onSubmit={handleSubmit} className="text-smallTextPhone md:w-[20vw] md:text-smallText flex flex-col gap-[2vw] md:gap-[.875vw]">
          <div className=' '>
            <label className="block  font-medium text-gray-700 ">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 "
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 ">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 "
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 ">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 "
            />
          </div>
          
          
          <div>
            <label className="block  font-medium text-gray-700 ">Country Intrested</label>
            <input
              type="text"
              name="interestedCountry"
              value={formData.interestedCountry}
              onChange={handleChange}
              required
              className="mt-[1vw] md:mt-[0.375vw] block w-full px-[2vw] md:px-3 py-[1vw] md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 "
            />
          </div>
         
          <div className="mt-[.7125vw]  text-smallTextPhone md:text-smallText flex justify-center gap-[2vw] md:gap-[.5vw]">
            <button
              type="button"
              onClick={onClose}
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-gray-700 bg-transparent border-[#CACACA] border-[1px] rounded-[12.5vw] md:rounded-[6.25vw]  cursor-pointer hover:bg-gray-200 "
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-[4vw] md:px-[1.5vw] py-[1.5vw] md:py-[.5vw] font-medium text-white bg-indigo-900 border-[1px] rounded-[12.5vw] md:rounded-[6.25vw] hover:bg-indigo-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        <ToastContainer className='z-[9999]' position="top-right" autoClose={5000} />
        </div>
        </div>
        <div id='success' className={`absolute p-8 top-0 left-0 ${success ? 'opacity-100' : 'opacity-0'} w-full transition-all duration-100 h-full flex flex-col items-center justify-center`}>
          <h5 className="text-h6TextPhone leading-[120%] md:text-h5Text mb-[4vw] md:mb-[2vw] font-bold text-gray-900  text-center">Thank You 🎉</h5>
          <p className='text-smallTextPhone md:text-regularText font-medium leading-[140%] text-center md:w-[21.25vw]'>For Booking a Free Consulation with us well reach out to you soon</p>
        </div>
      </div>
     
    </div>
  );
};

export default ConsultationForm;