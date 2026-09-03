import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from '../../util/baseUrl'; // adjust to this file's actual folder depth
import {
  GraduationCap, Building2, Stethoscope, BookOpen, ClipboardCheck, Globe2,
  Languages, Wallet, Award, Briefcase, Users, MapPin, Calendar, Clock,
  FileText, CheckCircle2, HeartPulse, School, ArrowRight, ArrowLeft, Sparkles,
  Plane, ShieldCheck, Landmark,
} from 'lucide-react';

/* =========================================================================
   MBBS IN GEORGIA — page component
   -------------------------------------------------------------------------
   Palette: Deep Burgundy / Burgundy / Antique Gold / Sand / Cream (client-supplied hex,
   see CSS vars). Same structural patterns as the MBBS-in-India page:
   icon-led fact grids instead of plain tables, a "pulse pathway" for the
   admission sequence, and the enquiry form on its own SPA "page" via
   history.pushState, submitting through axios + baseUrl + toast — matching
   ContactUs.jsx's live convention.
   ========================================================================= */

const ICON_POOL = [Stethoscope, GraduationCap, BookOpen, ClipboardCheck, Building2, Globe2, Languages, Wallet, Award, Briefcase, Users, MapPin, Calendar, Clock, FileText, CheckCircle2, HeartPulse, School, Plane, ShieldCheck, Landmark];

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
  ['Country', 'Georgia'],
  ['Degree', 'Medical Doctor (MD)'],
  ['Duration', 'Generally 6 years / 360 ECTS credits'],
  ['Medium of Instruction', 'English available at several universities'],
  ['Clinical Training', 'Included in the medical curriculum'],
  ['Internship / Clerkship', 'Included as part of the program structure'],
  ['Indian Requirement', 'NEET qualification for eligible Indian students'],
  ['Tuition Fees', 'Varies by university; indicative range USD 4,000–8,000/year'],
  ['Major Medical Cities', 'Tbilisi, Batumi and other Georgian cities'],
  ['Indian Licensing', 'Applicable NMC foreign medical graduate requirements'],
];

const whyStudyReasons = [
  { title: 'English-Medium MD Programs', desc: 'Several Georgian universities offer English-taught Medical Doctor programs for international students.', icon: Languages },
  { title: 'European Academic Environment', desc: 'Medical education follows an internationally oriented structure aligned with European higher-education principles.', icon: Globe2 },
  { title: 'Six-Year Medical Program', desc: 'Medical Doctor programs are generally structured as six-year courses carrying 360 ECTS credits.', icon: GraduationCap },
  { title: 'Clinical Exposure', desc: 'Clinical rotations, clerkships and practical training become more prominent during the later years of study.', icon: Stethoscope },
  { title: 'Multiple University Options', desc: 'International students can choose among medical universities in Tbilisi, Batumi and other Georgian cities.', icon: Building2 },
  { title: 'Comparatively Affordable', desc: 'Tuition and living costs can be comparatively manageable versus many Western European medical destinations.', icon: Wallet },
];

const eligibilityData = [
  ['Class 12 / Equivalent', 'Required, with Physics, Chemistry and Biology as applicable'],
  ['Academic Eligibility', 'Must satisfy the academic requirements of the selected university'],
  ['NEET-UG', 'Required for eligible Indian students pursuing a primary medical qualification abroad'],
  ['Passport', 'Valid passport required for international admission'],
  ['Academic Documents', 'Certificates, marksheets and transcripts as requested by the university'],
  ['English Proficiency', 'May be required depending on the university'],
];

const admissionPath = ['Choose University', 'Check Eligibility', 'Prepare Documents', 'Submit Application', 'University Evaluation', 'Receive Acceptance', 'Visa / Residence', 'Travel to Georgia'];

const timelineData = [
  { category: 'Application', period: 'Intake-specific; deadlines vary by university' },
  { category: 'Document Review', period: 'After application submission' },
  { category: 'University Decision', period: 'University-specific timeline' },
  { category: 'Visa / Residence', period: 'After admission and according to current Georgian requirements' },
];

const examPattern = [
  ['Entrance Examination', 'University-specific; not a single national MBBS entrance exam'],
  ['Assessment', 'May include academic document review, interview or additional assessment'],
  ['Eligibility', 'Depends on the selected university and Georgian regulations'],
  ['Indian Requirement', 'NEET qualification applies to eligible Indian students under Indian regulations'],
  ['Medium', 'English available at several medical universities'],
  ['Program Structure', 'Generally 6 years / 360 ECTS credits'],
];

const feesOverview = [
  ['Tuition Fee', 'Indicatively USD 4,000–8,000 per year among listed universities'],
  ['Hostel', 'Indicatively around USD 3,000 per year; varies by provider and university'],
  ['Food & Living', 'Depends on city, accommodation and lifestyle'],
  ['Books & Equipment', 'Additional'],
  ['Visa / Residence', 'Additional, according to current requirements'],
  ['Travel', 'Additional'],
];

const collegesData = [
  { name: 'Avicena Batumi Medical University', location: 'Batumi', fees: '$4,000/yr', seats: '—' },
  { name: 'Batumi Shota Rustaveli State University', location: 'Batumi', fees: '$4,800/yr', seats: '—' },
  { name: 'BAU International University', location: 'Batumi', fees: '$4,800/yr', seats: '—' },
  { name: 'ALTE University', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'European University', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'East European University', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'Geomedi University', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'Georgian National University SEU', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'Grigol Robakidze University', location: 'Tbilisi', fees: '$5,500/yr', seats: '—' },
  { name: 'David Tvildiani Medical University', location: 'Tbilisi', fees: '$6,000/yr', seats: '—' },
  { name: 'University of Georgia', location: 'Tbilisi', fees: '$6,000/yr', seats: '—' },
  { name: 'New Vision University', location: 'Tbilisi', fees: '$7,000/yr', seats: '—' },
  { name: 'Tbilisi State Medical University', location: 'Tbilisi', fees: '$8,000/yr', seats: '—' },
];

const scholarshipData = [
  ['Availability', 'Some Georgian universities offer scholarships, tuition discounts or other financial incentives'],
  ['Basis', 'May include merit, academic performance or university-specific criteria'],
  ['Coverage', 'Depends on the university and scholarship; may cover tuition discounts or other benefits'],
  ['Duration', 'University-specific'],
  ['Eligibility', 'Check the current academic-year terms before relying on any scholarship'],
  ['Renewal', 'May depend on academic performance and university conditions'],
];

const documentsRequired = [
  'Valid passport', '10th-grade certificate and marksheet', '12th-grade certificate and marksheet',
  'Biology, Chemistry and Physics academic records', 'NEET scorecard for eligible Indian students',
  'Passport-size photographs', 'Academic transcripts', 'Medical fitness certificate, where required',
  'English proficiency certificate, if required', 'University-specific application documents',
  'Birth certificate, where required', 'Notarized / translated documents where required',
];

const costOfLivingItems = [
  'Hostel / accommodation', 'Food and groceries', 'Books and medical equipment', 'Transportation',
  'Mobile / internet', 'Personal expenses', 'Health / insurance costs where required', 'Travel between India and Georgia',
];

const georgiaVsIndia = [
  { factor: 'Admission', georgia: 'University-specific admission + Indian NEET requirement where applicable', india: 'NEET-UG + Indian counselling' },
  { factor: 'Duration', georgia: 'Generally 6 years', india: 'Generally 5.5 years including internship' },
  { factor: 'Medium', georgia: 'English available at several universities', india: 'English + local/regional exposure' },
  { factor: 'Cost', georgia: 'Indicatively USD 4,000–8,000 tuition/year among listed universities', india: 'Varies widely by government/private institution' },
  { factor: 'Clinical Training', georgia: 'Included in later stages of the curriculum', india: 'Integrated into MBBS curriculum' },
  { factor: 'Distance', georgia: 'International travel required', india: 'Home country' },
  { factor: 'Licensing in India', georgia: 'Foreign medical graduate requirements apply', india: 'Indian registration pathway' },
];

const finalChecklist = [
  'NEET qualification for eligible Indian students', 'Class 12 PCB eligibility', 'University accreditation / program status',
  'English-medium program confirmation', 'Complete curriculum and 360 ECTS structure', 'Clinical training and affiliated hospitals',
  'Official tuition fee notice', 'Hostel and living expenses', 'Internship / clinical clerkship structure',
  'NMC FMGL compliance', 'Indian licensing pathway', 'Scholarship terms, if applicable',
  'Visa / residence requirements', 'Official university admission deadlines',
];

const whyChooseUs = [
  'Georgia University Shortlisting', 'Eligibility & Document Guidance', 'NMC FMGL Compliance Check', 'Fee & Scholarship Clarity',
  'Application Support', 'University Comparison', 'Admission Assistance', 'Pre-Departure Support',
];

const faqData = [
  { q: 'Is MBBS in Georgia taught in English?', a: 'Yes. Several Georgian universities offer Medical Doctor programs in English for international students.' },
  { q: 'How long is MBBS in Georgia?', a: 'The standard Medical Doctor program generally takes 6 years and is commonly structured around 360 ECTS credits.' },
  { q: 'Is NEET required for MBBS in Georgia?', a: 'For eligible Indian students intending to pursue a primary medical qualification abroad, NEET qualification is required under applicable Indian regulations. NEET is not a Georgian medical entrance examination.' },
  { q: 'What is the cost of MBBS in Georgia?', a: 'Tuition varies by university. The indicative fee table in this page ranges from about USD 4,000 to USD 8,000 per year among the listed universities.' },
  { q: 'Are scholarships available for MBBS in Georgia?', a: 'Some Georgian universities offer merit-based scholarships, tuition discounts or other financial incentives. Availability and conditions vary by university and academic year.' },
  { q: 'Can Indian students practise medicine in India after studying in Georgia?', a: 'Only if the foreign medical qualification, clinical training and other requirements satisfy the applicable NMC regulations and Indian licensing pathway. Completing the degree alone does not automatically grant registration in India.' },
  { q: 'Is WDOMS listing enough for practising medicine in India?', a: 'No. WDOMS listing alone does not guarantee eligibility for medical registration. Students must satisfy the applicable Indian licensing requirements.' },
  { q: 'Can international students study medicine in Georgia?', a: 'Yes. Georgia has several medical universities that accept international students, with admission requirements varying by university and country of origin.' },
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

/* --------------------------- shared bits --------------------------------- */

const SiteBreadcrumbs = ({ onHome, current }) => (
  <div className="text-[13px] tracking-wide text-[var(--ink)]/55 font-medium uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
    <button type="button" onClick={onHome} className="hover:text-[var(--gold)] transition-colors">Home</button>
    &nbsp;/&nbsp;Study Destinations&nbsp;/&nbsp;<span className="text-[var(--gold)]">{current}</span>
  </div>
);

const Eyebrow = ({ children, tone = 'gold' }) => (
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
    <span className="relative z-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] font-semibold text-[13px] md:text-[14px] px-5 py-2.5 transition-transform duration-200 group-hover:translate-x-1" style={{ fontFamily: 'Inter, sans-serif' }}>
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
      className={`floating-cta fixed bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] font-semibold text-[13px] md:text-[14px] pl-5 pr-4 py-3 shadow-[0_10px_30px_-8px_rgba(198,161,91,0.5)] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{ fontFamily: 'Inter, sans-serif' }}>
      <span className="floating-cta-ring" aria-hidden="true" />
      Get free counselling
      <span className="w-6 h-6 rounded-full bg-[var(--deep-navy)]/10 flex items-center justify-center"><ArrowRight size={13} /></span>
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
    <div className="h-[2.5px] w-full bg-[var(--navy)]/12">
      <div className="h-full bg-[var(--gold)] transition-[width] duration-150 ease-out" style={{ width: `${pct}%` }} />
    </div>
  );
};

const TopNav = ({ page, onHome, onEnquire }) => (
  <div className="sticky top-0 z-40 backdrop-blur-md bg-[var(--paper)]/92 border-b border-[var(--navy)]/12">
    <div className="px-[6vw] md:px-[12.5vw] h-16 flex items-center justify-between">
      <button type="button" onClick={onHome} className="flex items-center gap-2.5 group">
        <span className="nav-mark w-8 h-8 rounded-full bg-[var(--deep-navy)] flex items-center justify-center shrink-0">
          <Landmark size={16} color="var(--gold)" />
        </span>
        <span className="font-display text-[16px] font-semibold text-[var(--deep-navy)] group-hover:text-[var(--gold)] transition-colors">MBBS in Georgia</span>
      </button>
      <button type="button" onClick={onEnquire} className="cta-button inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] font-semibold text-[13px] px-5 py-2.5" style={{ fontFamily: 'Inter, sans-serif' }}>
        {page === 'enquiry' ? 'Free counselling' : 'Enquire now'} <ArrowRight size={14} />
      </button>
    </div>
    <ScrollProgress />
  </div>
);

const DefTable = ({ rows, labelHeader = 'Particular', valueHeader = 'Details' }) => (
  <div className="overflow-x-auto rounded-xl border border-[var(--navy)]/14 shadow-[0_1px_0_rgba(84,31,43,0.05)]">
    <table className="w-full border-collapse text-[14px] md:text-[15px]">
      <thead>
        <tr className="bg-[var(--deep-navy)] text-white text-left">
          <th className="px-5 py-3 font-semibold w-2/5" style={{ fontFamily: 'Inter, sans-serif' }}>{labelHeader}</th>
          <th className="px-5 py-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{valueHeader}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={`table-row ${i % 2 === 0 ? 'bg-[var(--card)]' : 'bg-[var(--paper)]'}`}>
            <td className="px-5 py-3 font-semibold text-[var(--deep-navy)] align-top border-t border-[var(--navy)]/10">{row[0]}</td>
            <td className="px-5 py-3 text-[var(--ink)]/85 align-top border-t border-[var(--navy)]/10">{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const IconFactGrid = ({ rows, columns = 2 }) => (
  <div className={`grid grid-cols-1 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
    {rows.map((row, i) => {
      const Icon = ICON_POOL[i % ICON_POOL.length];
      return (
        <div key={i} className="icon-fact hover-card flex items-start gap-4 rounded-xl bg-[var(--card)] border border-[var(--navy)]/12 p-5">
          <span className="w-10 h-10 rounded-lg bg-[var(--sand)]/60 text-[var(--deep-navy)] flex items-center justify-center shrink-0">
            <Icon size={18} />
          </span>
          <div>
            <p className="font-semibold text-[14px] text-[var(--deep-navy)]" style={{ fontFamily: 'Inter, sans-serif' }}>{row[0]}</p>
            <p className="text-[13.5px] text-[var(--ink)]/70 leading-relaxed mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{row[1]}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const GridTable = ({ columns, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-[var(--navy)]/14">
    <table className="w-full border-collapse text-[14px] md:text-[15px]">
      <thead>
        <tr className="bg-[var(--deep-navy)] text-white text-left">
          {columns.map((c) => (
            <th key={c.key} className="px-5 py-3 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={`table-row ${i % 2 === 0 ? 'bg-[var(--card)]' : 'bg-[var(--paper)]'}`}>
            {columns.map((c) => (
              <td key={c.key} className="px-5 py-3 text-[var(--ink)]/85 align-top border-t border-[var(--navy)]/10">
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
    <div ref={ref} className="rounded-2xl border border-[var(--navy)]/25 bg-[var(--deep-navy)] px-4 md:px-8 py-8 overflow-hidden relative">
      <span className="monitor-scan" aria-hidden="true" />
      <p className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[var(--sand)] mb-4 relative z-10" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
      <div className="relative z-10">
        <svg viewBox={`0 -20 ${w} 100`} className="w-full h-14 md:h-20" preserveAspectRatio="none" aria-hidden="true">
          <path d={path} fill="none" stroke="var(--gold)" strokeWidth="2.5" className={`pulse-line ${inView ? 'pulse-line-run' : ''}`} />
        </svg>
        <div className="flex justify-between -mt-2">
          {steps.map((s, i) => (
            <div key={i} className="step-marker flex flex-col items-center text-center px-1" style={{ width: `${100 / steps.length}%`, transitionDelay: inView ? `${300 + i * 120}ms` : '0ms', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(8px)' }}>
              <div className="w-7 h-7 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] text-[12px] font-bold flex items-center justify-center mb-2 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{i + 1}</div>
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
        <CheckCircle2 size={17} className="mt-0.5 shrink-0 checklist-mark" color="var(--gold)" />
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
        <div key={i} className="hover-card rounded-2xl bg-[var(--card)] border border-[var(--navy)]/12 p-6 flex flex-col gap-2">
          <span className="w-10 h-10 rounded-full bg-[var(--gold)]/14 text-[var(--gold)] flex items-center justify-center">
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
  <div className="border-b border-[var(--navy)]/12">
    <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-4 text-left" aria-expanded={open}>
      <span className="font-semibold text-[15px] text-[var(--deep-navy)]" style={{ fontFamily: 'Inter, sans-serif' }}>{q}</span>
      <span className={`shrink-0 w-7 h-7 rounded-full border border-[var(--navy)]/25 flex items-center justify-center text-[var(--deep-navy)] transition-transform duration-300 ${open ? 'rotate-45 !border-[var(--gold)] !text-[var(--gold)]' : ''}`} aria-hidden="true">+</span>
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
  ['NMC', 'Pathway checked'],
];

const EnquiryPage = ({ onBack }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', neetStatus: '' });
  const [status, setStatus] = useState('idle');
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus('submitting');
    try {
      const response = await axios.post(`${baseUrl}/api/enquiry/mbbs-in-georgia`, form);
      if (response.data.success) {
        toast.success('Thank you for your enquiry! Our counsellor will call you shortly.');
        setStatus('done');
      }
    } catch (error) {
      console.error('Georgia enquiry error:', error);
      toast.error(error.response?.data?.message || 'Failed to submit your enquiry');
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
          <div className="rounded-3xl bg-[var(--deep-navy)] px-7 md:px-9 py-9 md:py-11 relative overflow-hidden">
            <span className="monitor-scan" aria-hidden="true" />
            <div className="relative z-10">
              <Eyebrow tone="sand">Free Counselling</Eyebrow>
              <h1 className="font-display text-[26px] md:text-[32px] font-semibold text-white mt-4 leading-[1.2]">Close to home. Clear on the rules.</h1>
              <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed mt-3 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell us your NEET status — a counsellor checks real, NMC-compliant college options in Georgia and calls you back.
              </p>
              <svg viewBox="0 0 400 60" className="w-full h-12 mt-8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 30 H150 L162 8 L176 52 L188 30 H400" fill="none" stroke="var(--gold)" strokeWidth="2" className="pulse-line pulse-line-run" />
              </svg>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {trustPoints.map(([num, label]) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-display text-[20px] md:text-[24px] font-semibold text-[var(--sand)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{num}</span>
                    <span className="text-[11px] text-white/55 leading-snug mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="button" onClick={onBack} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--deep-navy)] hover:text-[var(--gold)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
            <ArrowLeft size={15} /> Back to MBBS in Georgia overview
          </button>
        </div>

        <div className="page-enter order-1 lg:order-2" style={{ animationDelay: '80ms' }}>
          {status === 'done' ? (
            <div className="rounded-2xl bg-[var(--deep-navy)] text-white px-6 py-14 text-center flex flex-col items-center gap-3">
              <span className="w-14 h-14 rounded-full bg-[var(--sand)]/20 border-2 border-[var(--sand)] flex items-center justify-center text-[var(--sand)]"><CheckCircle2 size={26} /></span>
              <p className="font-display text-[22px] font-semibold">Thank you, {form.name.split(' ')[0]}.</p>
              <p className="text-white/75 text-[14px] max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Our counselling team will call you at {form.phone} within 24 hours.</p>
              <button type="button" onClick={onBack} className="cta-button mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] font-semibold text-[13px] px-6 py-2.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                <ArrowLeft size={14} /> Back to the overview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-[var(--card)] border border-[var(--gold)]/35 shadow-[0_16px_40px_-16px_rgba(84,31,43,0.25)] p-6 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h3 className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--ink)]">Get Free MBBS-in-Georgia Counselling</h3>
                  <p className="text-[13px] text-[var(--ink)]/55 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Takes under a minute.</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[var(--deep-navy)] text-[var(--sand)] shrink-0"><Landmark size={20} /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Full name
                  <input required value={form.name} onChange={update('name')} placeholder="e.g. Rohan Verma" className="form-input rounded-lg border border-[var(--navy)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Phone number
                  <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 98765 43210" className="form-input rounded-lg border border-[var(--navy)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Email
                  <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className="form-input rounded-lg border border-[var(--navy)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px] font-medium text-[var(--ink)]/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  NEET Status
                  <select value={form.neetStatus} onChange={update('neetStatus')} className="form-input rounded-lg border border-[var(--navy)]/20 bg-white px-3.5 py-2.5 text-[14px] text-[var(--ink)] outline-none">
                    <option value="">Select NEET status</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Appearing">Appearing</option>
                    <option value="Not Qualified">Not Qualified</option>
                  </select>
                </label>
              </div>

              <button type="submit" disabled={status === 'submitting'} className="cta-button mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] disabled:opacity-60 text-[var(--deep-navy)] font-semibold text-[14px] px-7 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
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
  { icon: Building2, stat: '13+', label: 'Medical university options listed' },
  { icon: Clock, stat: '6 yrs', label: 'Medical Doctor program' },
  { icon: Languages, stat: 'English', label: 'Medium of instruction' },
];

const HomePage = ({ onEnquire }) => (
  <div className="page-enter pb-4">
    <div className="px-[6vw] md:px-[12.5vw] pt-8 md:pt-10">
      <SiteBreadcrumbs onHome={() => {}} current="MBBS in Georgia" />
    </div>

    <div className="relative">
      <div className="hero-ambient" aria-hidden="true">
        <svg viewBox="0 0 1200 200" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 100 H420 L440 40 L468 165 L492 70 L512 100 H1200" fill="none" stroke="var(--gold)" strokeWidth="1.6" className="hero-heartbeat" />
        </svg>
      </div>

      <div className="px-[6vw] md:px-[12.5vw] mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative">
        <Reveal>
          <div className="flex flex-col gap-5">
            <Eyebrow>Georgia 2026/27 · English MD Programs</Eyebrow>
            <h1 className="font-display text-[34px] md:text-[50px] leading-[1.08] font-semibold text-[var(--ink)]">
              A European medical education —<br />
              your <span className="text-[var(--gold)] hero-underline">MBBS</span> in Georgia, done right.
            </h1>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-[var(--ink)]/75 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              English-taught Medical Doctor programs, a European academic environment, modern university infrastructure and comparatively affordable tuition — with guidance from eligibility through the NMC pathway for Indian students.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button type="button" onClick={onEnquire} className="cta-button inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--deep-navy)] font-semibold text-[14px] px-6 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get free counselling <ArrowRight size={16} />
              </button>
              <a href="#top-colleges" className="cta-button inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/30 text-[var(--deep-navy)] font-semibold text-[14px] px-6 py-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                See top colleges
              </a>
            </div>
            <div className="flex gap-8 mt-4">
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-navy)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>$4–8k</span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[9rem]" style={{ fontFamily: 'Inter, sans-serif' }}>indicative annual tuition range</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-navy)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>6 yrs</span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[8rem]" style={{ fontFamily: 'Inter, sans-serif' }}>Medical Doctor program</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[22px] md:text-[26px] font-semibold text-[var(--deep-navy)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>360</span>
                <span className="text-[12px] text-[var(--ink)]/60 max-w-[8rem]" style={{ fontFamily: 'Inter, sans-serif' }}>ECTS credits</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 hero-tile rounded-2xl bg-[var(--deep-navy)] p-6 flex flex-col justify-between min-h-[130px] relative overflow-hidden">
              <span className="monitor-scan" aria-hidden="true" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="w-11 h-11 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center"><Landmark size={22} /></span>
                <Sparkles size={16} color="var(--sand)" />
              </div>
              <p className="relative z-10 text-white font-display text-[16px] font-semibold mt-3">English MD route with an NMC-focused pathway</p>
            </div>
            {heroBento.map(({ icon: Icon, stat, label }, i) => (
              <div key={label} className={`hero-tile hover-card rounded-2xl bg-[var(--card)] border border-[var(--navy)]/12 p-5 flex flex-col gap-2 ${i === 2 ? 'col-span-2' : ''}`}>
                <span className="w-9 h-9 rounded-lg bg-[var(--sand)]/60 text-[var(--deep-navy)] flex items-center justify-center"><Icon size={17} /></span>
                <span className="font-display text-[20px] font-semibold text-[var(--deep-navy)]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{stat}</span>
                <span className="text-[12px] text-[var(--ink)]/60" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-12 md:mt-16">
      <Reveal><CtaBanner heading="Free MBBS-in-Georgia counselling — a call within 24 hrs" sub="Share your NEET score; get a real, NMC-compliant shortlist back." buttonLabel="Start my enquiry" onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Why Georgia" title="Why Study MBBS in Georgia?" /></Reveal>
      <Reveal delay={100}><CardGrid items={whyStudyReasons} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="At a Glance" title="MBBS in Georgia — Quick Overview" /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={quickOverview} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Eligibility" title="MBBS in Georgia Eligibility for Indian Students" sub="Indian students should satisfy both the Georgia admission requirements and the requirements relevant to practising medicine in India." /></Reveal>
      <Reveal delay={100}><IconFactGrid rows={eligibilityData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Admission Route" title="Georgia Medical University Admission Pathway" sub="NEET-UG qualification is an important part of the foreign medical education pathway for Indian applicants, but each university has its own admission process, while Indian students must also satisfy applicable Indian regulations." /></Reveal>
      <PulsePathway steps={admissionPath} label="Foreign-Candidate Admission Pathway" />
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <SectionHeading eyebrow="Timeline" title="Foreign Candidate Application Timeline" />
      <Reveal delay={100}><GridTable columns={[{ key: 'category', label: 'Foreign Candidate Category' }, { key: 'period', label: 'Application Period' }]} rows={timelineData} /></Reveal>
      <p className="text-[12px] text-[var(--ink)]/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>Application timelines and requirements vary by university and intake. Always confirm the latest official university notice before applying.</p>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Admission" title="University Admission & Assessment" /></Reveal>
      <Reveal delay={100}><DefTable rows={examPattern} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Not sure which Georgia university is right for you?" sub="Get a free, personalised university shortlist based on your profile." onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Budgeting" title="MBBS Fees in Georgia" sub="Tuition varies by university. The indicative fee table reflects the universities and figures provided in the source material; confirm the latest official fee notice before payment." /></Reveal>
      <Reveal delay={100}><DefTable rows={feesOverview} /></Reveal>
    </div>

    <div id="top-colleges" className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Institutions" title="Top Medical Colleges in Georgia" sub="English medium available · generally 6-year Medical Doctor program. Fees are indicative — always confirm against the current university notice." /></Reveal>
      <Reveal delay={100}><GridTable columns={[{ key: 'name', label: 'Medical College' }, { key: 'location', label: 'Location' }, { key: 'fees', label: 'Approx. Fees', mono: true }, { key: 'seats', label: 'Foreign Seats', mono: true }]} rows={collegesData} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Get a personalised fee estimate for your target colleges" sub="Know your real budget, including hostel and living costs, before applying." onEnquire={onEnquire} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Funding" title="Scholarships & Tuition Discounts for MBBS in Georgia" sub="Some Georgian universities offer scholarships, tuition discounts or other financial incentives. Availability and eligibility vary by university and academic year." /></Reveal>
      <Reveal delay={100}><DefTable rows={scholarshipData} labelHeader="University Scholarship / Tuition Discounts" valueHeader="Detail" /></Reveal>
      <p className="text-[12px] text-[var(--ink)]/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>Scholarship policies can change between admission cycles. Confirm the amount, duration, eligibility and renewal conditions directly with the university.</p>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Returning to India" title="Clinical Training, FMGE & NMC Compliance" sub="Under the NMC's Foreign Medical Graduate Licentiate framework, the program must satisfy specified requirements before a graduate can register in India." /></Reveal>
      <Reveal delay={100}>
        <IconFactGrid rows={[
          ['Program Duration', 'Generally 6 years / 360 ECTS credits'],
          ['Clinical Training', 'Clinical rotations, clerkships and practical training are included in the curriculum'],
          ['Medium', 'English available at several universities'],
          ['Program Status', 'Verify the current authorization/accreditation status of the specific medical program'],
          ['Local Registration', 'Check the applicable Georgian medical registration requirements'],
          ['Indian Licensing', 'Follow the NMC and Government of India requirements applicable at the time of graduation'],
        ]} />
      </Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Paperwork" title="Documents Required for MBBS Admission in Georgia" /></Reveal>
      <Reveal delay={100}><Checklist items={documentsRequired} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Budgeting" title="Cost of Living in Georgia" sub="Costs vary by city, accommodation, lifestyle and personal spending. Tbilisi and Batumi are among the major student destinations." /></Reveal>
      <Reveal delay={100}><Checklist items={costOfLivingItems} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Comparison" title="MBBS in Georgia vs MBBS in India" /></Reveal>
      <Reveal delay={100}>
        <GridTable
          columns={[{ key: 'factor', label: 'Factor' }, { key: 'georgia', label: 'Georgia' }, { key: 'india', label: 'India' }]}
          rows={georgiaVsIndia}
        />
      </Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal><SectionHeading eyebrow="Before You Pay" title="Final Checklist for Indian Students" /></Reveal>
      <Reveal delay={100}><Checklist items={finalChecklist} columns={3} /></Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-24">
      <Reveal>
        <div className="rounded-3xl bg-[var(--deep-navy)] px-6 md:px-14 py-12 md:py-16 relative overflow-hidden">
          <span className="monitor-scan" aria-hidden="true" />
          <div className="relative z-10">
            <Eyebrow tone="sand">Counselling Support</Eyebrow>
            <h2 className="font-display text-[26px] md:text-[36px] font-semibold text-white mt-3 max-w-2xl">Why Choose Us for MBBS Admission in Georgia?</h2>
            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-2xl mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>Fee, college status, foreign-seat category, internship structure and NMC compliance all matter more than an advertised low fee or a promise of easy admission.</p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3 mt-8">
              {whyChooseUs.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[14px] text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>

    <div className="px-[6vw] md:px-[12.5vw] mt-16 md:mt-20">
      <Reveal><CtaBanner heading="Start your MBBS-in-Georgia journey" sub="One free call covers eligibility, college shortlisting and the NMC compliance check." buttonLabel="Book my free call" onEnquire={onEnquire} /></Reveal>
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
        <div className="rounded-2xl bg-[var(--card)] border border-[var(--navy)]/12 px-6 md:px-8">
          {faqData.map((f, i) => (<FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />))}
        </div>
      </Reveal>
    </div>
  );
};

/* --------------------------------- page shell ---------------------------------- */

const MbbsInGeorgia = () => {
  const [page, goTo] = useSimplePage();

  useEffect(() => {
    document.title = page === 'enquiry' ? 'Free MBBS-in-Georgia Counselling | MBBS in Georgia 2026-27' : 'MBBS in Georgia for Indian Students 2026–27: Fees, Admission, Universities & NMC Pathway';
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    };
    setMeta('description', 'MBBS in Georgia for Indian students 2026–27: university admission process, NEET-UG requirement, fees, medical universities, scholarships, documents and the NMC licensing pathway for returning to India.');
    setMeta('keywords', 'MBBS in Georgia, MBBS in Georgia 2026, MBBS in Georgia for Indian students, MBBS Georgia fees, Georgia medical universities, NEET UG Georgia');
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
  --deep-navy: #30463E;
  --navy: #30463E;
  --gold: #E76F51;
  --sand: #9DAF9A;
}
        html { scroll-behavior: smooth; }
        .font-display { font-family: 'Fraunces', serif; }

        .eyebrow-gold { color: var(--gold); background: rgba(198,161,91,0.14); border: 1px solid rgba(198,161,91,0.35); }
        .eyebrow-sand { color: var(--sand); background: rgba(232,222,208,0.16); border: 1px solid rgba(232,222,208,0.4); }

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
        .hero-underline { text-decoration: underline; text-decoration-color: rgba(198,161,91,0.35); text-decoration-thickness: 3px; text-underline-offset: 6px; }

        .hero-tile { transition: transform 0.3s ease, box-shadow 0.3s ease; animation: tile-float 5s ease-in-out infinite; }
        .hero-tile:nth-child(2) { animation-delay: 0.3s; }
        .hero-tile:nth-child(3) { animation-delay: 0.6s; }
        .hero-tile:nth-child(4) { animation-delay: 0.9s; }
        @keyframes tile-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .hero-tile:hover { transform: translateY(-6px) !important; box-shadow: 0 14px 28px -16px rgba(84,31,43,0.35); }

        .monitor-scan {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(115deg, transparent 30%, rgba(232,222,208,0.12) 48%, transparent 66%);
          background-size: 220% 100%; background-position: 130% 0;
          animation: scan-sweep 6s ease-in-out infinite;
        }
        @keyframes scan-sweep { 0%,15% { background-position: 130% 0; } 55%,100% { background-position: -30% 0; } }

        .pulse-dot { box-shadow: 0 0 0 0 currentColor; animation: dot-pulse 2.4s infinite; }
        @keyframes dot-pulse { 0% { box-shadow: 0 0 0 0 rgba(198,161,91,0.4); } 70% { box-shadow: 0 0 0 6px rgba(198,161,91,0); } 100% { box-shadow: 0 0 0 0 rgba(198,161,91,0); } }

        .checklist-mark { transition: transform 0.2s ease; }
        li:hover .checklist-mark { transform: scale(1.15); }
        .icon-fact { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .icon-fact:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -16px rgba(84,31,43,0.3); }

        .cta-banner { background: linear-gradient(135deg, var(--deep-navy) 0%, #3D1620 100%); transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cta-banner:hover { transform: translateY(-2px); box-shadow: 0 16px 34px -14px rgba(84,31,43,0.5); }
        .cta-banner:active { transform: translateY(0); }
        .cta-sheen { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(100deg, transparent 20%, rgba(198,161,91,0.2) 45%, transparent 70%); background-size: 200% 100%; background-position: 120% 0; transition: background-position 0.9s ease; }
        .cta-banner:hover .cta-sheen { background-position: -20% 0; }

        .floating-cta-ring { position: absolute; inset: -6px; border-radius: 9999px; border: 1.5px solid rgba(198,161,91,0.45); animation: ring-pulse 2.6s ease-out infinite; }
        @keyframes ring-pulse { 0% { transform: scale(0.9); opacity: 0.8; } 80% { transform: scale(1.25); opacity: 0; } 100% { opacity: 0; } }

        .hover-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .hover-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -18px rgba(84,31,43,0.35); border-color: rgba(84,31,43,0.3); }
        .table-row { transition: background-color 0.2s ease; }
        .table-row:hover { background-color: rgba(232,222,208,0.35) !important; }
        .cta-button { transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -10px rgba(198,161,91,0.5); }
        .cta-button:active { transform: translateY(0); }
        .form-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .form-input:focus { border-color: var(--deep-navy); box-shadow: 0 0 0 3px rgba(84,31,43,0.12); }
        .nav-mark { transition: transform 0.2s ease; }
        button:hover .nav-mark { transform: scale(1.08); }

        .spinner { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(84,31,43,0.3); border-top-color: var(--deep-navy); animation: spin 0.7s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .step-marker, .page-enter, .hero-tile { transition: none !important; animation: none !important; opacity: 1 !important; transform: none !important; }
          .pulse-line { stroke-dashoffset: 0; }
          .pulse-dot, .floating-cta-ring, .cta-sheen, .hero-heartbeat, .monitor-scan, .spinner { animation: none !important; }
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

export default MbbsInGeorgia;