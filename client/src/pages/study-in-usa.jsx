import React from "react";
import { Link, useLocation } from "react-router-dom";

// ========== Breadcrumbs Component ==========
const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/").filter(segment => segment);

  const breadcrumbNames = {
    dashboard: "Dashboard",
    products: "Products",
    aboutUs: "About Us",
    contact: "Contact Us",
    admin: "Admin",
    "study-destinations": "Study Destinations",
    "study-mbbs-in-russia": "Study MBBS in Russia",
    "study-mbbs-in-china": "Study MBBS in China",
    "kazan-federal-university": "Kazan Federal University",
    "study-in-uk": "Study in UK",
    "study-mbbs-in-bangladesh": "Study MBBS in Bangladesh",
    "study-mbbs-in-tajikistan": "Study MBBS in Tajikistan",
    "study-in-hungary": "Study in Hungary",
    "study-mbbs-in-georgia": "Study MBBS in Georgia",
    "study-mbbs-in-ukraine": "Study MBBS in Ukraine",
    "study-in-germany": "Study in Germany",
    "study-in-australia": "Study in Australia",
    "study-mbbs-in-nepal": "Study MBBS in Nepal",
    "study-mbbs-in-kazakhstan": "Study MBBS in Kazakhstan",
    "study-mbbs-in-uzbekistan": "Study MBBS in Uzbekistan",
    "bashkir-medical-university": "Bashkir Medical University",
    "north-wester-state-medical-university": "North Western State Medical University",
    "kazaan-federal-university": "Kazan Federal University",
    "northern-state-medical-university": "Northern State Medical University",
    "orenburg-medical-university": "Orenburg Medical University",
    "petrozavodsk-state-university": "Petrozavodsk State University",
    "immanuel-kant-baltic-federal-university": "Immanuel Kant Baltic Federal University",
    "krasnoyarsk-state-medical-university": "Krasnoyarsk State Medical University",
    "national-research-nuclear-university": "National Research Nuclear University",
    "tambov-state-university": "Tambov State University",
    "ulyanovsk-state-university": "Ulyanovsk State University",
    "ural-state-medical-university": "Ural State Medical University",
    blogs: "Blogs",
    "study-mbbs-in-russia-without-neet": "Study MBBS in Russia without NEET",
    "study-mbbs-in-india": "Study MBBS in India",
    "nepal-medical-college": "Nepal Medical College",
    "b&c-medical-college": "B&C Medical College",
    "birat-medical-college": "Birat Medical College",
    "chitwan-medical-college": "Chitwan Medical College",
    "devdaha-medical-college": "Devdaha Medical College",
    "kathmandu-medical-college": "Kathmandu Medical College",
    "lumbini-medical-college": "Lumbini Medical College",
    "nobel-medical-college": "Nobel Medical College",
    "college-of-medical-science": "College of Medical Science",
    "kist-medical-college": "KIST Medical College",
    "manipal-college-of-medical-science": "Manipal College of Medical Science",
    "janaki-medical-college": "Janaki Medical College",
    "national-medical-college": "National Medical College",
    "nepalgunj-medical-college": "Nepalgunj Medical College",
    "new-vision-university": "New Vision University",
    "david-tvildiani-medical-university": "David Tvildiani Medical University",
    "tbilisi-state-medical-university": "Tbilisi State Medical University",
    "east-european-university": "East European University",
    "georgian-national-university-seu": "Georgian National University SEU",
    "international-black-sea-university": "International Black Sea University",
    "study-mbbs-in-kyrgyzstan": "Study MBBS in Kyrgyzstan",
    "central-asian-international-medical-university": "Central Asian International Medical University",
    "jalal-abad-international-university": "Jalal Abad International University",
    "avicenna-tajik-state-medical-university": "Avicenna Tajik State Medical University",
    "medical-social-institute-of-tajikistan": "Medical Social Institute of Tajikistan",
    "osh-state-university": "Osh State University",
    "osh-international-state-medical-university": "Osh International State Medical University",
    "jalal-abad-state-university": "Jalalabad State University",
    "royal-metropolitan-university": "Royal Metropolitan University",
    "bachelors-in-germany": "Bachelors in Germany",
    "masters-in-germany": "Masters in Germany",
    "md-in-germany": "MD in Germany",
    "hotel-management-in-germany": "Hotel Management in Germany",
  };

  return (
    <nav aria-label="breadcrumb" className="text-black text-tinyTextPhone md:text-regularText">
      <ul className="flex flex-wrap items-center">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold">
                  {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
                </span>
              ) : (
                <Link to={href} className="hover:underline">
                  {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// ========== UnlistedTableEqualWidth Component ==========
const UnlistedTableEqualWidth = ({ id, content, section2 = "" }) => {
  const sections = ["highlight"];
  const bool = sections.includes(section2);

  return (
    <div
      id={id}
      className="flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]"
    >
      {/* Title Section */}
      <div className="flex flex-col gap-[1.5vw]">
        <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">
          {content.title}
        </h3>

        <h5
          className={`text-center text-regularTextPhone md:text-h5Text font-bold opacity-80 ${
            !content.subTitle ? "hidden" : ""
          }`}
        >
          {content.subTitle}
        </h5>

        <p
          className={`text-center text-smallTextPhone md:text-regularText opacity-80 ${
            !content.description ? "hidden" : ""
          }`}
        >
          {content.description || ""}
        </p>
      </div>

      {/* Table Section */}
      <div className="flex overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse border border-black dark:border-borderGreyChosen">
          <thead>
            <tr className="bg-linenChosen dark:text-black text-regularTextPhone md:text-mediumText text-center">
              {content.data[0].map((header, index) => (
                <th
                  key={index}
                  className="min-w-[200px] border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[0.75vw] py-[0.625vw]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-smallTextPhone md:text-regularText align-top">
            {content.data.slice(1).map((row, i) => {
              const width = row.length;
              return (
                <tr key={i}>
                  {row.map((cell, index) => (
                    <td
                      key={index}
                      className={`border dark:text-white border-black dark:border-white px-[0.75vw] py-[0.625vw] ${
                        index === 0 ? "font-semibold" : ""
                      } ${bool && index === 0 ? "bg-linenChosen" : ""}`}
                      style={{ width: `${100 / width}%` }}
                    >
                      {content.href && index === 0 ? (
                        <a
                          href={Array.isArray(content.href) ? content.href[i] : content.href}
                          className="hover:underline text-blue-600"
                        >
                          {cell}
                        </a>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ========== Data ==========
const scamsAndAwarenessData = {
  title: "Scams & Admission Fraud Awareness",
  subTitle: "",
  data: [
    ["Scams", "Checks"],
    ["No “guaranteed visa” claims", "Avoid anyone promising approvals."],
    ["Never pay large sums to personal accounts", "Use official university portals."],
    ["Verify I-20 & SEVIS steps", "Cross-check school codes and payment portals."],
    ["Beware fake offers/“too good to be true” tuition", "Confirm via official sites."],
    ["Use documented service agreements with consultants", "Read refund policies."],
  ],
};

const climateData = {
  title: "Climate & Academic Breaks",
  subTitle: "",
  data: [
    ["Breaks", "Checks"],
    ["Winter Break", "~2–4 weeks (Dec–Jan)"],
    ["Spring Break", "~1 week (Mar)"],
    ["Summer Break", "~10–14 weeks (May–Aug) — prime for internships/RAships"],
  ],
};

const scholarshipData = {
  title: "Scholarships & Funding",
  subTitle: "",
  data: [
    ["University Scholarships (merit/need)", "Tuition discounts, entrance awards, departmental grants."],
    ["Assistantships", "Common in STEM/business analytics—tuition waivers + stipend."],
    ["External Scholarships", "Fulbright, Tata, Inlaks, JN Tata Endowment, state schemes."],
    ["On-campus Roles", "Research, grading, labs, libraries (F-1 compliant)."],
  ],
};

const visaData = {
  title: "Visa Types & Requirements",
  subTitle: "",
  data: [
    ["Type", "Details"],
    ["F-1 (Academic)", "Full-time programs, on-campus work allowed; OPT/CPT available."],
    ["J-1 (Exchange)", "Sponsored exchanges; some require two-year home residency."],
    ["M-1 (Vocational)", "Skill programs; different work rules from F-1."],
  ],
};

const topUniversitiesData = {
  title: "Top Universities in USA (Representative)",
  subTitle: "",
  data: [
    ["University", "Location", "Indicative Annual Tuition (USD)", "Global Band", "Popular Programs"],
    ["MIT", "Cambridge, MA", "$55k–65k", "Top 1–5", "Engineering, CS, Econ"],
    ["Stanford", "Stanford, CA", "$55k–70k", "Top 2–6", "CS, Engg, Business"],
    ["Harvard", "Cambridge, MA", "$55k–70k", "Top 1–5", "Business, Law, Medicine"],
    ["Caltech", "Pasadena, CA", "$55k–65k", "Top 5–10", "Physics, Engg"],
    ["UC Berkeley", "Berkeley, CA", "$40k–60k", "Top 10–25", "CS, Engg, Business"],
    ["Princeton", "Princeton, NJ", "$55k–70k", "Top 5–10", "Humanities, Engg"],
    ["Yale", "New Haven, CT", "$55k–70k", "Top 5–15", "Law, Arts, Social Sci"],
    ["Columbia", "New York, NY", "$55k–75k", "Top 5–15", "Business, Journalism, Engg"],
    ["Univ. of Chicago", "Chicago, IL", "$55k–70k", "Top 10–20", "Econ, Business, CS"],
    ["Univ. of Pennsylvania", "Philadelphia, PA", "$55k–70k", "Top 5–15", "Wharton, Engg"],
  ],
};

const popularCourseData = {
  title: "Popular Courses & Pathways",
  subTitle: "",
  data: [
    ["Course", "Details"],
    ["STEM (CS, Data, AI/ML, EE, Mech, Bio)", "High demand + 24-month STEM OPT extension."],
    ["Business & Analytics", "Experiential learning, case competitions, corporate projects."],
    ["Health & Public Health", "Direct career routes in Nursing, MPH, Allied Health."],
    ["Design, HCI, Communications, Social Sciences", "Portfolios + internships in UX, policy, and media hubs."],
    ["Vocational/Certificate (M-1)", "Shorter, skills-focused, but different work rules."],
  ],
};

const costData = {
  title: "Cost of Studying — Tuition & Living",
  subTitle: "Typical Annual Totals (USD; INR for planning)",
  data: [
    ["Expense", "Annual Cost"],
    ["Public Universities", "$25k–$45k tuition; living $12k–$20k → Total $37k–$65k"],
    ["Private Universities", "$45k–$75k tuition; living $15k–$25k → Total $60k–$100k+"],
  ],
};

const livingSnapshotData = {
  title: "",
  subTitle: "City-wise Living Snapshot",
  data: [
    ["Cost", "Examples"],
    ["High", "New York, SF, Boston, Seattle"],
    ["Moderate", "Austin, Chicago, LA suburbs, San Diego"],
    ["Low", "College towns like Madison, Ann Arbor, Ames"],
  ],
};

const eligibilityData = {
  title: "Eligibility Criteria",
  subTitle: "",
  data: [
    ["Criteria", "Details"],
    ["Academics (UG)", "Class 12 with solid GPA; competitive boards help."],
    ["Academics (PG)", "Bachelor’s; min GPA ~3.0/4.0 equivalent."],
    ["English Proficiency", "TOEFL/IELTS/Duolingo (waivers possible)."],
    ["Standardized Tests", "SAT/ACT (UG); GRE/GMAT (PG) as required."],
    ["Portfolio/Experience", "Needed for MBA, design, arts programs."],
    ["Age", "17+ for UG; PG as per norms."],
  ],
};

const sampleFeesData = {
  title: "Sample Fee Table — Public & Private Mix",
  subTitle: "",
  data: [
    ["University", "Tuition (USD)", "Tuition (INR)", "Living (USD)", "Living (INR)"],
    ["Arizona State Univ", "32,000", "₹27.2L", "16,000", "₹13.6L"],
    ["UIUC", "38,000", "₹32.3L", "18,000", "₹15.3L"],
    ["Purdue Univ", "32,000", "₹27.2L", "16,000", "₹13.6L"],
    ["UT Dallas", "35,000", "₹29.8L", "16,000", "₹13.6L"],
    ["North Carolina State", "32,000", "₹27.2L", "16,000", "₹13.6L"],
    ["Northeastern Univ", "56,000", "₹47.6L", "22,000", "₹18.7L"],
    ["Boston Univ", "62,000", "₹52.7L", "22,000", "₹18.7L"],
    ["USC", "64,000", "₹54.5L", "24,000", "₹20.4L"],
    ["Univ of Florida", "30,000", "₹25.5L", "15,000", "₹12.7L"],
    ["Univ of Cincinnati", "29,000", "₹24.7L", "14,000", "₹11.9L"],
  ],
};

// ========== Main Page ==========
const USA = () => {
  return (
    <div className="pb-10">
      {/* Breadcrumb + Heading */}
      <div className="mx-[6vw] md:w-[73.125vw] py-[4vw] md:mx-auto flex flex-col items-center gap-6">
        <Breadcrumbs />
        <h1 className="text-h4TextPhone md:text-h1Text text-center font-bold leading-[120%]">
          Study in USA – <br /> Best Universities, Costs, Admissions & Careers
        </h1>
      </div>

      {/* Intro Section */}
      <div className="mx-[6vw] md:mx-[12.5vw] my-[4vw] flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex flex-col gap-4 text-regularTextPhone md:text-regularText text-justify w-full md:w-[40vw] leading-[150%]">
          <p>
            The United States is the world’s most sought-after study destination—home to elite research universities, flexible curricula, and powerful industry linkages. This guide brings everything together for Indian students.
          </p>
          <p className="font-bold">
            At Edurizon, we support you end-to-end—shortlisting, tests, essays, documentation, I-20/SEVIS, visa interview prep, pre-departure, and landing support.
          </p>
        </div>
        <img
          src="/assets/images/hero1.png"
          alt="USA"
          className="w-full md:w-[19vw] h-auto"
          width={500}
          height={500}
        />
      </div>

      {/* Why USA */}
      <div className="mx-[6vw] md:mx-[12.5vw] my-[4vw] flex flex-col gap-4">
        <h4 className="text-h4TextPhone md:text-h3Text font-bold">
          Why Study in <span className="text-orangeChosen">USA?</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Affordable pathways",
            "Industry linkages",
            "Flexible curricula",
            "Research culture",
            "Global networks",
            "Post-study work",
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-bold">{item}</p>
              <p className="text-[rgba(0,0,0,0.6)] text-sm">
                Brief details about {item}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Tables */}
      <UnlistedTableEqualWidth id="top-universities" section2="highlight" content={topUniversitiesData} />
      <UnlistedTableEqualWidth id="popular-courses" section2="highlight" content={popularCourseData} />
      <UnlistedTableEqualWidth id="cost-of-studying" section2="highlight" content={costData} />
      <UnlistedTableEqualWidth id="living-snapshot" section2="" content={livingSnapshotData} />
      <UnlistedTableEqualWidth id="sample-fees" section2="highlight" content={sampleFeesData} />
      <UnlistedTableEqualWidth id="eligibility-criteria" section2="highlight" content={eligibilityData} />
      <UnlistedTableEqualWidth id="visa" section2="highlight" content={visaData} />
      <UnlistedTableEqualWidth id="scholarship" section2="highlight" content={scholarshipData} />
      <UnlistedTableEqualWidth id="climate" section2="highlight" content={climateData} />
      <UnlistedTableEqualWidth id="scams" section2="highlight" content={scamsAndAwarenessData} />

      {/* Final CTA */}
      <section className="mx-[6vw] md:mx-[12.5vw] my-[6vw] flex flex-col gap-6">
        <h3 className="text-h4TextPhone md:text-h3Text font-bold">Free USA Guidance & Support</h3>
        <p className="text-smallTextPhone md:text-regularText font-bold leading-[150%]">
          From the moment you sign up, Edurizon covers counselling, test planning, SOP/LOR editing, documentation, visa prep, and pre-departure.
        </p>
        <h3 className="text-h4TextPhone md:text-h3Text font-bold text-orangeChosen">
          Get in Touch with Edurizon Today!
        </h3>
        <p className="text-smallTextPhone md:text-regularText">
          Kickstart your U.S. education journey. Your dream university is one application away!
        </p>
      </section>
    </div>
  );
};

export default USA;
