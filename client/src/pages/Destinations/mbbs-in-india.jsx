import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../util/baseUrl'; // adjust the relative path to match this file's actual location
import {
  GraduationCap, Building2, Stethoscope, BookOpen, ClipboardCheck, Globe2,
  Languages, Wallet, Award, Briefcase, Users, MapPin, Calendar, Clock,
  FileText, CheckCircle2, HeartPulse, School, ArrowRight, ArrowLeft, Sparkles,
} from 'lucide-react';

/* =========================================================================
   STUDY MBBS IN INDIA — page component (v4, palette + engagement pass)
   -------------------------------------------------------------------------
   - New palette: Ink / Deep Sage / Muted Sage / Persimmon / Cream / White
     (client-supplied hex values, see CSS vars below).
   - Hero is now a small bento of icon-illustrated cards instead of a single
     placeholder image, so there's real visual variety above the fold.
   - Several plain two-column tables (quick overview, eligibility, language,
     scholarships, career, choose-a-college) are now icon-led card grids —
     easier to scan, less "wall of table" reading.
   - Enquiry form still lives on its own page (SPA route via pushState).
   ========================================================================= */

const ICON_POOL = [Stethoscope, GraduationCap, BookOpen, ClipboardCheck, Building2, Globe2, Languages, Wallet, Award, Briefcase, Users, MapPin, Calendar, Clock, FileText, CheckCircle2, HeartPulse, School];

/* ------------------------------ routing --------------------------------- */
const useSimplePage = () => {
  const getPageFromHash = () => (window.location.hash === '#enquiry' ? 'enquiry' : 'home');
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const onPop = () => setPage(getPageFromHash());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const goTo = useCallback((next) => {
    if (next === page) return;
    window.history.pushState({ page: next }, '', next === 'enquiry' ? '#enquiry' : '#home');
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [page]);

  return [page, goTo];
};

/* ----------------------------- data ------------------------------------ */

const quickOverview = [
  ['Undergraduate Degree', 'Bachelor of Medicine, Bachelor of Surgery (MBBS)'],
  ['Postgraduate Degrees', 'MD / MS and other PG medical programmes'],
  ['Academic Duration', 'MBBS: 4½ years + 1 year compulsory internship'],
  ['UG Entrance Exam', 'NEET-UG'],
  ['PG Entrance Exam', 'NEET-PG'],
  ['Main UG Subjects', 'Physics, Chemistry & Biology/Biotechnology'],
  ['Regulatory Body', 'National Medical Commission (NMC)'],
  ['Institution Types', 'Government, Private & Deemed'],
  ['Medium of Instruction', 'English is widely used'],
  ['Clinical Training', 'Included in medical education'],
];

const whyStudyReasons = [
  { title: 'Wide Range of Medical Colleges', desc: 'Government, private and deemed institutions to choose from, according to NEET rank, budget and preferred location.', icon: Building2 },
  { title: 'Practical & Clinical Training', desc: 'Theoretical learning paired with practical sessions — students move gradually from basic sciences into clinical subjects and patient care.', icon: Stethoscope },
  { title: 'Diverse Clinical Exposure', desc: "India's large, varied healthcare system means exposure to patients from many backgrounds and a wide range of conditions.", icon: Users },
  { title: 'Established Medical Education System', desc: 'A well-established ecosystem of recognised institutions, teaching hospitals, labs and specialised centres.', icon: School },
  { title: 'English-Medium Medical Education', desc: 'English is widely used for teaching medical subjects, making it practical for students comfortable studying in English.', icon: Languages },
  { title: 'Cultural & Student Experience', desc: "Alongside medical education, students experience India's cultures, languages, food, festivals and regions.", icon: Globe2 },
];

const neetUGPath = ['Class 12 / Equivalent', 'NEET-UG', 'Rank', 'Counselling', 'Seat Allotment', 'MBBS Admission'];
const neetPGPath = ['MBBS', 'Compulsory Internship', 'NEET-PG', 'Rank', 'Counselling', 'Seat Allotment', 'MD/MS Admission'];

const seatsData = [
  { level: 'Undergraduate', exam: 'NEET-UG', course: 'MBBS', seats: '136,939 seats*' },
  { level: 'Postgraduate', exam: 'NEET-PG', course: 'MD, MS & other PG programmes', seats: 'Updated through the applicable NMC/MCC seat matrix' },
];

const collegesData = [
  { name: 'AIIMS New Delhi', location: 'New Delhi', type: 'Government' },
  { name: 'JIPMER', location: 'Puducherry', type: 'Government' },
  { name: 'Maulana Azad Medical College', location: 'New Delhi', type: 'Government' },
  { name: 'Institute of Medical Sciences, BHU', location: 'Varanasi', type: 'Government' },
  { name: 'Vardhman Mahavir Medical College', location: 'New Delhi', type: 'Government' },
  { name: 'Christian Medical College', location: 'Vellore', type: 'Private' },
  { name: 'Kasturba Medical College', location: 'Manipal', type: 'Deemed' },
  { name: 'Amrita School of Medicine', location: 'Kochi', type: 'Deemed' },
];

const courseStructure = [
  { stage: 'Pre-Clinical', subjects: 'Anatomy, Physiology, Biochemistry' },
  { stage: 'Para-Clinical', subjects: 'Pathology, Pharmacology, Microbiology, Forensic Medicine' },
  { stage: 'Clinical', subjects: 'General Medicine, Surgery, Pediatrics, Obstetrics & Gynaecology and other clinical subjects' },
  { stage: 'Clinical Training', subjects: 'Patient interaction, case discussions and practical learning' },
  { stage: 'Internship', subjects: 'Compulsory rotating medical internship' },
];

const feesData = [
  { type: 'Government', position: 'Generally lower', factors: 'State, college & category' },
  { type: 'Private', position: 'Generally higher', factors: 'College, state & quota' },
  { type: 'Deemed University', position: 'Varies widely', factors: 'Institution & admission category' },
  { type: 'NRI Category', position: 'Separate fee structure', factors: 'College & applicable category' },
  { type: 'Hostel', position: 'Additional', factors: 'College & accommodation' },
  { type: 'Living Expenses', position: 'Additional', factors: 'City & lifestyle' },
];

const eligibilityData = [
  ['Educational Qualification', 'Class 12 or equivalent'],
  ['Required Subjects', 'Physics, Chemistry & Biology/Biotechnology'],
  ['UG Entrance Examination', 'NEET-UG'],
  ['Minimum Qualification', 'As prescribed under applicable NEET-UG rules'],
  ['Age Requirement', 'As prescribed under current NEET-UG regulations'],
  ['International Applicants', 'Additional requirements may apply'],
];

const admissionSteps = [
  { title: 'Check Eligibility', desc: 'Confirm your academic and NEET-UG eligibility.' },
  { title: 'Appear for NEET-UG', desc: 'Register for and take the national undergraduate medical entrance examination.' },
  { title: 'Check Your Rank', desc: 'Your NEET-UG rank determines the range of MBBS colleges and categories you may be eligible for.' },
  { title: 'Register for Counselling', desc: 'Participate in the applicable MCC or State counselling process.' },
  { title: 'Fill College Choices', desc: 'Select colleges according to your rank, preferences, budget and eligibility.' },
  { title: 'Seat Allotment', desc: 'Seats are allotted according to the applicable counselling rules, rank, preferences, category and availability.' },
  { title: 'Document Verification', desc: 'Complete the required verification and admission formalities.' },
  { title: 'Fee Payment & Reporting', desc: 'Pay the prescribed fees and report to the allotted medical college.' },
];

const counsellingTypes = [
  { type: 'MCC UG Counselling', applies: 'MBBS and applicable UG seats' },
  { type: 'State UG Counselling', applies: 'State-level MBBS seats' },
  { type: 'MCC PG Counselling', applies: 'MD/MS and applicable PG seats' },
  { type: 'State PG Counselling', applies: 'State-level postgraduate medical seats' },
  { type: 'Deemed University Counselling', applies: 'Applicable deemed university seats' },
  { type: 'NRI Category', applies: 'Subject to applicable rules and eligibility' },
];

const documentsRequired = [
  'Class 10 Certificate', 'Class 12 Mark Sheet & Certificate', 'NEET Scorecard', 'NEET Admit Card',
  'Valid Identity Proof', 'Passport-size Photographs', 'Transfer / Migration Certificate, where applicable',
  'Category Certificate, where applicable', 'Medical Fitness Certificate, if required',
  'Passport and nationality-related documents for international applicants',
];

const internationalChecklist = [
  'Academic qualification and equivalence', 'NEET-UG eligibility', 'Foreign National / OCI / NRI category',
  'College-specific requirements', 'Fee structure', 'Required documents', 'Visa requirements',
  'Applicable registration requirements', 'Medical licensing requirements for their future country of practice',
];

const languageData = [
  ['Classroom Instruction', 'English is widely used'],
  ['English Proficiency', 'Institution-specific'],
  ['IELTS / TOEFL', 'Depends on institution/category'],
  ['Local Language', 'Useful for everyday communication'],
  ['Clinical Interaction', 'Knowledge of the local language can be useful'],
];

const scholarshipData = [
  ['University Scholarships', 'Offered by selected institutions'],
  ['Merit-Based Scholarships', 'Eligibility varies'],
  ['Government / External Scholarships', 'Depends on scheme and student category'],
  ['Education Loans', 'Subject to lender requirements'],
  ['Self-Funding', 'Common option'],
];

const careerData = [
  ['Clinical Practice', 'Hospitals & healthcare settings'],
  ['MD / MS', 'Medical specialisation'],
  ['Medical Research', 'Clinical & biomedical research'],
  ['Public Health', 'Community & population healthcare'],
  ['Healthcare Management', 'Hospital & healthcare administration'],
  ['International Medical Practice', 'Subject to destination-country licensing'],
];

const chooseCollegeData = [
  ['Recognition', 'NMC recognition'],
  ['NEET Rank', 'Admission probability'],
  ['Fees', 'Tuition + hostel + other expenses'],
  ['Clinical Exposure', 'Attached hospital & patient exposure'],
  ['Infrastructure', 'Labs, library & hospital facilities'],
  ['Location', 'City, transport & living costs'],
  ['Admission Category', 'AIQ, State, Private, Deemed, NRI etc.'],
  ['Future Plans', 'PG, practice or international career'],
];

const whyChooseUs = [
  'MBBS College Shortlisting', 'Eligibility Assessment', 'NEET Counselling Guidance',
  'Government & Private College Options', 'Documentation Support', 'Choice-Filling Guidance',
  'Admission Assistance', 'Visa Guidance for International Students', 'Pre-Departure Support',
];

const faqData = [
  { q: 'What is MBBS in India?', a: 'MBBS stands for Bachelor of Medicine, Bachelor of Surgery. It is the primary undergraduate medical degree for students pursuing medical education in India.' },
  { q: 'How long is MBBS in India?', a: 'The MBBS programme consists of 4½ years of academic study followed by one year of compulsory rotating medical internship.' },
  { q: 'Is NEET required for MBBS admission in India?', a: 'Yes. NEET-UG is the national entrance examination for undergraduate medical education in India.' },
  { q: 'What subjects are required for MBBS in India?', a: 'Students generally need to study Physics, Chemistry and Biology/Biotechnology at the qualifying level and meet the applicable NEET-UG eligibility requirements.' },
  { q: 'How much does MBBS cost in India?', a: 'MBBS fees vary by college, state, institution type and admission category. Government colleges generally have lower tuition fees, while private and deemed institutions may have significantly higher fees.' },
  { q: 'How many MBBS seats are available in India?', a: 'The NMC AY 2026–27 undergraduate seat matrix lists 136,939 MBBS seats, excluding Institutes of National Importance (INIs). The matrix is subject to revision.' },
  { q: 'What is NEET-PG?', a: 'NEET-PG is the national entrance examination for postgraduate medical education, including MD and MS programmes.' },
  { q: 'When is NEET-PG 2026?', a: 'The official NBEMS schedule lists 30 August 2026 as the NEET-PG 2026 examination date.' },
  { q: 'Can international students study MBBS in India?', a: 'Yes, international students can apply subject to the applicable academic, NEET, admission, documentation and immigration requirements.' },
  { q: 'Is MBBS taught in English in India?', a: 'English is widely used as the medium of medical education in India, although students should confirm the specific requirements of their chosen institution.' },
  { q: 'How does MBBS admission work in India?', a: 'NEET-UG → Counselling Registration → Choice Filling → Seat Allotment → Document Verification → Fee Payment → College Reporting. The exact process depends on the counselling authority and admission category.' },
];

/* ------------------------------- hooks ---------------------------------- */

const useInView = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setInView(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal ${inView ? 'reveal-in' : ''} ${className}`} style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

const CountUp = ({ target, duration = 1400 }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setValue(target); return undefined; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>;
};

/* --------------------------- shared bits --------------------------------- */

const SiteBreadcrumbs = ({ onHome, current }) => (
  <div className="text-[13px] tracking-wide text-[var(--ink)]/55 font-medium uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
    <button type="button" onClick={onHome} className="hover:text-[var(--persimmon)] transition-colors">Home</button>
    &nbsp;/&nbsp;Study Destinations&nbsp;/&nbsp;<span className="text-[var(--persimmon)]">{current}</span>
  </div>
);

const Eyebrow = ({ children, tone = 'persimmon' }) => (
  <div className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] rounded-full px-3 py-1 w-fit eyebrow-${tone}`} style={{ fontFamily: 'Inter, sans-serif' }}>
    <span className="w-1.5 h-1.5 rounded-full bg-current pulse-dot" />
    {children}
  </div>
);

const SectionHeading = ({ eyebrow, title, sub, tone }) => (
  <div className="flex flex-col gap-3 mb-8 md:mb-10 max-w-3xl">
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <h2 className="font-display text-[28px] md:text-[38px] leading-[1.15] font-semibold text-[var(--ink)]">{title}</h2>
    {sub && <p className="text-[15px] md:text-[16px] leading-relaxed text-[var(--ink)]/70">{sub}</p>}
  </div>
);

const CtaBanner = ({ heading, sub, buttonLabel = 'Talk to a counsellor', onEnquire }) => (
  <button type="button" onClick={onEnquire} className="cta-banner group w-full flex items-center justify-between gap-6 rounded-2xl px-6 md:px-9 py-6 md:py-7 text-left overflow-hidden relative">
    <span className="cta-sheen" aria-hidden="true" />
    <span className="relative z-10">
      <span className="block font-display text-[18px] md:text-[22px] font-semibold text-white leading-snug">{heading}</span>
      {sub && <span className="block text-[13px] md:text-[14px] text-white/70 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{sub}</span>}
    </span>
    <span className="relative z-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--persimmon)] text-white font-semibold text-[13px] md:text-[14px] px-5 py-2.5 transition-transform duration-200 group-hover:translate-x-1" style={{ fontFamily: 'Inter, sans-serif' }}>
      {buttonLabel}
      <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </span>
  </button>
);

const FloatingCta = ({ onEnquire }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button type="button" onClick={onEnquire} aria-label="Go to the enquiry page"
      className={`floating-cta fixed bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--persimmon)] text-white font-semibold text-[13px] md:text-[14px] pl-5 pr-4 py-3 shadow-[0_10px_30px_-8px_rgba(231,111,81,0.55)] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{ fontFamily: 'Inter, sans-serif' }}>
      <span className="floating-cta-ring" aria-hidden="true" />
      Get free counselling
      <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center"><ArrowRight size={13} /></span>
    </button>
  );
};

const ScrollProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="h-[2.5px] w-full bg-[var(--deep-sage)]/12">
      <div className="h-full bg-[var(--persimmon)] transition-[width] duration-150 ease-out" style={{ width: `${pct}%` }} />
    </div>
  );
};

const TopNav = ({ page, onHome, onEnquire }) => (
  <div className="sticky top-0 z-40 backdrop-blur-md bg-[var(--paper)]/92 border-b border-[var(--deep-sage)]/12">
    <div className="px-[6vw] md:px-[12.5vw] h-16 flex items-center justify-between">
      <button type="button" onClick={onHome} className="flex items-center gap-2.5 group">
        <span className="nav-mark w-8 h-8 rounded-full bg-[var(--deep-sage)] flex items-center justify-center shrink-0">
          <HeartPulse size={16} color="var(--cream)" className="nav-heartbeat" />
        </span>
        <span className="font-display text-[16px] font-semibold text-[var(--deep-sage)] group-hover:text-[var(--persimmon)] transition-colors">MBBS in India</span>
      </button>
      <button type="button" onClick={onEnquire} className="cta-button inline-flex items-center gap-2 rounded-full bg-[var(--persimmon)] text-white font-semibold text-[13px] px-5 py-2.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        {page === 'enquiry' ? 'Free counselling' : 'Enquire now'} <ArrowRight size={14} />
      </button>
    </div>
    <ScrollProgress />
  </div>
);

const DefTable = ({ rows, labelHeader = 'Particular', valueHeader = 'Details' }) => (
  <div className="overflow-x-auto rounded-xl border border-[var(--deep-sage)]/14 shadow-[0_1px_0_rgba(24,37,34,0.05)]">
    <table className="w-full border-collapse text-[14px] md:text-[15px]">
      <thead>
        <tr className="bg-[var(--deep-sage)] text-white text-left">
          <th className="px-5 py-3 font-semibold w-2/5" style={{ fontFamily: 'Inter, sans-serif' }}>{labelHeader}</th>
          <th className="px-5 py-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{valueHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={`table-row ${i % 2 === 0 ? 'bg-[var(--card)]' : 'bg-[var(--paper)]'}`}>
            <td className="px-5 py-3 font-semibold text-[var(--deep-sage)] align-top border-t border-[var(--deep-sage)]/10">{row[0]}</td>
            <td className="px-5 py-3 text-[var(--ink)]/85 align-top border-t border-[var(--deep-sage)]/10">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Replaces plain two-column tables with a scannable, icon-led card grid —
    used for sections that were previously "walls of table". */
const IconFactGrid = ({ rows, columns = 2 }) => (
  <div className={`grid grid-cols-1 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
    {rows.map((row, i) => {
      const Icon = ICON_POOL[i % ICON_POOL.length];
      return (
        <div key={i} className="icon-fact hover-card flex items-start gap-4 rounded-xl bg-[var(--card)] border border-[var(--deep-sage)]/12 p-5">
          <span className="w-10 h-10 rounded-lg bg-[var(--muted-sage)]/25 text-[var(--deep-sage)] flex items-center justify-center shrink-0">
            <Icon size={18} />
          </span>
          <div>
            <p className="font-semibold text-[14px] text-[var(--deep-sage)]" style={{ fontFamily: 'Inter, sans-serif' }}>{row[0]}</p>
            <p className="text-[13.5px] text-[var(--ink)]/70 leading-relaxed mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{row[1]}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const GridTable = ({ columns, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-[var(--deep-sage)]/14">
    <table className="w-full border-collapse text-[14px] md:text-[15px]">
      <thead>
        <tr className="bg-[var(--deep-sage)] text-white text-left">
          {columns.map((c) => (
            <th key={c.key} className="px-5 py-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={`table-row ${i % 2 === 0 ? 'bg-[var(--card)]' : 'bg-[var(--paper)]'}`}>
            {columns.map((c) => (
              <td key={c.key} className="px-5 py-3 text-[var(--ink)]/85 align-top border-t border-[var(--deep-sage)]/10">
                {c.mono ? <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{row[c.key]}</span> : row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PulsePathway = ({ steps, label }) => {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const w = 1000, gap = w / steps.length, midY = 60, spike = 26;
  let path = `M 0 ${midY}`;
  steps.forEach((_, i) => {
    const cx = gap * i + gap / 2;
    path += ` L ${cx - 18} ${midY} L ${cx - 6} ${midY - spike} L ${cx + 6} ${midY + spike * 0.6} L ${cx + 18} ${midY}`;
  });
  path += ` L ${w} ${midY}`;

  return (
    <div ref={ref} className="rounded-2xl border border-[var(--deep-sage)]/25 bg-[var(--deep-sage)] px-4 md:px-8 py-8 overflow-hidden relative">
      <span className="monitor-scan" aria-hidden="true" />
      <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--muted-sage)] mb-4 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
      <div className="relative z-10">
        <svg viewBox={`0 -20 ${w} 100`} className="w-full h-14 md:h-20" preserveAspectRatio="none" aria-hidden="true">
          <path d={path} fill="none" stroke="var(--persimmon)" strokeWidth="2.5" className={`pulse-line ${inView ? 'pulse-line-run' : ''}`} />
        </svg>
        <div className="flex justify-between -mt-2">
          {steps.map((s, i) => (
            <div key={i} className="step-marker flex flex-col items-center text-center px-1" style={{ width: `${100 / steps.length}%`, transitionDelay: inView ? `${300 + i * 120}ms` : '0ms', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(8px)' }}>
              <div className="w-7 h-7 rounded-full bg-[var(--persimmon)] text-white text-[12px] font-bold flex items-center justify-center mb-2 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{i + 1}</div>
              <span className="text-white text-[11px] md:text-[13px] leading-tight font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Checklist = ({ items, columns = 2 }) => (
  <ul className={`grid grid-cols-1 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-x-8 gap-y-3`}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-[14px] text-[var(--ink)]/85" style={{ fontFamily: 'Inter, sans-serif' }}>
        <CheckCircle2 size={17} className="mt-0.5 shrink-0 checklist-mark" color="var(--muted-sage)" />
        {item}
      </li>
    ))}
  </ul>
);

const CardGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {items.map((item, i) => {
      const Icon = item.icon || ICON_POOL[i % ICON_POOL.length];
      return (
        <div key={i} className="hover-card rounded-2xl bg-[var(--card)] border border-[var(--deep-sage)]/12 p-6 flex flex-col gap-2">
          <span className="w-10 h-10 rounded-full bg-[var(--persimmon)]/12 text-[var(--persimmon)] flex items-center justify-center">
            <Icon size={19} />
          </span>
          <h4 className="font-display text-[17px] font-semibold text-[var(--ink)] mt-1">{item.title}</h4>
          <p className="text-[14px] leading-relaxed text-[var(--ink)]/70" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
        </div>
      );
    })}
  </div>
);

const FaqItem = ({ q, a, open, onToggle }) => (
  <div className="border-b border-[var(--deep-sage)]/12">
    <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-4 text-left" aria-expanded={open}>
      <span className="font-semibold text-[15px] text-[var(--deep-sage)]" style={{ fontFamily: 'Inter, sans-serif' }}>{q}</span>
      <span className={`shrink-0 w-7 h-7 rounded-full border border-[var(--deep-sage)]/25 flex items-center justify-center text-[var(--deep-sage)] transition-transform duration-300 ${open ? 'rotate-45 !border-[var(--persimmon)] !text-[var(--persimmon)]' : ''}`} aria-hidden="true">+</span>
    </button>
    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'}`} style={{ display: 'grid' }}>
      <div className="overflow-hidden">
        <p className="text-[14px] leading-relaxed text-[var(--ink)]/75 pr-8" style={{ fontFamily: 'Inter, sans-serif' }}>{a}</p>
      </div>
    </div>
  </div>
);

/* ------------------------------ enquiry page ------------------------------ */

const trustPoints = [
  ['24 hrs', 'Counsellor call-back window'],
  ['0', 'Cost — counselling is free'],
  ['NMC', 'Recognition checked on every college'],
];

const EnquiryPage = ({ onBack }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', neetScore: '', state: '' });
  const [status, setStatus] = useState('idle');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('submitting');
    try {
      const response = await axios.post(`${baseUrl}/api/enquiry/mbbs-in-india`, form);

      if (response.data.success) {
        toast.success('Thank you for your enquiry! Our counsellor will call you shortly.');
        setStatus('done');
      }
    } catch (error) {
      console.error('MBBS enquiry error:', error);
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to submit your enquiry');
      } else {
        toast.error('An error occurred while submitting your enquiry. Please try again.');
      }
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="px-[6vw] md:px-[12.5vw] pt-6">
        <SiteBreadcrumbs onHome={onBack} current="Free Counselling" />
      </div>

      <div className="px-[6vw] md:px-[12.5vw] mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start pb-20">
        <div className="page-enter order-2 lg:order-1">
          <div className="rounded-3xl bg-[var(--deep-sage)] px-7 md:px-9 py-9 md:py-11 relative overflow-hidden">
            <span className="monitor-scan" aria-hidden="true" />
            <div className="relative z-10">
              <Eyebrow tone="sage">Free Counselling</Eyebrow>
              <h1 className="font-display text-[26px] md:text-[32px] font-semibold text-white mt-4 leading-[1.2]">One form. One call.<br />A clear path to your MBBS seat.</h1>
              <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed mt-3 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell us your NEET score and preferences — a counsellor reviews your case and calls you back with real, ranked college options.
              </p>
              <svg viewBox="0 0 400 60" className="w-full h-12 mt-8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 30 H150 L162 8 L176 52 L188 30 H400" fill="none" stroke="var(--persimmon)" strokeWidth="2" className="pulse-line pulse-line-run" />
              </svg>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {trustPoints.map(([num, label]) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-display text-[20px] md:text-[24px] font-semibold text-[var(--muted-sage)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{num}</span>
                    <span className="text-[11px] text-white/55 leading-snug mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="button" onClick={onBack} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--deep-sage)] hover:text-[var(--persimmon)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
            <ArrowLeft size={15} /> Back to MBBS in India overview
          </button>
        </div>

        <div className="page-enter order-1 lg:order-2" style={{ animationDelay: '80ms' }}>
          {status === 'done' ? (
            <div className="rounded-2xl bg-[var(--deep-sage)] text-white px-6 py-14 text-center flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[var(--muted-sage)]/20 border-2 border-[var(--muted-sage)] flex items-center justify-center text-[var(--muted-sage)]"><CheckCircle2 size={26} /></span>
              <p className="font-display text-[22px] font-semibold">Thank you, {form.name.split(' ')[0]}.</p>
              <p className="text-white/75 text-[14px] max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Our counselling team will call you at {form.phone} within 24 hours.</p>
              <button type="button" onClick={onBack} className="cta-button mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--persimmon)] text-white font-semibold text-[13px] px-6 py-2.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                <ArrowLeft size={14} /> Back to the overview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-[var(--card)] border border-[var(--persimmon)]/30 shadow-[0_16px_40px_-16px_rgba(24,37,34,0.25)] p-6 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h3 className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--ink)]">Get Free MBBS Admission Counselling</h3>
                  <p className="text-[13px] text-[var(--ink)]/55 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Takes under a minute.</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--deep-sage)] text-[var(--muted-sage)] shrink-0"><Stethoscope size={20} /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Full name
                  <input required value={form.name} onChange={update('name')} placeholder="e.g. Ananya Sharma" className="form-input rounded-lg border border-[var(--deep-sage)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Phone number
                  <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 98765 43210" className="form-input rounded-lg border border-[var(--deep-sage)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email
                  <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className="form-input rounded-lg border border-[var(--deep-sage)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  NEET-UG score / rank (optional)
                  <input value={form.neetScore} onChange={update('neetScore')} placeholder="e.g. 615 / AIR 42,300" className="form-input rounded-lg border border-[var(--deep-sage)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" style={{ fontFamily: "'IBM Plex Mono', monospace" }} />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Preferred state / college type
                <input value={form.state} onChange={update('state')} placeholder="e.g. Madhya Pradesh, government college preferred" className="form-input rounded-lg border border-[var(--deep-sage)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
              </label>

              <button type="submit" disabled={status === 'submitting'} className="cta-button mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--persimmon)] disabled:opacity-60 text-white font-semibold text-[14px] px-7 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {status === 'submitting' ? (<><span className="spinner" aria-hidden="true" /> Sending…</>) : 'Book my free counselling call'}
              </button>
              <p className="mt-3 text-[12px] text-[var(--ink)]/50" style={{ fontFamily: 'Inter, sans-serif' }}>No spam. A counsellor calls within one working day.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------- home page -------------------------------- */

const heroBento = [
  { icon: Building2, stat: '60+', label: 'Partner medical colleges' },
  { icon: Award, stat: 'NMC', label: 'Recognition checked, always' },
  { icon: Users, stat: '4,200+', label: 'Students counselled' },
];

const HomePage = ({ onEnquire }) => (
  <div className="page-enter pb-4">
    <div className="px-[6vw] md:px-[12.5vw] pt-8 md:pt-10">
      <SiteBreadcrumbs onHome={() => {}} current="MBBS in India" />
    </div>

    <div className="relative">
      <div className="hero-ambient" aria-hidden="true">
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 100 H420 L440 40 L468 165 L492 70 L512 100 H1200" fill="none" stroke="var(--persimmon)" strokeWidth="1.6" className="hero-heartbeat" />
        </svg>
      </div>

      <div className="px-[6vw] md:px-[12.5vw] mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative">
        <Reveal>
          <div className="flex flex-col gap-5">
            <Eyebrow>NEET-UG 2026 · NMC Regulated</Eyebrow>
            <h1 className="font-display text-[34px] md:text-[50px] leading-[1.08] font-semibold text-[var(--ink)]">
              One rank. One pathway.<br />
              Your seat at an <span className="text-[var(--persimmon)] hero-underline">MBBS</span> college in India.
            </h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--ink)]/75 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Government, private and deemed medical colleges — matched to your NEET-UG rank, budget and preferred state, with counselling support from eligibility check to college reporting.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button type="button" onClick={onEnquire} className="cta-button inline-flex items-center gap-2 rounded-full bg-[var(--persimmon)] text-white font-semibold text-[14px] px-6 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get free counselling <ArrowRight size={16} />
              </button>
              <a href="#top-colleges" className="cta-button inline-flex items-center gap-2 rounded-full border border-[var(--deep-sage)]/30 text-[var(--deep-sage)] font-semibold text-[14px] px-6 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                See top colleges
              </a>
            </div>
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-sage)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}><CountUp target={136939} /></span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[8rem]" style={{ fontFamily: 'Inter, sans-serif' }}>MBBS seats, AY 2026–27</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-sage)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>4½ + 1</span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[8rem]" style={{ fontFamily: 'Inter, sans-serif' }}>years, incl. internship</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-sage)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>30 Aug</span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[8rem]" style={{ fontFamily: 'Inter, sans-serif' }}>NEET-PG 2026 exam date</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero bento — replaces the single placeholder image with a small
            cluster of icon-illustrated cards, so the hero has real visual
            variety instead of one flat box. */}
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 hero-tile rounded-2xl bg-[var(--deep-sage)] p-6 flex flex-col justify-between min-h-[130px] relative overflow-hidden">
              <span className="monitor-scan" aria-hidden="true" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="w-11 h-11 rounded-full bg-[var(--persimmon)]/20 text-[var(--persimmon)] flex items-center justify-center"><GraduationCap size={22} /></span>
                <Sparkles size={16} color="var(--muted-sage)" />
              </div>
              <p className="relative z-10 text-white font-display text-[16px] font-semibold mt-3">From rank to reporting day</p>
            </div>
            {heroBento.map(({ icon: Icon, stat, label }, i) => (
              <div key={label} className={`hero-tile hover-card rounded-2xl bg-[var(--card)] border border-[var(--deep-sage)]/12 p-5 flex flex-col gap-2 ${i === 2 ? 'col-span-2' : ''}`}>
                <span className="w-9 h-9 rounded-lg bg-[var(--muted-sage)]/25 text-[var(--deep-sage)] flex items-center justify-center"><Icon size={17} /></span>
                <span className="font-display text-[20px] font-semibold text-[var(--deep-sage)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{stat}</span>
                <span className="text-[12px] text-[var(--ink)]/60" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-12 md:mt-16">
      <Reveal><CtaBanner heading="Free MBBS admission counselling — one form, a call within 24 hrs" sub="Share your NEET score and preferences; get ranked college options back." buttonLabel="Start my enquiry" onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Why India" title="Why Study MBBS in India?" /></Reveal>
      <Reveal delay={100}><CardGrid items={whyStudyReasons} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="At a Glance" title="MBBS in India — Quick Overview" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={quickOverview} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Undergraduate" title="NEET-UG for MBBS Admission" sub="NEET-UG is the national entrance examination for undergraduate medical education, including MBBS, in India. Check the latest NTA Information Bulletin for eligibility, exam pattern and dates." /></Reveal>
      <PulsePathway steps={neetUGPath} label="NEET-UG Admission Pathway" />
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-10 md:mt-14">
      <Reveal><SectionHeading eyebrow="Postgraduate" title="NEET-PG for Postgraduate Admission" sub="For the 2026 session, NEET-PG is scheduled for 30 August 2026. Refer to the latest NBEMS notification for eligibility and internship requirements." /></Reveal>
      <PulsePathway steps={neetPGPath} label="NEET-PG Admission Pathway" />
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Not sure which pathway fits your rank?" sub="Get a free, personalised read on your NEET score." onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Capacity" title="Medical Seats in India" sub="Seat availability can change with new colleges, increased intake and regulatory approvals." /></Reveal>
      <Reveal delay={100}><GridTable columns={[{ key: 'level', label: 'Medical Level' }, { key: 'exam', label: 'Entrance Exam' }, { key: 'course', label: 'Course' }, { key: 'seats', label: 'Seat Information', mono: true }]} rows={seatsData} /></Reveal>
      <p className="text-[12px] text-[var(--ink)]/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>*136,939 MBBS seats — NMC Seat Matrix, AY 2026–27, excluding Institutes of National Importance (INIs). The matrix may be revised based on subsequent decisions or approvals.</p>
    </div>

    <div id="top-colleges" className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Institutions" title="Top MBBS Colleges in India" sub="Consider NMC recognition, NEET rank, fees, seat availability, clinical exposure, hospital facilities, location and admission category." /></Reveal>
      <Reveal delay={100}><GridTable columns={[{ key: 'name', label: 'Medical College' }, { key: 'location', label: 'Location' }, { key: 'type', label: 'Type' }]} rows={collegesData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Curriculum" title="MBBS Course Structure in India" /></Reveal>
      <Reveal delay={100}><GridTable columns={[{ key: 'stage', label: 'Stage' }, { key: 'subjects', label: 'Major Subjects / Training' }]} rows={courseStructure} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Budgeting" title="MBBS Fees in India" sub="Cost varies considerably by institution type, state, admission category and quota — factor in tuition, hostel, food, books and other charges." /></Reveal>
      <Reveal delay={100}><GridTable columns={[{ key: 'type', label: 'College Type' }, { key: 'position', label: 'General Fee Position' }, { key: 'factors', label: 'Major Factors' }]} rows={feesData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Get a personalised fee estimate for your rank" sub="Government, private or deemed — know your real budget before choice-filling." onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Eligibility" title="MBBS Eligibility Criteria in India" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={eligibilityData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Process" title="MBBS Admission Process" sub="A real, ordered sequence — follow it in order." /></Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {admissionSteps.map((step, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="hover-card flex gap-4 rounded-xl bg-[var(--card)] border border-[var(--deep-sage)]/12 p-5 h-full">
              <span className="w-8 h-8 rounded-full bg-[var(--deep-sage)] text-white flex items-center justify-center font-semibold text-[13px] shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{i + 1}</span>
              <div>
                <h4 className="font-semibold text-[15px] text-[var(--ink)]" style={{ fontFamily: 'Inter, sans-serif' }}>{step.title}</h4>
                <p className="text-[13.5px] text-[var(--ink)]/65 leading-relaxed mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <p className="font-semibold text-[14px] text-[var(--deep-sage)] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>AIQ, State & PG Counselling</p>
        <Reveal><GridTable columns={[{ key: 'type', label: 'Counselling Type' }, { key: 'applies', label: 'Applicable Admission' }]} rows={counsellingTypes} /></Reveal>
      </div>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Paperwork" title="Documents Required for MBBS Admission" /></Reveal>
      <Reveal delay={100}><Checklist items={documentsRequired} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="International" title="MBBS in India for International Students" /></Reveal>
      <Reveal delay={100}><Checklist items={internationalChecklist} columns={3} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Language" title="Language of Medical Education in India" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={languageData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Funding" title="Scholarships & Funding for MBBS in India" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={scholarshipData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="After MBBS" title="Career Options After MBBS" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={careerData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Decision" title="How to Choose the Right MBBS College?" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={chooseCollegeData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal>
        <div className="rounded-3xl bg-[var(--deep-sage)] px-6 md:px-14 py-12 md:py-16 relative overflow-hidden">
          <span className="monitor-scan" aria-hidden="true" />
          <div className="relative z-10">
            <Eyebrow tone="sage">Counselling Support</Eyebrow>
            <h2 className="font-display text-[26px] md:text-[36px] font-semibold text-white mt-3 max-w-2xl">Why Choose Us for MBBS Admission in India?</h2>
            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-2xl mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>NEET rank, eligibility, fees, seat availability, counselling route and long-term career plans all play a role — choosing a college involves more than checking rankings.</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3 mt-8">
              {whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--persimmon)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Start your MBBS journey in India" sub="One free call covers eligibility, shortlisting and next steps." buttonLabel="Book my free call" onEnquire={onEnquire} /></Reveal>
    </div>

    <FaqSection />
  </div>
);

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24 mb-6">
      <Reveal><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /></Reveal>
      <Reveal delay={100}>
        <div className="rounded-2xl bg-[var(--card)] border border-[var(--deep-sage)]/12 px-6 md:px-8">
          {faqData.map((f, i) => (<FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />))}
        </div>
      </Reveal>
    </div>
  );
};

/* --------------------------------- page shell ---------------------------------- */

const StudyMBBSIndia = () => {
  const [page, goTo] = useSimplePage();

  useEffect(() => {
    document.title = page === 'enquiry' ? 'Free MBBS Admission Counselling | MBBS in India 2026' : 'MBBS in India 2026: Fees, Admission, Eligibility & Top Medical Colleges';
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    };
    setMeta('description', 'MBBS in India 2026: NEET-UG eligibility, fees, top government, private and deemed medical colleges, seat matrix and step-by-step admission counselling.');
    setMeta('keywords', 'MBBS in India, NEET UG 2026, MBBS admission, MBBS colleges India, MBBS fees, medical seats India');
  }, [page]);

  const onEnquire = () => goTo('enquiry');
  const onHome = () => goTo('home');

  return (
    <div className="relative" style={{ backgroundColor: 'var(--paper)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        :root {
          --ink: #182522;
          --paper: #F5F0E6;
          --card: #FFFCF6;
          --deep-sage: #30463E;
          --muted-sage: #9DAF9A;
          --persimmon: #E76F51;
          --cream: #F5F0E6;
        }
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Fraunces', serif; }

        .eyebrow-persimmon { color: var(--persimmon); background: rgba(231,111,81,0.12); border: 1px solid rgba(231,111,81,0.32); }
        .eyebrow-sage { color: var(--muted-sage); background: rgba(157,175,154,0.16); border: 1px solid rgba(157,175,154,0.4); }

        .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
        .reveal-in { opacity: 1; transform: translateY(0); }

        @keyframes page-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .page-enter { animation: page-in 0.5s cubic-bezier(0.22,1,0.36,1) both; }

        .pulse-line { stroke-dasharray: 1400; stroke-dashoffset: 1400; }
        .pulse-line-run { animation: draw-pulse 1.6s ease-out forwards; }
        @keyframes draw-pulse { to { stroke-dashoffset: 0; } }
        .step-marker { transition: opacity 0.5s ease-out, transform 0.5s ease-out; }

        .hero-ambient { position: absolute; inset: 0; opacity: 0.14; pointer-events: none; overflow: hidden; }
        .hero-heartbeat { stroke-dasharray: 2200; stroke-dashoffset: 2200; animation: hero-draw 5.5s ease-in-out infinite; }
        @keyframes hero-draw { 0% { stroke-dashoffset: 2200; } 45% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -2200; } }
        .hero-underline { text-decoration: underline; text-decoration-color: rgba(231,111,81,0.32); text-decoration-thickness: 3px; text-underline-offset: 6px; }

        .hero-tile { transition: transform 0.3s ease, box-shadow 0.3s ease; animation: tile-float 5s ease-in-out infinite; }
        .hero-tile:nth-child(2) { animation-delay: 0.3s; }
        .hero-tile:nth-child(3) { animation-delay: 0.6s; }
        .hero-tile:nth-child(4) { animation-delay: 0.9s; }
        @keyframes tile-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .hero-tile:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 28px -16px rgba(48,70,62,0.35); }

        .monitor-scan {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, rgba(157,175,154,0.12) 48%, transparent 66%);
          background-size: 220% 100%; background-position: 130% 0;
          animation: scan-sweep 6s ease-in-out infinite;
        }
        @keyframes scan-sweep { 0%,15% { background-position: 130% 0; } 55%,100% { background-position: -30% 0; } }

        .nav-heartbeat { animation: nav-beat 1.8s ease-in-out infinite; }
        @keyframes nav-beat { 0%,100% { transform: scale(1); } 25% { transform: scale(1.15); } 40% { transform: scale(0.95); } 55% { transform: scale(1.1); } }

        .pulse-dot { box-shadow: 0 0 0 0 currentColor; animation: dot-pulse 2.4s infinite; }
        @keyframes dot-pulse { 0% { box-shadow: 0 0 0 0 rgba(231,111,81,0.4); } 70% { box-shadow: 0 0 0 6px rgba(231,111,81,0); } 100% { box-shadow: 0 0 0 0 rgba(231,111,81,0); } }

        .checklist-mark { transition: transform 0.2s ease; }
        li:hover .checklist-mark { transform: scale(1.15); }
        .icon-fact { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .icon-fact:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -16px rgba(48,70,62,0.3); }

        .cta-banner { background: linear-gradient(135deg, var(--deep-sage) 0%, #24352F 100%); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cta-banner:hover { transform: translateY(-2px); box-shadow: 0 16px 34px -14px rgba(24,37,34,0.5); }
        .cta-banner:active { transform: translateY(0); }
        .cta-sheen { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(100deg, transparent 20%, rgba(231,111,81,0.2) 45%, transparent 70%); background-size: 200% 100%; background-position: 120% 0; transition: background-position 0.9s ease; }
        .cta-banner:hover .cta-sheen { background-position: -20% 0; }

        .floating-cta-ring { position: absolute; inset: -6px; border-radius: 9999px; border: 1.5px solid rgba(231,111,81,0.4); animation: ring-pulse 2.6s ease-out infinite; }
        @keyframes ring-pulse { 0% { transform: scale(0.9); opacity: 0.8; } 80% { transform: scale(1.25); opacity: 0; } 100% { opacity: 0; } }

        .hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -18px rgba(48,70,62,0.35); border-color: rgba(48,70,62,0.3); }
        .table-row { transition: background-color 0.2s ease; }
        .table-row:hover { background-color: rgba(157,175,154,0.18) !important; }
        .cta-button { transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -10px rgba(231,111,81,0.5); }
        .cta-button:active { transform: translateY(0); }
        .form-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .form-input:focus { border-color: var(--deep-sage); box-shadow: 0 0 0 3px rgba(48,70,62,0.15); }
        .nav-mark { transition: transform 0.2s ease; }
        button:hover .nav-mark { transform: scale(1.08); }

        .spinner { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff; animation: spin 0.7s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .step-marker, .page-enter, .hero-tile { transition: none !important; animation: none !important; opacity: 1 !important; transform: none !important; }
          .pulse-line { stroke-dashoffset: 0; }
          .pulse-dot, .floating-cta-ring, .cta-sheen, .hero-heartbeat, .monitor-scan, .nav-heartbeat, .spinner { animation: none !important; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      <TopNav page={page} onHome={onHome} onEnquire={onEnquire} />
      <FloatingCta onEnquire={onEnquire} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {page === 'enquiry' ? <EnquiryPage key="enquiry" onBack={onHome} /> : <HomePage key="home" onEnquire={onEnquire} />}
    </div>
  );
};

export default StudyMBBSIndia;