// "use client";

// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathname = location.pathname;
//   const pathSegments = pathname.split("/").filter(segment => segment);

//   // Custom mapping for specific route names
//   const breadcrumbNames = {
//     dashboard: "Dashboard",
//     products: "Products",
//     aboutUs: "About Us",
//     contact: "Contact Us",
//     admin: "Admin",
//     "study-destinations": "Study Destinations",
//     "study-mbbs-in-russia": "Study MBBS in Russia",
//     "study-mbbs-in-china": "Study MBBS in China",
//     "kazan-federal-university": "Kazan Federal University",
//     "study-in-uk": "Study in UK",
//     "study-mbbs-in-bangladesh": "Study MBBS in Bangladesh",
//     "study-mbbs-in-tajikistan": "Study MBBS in Tajikistan",
//     "study-in-hungary": "Study in Hungary",
//     "study-mbbs-in-georgia": "Study MBBS in Georgia",
//     "study-mbbs-in-ukraine": "Study MBBS in Ukraine",
//     "study-in-germany": "Study in Germany",
//     "study-in-australia": "Study in Australia",
//     "study-mbbs-in-nepal": "Study MBBS in Nepal",
//     "study-mbbs-in-kazakhstan": "Study MBBS in Kazakhstan",
//     "study-mbbs-in-uzbekistan": "Study MBBS in Uzbekistan",
//     "bashkir-medical-university": "Bashkir Medical University",
//     "north-wester-state-medical-university": "North Western State Medical University",
//     "kazaan-federal-university": "Kazan Federal University",
//     "northern-state-medical-university": "Northern State Medical University",
//     "orenburg-medical-university": "Orenburg Medical University",
//     "petrozavodsk-state-university": "Petrozavodsk State University",
//     "immanuel-kant-baltic-federal-university": "Immanuel Kant Baltic Federal University",
//     "krasnoyarsk-state-medical-university": "Krasnoyarsk State Medical University",
//     "national-research-nuclear-university": "National Research Nuclear University",
//     "tambov-state-university": "Tambov State University",
//     "ulyanovsk-state-university": "Ulyanovsk State University",
//     "ural-state-medical-university": "Ural State Medical University",
//     blogs: "Blogs",
//     "study-mbbs-in-russia-without-neet": "Study MBBS in Russia without NEET",
//     "study-mbbs-in-india": "Study MBBS in India",
//     "nepal-medical-college": "Nepal Medical College",
//     "b&c-medical-college": "B&C Medical College",
//     "birat-medical-college": "Birat Medical College",
//     "chitwan-medical-college": "Chitwan Medical College",
//     "devdaha-medical-college": "Devdaha Medical College",
//     "kathmandu-medical-college": "Kathmandu Medical College",
//     "lumbini-medical-college": "Lumbini Medical College",
//     "nobel-medical-college": "Nobel Medical College",
//     "college-of-medical-science": "College of Medical Science",
//     "kist-medical-college": "KIST Medical College",
//     "manipal-college-of-medical-science": "Manipal College of Medical Science",
//     "janaki-medical-college": "Janaki Medical College",
//     "national-medical-college": "National Medical College",
//     "nepalgunj-medical-college": "Nepalgunj Medical College",
//     "new-vision-university": "New Vision University",
//     "david-tvildiani-medical-university": "David Tvildiani Medical University",
//     "tbilisi-state-medical-university": "Tbilisi State Medical University",
//     "east-european-university": "East European University",
//     "georgian-national-university-seu": "Georgian National University SEU",
//     "international-black-sea-university": "International Black Sea University",
//     "study-mbbs-in-kyrgyzstan": "Study MBBS in Kyrgyzstan",
//     "central-asian-international-medical-university": "Central Asian International Medical University",
//     "jalal-abad-international-university": "Jalal Abad International University",
//     "avicenna-tajik-state-medical-university": "Avicenna Tajik State Medical University",
//     "medical-social-institute-of-tajikistan": "Medical Social Institute of Tajikistan",
//     "osh-state-university": "Osh State University",
//     "osh-international-state-medical-university": "Osh International State Medical University",
//     "jalal-abad-state-university": "Jalalabad State University",
//     "royal-metropolitan-university": "Royal Metropolitan University",
//     "bachelors-in-germany": "Bachelors in Germany",
//     "masters-in-germany": "Masters in Germany",
//     "md-in-germany": "MD in Germany",
//     "hotel-management-in-germany": "Hotel Management in Germany",
//   };

//   return (
//     <nav aria-label="breadcrumb" className="text-black text-tinyTextPhone md:text-regularText">
//       <ul className="flex flex-wrap items-center">
//         <li className="hover:underline">
//           <Link to="/">Home</Link>
//         </li>
//         {pathSegments.map((segment, index) => {
//           const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathSegments.length - 1;
//           return (
//             <li key={href} className="flex items-center">
//               <span className="mx-2">/</span>
//               {isLast ? (
//                 <span className="font-semibold">
//                   {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
//                 </span>
//               ) : (
//                 <Link to={href} className="hover:underline">
//                   {breadcrumbNames[segment] ?? segment[0].toUpperCase() + segment.substring(1)}
//                 </Link>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;
