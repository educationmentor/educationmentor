import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section - Brand */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
              The Education Saathi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empowering students to achieve global careers through mentorship, counselling, and real-world guidance.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a href="https://www.instagram.com/the_educational_mentor?igsh=MW1ucmNmcXl3eWJsMg==" className="text-gray-600 hover:text-pink-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.503 2.503 0 0 1 12 9.5zm4.75-3.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z"/>
                  </svg>
                </a>


                {/* Facebook */}
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1.1 0 2.3.2 2.3.2v2.5H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.1v7A10 10 0 0 0 22 12z"/>
                  </svg>
                </a>

                <a href="https://youtube.com/@theeducationalmentortem?si=TeFAgAWP6S1hcs61" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {/* Column One */}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Contact Info:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="min-w-5 min-h-5 text-red-500 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Noida : Suite No.4, CoWorkZen, Tower B, 6th Floor, Bhutani Cyber Park, Sector 62, Noida - 201309</p>
                  <p className="text-gray-600">Guwahati: 3rd Floor, 6, MS Road, Fancy Bazar, Guwahati - 781001</p>
                  <p className="text-gray-600">New delhi : 219 , 221 , 223 Second floor , Best Arcade Market , Above Canara Bank  , Near K.M. Chowk , Pocket 6, Sector 12 Dwarka - New Delhi - 110075</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-blue-500">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a href='mailto:enquiry.educationsaathi@gmail.com'>
                <p className="text-gray-600">enquiry.educationsaathi@gmail.com</p>  

                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-green-500 mb-auto ">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                <a href='tel:+918800907657'>
                <p className="text-gray-600">+91 88009 07657 Head office </p></a>
                <a href='tel:+918510010500'>
                <p className="text-gray-600">+91 85100 10500 Guwahati Branch office </p></a>
                <a href='tel:+917011043124'>
                <p className="text-gray-600">+91 70110 43124 Noida Branch office </p></a>
         </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2024 Education Saathi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
