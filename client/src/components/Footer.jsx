
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import ConsultationForm from "./ConsultationForm";

const Footer = () => {
  const navigate = useNavigate();

  // Consultation Popup State
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  // Disable background scrolling when popup is open
  useEffect(() => {
    if (showConsultationForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showConsultationForm]);

  // Homepage section navigation
  const handleHomepageSection = (id) => {
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-[#172033] text-[#F7F5F0]">
        {/* Background Decorations */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#5964B5]/25 blur-[120px]" />

        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-[#F07C62]/10 blur-[120px]" />

        <div className="relative">

          {/* ================= TOP CTA ================= */}
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

                {/* TALK TO MENTOR */}
                <button
                  onClick={() => setShowConsultationForm(true)}
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


          {/* ================= MAIN FOOTER ================= */}
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

              {/* ================= BRAND ================= */}
              <div className="lg:col-span-1">

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

              </div>


              {/* ================= EXPLORE ================= */}
              <div>
                <h3 className="text-lg font-semibold mb-6">
                  Explore
                </h3>

                <ul className="space-y-4">

                  <li>
                    <button
                      onClick={() => navigate("/")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      Home
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => navigate("/about")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      About Us
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleHomepageSection("allblogs")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      Insights & Blogs
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => navigate("/contact-us")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      Contact Us
                    </button>
                  </li>

                </ul>
              </div>


              {/* ================= STUDY OPTIONS ================= */}
              <div>
                <h3 className="text-lg font-semibold mb-6">
                  Study Options
                </h3>

                <ul className="space-y-4">

                  <li>
                    <button
                      onClick={() => navigate("/mbbs-in-india")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      MBBS in India
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => navigate("/mbbs-in-nepal")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      MBBS in Nepal
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => navigate("/mbbs-in-georgia")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      MBBS in Georgia
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => handleHomepageSection("destinations")}
                      className="group text-[#A9A7D8] hover:text-[#F07C62] transition-colors inline-flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-3 h-[1px] bg-[#F07C62] transition-all duration-300" />
                      Study Abroad
                    </button>
                  </li>

                </ul>
              </div>


              {/* ================= GET IN TOUCH ================= */}
              <div>
                <h3 className="text-lg font-semibold mb-6">
                  Get in touch
                </h3>

                {/* EMAIL */}
                <a
                  href="mailto:enquiry.educationsaathi@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F07C62] group-hover:bg-[#F07C62] group-hover:text-[#172033] transition-all duration-300">
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


                {/* SOCIAL MEDIA */}
                <div className="mt-7">

                  <p className="text-xs text-[#A9A7D8] mb-3">
                    Follow us
                  </p>

                  <div className="flex gap-3">

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/education_saathi_?stkn=MThjYW5taWI2cDF5OQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#F7F5F0] transition-all duration-300 hover:bg-[#F07C62] hover:text-[#172033] hover:border-[#F07C62] hover:-translate-y-1"
                    >
                      <Instagram size={19} />
                    </a>


                    {/* YouTube */}
                    <a
                      href="https://youtube.com/@theeducationalmentortem?si=TeFAgAWP6S1hcs61"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[#F7F5F0] transition-all duration-300 hover:bg-[#F07C62] hover:text-[#172033] hover:border-[#F07C62] hover:-translate-y-1"
                    >
                      <Youtube size={20} />
                    </a>

                  </div>
                </div>

              </div>

            </div>


            {/* ================= OUR OFFICES ================= */}
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
                    Connect with the Education Saathi team near you
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {/* NEW DELHI */}
                <div className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-[#F07C62]/40">

                  <div className="flex items-center gap-2 mb-4">

                    <div className="w-9 h-9 rounded-lg bg-[#F07C62]/10 flex items-center justify-center text-[#F07C62]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-[#F07C62] font-semibold text-sm">
                        New Delhi
                      </p>

                      <p className="text-xs text-[#A9A7D8]">
                        Head Office
                      </p>
                    </div>

                  </div>

                  <p className="text-sm leading-relaxed text-[#A9A7D8] min-h-[120px]">
                    219, 221, 223 Second Floor, Best Arcade Market,
                    Above Canara Bank, Near K.M. Chowk, Pocket 6,
                    Sector 12, Dwarka, New Delhi – 110075
                  </p>

                  <a
                    href="tel:+918800907657"
                    className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3 text-[#F7F5F0] hover:text-[#F07C62] transition-all duration-300 group/phone"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/phone:bg-[#F07C62] group-hover/phone:text-[#172033] transition-all duration-300">
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-[#A9A7D8]">
                        Call Head Office
                      </p>

                      <p className="text-sm font-medium">
                        +91 88009 07657
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto opacity-0 group-hover/phone:opacity-100 transition-all duration-300"
                    />
                  </a>

                </div>


                {/* NOIDA */}
                <div className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-[#F07C62]/40">

                  <div className="flex items-center gap-2 mb-4">

                    <div className="w-9 h-9 rounded-lg bg-[#F07C62]/10 flex items-center justify-center text-[#F07C62]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-[#F07C62] font-semibold text-sm">
                        Noida
                      </p>

                      <p className="text-xs text-[#A9A7D8]">
                        Branch Office
                      </p>
                    </div>

                  </div>

                  <p className="text-sm leading-relaxed text-[#A9A7D8] min-h-[120px]">
                    Suite No. 4, CoWorkZen, Tower B, 6th Floor,
                    Bhutani Cyber Park, Sector 62,
                    Noida – 201309
                  </p>

                  <a
                    href="tel:+917011043124"
                    className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3 text-[#F7F5F0] hover:text-[#F07C62] transition-all duration-300 group/phone"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/phone:bg-[#F07C62] group-hover/phone:text-[#172033] transition-all duration-300">
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-[#A9A7D8]">
                        Call Noida Office
                      </p>

                      <p className="text-sm font-medium">
                        +91 70110 43124
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto opacity-0 group-hover/phone:opacity-100 transition-all duration-300"
                    />
                  </a>

                </div>


                {/* GUWAHATI */}
                <div className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-[#F07C62]/40">

                  <div className="flex items-center gap-2 mb-4">

                    <div className="w-9 h-9 rounded-lg bg-[#F07C62]/10 flex items-center justify-center text-[#F07C62]">
                      <MapPin size={17} />
                    </div>

                    <div>
                      <p className="text-[#F07C62] font-semibold text-sm">
                        Guwahati
                      </p>

                      <p className="text-xs text-[#A9A7D8]">
                        Branch Office
                      </p>
                    </div>

                  </div>

                  <p className="text-sm leading-relaxed text-[#A9A7D8] min-h-[120px]">
                    3rd Floor, 6, MS Road,
                    Fancy Bazar,
                    Guwahati – 781001
                  </p>

                  <a
                    href="tel:+918510010500"
                    className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3 text-[#F7F5F0] hover:text-[#F07C62] transition-all duration-300 group/phone"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/phone:bg-[#F07C62] group-hover/phone:text-[#172033] transition-all duration-300">
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-xs text-[#A9A7D8]">
                        Call Guwahati Office
                      </p>

                      <p className="text-sm font-medium">
                        +91 85100 10500
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto opacity-0 group-hover/phone:opacity-100 transition-all duration-300"
                    />
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ================= BOTTOM FOOTER ================= */}
          <div className="border-t border-white/10">

            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6">

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm text-[#A9A7D8] flex items-center gap-1 flex-wrap justify-center">
                  © {new Date().getFullYear()} Education Saathi.
                  Made with

                  <Heart
                    size={14}
                    className="text-[#F07C62] fill-[#F07C62]"
                  />

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


      {/* ================= CONSULTATION POPUP ================= */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#172033]/70 backdrop-blur-sm animate-fadeIn">
          <ConsultationForm
            onClose={() => setShowConsultationForm(false)}
          />
        </div>
      )}
    </>
  );
};

export default Footer;

