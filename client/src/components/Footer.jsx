import React from "react";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#172033] text-[#F7F5F0]">
      
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#5964B5]/25 blur-[120px]" />

      <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-[#F07C62]/10 blur-[120px]" />

      <div className="relative">

        {/* TOP CTA */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

              <div>
                <p className="text-[#F07C62] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                  Your next step starts here
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  You don't have to figure it out
                  <span className="text-[#A9A7D8]"> alone.</span>
                </h2>
              </div>

              <button
                onClick={() => scrollToSection("consultation")}
                className="group inline-flex items-center justify-center gap-3 bg-[#F07C62] text-[#172033] px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Talk to a mentor

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>
          </div>
        </div>


        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">


            {/* BRAND */}
            <div className="lg:col-span-1">

              {/* Logo / Brand */}
              <div className="mb-6">

                <h2 className="text-2xl font-semibold tracking-tight">
                  Education
                  <span className="text-[#F07C62]"> Saathi</span>
                </h2>

                <div className="w-12 h-[2px] bg-[#F07C62] mt-3" />

              </div>

              <p className="text-[#A9A7D8] leading-relaxed text-sm sm:text-base max-w-sm">
                Helping students make confident education decisions through
                honest guidance, personalised counselling and the right
                opportunities.
              </p>


              {/* Socials */}
              <div className="flex gap-3 mt-7">

                <a
                  href="https://www.instagram.com/education_saathi_?stkn=MThjYW5taWI2cDF5OQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#F7F5F0] transition-all duration-300 hover:bg-[#F07C62] hover:text-[#172033] hover:border-[#F07C62] hover:-translate-y-1"
                >
                  <Instagram size={19} />
                </a>

                <a
                  href="https://youtube.com/@theeducationalmentortem?si=TeFAgAWP6S1hcs61"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#F7F5F0] transition-all duration-300 hover:bg-[#F07C62] hover:text-[#172033] hover:border-[#F07C62] hover:-translate-y-1"
                >
                  <Youtube size={20} />
                </a>

              </div>

            </div>


            {/* EXPLORE */}
            <div>

              <h3 className="text-lg font-semibold mb-6">
                Explore
              </h3>

              <ul className="space-y-4">

                <li>
                  <a
                    href="/"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    About Us
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("blogs")}
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    Insights & Blogs
                  </button>
                </li>

                <li>
                  <a
                    href="/contact-us"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    Contact Us
                  </a>
                </li>

              </ul>

            </div>


            {/* STUDY OPTIONS */}
            <div>

              <h3 className="text-lg font-semibold mb-6">
                Study Options
              </h3>

              <ul className="space-y-4">

                <li>
                  <a
                    href="/mbbs-in-india"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    MBBS in India
                  </a>
                </li>

                <li>
                  <a
                    href="/mbbs-in-nepal"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    MBBS in Nepal
                  </a>
                </li>

                <li>
                  <a
                    href="/mbbs-in-georgia"
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    MBBS in Georgia
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => scrollToSection("destinations")}
                    className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                    Study Abroad
                  </button>
                </li>

              </ul>

            </div>


            {/* CONTACT */}
            <div>

              <h3 className="text-lg font-semibold mb-6">
                Get in touch
              </h3>


              {/* Email */}
              <a
                href="mailto:enquiry.educationsaathi@gmail.com"
                className="flex items-start gap-3 mb-5 group"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F07C62] group-hover:bg-[#F07C62] group-hover:text-[#172033] transition-all">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#A9A7D8] mb-1">
                    Email us
                  </p>

                  <p className="text-sm text-[#F7F5F0] break-all">
                    enquiry.educationsaathi@gmail.com
                  </p>
                </div>
              </a>


              {/* Phone */}
              <div className="flex items-start gap-3">

                <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F07C62]">
                  <Phone size={18} />
                </div>

                <div>

                  <p className="text-xs text-[#A9A7D8] mb-2">
                    Call us
                  </p>

                  <div className="space-y-2">

                    <a
                      href="tel:+918800907657"
                      className="block text-sm text-[#F7F5F0] hover:text-[#F07C62] transition-colors"
                    >
                      +91 88009 07657
                    </a>

                    <a
                      href="tel:+917011043124"
                      className="block text-sm text-[#F7F5F0] hover:text-[#F07C62] transition-colors"
                    >
                      +91 70110 43124
                    </a>

                    <a
                      href="tel:+918510010500"
                      className="block text-sm text-[#F7F5F0] hover:text-[#F07C62] transition-colors"
                    >
                      +91 85100 10500
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* OFFICES */}
          <div className="mt-16 pt-10 border-t border-white/10">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-10 h-10 rounded-xl bg-[#5964B5]/30 flex items-center justify-center text-[#F07C62]">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Our Offices
                </p>

                <p className="text-xs text-[#A9A7D8]">
                  Visit us at any of our locations
                </p>
              </div>

            </div>


            <div className="grid md:grid-cols-3 gap-5">

              {/* Delhi */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1">

                <p className="text-[#F07C62] font-semibold text-sm mb-3">
                  New Delhi · Head Office
                </p>

                <p className="text-sm leading-relaxed text-[#A9A7D8]">
                  219, 221, 223 Second Floor, Best Arcade Market,
                  Above Canara Bank, Near K.M. Chowk, Pocket 6,
                  Sector 12, Dwarka, New Delhi – 110075
                </p>

              </div>


              {/* Noida */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1">

                <p className="text-[#F07C62] font-semibold text-sm mb-3">
                  Noida
                </p>

                <p className="text-sm leading-relaxed text-[#A9A7D8]">
                  Suite No. 4, CoWorkZen, Tower B, 6th Floor,
                  Bhutani Cyber Park, Sector 62,
                  Noida – 201309
                </p>

              </div>


              {/* Guwahati */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1">

                <p className="text-[#F07C62] font-semibold text-sm mb-3">
                  Guwahati
                </p>

                <p className="text-sm leading-relaxed text-[#A9A7D8]">
                  3rd Floor, 6, MS Road,
                  Fancy Bazar,
                  Guwahati – 781001
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6">

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-sm text-[#A9A7D8] flex items-center gap-1">
                © {new Date().getFullYear()} Education Saathi.
                Made with
                <Heart size={14} className="text-[#F07C62] fill-[#F07C62]" />
                for students.
              </p>


              <div className="flex flex-wrap justify-center gap-5 text-sm">

                <button className="text-[#A9A7D8] hover:text-[#F07C62] transition-colors">
                  Privacy Policy
                </button>

                <button className="text-[#A9A7D8] hover:text-[#F07C62] transition-colors">
                  Terms & Conditions
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;