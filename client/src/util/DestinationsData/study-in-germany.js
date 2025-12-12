const englishStandardData = {
    title: 'English Language Standards',
    subTitle: '',
    data: [
      ['Examination','Undergraduate Requirement','Postgraduate Requirement','Validity Period'],
      ['IELTS', '72 - 80 total points','6.5 overall score (no section below 6.0)','2 years'],
      ['TOEFL iBT', '72 - 80 total points','90 - 100 total points','2 years'],
      ['Cambridge', 'B2 First (Grade B or C)','C1 Advanced (Grade B or C)','Unlimited'],
      ['Duolingo', 'Rarely accepted; check university policy','Rarely accepted; check university policy','2 years']  
    ]
  }

  const topUniversitiesData = {
    title: 'Top Universities in Germany',
    subTitle: '',
    data: [
      ["Institution Type","Academic Focus","Program Duration","Ideal Career Path"],
      ['Universität (University)', 'Research & Theoretical Foundations','3-4 years UG, 2 years PG','Academic research, PhD advancement'],
      ['Fachhochschule (University of Applied Sciences)', 'Practical Application & Industry Skills','3-4 years UG, 2 years PG','Corporate roles, entrepreneurial ventures'],
      ['Technische Universität (TU)', 'Engineering & Technological Innovation','3-4 years UG, 2 years PG','Engineering, IT, technical leadership'],
      ['Kunst- und Musikhochschulen', 'Creative Arts & Musical Excellence','3-4 years UG, 2 years PG','Arts, design, performance careers'],
    ]
  }
  
  
  const whyStudyInUSAData = [
    {title:"Financial Benefits That Matter",description:["Zero Tuition Investment: Access world-ranked public universities with only nominal semester contributions (€150-€400). *Note: The state of Baden-Württemberg charges €1,500 per semester for non-EU students.*","Generous Work Provisions: 120 full days or 240 half days of work annually alongside your studies.","Reasonable Living Expenses: Student living expenses estimated at €934 per month (official visa requirement), with higher costs in major cities.","Extended Career Launchpad: 18-month post-study job seeking permit."]},
    {title:"Career Acceleration Opportunities",description:["Strong Employment Outcomes: 82% of international graduates secure positions in Germany within one year of graduation.","Industry-Integrated Learning: Renowned for strong industry ties, with many programs, especially in engineering and applied sciences, featuring mandatory professional internships.","Global Corporate Presence: 650+ international corporations maintain German headquarters.","Competitive Starting Salaries: Engineering graduates average €48,000+ initial packages, with higher salaries in high-demand fields like software engineering."]},
    {title:"Academic Excellence Recognized Worldwide",description:["Internationally Ranked Institutions: 49 German universities feature in QS World Rankings 2024.","Engineering Prowess: Ranked #3 globally for Engineering & Technology education.","Diverse Program Offerings: 2,000+ English-taught programs across disciplines.","Exceptional Student Experience: Germany consistently receives top marks for quality of life, safety, and education in international student surveys."]},
    
  ]
  
  const sampleFeesData ={
    title: " Germany's Premier Universities: 2024 Rankings",
    subTitle: 'TU9 - Excellence in Technical Education',
    data: [
      ["University","Global Standing","Key Specializations","Monthly Budget","Instruction Language"],
      ['TU Munich', '#37 (QS 2025)', 'Engineering, Computer Science, Innovation Management', '€1,000 - €1,400', 'German/English'],
      ['RWTH Aachen', '#106 (QS 2025)', 'Mechanical Engineering,Automotive, Electrical Engineering', '€900 - €1,200', 'German/English'],
      ['KIT Karlsruhe', '#119 (QS 2025)', 'Computer Science, Energy Systems, Mechanical Engineering', '€850 - €1,100', 'German/English'],
      ['TU Berlin', '#159 (QS 2025)', 'Engineering, Urban Planning, Environmental Technology', '€950 - €1,200', 'German/English'],
      ['TU Dresden', '#246 (QS 2025)', 'Microelectronics, Medicine Technology, Materials Science', '€800 - €1,000', 'German/English'],
    ],
    subTitle2:'Research-Intensive Universities',
    data2: [
      ["University","Global Standing","Key Specializations","Monthly Budget","Instruction Language"],
      ['LMU Munich', '#54 (QS 2025)', 'Medical Research, Physics, Life Sciences', '€1,000 - €1,400', 'German/English'],
      ['Heidelberg University', '#87 (QS 2025)', 'Life Sciences, Medicine, Physics, Neuroscience', '€900 - €1,200', 'German/English'],
      ['Humboldt University Berlin', '#121 (QS 2025)', 'Humanities, Social Sciences, Philosophy', '€950 - €1,200', 'German/English'],
      ['University of Freiburg', '#195 (QS 2025)', 'Environmental Science, Sustainability, Microsystems', '€850 - €1,100', 'German/English'],
    ],
    subTitle3:'University of Applied Sciences',
    data3: [
      ["University","Key Specializations","Monthly Budget","Instruction Language"],
      ['Munich UAS', 'Business Administration, Engineering, Design, Innovation Management', '€1,000 - €1,400', 'German/English'],
      ['Frankfurt UAS', 'Business, Law, Social Work, Health', '€950 - €1,250', 'German/English'],
      ['TH Köln (Cologne UAS)', 'Technology Management, Applied Social Sciences', '€900 - €1,150', 'German/English'],
    ],
  }
  
  const eligibilityData = {
    title: 'Comprehensive Admission Requirements',
    subTitle: '',
    data: [
      ["Undergraduate Program Criteria","Details"],
      [["Academic Prerequisites"],["School completion certificate equivalent to German Abitur","Program-specific grade requirements (using NC system), not a fixed 70%","Studienkolleg foundation program for certificates not directly recognized"]],
      [["Language Proficiency"],["German-medium programs: TestDaF Level 4 or DSH-2 certification","English-medium programs: IELTS 6.0-6.5 or TOEFL 80-95"]],
      [["Essential Documentation"],["Academic transcripts and certificates","APS verification (mandatory for applicants from India, China, and Vietnam)","Professional CV in tabular format","Language proficiency evidence","Compelling motivation letter (1-1.5 pages)","Passport copies","VPD for non-EU degrees (via uni-assist)"]],
    ],
  
    data2: [
      ["Postgraduate Program Criteria","Details"],
      [["Academic Prerequisites"],["Relevant Bachelor's qualification (3-4 year duration)","Minimum 2.5-3.0 German GPA equivalent (varies by program and university competitiveness)","Program-specific prerequisite knowledge (proven through transcript and module descriptions)"]],
      [["Language Proficiency"],["GRE/GMAT results for select programs (especially Business, Economics, some STEM)","1-3 years of professional experience for MBA candidates (varies by university)","Creative portfolio for design/architecture applications","Detailed research proposal and supervisor agreement for doctoral programs"]],
      [["Essential Documentation"],["Undergraduate academic transcripts","Bachelor's degree certification","Detailed module descriptions / module handbook (for accreditation)","2 academic/professional recommendations","Detailed statement of purpose","Professional experience verification (if required)","APS Certificate (for applicants from India, China, Vietnam)","VPD for non-EU degrees (via uni-assist)"]],
    ],
  
  }
  
  const languageData = {
    title: 'Language Proficiency: Your Gateway to Success',
    subTitle: '',
    data: [
      ['Proficiency Level','Practical Application','Academic Requirement','Recommended Study Period'],
      ['A1', 'Basic daily communication','General living needs','2-3 months (Intensive)'],
      ['A2', 'Business, Law, Social Work, Health','Preparatory course access','4-6 months (Intensive)'],
      ['B1', 'Intermediate fluency','Certain foundation programs','6-8 months (Intensive)'],
      ['B2', 'Advanced communication','Direct admission for a very limited number of programs','8-10 months (Intensive)'],
      ['C1', 'Academic proficiency','Standard requirement for full German program admission','10-12 months (Intensive)'],
    
    ]
  }
  
  const economicData = {
    title: 'Strategic Financial Planning: 2024 Guidelines',
    subTitle: 'Blocked Account Specifications',
    data: [
      ['Academic Year','Monthly Requirement','Annual Total'],
      ['2024 Intake', '€934 monthly','€11,208 annually'],
      ['2025 Intake', '€1,027 monthly','€12,324 annually'],
    
    ]
  }
  
  const monthlyData = {
    title: '',
    subTitle: 'Monthly Living Expense Analysis',
    data: [
      ['Expense Category','Budget-Friendly City','Moderate City','Premium City'],
      ['Accommodation', '€350 - €500','€450 - €700','€700 - €1,100+'],
      ['Health Insurance', '€120 - €130','€120 - €130','€120 - €130'],
      ['Food & Groceries', '€220 - €270','€250 - €300','€280 - €350'],
      ['Local Transport', '€0 (Included in Semester Fee)','€0 (Included in Semester Fee)','€0 (Included in Semester Fee)'],
      ['Communication', '€30 - €40','€35 - €45','€40 - €50'],
      ['Leisure & Personal', '€80 - €100','€100 - €150','€150 - €200+'],
      ['Monthly Total', '€800 - €1,040','€955 - €1,325','€1,290 - €1,830+'],
    ]
  }
  const faqData = [
    {
      id: 1,
      question: "Are German universities accessible with 60% bachelor's performance?",
      answer: "Admission with a 60-65% bachelor's score is <strong>highly challenging and uncommon</strong> for most Master's programs. Public universities typically require a minimum German GPA of 2.5 or better (approx. 75%+ or higher). Strong relevant experience and documents can help, but <strong>meeting the minimum grade requirement is the primary filter</strong>."
    },
    {
      id: 2,
      question: "Is Studienkolleg mandatory for Indian qualifications?",
      answer: "For a <strong>3-year Indian Bachelor's degree</strong>, a Studienkolleg is <strong>almost always mandatory</strong> for Master's program admission. A <strong>4-year Bachelor's degree is typically recognized directly</strong>. An eligibility assessment is crucial."
    },
    {
      id: 3,
      question: "What's the typical German student visa processing timeline?",
      answer: "The standard timeline is <strong>8 to 12 weeks</strong> after the application interview, but it can vary significantly by embassy and season (summer is peak). Applicants should apply <strong>at least 4-5 months</strong> before their intended start date."
    },
    {
      id: 4,
      question: "Can my family accompany me on a student visa?",
      answer: "Yes, but under strict conditions. You must prove you have <strong>sufficient financial means</strong> to support them (additional <strong>€9,324 per year for a spouse and for each child</strong>), <strong>adequate health insurance</strong> for them, and <strong>suitable family-sized accommodation</strong>. This is typically easier to arrange after your first few months in Germany."
    },
    {
      id: 5,
      question: "What options exist if I lack the full blocked account amount?",
      answer: "The blocked account is the standard proof. Alternatives are limited and include a <strong>formal obligation letter (\"Verpflichtungserklärung\")</strong> from a German resident, or proof of a <strong>scholarship</strong> that meets the financial requirement. Educational loans or sponsor letters are <strong>not commonly accepted</strong> unless they are from a recognized German or EU source."
    },
    {
      id: 6,
      question: "How does the blocked account fund distribution work?",
      answer: "The financial institution releases <strong>€934 per month</strong> (the 2024 requirement) to your German bank account. You <strong>cannot access the full amount at once</strong>. The first payment is typically available after you complete your German bank account setup and residence registration."
    }
  ];

  const germanStudentVisa = {
    title: ' German Student Visa: Streamlined Process',
    subTitle: '',
    data: [
        ['Visa Category', 'Primary Purpose', 'Standard Duration', 'Key Requirements'],
        ['Student Applicant', 'University application & exploration', 'Up to 9 months', 'Proof of application to a university, financial proof, insurance'],
        ['Student Visa', 'Full-degree pursuit', 'Covers intended study period', 'Final admission confirmation, financial proof, insurance'],
        ['Language Course', 'German language acquisition', 'Maximum 1 year (no extension)', 'Confirmed language course registration, sufficient funds'],
      ]      
  }

  const accomodationOption = {
    title: 'Accommodation Options Analysis',
    subTitle: '',
    data: [
        ['Housing Type', 'Monthly Cost (Updated)', 'Advantages', 'Considerations'],
        ['Student Dormitory', '€300 - €450', 'Cost-effective, social environment', 'Extreme scarcity, apply 6–12 months in advance'],
        ['Shared Apartment (WG)', '€400 - €700+', 'Social integration, often furnished', 'Shared facilities, interviews common, competitive'],
        ['Private Apartment', '€550 - €1,200+', 'Privacy, independence', 'Very high cost in cities, long-term contracts, requires Schufa'],
        ['Host Family', '€400 - €800', 'Cultural immersion, may include meals', 'Set house rules, potential commute, less independence'],
      ]    
  }

  const postgraduateCareerPath = {
    title: 'Post-Graduation Career Pathways',
    subTitle: '',
    data: [
        ['Professional Route', 'Duration', 'Key Requirements', 'Success Rate / Update'],
        ['18-Month Job Seeker', '18 months', 'German degree completion', '~82% find jobs within 1 year (2023 DZHW study)'],
        ['EU Blue Card', '4 years (initially)', 'Job offer + €45,300 min. salary (€41,041.80 for shortage occupations like STEM, IT)', 'High approval for qualified applicants'],
        ['Standard Work Permit', 'Tied to employment', 'Position related to field of study, approved by Federal Employment Agency (BA)', 'High approval for roles meeting criteria'],
        ['Freelance Visa', 'Initially 6 months – 2 years', 'Viable business concept, proof of clients/need, financial stability', 'Highly selective; requires extensive documentation'],
      ]        
  }

  const industryEmploymentLandscape = {
    title: 'Industry Employment Landscape',
    subTitle: '',
    data: [
        ['Sector', 'Hiring Demand', 'Average Starting Salary (Gross)', 'Leading Employers'],
        ['Engineering', 'Very High', '€50,000 - €58,000', 'Bosch, Siemens, BMW, Porsche, ZF'],
        ['IT & Technology', 'Extremely High', '€52,000 - €60,000+', 'SAP, Zalando, AWS, Google Germany, BioNTech, N26'],
        ['Business & Consulting', 'High', '€48,000 - €55,000', 'McKinsey, BCG, PwC, Deutsche Bank, EY'],
        ['Research & Academia', 'Moderate', '€45,000 - €52,000 (PhD entry)', 'Max Planck, Fraunhofer, Helmholtz, Leibniz Institutes'],
      ]          
  }

  const healthCare = {
    title: ' Healthcare & Wellbeing Support',
    subTitle: '',
    data: [
        ['Provider', 'Monthly Cost (Updated)', 'Coverage Scope', 'Ideal Candidate'],
        ['TK (Techniker)', '~€120', 'Comprehensive medical coverage, strong English service', 'Majority of international students'],
        ['AOK', '~€120', 'Extensive provider network, local offices nationwide', 'Students who prefer in-person service'],
        ['DAK-Gesundheit', '~€120', 'Comprehensive coverage, various health programs', 'Students interested in wellness incentives'],
        ['Private Insurance', 'Varies (€80–€400+)', 'Customizable plans, faster specialist access', 'Students over 29 or certain scholarship holders'],
      ]               
  }

  const visaPhasesData = [
    {
      id: 1,
      title: "Phase 1: Document Preparation (4-6 weeks):",
      items: [
        "Valid passport (with blank pages & more than 1 year validity)",
        "Recent biometric photographs",
        "Official university admission letter (or proof of application for Applicant Visa)",
        "Blocked account confirmation (€934 per month for 2024)",
        "Valid German health insurance proof",
        "APS certificate (mandatory for China, India, Vietnam)",
        "Translated and certified academic documents",
        "Comprehensive CV (in tabular form)",
        "Completed national visa application forms"
      ]    
    },
    {
      id: 2,
      title: "Phase 2: Formal Application (2-4 weeks):",
      items: [
        "Complete the online application portal (in most countries)",
        "Schedule and secure an embassy or consulate appointment",
        "Pay the €80 visa processing fee",
        "Submit complete documentation in person",
        "Provide biometric information (fingerprints)"
      ]
      
    },
    {
      id: 3,
      title: "Phase 3: Processing & Verification (4-12 weeks):",
      items: [
        "Background and security checks",
        "Document authenticity verification",
        "Financial capacity assessment",
        "Insurance validity confirmation",
        "Note: Processing times vary significantly by embassy location and time of year."
      ]    
    },
    {
      id: 4,
      title: "Phase 4: Visa Collection & Travel Preparation:",
      items: [
        "Receive passport with visa endorsement",
        "Arrange travel within the visa's entry validity period",
        "Secure initial accommodation",
        "Complete mandatory residence registration (Anmeldung) upon arrival",
        "Apply for a Residence Permit at the local Foreigners' Office (Ausländerbehörde)"
      ]
          
    }
  ];





  export {englishStandardData, topUniversitiesData,monthlyData,economicData,languageData,eligibilityData,whyStudyInUSAData,sampleFeesData,faqData,
    germanStudentVisa,healthCare,industryEmploymentLandscape,postgraduateCareerPath,accomodationOption,visaPhasesData
  }