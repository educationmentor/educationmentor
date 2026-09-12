import React, { useState, useEffect } from "react";
import {
  Phone,
  MoreHorizontal,
  X,
  MessageCircle,
  Mail,
  Instagram,
  ChevronRight,
} from "lucide-react";

const FloatingActions = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable background scrolling when contact popup is open
  useEffect(() => {
    document.body.style.overflow = contactOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [contactOpen]);

  return (
    <>
      {/* ================= FLOATING ACTION BUTTONS ================= */}
      {/* ================= FLOATING ACTION BUTTONS ================= */}
<div className="fixed right-5 sm:right-7 bottom-6 sm:bottom-8 z-[100] flex flex-col items-center gap-4">

  {/* EXPANDED MENU */}
  {menuOpen && (
    <div className="flex flex-col items-center gap-3 mb-1 animate-in fade-in slide-in-from-bottom-5 duration-300">

      {/* WhatsApp */}
      <a
        href="https://wa.me/918800907657"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          w-[58px] h-[58px]
          rounded-full
          bg-[#25D366]
          text-white
          flex items-center justify-center
          shadow-[0_10px_28px_rgba(37,211,102,0.45)]
          hover:scale-110
          transition-all duration-300
        "
      >
        <MessageCircle size={25} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/education_saathi_?stkn=MThjYW5taWI2cDF5OQ=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          w-[58px] h-[58px]
          rounded-full
          bg-gradient-to-br
          from-[#833AB4]
          via-[#FD1D1D]
          to-[#FCAF45]
          text-white
          flex items-center justify-center
          shadow-[0_10px_28px_rgba(225,48,108,0.45)]
          hover:scale-110
          transition-all duration-300
        "
      >
        <Instagram size={25} />
      </a>

    </div>
  )}

  {/* MAIN CALL BUTTON */}
  <button
    onClick={() => {
      setMenuOpen(false);
      setContactOpen(true);
    }}
    aria-label="Contact Us"
    className="
      w-[62px] h-[62px]
      rounded-full
      bg-[#4F46E5]
      text-white
      flex items-center justify-center
      border-2 border-white
      shadow-[0_10px_30px_rgba(79,70,229,0.5)]
      hover:bg-[#3730A3]
      hover:scale-110
      transition-all duration-300
    "
  >
    <Phone size={26} fill="currentColor" />
  </button>

  {/* THREE DOT BUTTON */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="More options"
    className="
      w-[62px] h-[62px]
      rounded-full
      bg-[#FF5A5F]
      text-white
      flex items-center justify-center
      border-2 border-white
      shadow-[0_10px_30px_rgba(255,90,95,0.5)]
      hover:bg-[#E5484D]
      hover:scale-110
      transition-all duration-300
    "
  >
    {menuOpen ? (
      <X size={28} strokeWidth={2.5} />
    ) : (
      <MoreHorizontal size={28} strokeWidth={3} />
    )}
  </button>

</div>

      {/* ================= CONTACT US POPUP ================= */}
      {contactOpen && (
        <div
          className="
            fixed inset-0
            z-[999]
            flex items-center justify-center
            bg-black/60
            backdrop-blur-[2px]
            px-4
            animate-in fade-in duration-300
          "
        >
          <div
            className="
              relative
              w-full max-w-[540px]
              bg-white
              rounded-[22px]
              shadow-2xl
              p-7 sm:p-8
              animate-in zoom-in-95 duration-300
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-2xl sm:text-[26px] font-bold text-[#172033]">
                Contact Us
              </h2>

              <button
                onClick={() => setContactOpen(false)}
                aria-label="Close"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#172033] transition-all"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            {/* CALL US */}
            <a
              href="tel:+918800907657"
              className="group w-full flex items-center gap-5 p-5 mb-4 rounded-[17px] border border-gray-200 bg-[#FCFCFC] hover:border-[#214A96]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#E7F0FF] text-[#2F66C5] flex items-center justify-center">
                <Phone size={24} fill="currentColor" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#172033]">
                  Call Us
                </h3>

                <p className="text-gray-500 text-base mt-1">
                  +91 88009 07657
                </p>
              </div>

              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-[#214A96] group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918800907657"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center gap-5 p-5 mb-4 rounded-[17px] border border-gray-200 bg-[#FCFCFC] hover:border-green-500/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#DDF7E8] text-[#16A65A] flex items-center justify-center">
                <MessageCircle size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#172033]">
                  WhatsApp
                </h3>

                <p className="text-gray-500 text-base mt-1">
                  Chat with us instantly
                </p>
              </div>

              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-green-600 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:enquiry.educationsaathi@gmail.com"
              className="group w-full flex items-center gap-5 p-5 rounded-[17px] border border-gray-200 bg-[#FCFCFC] hover:border-[#F07C62]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#FFF0E8] text-[#F05A1A] flex items-center justify-center">
                <Mail size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#172033]">
                  Email
                </h3>

                <p className="text-gray-500 text-sm sm:text-base mt-1 break-all">
                  enquiry.educationsaathi@gmail.com
                </p>
              </div>

              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-[#F05A1A] group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* SOCIAL */}
            <div className="flex justify-center items-center gap-7 mt-7">
              <a
                href="https://www.instagram.com/education_saathi_?stkn=MThjYW5taWI2cDF5OQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-12 h-12 rounded-full
                  bg-gradient-to-br
                  from-[#833AB4]
                  via-[#FD1D1D]
                  to-[#FCAF45]
                  text-white
                  flex items-center justify-center
                  hover:scale-110
                  transition-all duration-300
                  shadow-md
                "
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActions;