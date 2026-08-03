export const MEMBER = {
  name: "DISHA MUKHERJEE",
  id: "SIL-2026-000567",
  term: "5-YEAR",
  validity: "60 MONTHS",
};

export const FEE = "₹2,499";

export const studentTypes = [
  {
    key: "creative",
    label: "CREATIVE",
    relevant: ["Fine Arts", "Design", "Animation", "Media", "Visual Communication"],
    journey: [
      ["LEARN", "Creative fundamentals and Accelerator learning"],
      ["BUILD", "Artwork, design projects, digital work"],
      ["SHOWCASE", "Creative portfolio, competitions and achievements"],
      ["DISCOVER", "Projects, studios, competitions and opportunities"],
    ],
    portfolio: [
      "Artwork",
      "Graphic Design",
      "UI/UX",
      "3D",
      "Game Assets",
      "Digital Painting",
      "Video",
      "Illustration",
    ],
  },
  {
    key: "technical",
    label: "TECHNICAL",
    relevant: ["B.Tech", "BCA", "MCA", "Engineering", "Computer Science"],
    journey: [
      ["LEARN", "Selected technical masterclasses"],
      ["BUILD", "Apps, websites, databases, game projects"],
      ["SHOWCASE", "Technical projects, hackathons and achievements"],
      ["DISCOVER", "Internships, challenges and entry-level opportunities"],
    ],
    portfolio: ["Code", "Apps", "Websites", "Databases", "Games", "Hackathons"],
  },
  {
    key: "general",
    label: "GENERAL COLLEGE",
    relevant: ["BA", "B.Com", "BBA", "Science", "Humanities"],
    journey: [
      ["LEARN", "Selected emerging skill sessions"],
      ["BUILD", "Research, presentations, case studies and ideas"],
      ["SHOWCASE", "Academic and extracurricular achievements"],
      ["DISCOVER", "Cross-disciplinary competitions and opportunities"],
    ],
    portfolio: ["Research", "Presentations", "Case Studies", "Business Ideas", "Projects"],
  },
  {
    key: "school",
    label: "SCHOOL",
    relevant: ["Eligible students of participating private / government schools"],
    journey: [
      ["EXPLORE", "New subjects and emerging interests"],
      ["BUILD", "Early projects and ideas"],
      ["PARTICIPATE", "Competitions and challenges"],
      ["SHOWCASE", "Certificates and achievements"],
    ],
    portfolio: ["Projects", "Competitions", "Certificates", "Achievements"],
  },
] as const;

export type StudentTypeKey = (typeof studentTypes)[number]["key"];

export const creativeTopics = [
  "FUNDAMENTALS OF GRAPHIC DESIGNING",
  "UI / UX DESIGNING",
  "3D ART DESIGN",
  "DIGITAL PAINTING",
  "GAME ASSET DEVELOPMENT",
  "ILLUSTRATIONS",
  "VIDEO EDITING",
  "BRANDING",
  "VISUAL STORYTELLING",
  "STORYBOARDING",
];

export const technicalOptions = [
  "DSA Concepts & Masterclass",
  "Database & SQL Learning",
  "AI & ML Masterclass for Beginners",
  "Language Learning Masterclass — HTML, CSS, JavaScript",
  "Language Learning Masterclass — C & C#",
  "OOP Concepts Masterclass",
  "Game Development Masterclass",
  "Game Testing & Ideation",
];

export const acceleratorPreferences = [
  "Creative Accelerator Programme",
  "DSA Concepts & Masterclass",
  "Database & SQL Learning",
  "AI & ML Masterclass for Beginners",
  "HTML, CSS, JavaScript",
  "C & C#",
  "OOP Concepts Masterclass",
  "Game Development Masterclass",
  "Game Testing & Ideation",
  "Decide Later",
];

export const comparisonRows: [string, string][] = [
  ["Academic syllabus", "Academic syllabus + selected learning beyond it"],
  ["Assignments", "Projects + challenges + participation"],
  ["Certificates stored separately", "Centralised achievement record"],
  ["Portfolio often created late", "Portfolio can start growing earlier"],
  ["Activities scattered", "One QR-linked Scope profile"],
  ["Networking mainly within institution", "Cross-campus ecosystem exposure"],
  ["Competitions discovered individually", "Eligible Scope competitions / challenges"],
  ["Opportunity search often begins late", "Earlier opportunity discovery"],
  ["Learning limited largely to curriculum", "One eligible Accelerator during Year 1"],
  ["Student ID shows institution", "Scope identity showcases participation beyond institution"],
  [
    "Personal network benefits mainly yourself",
    "Help others discover eligible learning opportunities and receive applicable cashback",
  ],
];

export const partners = [
  {
    tag: "CREATIVE",
    name: "HUION",
    role: "Creative Partner",
    url: "https://www.huion.com/",
  },
  {
    tag: "INDUSTRY",
    name: "IGDC",
    role: "Industry Ecosystem Partner",
    url: "https://indiagdc.com/",
  },
  {
    tag: "TRAINING",
    name: "RED APPLE LEARNING",
    role: "Training Partner",
    url: "https://redapplelearning.in/",
  },
  {
    tag: "TECHNOLOGY",
    name: "RED APPLE TECHNOLOGIES",
    role: "Technology Partner",
    url: "https://redappletech.com/",
  },
];

export const faqs: [string, string][] = [
  [
    "Who is eligible for the Scope Empowerment Card?",
    "Only eligible students enlisted with Scope Innovation Lab through participating institutions / active Scope Innovation Lab Chapters.",
  ],
  [
    "What exactly do I receive for ₹2,499?",
    "A 5-year / 60-month Scope Empowerment Card membership, any ONE eligible Scope Accelerator Programme during the first year, a growing Scope digital profile, participation access to eligible Scope activities subject to availability, and the Friends & Family cashback benefit.",
  ],
  [
    "How long is the membership valid?",
    "5 years — 60 months from activation. Renewable after 5 years subject to prevailing renewal terms.",
  ],
  [
    "Which Scope Accelerator Programme can I choose?",
    "Any ONE eligible programme — the Creative Scope Accelerator pathway or one listed technical pathway — during Year 1. Availability, delivery mode, cohort size, schedule, duration and eligibility may vary by Scope Chapter.",
  ],
  [
    "What happens after Year 1?",
    "Your membership continues for the remaining term. You may continue participating in eligible Scope activities and keep building your profile. The included Accelerator applies to the first year only.",
  ],
  [
    "What is the Scope Digital Portfolio?",
    "One QR-linked student profile where your projects, skills, certificates, competitions and achievements are collected in a single place instead of being scattered.",
  ],
  [
    "Does Scope guarantee internships or jobs?",
    "No. Scope supports discovery of eligible opportunities. Participation and outcomes remain subject to eligibility, availability and respective terms.",
  ],
  [
    "How does Friends & Family Cashback work?",
    "If you help someone discover a suitable Red Apple Learning programme and they successfully enrol, applicable cashback may range from ₹1,000 to ₹30,000 depending on programme, campaign, successful enrolment, payment realisation and prevailing terms.",
  ],
];

export type ScopeApplication = {
  applicationId: string;
  fullName: string;
  phone: string;
  email: string;
  batchId: string;
  utr: string;
  transactionId: string;
  studentType: string;
  acceleratorPreference: string;
  paymentAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  applicationStatus: string;
  status: string;
  submittedAt: string;
};

export const STORAGE_KEY = "scope_empowerment_applications";

export function loadApplications(): ScopeApplication[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveApplication(app: ScopeApplication) {
  const all = loadApplications();
  all.push(app);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function newApplicationId() {
  const year = new Date().getFullYear();
  const n = Math.floor(1000 + Math.random() * 9000);
  return `SIL-APP-${year}-${n}`;
}
