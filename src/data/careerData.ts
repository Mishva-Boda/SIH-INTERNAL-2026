export interface DetailedCareer {
  id: string;
  title: string;
  category: string; // e.g. "Engineering & Tech", "Healthcare & Medical", "Finance & Commerce", "Law & Humanities"
  streamCompatibility: ('Science' | 'Commerce' | 'Arts')[];
  subStreamCompatibility?: ('PCM' | 'PCB' | 'PCMB' | 'Commerce' | 'Arts')[];
  matchScore: number;
  whyRecommended: string[];
  salaryRange: string;
  avgPackage: string;
  marketDemand: 'Very High' | 'High' | 'Moderate';
  marketGrowth: string;
  requiredEducation: string;
  relevantExams: string[];
  coreSkills: string[];
  description: string;
  roadmapTimeline: { stage: string; desc: string }[];
}

export const detailedCareersData: DetailedCareer[] = [
  // 🔬 SCIENCE (PCM) CAREERS
  {
    id: "ai-ml-engineer",
    title: "AI & Machine Learning Engineer",
    category: "Engineering & Tech",
    streamCompatibility: ["Science"],
    subStreamCompatibility: ["PCM", "PCMB"],
    matchScore: 96,
    whyRecommended: [
      "✓ Strong Mathematics & Calculus aptitude score",
      "✓ High alignment with Python & Logic skills",
      "✓ Science (PCM) academic background alignment",
      "✓ 32% annual market growth in Indian technology sector"
    ],
    salaryRange: "₹8.5L - ₹36.0L / year",
    avgPackage: "₹18.5 LPA",
    marketDemand: "Very High",
    marketGrowth: "+32% Annual CAGR",
    requiredEducation: "B.Tech in Computer Science, AI, or Data Science",
    relevantExams: ["JEE Main", "JEE Advanced", "BITSAT", "GUJCET", "MHT-CET"],
    coreSkills: ["Python & Logic", "Calculus & Linear Algebra", "Machine Learning Frameworks", "Data Structures"],
    description: "Design autonomous neural networks, predictive LLM models, and AI algorithms for next-gen technology systems.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Master Calculus, Physics vectors, and Python programming fundamentals." },
      { stage: "Undergraduate (B.Tech)", desc: "Clear JEE/BITSAT, specialize in Computer Science & Artificial Intelligence." },
      { stage: "Industry & Projects", desc: "Build Kaggle ML models, complete AI internships, and publish research." }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist & Analytics Specialist",
    category: "Engineering & Tech",
    streamCompatibility: ["Science"],
    subStreamCompatibility: ["PCM", "PCMB"],
    matchScore: 94,
    whyRecommended: [
      "✓ Strong Analytical & Problem Solving aptitude",
      "✓ High proficiency in Mathematics & Statistics",
      "✓ Science (PCM) domain compatibility",
      "✓ Exponential demand across enterprise tech & fintech"
    ],
    salaryRange: "₹7.5L - ₹28.0L / year",
    avgPackage: "₹15.2 LPA",
    marketDemand: "Very High",
    marketGrowth: "+28% Annual CAGR",
    requiredEducation: "B.Tech / B.Sc Statistics or Data Science",
    relevantExams: ["JEE Main", "CUET Science", "BITSAT"],
    coreSkills: ["Statistics & Probability", "Python & SQL", "Data Visualization (Matplotlib)", "Feature Engineering"],
    description: "Extract actionable business intelligence from complex multi-vector datasets using advanced statistical modeling.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Focus on Probability, Statistics, and Python basics." },
      { stage: "UG Degree", desc: "Complete B.Tech CS or B.Sc Statistics with Applied Data Analytics." },
      { stage: "Career Entry", desc: "Join tech firms as Data Analyst or Associate Data Scientist." }
    ]
  },
  {
    id: "robotics-engineer",
    title: "Robotics & Automation Engineer",
    category: "Engineering & Tech",
    streamCompatibility: ["Science"],
    subStreamCompatibility: ["PCM", "PCMB"],
    matchScore: 91,
    whyRecommended: [
      "✓ High Physics Mechanics & Electromagnetism score",
      "✓ PCM technical aptitude fit",
      "✓ Growing demand in EV & smart manufacturing"
    ],
    salaryRange: "₹6.5L - ₹24.0L / year",
    avgPackage: "₹12.8 LPA",
    marketDemand: "High",
    marketGrowth: "+24% Annual CAGR",
    requiredEducation: "B.Tech in Robotics, Mechatronics, or Electrical",
    relevantExams: ["JEE Main", "JEE Advanced", "MHT-CET"],
    coreSkills: ["Embedded Systems (C/C++)", "CAD & Kinematics", "Microcontrollers", "Control Theory"],
    description: "Build intelligent robotic arms, autonomous vehicles, and automated manufacturing systems.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Master Mechanics, Rotational Motion, and Arduino basics." },
      { stage: "UG Degree", desc: "B.Tech Mechatronics or Robotics Engineering." }
    ]
  },

  // 🧬 SCIENCE (PCB) CAREERS
  {
    id: "mbbs-physician",
    title: "MBBS Physician & Specialist Surgeon",
    category: "Healthcare & Medical",
    streamCompatibility: ["Science"],
    subStreamCompatibility: ["PCB", "PCMB"],
    matchScore: 95,
    whyRecommended: [
      "✓ Exceptional Biology & Organic Chemistry score",
      "✓ Science (PCB) medical stream compatibility",
      "✓ High clinical aptitude & social service dedication",
      "✓ Evergreen high demand in Indian healthcare"
    ],
    salaryRange: "₹9.0L - ₹45.0L / year",
    avgPackage: "₹18.0 LPA (Clinical)",
    marketDemand: "Very High",
    marketGrowth: "+20% Annual CAGR",
    requiredEducation: "MBBS (5.5 Years) followed by MD/MS Specialization",
    relevantExams: ["NEET UG", "NEET PG", "INICET"],
    coreSkills: ["Human Anatomy & Physiology", "Clinical Diagnosis", "Pharmacology", "Emergency Medicine"],
    description: "Diagnose diseases, treat patients, perform surgeries, and lead clinical healthcare teams across hospitals.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Master Biology (NCERT), Organic Chemistry, and Physics for NEET UG." },
      { stage: "MBBS Degree", desc: "Complete 4.5 years academic course + 1 year compulsory internship." },
      { stage: "MD/MS Specialization", desc: "Clear NEET PG for MD/MS specialization in Cardiology, Surgery, etc." }
    ]
  },
  {
    id: "biotechnology-researcher",
    title: "Biotechnology & Genetic Researcher",
    category: "Healthcare & Medical",
    streamCompatibility: ["Science"],
    subStreamCompatibility: ["PCB", "PCMB"],
    matchScore: 92,
    whyRecommended: [
      "✓ Strong Genetics & Molecular Biology interest",
      "✓ Science (PCB/PCMB) research compatibility",
      "✓ High growth in pharma R&D and genomic sequencing"
    ],
    salaryRange: "₹6.0L - ₹22.0L / year",
    avgPackage: "₹11.5 LPA",
    marketDemand: "High",
    marketGrowth: "+22% Annual CAGR",
    requiredEducation: "B.Tech / B.Sc in Biotechnology or Genetics",
    relevantExams: ["NEET UG", "CUET Science", "GAT-B"],
    coreSkills: ["Genomics & DNA Sequencing", "CRISPR Tech", "Bioinformatics", "Microbiology"],
    description: "Develop new vaccines, gene therapies, bio-pharmaceuticals, and sustainable bio-products.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Focus on Genetics, Biotechnology, and Organic Chemistry." },
      { stage: "UG Degree", desc: "B.Tech / B.Sc Biotechnology." }
    ]
  },

  // 💼 COMMERCE CAREERS
  {
    id: "chartered-accountant",
    title: "Chartered Accountant (CA)",
    category: "Finance & Commerce",
    streamCompatibility: ["Commerce"],
    subStreamCompatibility: ["Commerce"],
    matchScore: 96,
    whyRecommended: [
      "✓ High aptitude in Accounting & Financial Logic",
      "✓ Commerce stream core domain alignment",
      "✓ Mandatory requirement for corporate audit & tax governance",
      "✓ Ranked No.1 Commerce career in India"
    ],
    salaryRange: "₹8.0L - ₹32.0L / year",
    avgPackage: "₹14.5 LPA",
    marketDemand: "Very High",
    marketGrowth: "+18% Annual CAGR",
    requiredEducation: "ICAI Chartered Accountancy (Foundation, Intermediate, Articleship, Final)",
    relevantExams: ["CA Foundation", "CA Intermediate", "CA Final"],
    coreSkills: ["Financial Accounting", "Corporate Taxation & GST", "Auditing Standards", "Corporate Law"],
    description: "Manage corporate financial auditing, taxation strategy, regulatory compliance, and financial management.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Master Accountancy, Business Studies, and Economics." },
      { stage: "CA Foundation & Inter", desc: "Clear CA Foundation after 12th, followed by CA Intermediate." },
      { stage: "Articleship & Final", desc: "Complete 2 years practical articleship under a practicing CA and pass CA Final." }
    ]
  },
  {
    id: "investment-banker",
    title: "Investment Banker & Financial Analyst",
    category: "Finance & Commerce",
    streamCompatibility: ["Commerce"],
    subStreamCompatibility: ["Commerce"],
    matchScore: 94,
    whyRecommended: [
      "✓ High aptitude in Financial Modeling & Valuation",
      "✓ Commerce stream strategic finance fit",
      "✓ High remuneration & global career growth"
    ],
    salaryRange: "₹12.0L - ₹50.0L / year",
    avgPackage: "₹22.0 LPA",
    marketDemand: "Very High",
    marketGrowth: "+25% Annual CAGR",
    requiredEducation: "B.Com (Hons) / BBA Finance followed by MBA Finance / CFA",
    relevantExams: ["CUET UG", "CAT", "CFA Level 1"],
    coreSkills: ["Financial Modeling", "Company Valuation", "M&A Strategy", "Excel & Bloomberg Terminal"],
    description: "Guide corporate mergers & acquisitions, capital fundraising, initial public offerings (IPOs), and asset management.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Focus on Accountancy, Mathematics, and Financial Markets." },
      { stage: "B.Com / BBA", desc: "Pursue B.Com (Hons) from top college like SRCC." },
      { stage: "MBA / CFA", desc: "Clear CAT for IIM MBA Finance or clear CFA exams." }
    ]
  },

  // 🏛️ HUMANITIES / ARTS CAREERS
  {
    id: "corporate-lawyer",
    title: "Corporate Lawyer & Tech Legal Counsel",
    category: "Law & Humanities",
    streamCompatibility: ["Arts", "Commerce", "Science"],
    subStreamCompatibility: ["Arts", "Commerce", "PCM"],
    matchScore: 93,
    whyRecommended: [
      "✓ Exceptional Logical & Legal Reasoning score",
      "✓ High verbal aptitude & contract drafting skills",
      "✓ High demand in corporate technology & IP law firms"
    ],
    salaryRange: "₹7.5L - ₹30.0L / year",
    avgPackage: "₹16.0 LPA",
    marketDemand: "Very High",
    marketGrowth: "+26% Annual CAGR",
    requiredEducation: "5-Year Integrated B.A. LL.B (Hons) / B.B.A. LL.B",
    relevantExams: ["CLAT", "AILET", "LSAT India", "SLAT"],
    coreSkills: ["Legal Reasoning", "Contract Drafting", "Corporate Governance", "Mooting & Communication"],
    description: "Advise enterprises on corporate law, commercial contracts, regulatory compliance, mergers, and IP disputes.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Master English comprehension, Legal Reasoning, and Current Affairs for CLAT." },
      { stage: "5-Year BA LLB", desc: "Clear CLAT and secure admission in top NLU like NLSIU Bangalore." },
      { stage: "Law Firm Placement", desc: "Intern at Tier-1 law firms and secure corporate placement." }
    ]
  },
  {
    id: "clinical-psychologist",
    title: "Clinical Psychologist & Behavioral Specialist",
    category: "Law & Humanities",
    streamCompatibility: ["Arts"],
    subStreamCompatibility: ["Arts"],
    matchScore: 91,
    whyRecommended: [
      "✓ High empathy & psychological assessment aptitude",
      "✓ Humanities stream core domain fit",
      "✓ Rapidly expanding mental healthcare awareness in India"
    ],
    salaryRange: "₹5.0L - ₹18.0L / year",
    avgPackage: "₹9.2 LPA",
    marketDemand: "High",
    marketGrowth: "+24% Annual CAGR",
    requiredEducation: "B.A. Psychology (Hons) followed by M.A. & M.Phil / RCI License",
    relevantExams: ["CUET UG", "CUET PG"],
    coreSkills: ["Psychological Counseling", "Cognitive Behavioral Therapy (CBT)", "Psychometric Testing"],
    description: "Provide mental health therapy, diagnose psychological disorders, and guide personal development.",
    roadmapTimeline: [
      { stage: "Class 11-12", desc: "Study Psychology, Sociology, and English." },
      { stage: "BA & MA Psychology", desc: "Complete B.A. and M.A. in Clinical Psychology." }
    ]
  }
];
