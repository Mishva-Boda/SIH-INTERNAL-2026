export interface AssessmentOption {
  id: string;
  label: string;
  category: string;
  icon?: string;
  weights: {
    SCIENCE_BIO?: number;
    SCIENCE_MATH?: number;
    ENGINEERING_TECH?: number;
    AI_DATA?: number;
    MEDICINE_HEALTHCARE?: number;
    COMMERCE_FINANCE?: number;
    BUSINESS_MANAGEMENT?: number;
    ARTS_HUMANITIES?: number;
    LAW?: number;
    DESIGN_ARCHITECTURE?: number;
    PSYCHOLOGY?: number;
    MEDIA_COMMUNICATION?: number;
    GOVERNMENT_DEFENCE?: number;
    RESEARCH?: number;
    EDUCATION?: number;
    AGRICULTURE_ENVIRONMENT?: number;
  };
}

export interface AssessmentQuestion {
  id: number;
  section: string;
  question: string;
  subtitle: string;
  isMultiSelect: boolean;
  minSelections?: number;
  maxSelections?: number;
  options: AssessmentOption[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  // SECTION 1: ACADEMIC INTERESTS & SUBJECT PASSIONS (Q1 - Q6)
  {
    id: 1,
    section: "Academic Interests & Passions",
    question: "Which activities would you voluntarily spend extra time doing?",
    subtitle: "Select all activities that genuinely interest you.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 5,
    options: [
      { id: "q1_1", label: "Solving complex mathematical puzzles & calculus equations", category: "Mathematics", weights: { SCIENCE_MATH: 10, ENGINEERING_TECH: 8, AI_DATA: 7 } },
      { id: "q1_2", label: "Conducting scientific experiments in physics or chemistry labs", category: "Pure Science", weights: { RESEARCH: 10, SCIENCE_MATH: 8, SCIENCE_BIO: 6 } },
      { id: "q1_3", label: "Understanding how the human body, organs, and cells function", category: "Biology & Health", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 10, RESEARCH: 6 } },
      { id: "q1_4", label: "Building software, mobile apps, or writing computer code", category: "Technology", weights: { ENGINEERING_TECH: 10, AI_DATA: 10, DESIGN_ARCHITECTURE: 4 } },
      { id: "q1_5", label: "Analyzing financial trends, stock markets, or money decisions", category: "Finance", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 8 } },
      { id: "q1_6", label: "Creating artwork, graphic designs, or visual digital media", category: "Creative Design", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 7 } },
      { id: "q1_7", label: "Writing articles, creative stories, or public speeches", category: "Humanities & Media", weights: { MEDIA_COMMUNICATION: 10, ARTS_HUMANITIES: 8, LAW: 5 } },
      { id: "q1_8", label: "Debating social issues, law, politics, or governance", category: "Law & Governance", weights: { LAW: 10, GOVERNMENT_DEFENCE: 8, ARTS_HUMANITIES: 7 } },
      { id: "q1_9", label: "Helping, counseling, or teaching other people", category: "Social & Education", weights: { PSYCHOLOGY: 10, EDUCATION: 9, MEDICINE_HEALTHCARE: 5 } },
      { id: "q1_10", label: "Organizing events, managing teams, or pitching business ideas", category: "Management", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 7 } }
    ]
  },
  {
    id: 2,
    section: "Academic Interests & Passions",
    question: "Which school subjects do you enjoy studying the most?",
    subtitle: "Select all your favorite subjects.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 6,
    options: [
      { id: "q2_1", label: "Mathematics & Statistics", category: "Math", weights: { SCIENCE_MATH: 10, AI_DATA: 9, ENGINEERING_TECH: 7, COMMERCE_FINANCE: 6 } },
      { id: "q2_2", label: "Physics", category: "Science", weights: { SCIENCE_MATH: 9, ENGINEERING_TECH: 10, RESEARCH: 7 } },
      { id: "q2_3", label: "Chemistry", category: "Science", weights: { SCIENCE_BIO: 8, MEDICINE_HEALTHCARE: 7, RESEARCH: 9 } },
      { id: "q2_4", label: "Biology / Biotechnology", category: "Biology", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 10, AGRICULTURE_ENVIRONMENT: 7 } },
      { id: "q2_5", label: "Computer Science / Informatics Practices", category: "Tech", weights: { ENGINEERING_TECH: 10, AI_DATA: 10 } },
      { id: "q2_6", label: "Accountancy", category: "Commerce", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 6 } },
      { id: "q2_7", label: "Business Studies / Commerce", category: "Commerce", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 8 } },
      { id: "q2_8", label: "Economics", category: "Economics", weights: { COMMERCE_FINANCE: 9, BUSINESS_MANAGEMENT: 8, ARTS_HUMANITIES: 6 } },
      { id: "q2_9", label: "History & Political Science", category: "Humanities", weights: { ARTS_HUMANITIES: 9, LAW: 9, GOVERNMENT_DEFENCE: 8 } },
      { id: "q2_10", label: "Psychology & Sociology", category: "Behavioral", weights: { PSYCHOLOGY: 10, ARTS_HUMANITIES: 8, MEDICINE_HEALTHCARE: 5 } },
      { id: "q2_11", label: "Fine Arts / Graphic Design / Informatics", category: "Design", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 6 } }
    ]
  },
  {
    id: 3,
    section: "Academic Interests & Passions",
    question: "Which type of problem would you enjoy solving?",
    subtitle: "Select the problem types that excite you.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 4,
    options: [
      { id: "q3_1", label: "Mathematical & logical algorithmic puzzles", category: "Logic", weights: { SCIENCE_MATH: 10, AI_DATA: 9, ENGINEERING_TECH: 8 } },
      { id: "q3_2", label: "Software programming bugs & web app architecture", category: "Tech", weights: { ENGINEERING_TECH: 10, AI_DATA: 10 } },
      { id: "q3_3", label: "Medical, disease treatment, or healthcare problems", category: "Healthcare", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 9 } },
      { id: "q3_4", label: "Business profitability & market expansion challenges", category: "Business", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 8 } },
      { id: "q3_5", label: "Financial auditing, tax optimization, or stock valuation", category: "Finance", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 7 } },
      { id: "q3_6", label: "Legal disputes, constitutional rights, or corporate contracts", category: "Law", weights: { LAW: 10, GOVERNMENT_DEFENCE: 7 } },
      { id: "q3_7", label: "User interface, product aesthetics, or architectural layouts", category: "Design", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 6 } },
      { id: "q3_8", label: "Environmental sustainability & climate change solutions", category: "Environment", weights: { AGRICULTURE_ENVIRONMENT: 10, RESEARCH: 7 } }
    ]
  },
  {
    id: 4,
    section: "Academic Interests & Passions",
    question: "Which work environment sounds most inspiring to you?",
    subtitle: "Select your preferred future workplace environments.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 3,
    options: [
      { id: "q4_1", label: "High-tech software company or AI lab", category: "Tech Lab", weights: { ENGINEERING_TECH: 10, AI_DATA: 10 } },
      { id: "q4_2", label: "Advanced scientific or pharmaceutical research laboratory", category: "Lab", weights: { RESEARCH: 10, SCIENCE_BIO: 8, MEDICINE_HEALTHCARE: 7 } },
      { id: "q4_3", label: "Hospital, clinical medical center, or healthcare facility", category: "Medical", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 8 } },
      { id: "q4_4", label: "Investment bank, stock exchange, or corporate finance firm", category: "Finance", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 7 } },
      { id: "q4_5", label: "High-growth business startup or corporate office", category: "Business", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 6 } },
      { id: "q4_6", label: "Court of law, legal chamber, or corporate legal counsel", category: "Law", weights: { LAW: 10, GOVERNMENT_DEFENCE: 6 } },
      { id: "q4_7", label: "Creative design studio, media house, or architecture firm", category: "Design Studio", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 8 } },
      { id: "q4_8", label: "Civil administration office or defense research unit", category: "Government", weights: { GOVERNMENT_DEFENCE: 10, LAW: 6 } }
    ]
  },
  {
    id: 5,
    section: "Academic Interests & Passions",
    question: "How comfortable are you with advanced Mathematics?",
    subtitle: "Select the statement that best fits your math aptitude.",
    isMultiSelect: false,
    options: [
      { id: "q5_1", label: "I love advanced mathematics, calculus, and statistics", category: "High Math", weights: { SCIENCE_MATH: 10, AI_DATA: 9, ENGINEERING_TECH: 8, COMMERCE_FINANCE: 6 } },
      { id: "q5_2", label: "I enjoy solving practical mathematical problems", category: "Moderate Math", weights: { ENGINEERING_TECH: 7, AI_DATA: 6, COMMERCE_FINANCE: 7, BUSINESS_MANAGEMENT: 5 } },
      { id: "q5_3", label: "I can handle basic mathematics & financial math comfortably", category: "Basic Math", weights: { COMMERCE_FINANCE: 6, BUSINESS_MANAGEMENT: 6, ARTS_HUMANITIES: 5, LAW: 5 } },
      { id: "q5_4", label: "I prefer careers with minimal mathematical calculations", category: "Low Math", weights: { MEDICINE_HEALTHCARE: 5, ARTS_HUMANITIES: 8, LAW: 7, DESIGN_ARCHITECTURE: 7, PSYCHOLOGY: 8 } }
    ]
  },
  {
    id: 6,
    section: "Academic Interests & Passions",
    question: "Which activities best describe your personal traits & hobbies?",
    subtitle: "Select all activities you enjoy doing.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 5,
    options: [
      { id: "q6_1", label: "Analyzing numbers & data patterns", category: "Data", weights: { AI_DATA: 10, SCIENCE_MATH: 8, COMMERCE_FINANCE: 7 } },
      { id: "q6_2", label: "Coding or experimenting with technology", category: "Tech", weights: { ENGINEERING_TECH: 10, AI_DATA: 9 } },
      { id: "q6_3", label: "Helping people with health or personal issues", category: "Helping", weights: { MEDICINE_HEALTHCARE: 10, PSYCHOLOGY: 9, EDUCATION: 7 } },
      { id: "q6_4", label: "Managing money, savings, or business investments", category: "Finance", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 8 } },
      { id: "q6_5", label: "Designing graphics, sketches, or 3D models", category: "Art", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 6 } },
      { id: "q6_6", label: "Public speaking, debating, or writing articles", category: "Communication", weights: { MEDIA_COMMUNICATION: 9, LAW: 9, BUSINESS_MANAGEMENT: 7 } },
      { id: "q6_7", label: "Leading teams & organizing school/college events", category: "Leadership", weights: { BUSINESS_MANAGEMENT: 10, GOVERNMENT_DEFENCE: 7 } }
    ]
  },

  // SECTION 2: CAREER DOMAIN CURIOSITY & ASPIRATIONS (Q7 - Q12)
  {
    id: 7,
    section: "Career Curiosity & Aspirations",
    question: "Which career areas are you currently most curious to explore?",
    subtitle: "Select your top career domains of interest.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 4,
    options: [
      { id: "q7_1", label: "Computer Science & Engineering", category: "Engineering", weights: { ENGINEERING_TECH: 10, AI_DATA: 7 } },
      { id: "q7_2", label: "Artificial Intelligence & Data Science", category: "AI", weights: { AI_DATA: 10, ENGINEERING_TECH: 8 } },
      { id: "q7_3", label: "Medicine, Surgery & Healthcare", category: "Medicine", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 9 } },
      { id: "q7_4", label: "Chartered Accountancy (CA) & Finance", category: "Finance", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 7 } },
      { id: "q7_5", label: "Business Management & Entrepreneurship", category: "Business", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 7 } },
      { id: "q7_6", label: "Law, Judiciary & Corporate Legal Counsel", category: "Law", weights: { LAW: 10, GOVERNMENT_DEFENCE: 6 } },
      { id: "q7_7", label: "UI/UX Design, Product Design & Architecture", category: "Design", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 5 } },
      { id: "q7_8", label: "Clinical Psychology & Behavioral Science", category: "Psychology", weights: { PSYCHOLOGY: 10, MEDICINE_HEALTHCARE: 5 } },
      { id: "q7_9", label: "Journalism, Mass Communication & Digital Media", category: "Media", weights: { MEDIA_COMMUNICATION: 10, ARTS_HUMANITIES: 6 } },
      { id: "q7_10", label: "Civil Services (UPSC), Governance & Public Policy", category: "Government", weights: { GOVERNMENT_DEFENCE: 10, LAW: 8 } }
    ]
  },
  {
    id: 8,
    section: "Career Curiosity & Aspirations",
    question: "Imagine you receive ₹1 Lakh to build any innovation project. Which would you choose?",
    subtitle: "Select the project that inspires you most.",
    isMultiSelect: false,
    options: [
      { id: "q8_1", label: "Build an AI chatbot or smart automation application", category: "AI Tech", weights: { AI_DATA: 10, ENGINEERING_TECH: 9 } },
      { id: "q8_2", label: "Develop a low-cost medical diagnostic device for hospitals", category: "Health Innovation", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 8, ENGINEERING_TECH: 6 } },
      { id: "q8_3", label: "Launch a student business startup or financial investing service", category: "Startup", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 9 } },
      { id: "q8_4", label: "Create a digital legal rights app for citizens", category: "Legal Tech", weights: { LAW: 10, GOVERNMENT_DEFENCE: 7 } },
      { id: "q8_5", label: "Design a VR product or interactive 3D UI experience", category: "UI/UX Design", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 6 } },
      { id: "q8_6", label: "Produce an investigative documentary or journalism platform", category: "Journalism", weights: { MEDIA_COMMUNICATION: 10, ARTS_HUMANITIES: 7 } },
      { id: "q8_7", label: "Research an eco-friendly bio-sustainability project", category: "Environment", weights: { AGRICULTURE_ENVIRONMENT: 10, RESEARCH: 8 } }
    ]
  },
  {
    id: 9,
    section: "Career Curiosity & Aspirations",
    question: "Which type of satisfying outcome brings you the greatest pride?",
    subtitle: "Select all that apply.",
    isMultiSelect: true,
    minSelections: 1,
    maxSelections: 3,
    options: [
      { id: "q9_1", label: "Solving a difficult mathematical or algorithmic problem", category: "Math Logic", weights: { SCIENCE_MATH: 10, AI_DATA: 8, ENGINEERING_TECH: 7 } },
      { id: "q9_2", label: "Curing or relieving a patient's suffering", category: "Medical Impact", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 8 } },
      { id: "q9_3", label: "Generating profitable business growth or smart investments", category: "Financial Success", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 9 } },
      { id: "q9_4", label: "Winning a legal case or upholding justice", category: "Justice", weights: { LAW: 10, GOVERNMENT_DEFENCE: 7 } },
      { id: "q9_5", label: "Creating something visually stunning that people admire", category: "Visual Creation", weights: { DESIGN_ARCHITECTURE: 10, MEDIA_COMMUNICATION: 6 } },
      { id: "q9_6", label: "Publishing a scientific discovery in a research journal", category: "Research", weights: { RESEARCH: 10, SCIENCE_BIO: 7, SCIENCE_MATH: 7 } }
    ]
  },
  {
    id: 10,
    section: "Career Curiosity & Aspirations",
    question: "Which statement best describes your primary long-term career ambition?",
    subtitle: "Select your main career vision.",
    isMultiSelect: false,
    options: [
      { id: "q10_1", label: "I want to engineer cutting-edge technology & AI systems", category: "Tech Vision", weights: { ENGINEERING_TECH: 10, AI_DATA: 10 } },
      { id: "q10_2", label: "I want to practice clinical medicine, surgery, or healthcare", category: "Medical Vision", weights: { MEDICINE_HEALTHCARE: 10, SCIENCE_BIO: 9 } },
      { id: "q10_3", label: "I want to lead financial audits, investment banking, or accounting", category: "Finance Vision", weights: { COMMERCE_FINANCE: 10, BUSINESS_MANAGEMENT: 8 } },
      { id: "q10_4", label: "I want to build & run my own successful corporate business", category: "Business Vision", weights: { BUSINESS_MANAGEMENT: 10, COMMERCE_FINANCE: 7 } },
      { id: "q10_5", label: "I want to practice corporate law, litigation, or legal advocacy", category: "Legal Vision", weights: { LAW: 10, GOVERNMENT_DEFENCE: 7 } },
      { id: "q10_6", label: "I want to design digital products, UI/UX, or architecture", category: "Design Vision", weights: { DESIGN_ARCHITECTURE: 10 } },
      { id: "q10_7", label: "I want to serve in Civil Services (IAS/IPS) or Government administration", category: "Government Vision", weights: { GOVERNMENT_DEFENCE: 10, LAW: 7 } }
    ]
  }
];
