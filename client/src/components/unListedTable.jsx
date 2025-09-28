// import React from "react";

// const UnlistedTableEqualWidth = ({ id, content, section2 = "" }) => {
//   const sections = ["highlight"];
//   const bool = sections.includes(section2);

//   return (
//     <div
//       id={id}
//       className="flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]"
//     >
//       {/* Title Section */}
//       <div className="flex flex-col gap-[1.5vw]">
//         <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">
//           {content.title}
//         </h3>

//         <h5
//           className={`text-center text-regularTextPhone md:text-h5Text font-bold opacity-80 ${
//             !content.subTitle ? "hidden" : ""
//           }`}
//         >
//           {content.subTitle}
//         </h5>

//         <p
//           className={`text-center text-smallTextPhone md:text-regularText opacity-80 ${
//             !content.description ? "hidden" : ""
//           }`}
//         >
//           {content.description || ""}
//         </p>
//       </div>

//       {/* Table Section */}
//       <div className="flex overflow-x-auto no-scrollbar">
//         <table className="w-full border-collapse border border-black dark:border-borderGreyChosen">
//           <thead>
//             <tr className="bg-linenChosen dark:text-black text-regularTextPhone md:text-mediumText text-center">
//               {content.data[0].map((header, index) => (
//                 <th
//                   key={index}
//                   className="min-w-[200px] border font-semibold border-black dark:border-r-black dark:border-borderGreyChosen px-[0.75vw] py-[0.625vw]"
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="text-smallTextPhone md:text-regularText align-top">
//             {content.data.slice(1).map((row, i) => {
//               const width = row.length;
//               return (
//                 <tr key={i}>
//                   {row.map((cell, index) => (
//                     <td
//                       key={index}
//                       className={`border dark:text-white border-black dark:border-white px-[0.75vw] py-[0.625vw] ${
//                         index === 0 ? "font-semibold" : ""
//                       } ${bool && index === 0 ? "bg-linenChosen" : ""}`}
//                       style={{ width: `${100 / width}%` }} // Fixed dynamic width
//                     >
//                       {content.href && index === 0 ? (
//                         <a
//                           href={Array.isArray(content.href) ? content.href[i] : content.href}
//                           className="hover:underline text-blue-600"
//                         >
//                           {cell}
//                         </a>
//                       ) : (
//                         cell
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UnlistedTableEqualWidth;
