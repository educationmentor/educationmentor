import React from 'react'
import UnlistedTableEqualWidth from "../../components/unListedTable";
import Breadcrumbs from "../../components/Breadcumbs";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import studyGermanyHeader from '../../assets/images/study-in-germany-header.png'

import { englishStandardData, topUniversitiesData,monthlyData,economicData,languageData,eligibilityData,whyStudyInUSAData,sampleFeesData,
  faqData,germanStudentVisa,accomodationOption,postgraduateCareerPath,industryEmploymentLandscape,healthCare,visaPhasesData
 } from '../../util/DestinationsData/study-in-germany';

import { useEffect } from 'react';
import GermanyUniversityTable from '../../components/germanyUniversityTable';


const StudyInGermany = () => {
    // SEO Meta Tags
    useEffect(() => {
        // Update document title
        document.title = "Study in Germany 2024: 400+ Tuition-Free Universities | Expert Admission & Visa Guidance";
        
        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.getElementsByTagName('head')[0].appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Comprehensive roadmap to German education: tuition-free universities, streamlined admission process, visa requirements, and career pathways. 98% success rate with personalized mentorship.');
        
        // Update or create meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.getElementsByTagName('head')[0].appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'study in Germany, German universities admission, student visa Germany, blocked account, tuition-free education Germany');
        
        // Context menu handler
        const handler = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handler);
      
        return () => {
            document.removeEventListener("contextmenu", handler);
        };
      }, []);
  return (
    <div className="pb-10">
        <div className="px-[6vw] md:w-[73.125vw] flex flex-col gap-[5vw] mb-[1vw] py-[4vw] md:py-[5.83vw] items-center md:mx-auto">
                <div className="flex flex-col items-center gap-[2vw] md:gap-[2vw]">
                <div className="flex flex-col items-center gap-[4vw] md:gap-[1vw]">
                    <Breadcrumbs/>
                    <h1 className="text-h4TextPhone text-center   font-bold leading-[120%] md:text-h1Text">
                    World-Class German Education: Zero Tuition Fees, Unlimited Career Potential</h1>
                </div>
                </div>
            </div>

      {/* Intro Section */}
      <div className='mx-[6vw] md:mx-[12.5vw] my-[4vw] md:my-[4vw] flex flex-col md:flex-row gap-[2vw] md:gap-[5vw] justify-center '>
          <div className='flex my-auto flex-col gap-[2vw] md:gap-[2vw] text-regularTextPhone md:text-regularText leading-[150%] text-justify w-full md:w-[40vw]'>
          <p className=''>
          Join over 400,000 international students who've transformed their futures through Germany's renowned education system. Experience end-to-end mentorship from university selection to career placement in Europe's economic powerhouse.
            </p>
            <p className='font-bold'>
            "5,847 Students Successfully Mentored | 98% Visa Approval Rate | 1,200+ University Alliances"
            </p>
          </div>
      
        <img src={studyGermanyHeader} alt="USA" className='w-full md:w-[19vw] h-auto flex-shrink-0' />
        </div>

        {/* Why Study in USA Section */}
        <div className='mx-[6vw] md:mx-[12.5vw] my-[4vw] md:my-[4vw] flex flex-col gap-[2vw] md:gap-[2vw] '>
          <h4 className='text-h4TextPhone md:text-h3Text leading-[120%] font-bold'>The German Advantage: <br/>Education Meets Opportunity</h4>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[2vw] md:gap-x-[1vw] md:gap-y-[2vw] '>
            {whyStudyInUSAData.map((data, index) => (
              <div key={index} className='flex flex-col gap-[.5vw] md:gap-[.5vw]'>
                <p className='text-regularTextPhone md:text-mediumText leading-[120%] font-bold'>{data.title}</p>
                <ul className='list-disc ml-[4vw]  md:ml-[1vw]'>
                {data.description.map((desc,idx) => (
                  <li key={idx} className='text-smallTextPhone md:text-regularText leading-[150%]  text-[rgba(0,0,0,0.6)]'>{desc}</li>
                ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

       {/* Top Universities table */}
       <div className='mb-[6vw]'>
      <UnlistedTableEqualWidth id='top-universities' section2='highlight' content={topUniversitiesData}/>
        <ul className='list-disc text-regularTextPhone md:text-mediumText leading-[150%]  mx-[6vw] md:mx-[12.5vw] my-[4vw] md:my-[2vw]'><span className='text-black  font-bold'>Academic Structure & Timing</span> 
          <li className='ml-[2vw]'>Bachelor's Degrees: 6-8 semesters (180-240 ECTS credits)</li>
          <li className='ml-[2vw]'>Master's Degrees: 4 semesters (120 ECTS credits) is the standard mode</li>
          <li className='ml-[2vw]'>Professional State Examinations: Medicine, Law, Pharmacy, Teaching</li>
          <li className='ml-[2vw]'>Doctoral Programs: 3-5 years of research-intensive study</li>
        </ul>
        <ul className='list-disc text-regularTextPhone md:text-mediumText leading-[150%]  mx-[6vw] md:mx-[12.5vw] my-[4vw] md:my-[2vw] '><span className='text-black  font-bold'>Critical Application Windows</span> 
          <li className='ml-[2vw]'>Winter Intake: Lecture period: October - March (Application deadline: July 15)</li>
          <li className='ml-[2vw]'>Summer Intake: Lecture period: April - September (Application deadline: January 15)</li>
        </ul>

      </div>

      {/* Sample Fees table */}
      <div className=''>
      <GermanyUniversityTable id='sample-fees' section2='highlight' content={sampleFeesData}/>
      
      </div>

      {/* Eligibility Criteria table */}
      <div className='flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
      <div className="flex flex-col gap-[1.5vw]">
        <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">
          {eligibilityData.title}
        </h3>
      </div>
      <div className="flex overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse border border-black ">
          <thead>
            <tr className="bg-linenChosen  text-regularTextPhone md:text-mediumText text-center">
              {eligibilityData.data[0].map((header, index) => (
                <th key={index}
                  className="min-w-[200px] border font-semibold border-black  px-[0.75vw] py-[0.625vw]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-smallTextPhone md:text-regularText align-top">
            {eligibilityData.data.slice(1).map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((cell, index) => (
                    <td key={index}
                      className={`border  border-black  px-[0.75vw] py-[0.625vw] ${index === 0 ? "font-semibold" : ""} `}>
                       <ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                        {Array.isArray(cell) && cell.length > 1 ? (
                          cell.map((val, idx) => (
                            <li className='' key={idx}>{val}</li>
                          ))
                        ) : (
                          cell
                        )}
                       </ul>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse border border-black ">
          <thead>
            <tr className="bg-linenChosen  text-regularTextPhone md:text-mediumText text-center">
              {eligibilityData.data2[0].map((header, index) => (
                <th key={index}
                  className="min-w-[200px] border font-semibold border-black  px-[0.75vw] py-[0.625vw]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-smallTextPhone md:text-regularText align-top">
            {eligibilityData.data2.slice(1).map((row, i) => {
              return (
                <tr key={i}>
                  {row.map((cell, index) => (
                    <td key={index}
                      className={`border  border-black  px-[0.75vw] py-[0.625vw] ${index === 0 ? "font-semibold" : ""} `}>
                       <ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                        {Array.isArray(cell) && cell.length > 1 ? (
                          cell.map((val, idx) => (
                            <li className='' key={idx}>{val}</li>
                          ))
                        ) : (
                          cell
                        )}
                       </ul>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>

            
      {/* language proficiency table */}
      <div>
      <UnlistedTableEqualWidth id='language' section2='highlight' content={languageData}/>
      <div className='flex items-baseline  mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Recognized German Certification:</div>
        <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
          <li><strong>TestDaF:</strong> Minimum Level 4 across all sections</li>
          <li><strong>DSH:</strong> Level 2 or 3 certification (DSH-2 is the standard)</li>
          <li><strong>Goethe-Zertifikat:</strong> C1 or C2 level</li>
          <li><strong>telc Deutsch:</strong> C1 Hochschule qualification</li>
          <li><strong>DSD:</strong> Level II (Deutsches Sprachdiplom for high school students)</li>
          
          </ul></div>
      </div>
      </div>
      {/* english standard */}
      <UnlistedTableEqualWidth id='language' section2='highlight' content={englishStandardData}/>

      {/* financial planning proficiency table */}
      <div>
      <UnlistedTableEqualWidth id='language' section2='highlight' content={economicData}/>
      <div className='flex items-baseline  mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Approved Financial Service Providers:</div>
        <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
          <li><strong>Fintiba</strong></li>
          <li><strong>Expatrio</strong></li>
          <li><strong>Deutsche Bank</strong></li>
          <li><strong>Coracle</strong></li>
          </ul></div>
      </div>
      </div>

      {/* monthly cost table */}
      <div>
      <UnlistedTableEqualWidth id='language' section2='highlight' content={monthlyData}/>
      <div className='flex items-baseline  mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Initial Investment Requirements:</div>
        <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
          <li><strong>University Applications:</strong> €75 - €100 per institution (via uni-assist)</li>
          <li><strong>APS Certification:</strong> €190 (Increased in 2024)</li>
          <li><strong>Visa Processing:</strong> €80 (Standard fee for a student visa)</li>
          <li><strong>International Travel:</strong> €400 - €1,000</li>
          <li><strong>Accommodation Security:</strong> €500 - €1,200 deposit *(often 2-3 months' cold rent)*</li>
          <li><strong>Semester Contribution:</strong> €150 - €350 (Covers transport, admin; paid each semester)</li>
          <li><strong>Blocked Account Setup Fee:</strong> €50 - €200 (One-time fee from provider)</li>
          <li><strong>Total Initial Outlay (Realistic Range):</strong> €1,500 - €3,200</li>
          </ul></div>
      </div>
      </div>

      {/* four step visa */}
      <UnlistedTableEqualWidth id='germanStudentVisa' section2='highlight' content={germanStudentVisa}/>

      <div className='grid grid-cols-1 md:grid-cols-2 items-start md:items-baseline mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        {visaPhasesData.map((phase) => (
          <div key={phase.id} className='flex-1 flex flex-col gap-[1vw]'>
            <div className='font-bold text-regularTextPhone md:text-h6Text'>{phase.title}</div>
            <div>
              <ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                {phase.items.map((item, idx) => (
                  <li key={idx} className='text-smallTextPhone md:text-regularText leading-[150%]'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      

      {/* pre departure */}
      <div className='flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
      <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]"> Pre-Departure Preparation: Your Settlement Guide</h3>

      <div className='flex items-baseline  gap-[2vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>First Week Essential Checklist:</div>
          <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                <li>Complete mandatory residence registration (Anmeldung) at the Bürgeramt</li>
                <li>Finalize university enrollment (Immatrikulation)</li>
                <li>Establish a German bank account (requires Anmeldung)</li>
                <li>Activate health insurance coverage (mandatory for enrollment)</li>
                <li>Obtain a German SIM card</li>
                <li>Validate public transportation semester ticket</li>
                <li>Participate in university and city orientation</li>      
          </ul></div>
      </div>
      </div>
      {/* accomodation option */}
      <div>
      <UnlistedTableEqualWidth id='accomodation' section2='highlight' content={accomodationOption}/>
      <div className='flex items-baseline  mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Essential German Services:</div>
        <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
          <li><strong>Banking Solutions:</strong> N26, Commerzbank, Sparkasse, Deutsche Bank</li>
          <li><strong>Mobile Providers:</strong> Aldi Talk, O2, Vodafone, Telekom</li>
          <li><strong>Transport Networks:</strong> Semester ticket (regional), Deutschlandticket (€49/month nationwide)</li>
          <li><strong>Shopping Destinations:</strong> Aldi, Lidl, Rewe, Edeka, DM</li>
          <li><strong>Health Insurance Providers:</strong> TK, AOK, Barmer, DAK-Gesundheit</li>          
          </ul></div>
      </div>
      </div>

      {/* career developmnet */}
      <div className='flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
      <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">Career Development & Employment Pathways</h3>

      <div className='flex items-baseline  gap-[2vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Student Work Rights & Opportunities:</div>
        <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
        <li><strong>Annual Work Allowance:</strong> 120 full days or 240 half days per year</li>
        <li><strong>Semester Break Work:</strong> Unlimited working hours during semester breaks</li>
        <li><strong>Mini-job / Werkstudent:</strong> Up to €538 per month tax-free (mini-job) or up to 20 hours/week during semester (Werkstudent)</li>
        <li><strong>Typical Wages – Research/Student Assistant:</strong> €13 – €18 per hour</li>
        <li><strong>Typical Wages – Working Student (Werkstudent):</strong> €1,200 – €2,200+ monthly (highly field-dependent)</li>
        <li><strong>Typical Wages – Mandatory Internships:</strong> Often unpaid or €500 – €1,200 monthly</li>
        <li><strong>Typical Wages – Voluntary Internships:</strong> €1,000 – €1,800+ monthly (especially in tech/business)</li>
      
          </ul></div>
      </div>
      </div>

      {/* PG Career path*/}
      <UnlistedTableEqualWidth id='postgraduateCareerPath' section2='highlight' content={postgraduateCareerPath}/>

      {/* industryEmploymentLandscape */}
      <UnlistedTableEqualWidth id='industryEmploymentLandscape' section2='highlight' content={industryEmploymentLandscape}/>

      {/* Health Care */}
      <UnlistedTableEqualWidth id='healthCare' section2='highlight' content={healthCare}/>
      <div className='flex items-baseline   mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>German Healthcare Overview:</div>
          <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                <li>Mandatory coverage for all students enrolled under 30 years of age.</li>
                <li>Public insurance (~€120/month) is the standard and addresses most healthcare needs.</li>
                <li>General practitioner and specialist visits are fully covered.</li>
                <li>Prescription medications require a small co-pay (€5–€10).</li>
                <li>Basic dental services (check-ups, cleaning) are included; major work requires co-payment.</li>
                <li>Important: Students over 30 are ineligible for public student rates and must seek private or more expensive public plans.</li>
   
          </ul></div>
      </div>
      <div className='flex items-baseline   mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <div className='font-bold text-regularTextPhone md:text-h6Text '>Student Support Services:</div>
          <div><ul className='list-disc ml-[4vw] md:ml-[1vw]'>
                <li>University psychological counseling centers (Psychologische Beratung)</li>
                <li>Multilingual emergency support lines and crisis chat services</li>
                <li>International student peer mentor programs</li>
                <li>Integration courses and cultural adaptation workshops</li>
                <li>Studentenwerk services offering social, financial, and legal advice</li>
          </ul></div>
      </div>

      {/* FAQ */}
      <div className='flex flex-col mx-[6vw] md:mx-[12.5vw] gap-[2vw] mb-[10vw] md:mb-[4vw]'>
        <h3 className="text-h5TextPhone md:text-h3Text font-bold text-center leading-[120%]">FAQ</h3>
        <h3 className="text-h6TextPhone md:text-h4Text font-bold text-center leading-[120%] mb-[2vw]">Expert Answers to Common Concerns</h3>

        <div className="flex flex-col gap-[1vw]">
          {faqData.map((faq) => (
            <Accordion key={faq.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
                className="bg-purple-50"
              >
                <p className='text-smallTextPhone md:text-regularText font-bold text-[#5D0CFF]'>
                  Q{faq.id}: {faq.question}
                </p>
              </AccordionSummary>
              <AccordionDetails className="bg-white">
                <p 
                  className="text-smallTextPhone md:text-regularText leading-[150%] text-[rgba(0,0,0,0.7)]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

      </div>

  
    </div>
  )
}

export default StudyInGermany
