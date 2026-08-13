// CareerVerse AI - Complete Career Data Library
// 20+ careers with rich metadata

export interface CareerSkill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  category: "technical" | "soft" | "domain";
}

export interface SalaryByExperience {
  label: string;
  years: string;
  min: number;
  max: number;
  avg: number;
}

export interface MarketDemand {
  year: string;
  demand: number;
  openings: number;
}

export interface EducationStep {
  stage: string;
  duration: string;
  options: string[];
  description: string;
}

export interface TopCollege {
  name: string;
  city: string;
  ranking: number;
  course: string;
  fees: string;
  nirf?: number;
}

export interface Certification {
  name: string;
  provider: string;
  duration: string;
  cost: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  link?: string;
}

export interface FamousPerson {
  name: string;
  role: string;
  company?: string;
  achievement: string;
  nationality: string;
  imageInitials: string;
}

export interface DayInLife {
  time: string;
  activity: string;
  icon: string;
}

export interface Career {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  emoji: string;
  color: string;
  gradient: string;
  stream: string[];
  sector: string;
  description: string;
  shortDescription: string;
  salaryRange: { min: number; max: number; avg: number; currency: string };
  growthRate: number;
  jobOpenings: string;
  matchScore?: number;
  requiredEducation: string;
  workMode: string[];
  skills: CareerSkill[];
  salaryByExperience: SalaryByExperience[];
  marketDemand: MarketDemand[];
  educationPath: EducationStep[];
  topColleges: TopCollege[];
  certifications: Certification[];
  famousPeople: FamousPerson[];
  dayInLife: DayInLife[];
  jobRoles: string[];
  companies: string[];
  tags: string[];
  pros: string[];
  cons: string[];
  workLifeBalance: number; // 1-5
  creativityIndex: number; // 1-5
  socialImpact: number; // 1-5
  technicalDepth: number; // 1-5
}

export const careers: Career[] = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    shortName: "SWE",
    icon: "💻",
    emoji: "💻",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    stream: ["Science (PCM)", "Science (PCB+M)"],
    sector: "Technology",
    description:
      "Software Engineers design, develop, test, and maintain software applications and systems. They work across industries from healthcare to finance, building everything from mobile apps to enterprise platforms. In India's booming tech sector, software engineers are in massive demand at startups and MNCs alike.",
    shortDescription:
      "Design and build software applications across industries",
    salaryRange: { min: 400000, max: 5000000, avg: 1500000, currency: "INR" },
    growthRate: 25,
    jobOpenings: "4.5L+",
    matchScore: 92,
    requiredEducation: "B.Tech/BCA/BSc CS",
    workMode: ["Remote", "Hybrid", "On-site"],
    skills: [
      { name: "Data Structures & Algorithms", level: "advanced", category: "technical" },
      { name: "System Design", level: "advanced", category: "technical" },
      { name: "Python / Java / C++", level: "advanced", category: "technical" },
      { name: "Git & Version Control", level: "intermediate", category: "technical" },
      { name: "Databases (SQL/NoSQL)", level: "intermediate", category: "technical" },
      { name: "Cloud (AWS/GCP/Azure)", level: "intermediate", category: "technical" },
      { name: "Problem Solving", level: "advanced", category: "soft" },
      { name: "Communication", level: "intermediate", category: "soft" },
      { name: "Team Collaboration", level: "intermediate", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Fresher", years: "0-1", min: 400000, max: 1200000, avg: 700000 },
      { label: "Junior", years: "1-3", min: 800000, max: 2000000, avg: 1300000 },
      { label: "Mid-Level", years: "3-6", min: 1500000, max: 3500000, avg: 2500000 },
      { label: "Senior", years: "6-10", min: 2500000, max: 6000000, avg: 4000000 },
      { label: "Lead/Architect", years: "10+", min: 4000000, max: 12000000, avg: 7000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 65, openings: 180000 },
      { year: "2021", demand: 72, openings: 220000 },
      { year: "2022", demand: 82, openings: 310000 },
      { year: "2023", demand: 88, openings: 380000 },
      { year: "2024", demand: 94, openings: 450000 },
      { year: "2025", demand: 97, openings: 520000 },
    ],
    educationPath: [
      {
        stage: "Class 10",
        duration: "Till Age 16",
        options: ["CBSE", "ICSE", "State Board"],
        description: "Focus on Mathematics and Science fundamentals",
      },
      {
        stage: "Class 11-12 (PCM)",
        duration: "2 years",
        options: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        description: "Strong math and CS foundation. Aim for 85%+ for top colleges",
      },
      {
        stage: "Entrance Exams",
        duration: "Preparation 1-2 years",
        options: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "MHT-CET"],
        description: "Crack competitive exams for IITs, NITs, and top private colleges",
      },
      {
        stage: "B.Tech Computer Science",
        duration: "4 years",
        options: ["IIT", "NIT", "BITS Pilani", "VIT", "SRM", "Manipal"],
        description: "Core CS curriculum: DSA, OS, DBMS, Networks, plus internships",
      },
      {
        stage: "First Job / M.Tech",
        duration: "Ongoing",
        options: ["Campus Placement", "GATE for M.Tech", "MS Abroad", "Startup"],
        description: "Enter industry or pursue higher education for research/senior roles",
      },
    ],
    topColleges: [
      { name: "IIT Bombay", city: "Mumbai", ranking: 1, course: "B.Tech CSE", fees: "₹8.5L total", nirf: 3 },
      { name: "IIT Delhi", city: "New Delhi", ranking: 2, course: "B.Tech CSE", fees: "₹8.5L total", nirf: 4 },
      { name: "IIT Madras", city: "Chennai", ranking: 3, course: "B.Tech CSE", fees: "₹8.5L total", nirf: 1 },
      { name: "BITS Pilani", city: "Pilani", ranking: 4, course: "B.E. CS", fees: "₹22L total" },
      { name: "NIT Trichy", city: "Trichy", ranking: 5, course: "B.Tech CSE", fees: "₹6L total" },
      { name: "VIT Vellore", city: "Vellore", ranking: 6, course: "B.Tech CSE", fees: "₹12L total" },
    ],
    certifications: [
      { name: "AWS Solutions Architect", provider: "Amazon", duration: "3 months", cost: "₹15,000", difficulty: "intermediate" },
      { name: "Google Cloud Professional", provider: "Google", duration: "3 months", cost: "₹18,000", difficulty: "advanced" },
      { name: "Meta React Developer", provider: "Meta/Coursera", duration: "6 months", cost: "₹3,000", difficulty: "beginner" },
      { name: "Full Stack Web Dev", provider: "freeCodeCamp", duration: "6 months", cost: "Free", difficulty: "intermediate" },
      { name: "DSA Mastery", provider: "LeetCode", duration: "Ongoing", cost: "₹2,500/yr", difficulty: "advanced" },
    ],
    famousPeople: [
      { name: "Sundar Pichai", role: "CEO", company: "Google/Alphabet", achievement: "Led Google to $2T valuation", nationality: "Indian-American", imageInitials: "SP" },
      { name: "Satya Nadella", role: "CEO", company: "Microsoft", achievement: "Transformed Microsoft's cloud strategy", nationality: "Indian-American", imageInitials: "SN" },
      { name: "Shantanu Narayen", role: "CEO", company: "Adobe", achievement: "Pivoted Adobe to SaaS model", nationality: "Indian-American", imageInitials: "SN" },
      { name: "Linus Torvalds", role: "Creator", company: "Linux", achievement: "Created Linux OS kernel", nationality: "Finnish-American", imageInitials: "LT" },
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Morning standup with team", icon: "🤝" },
      { time: "9:30 AM", activity: "Code review & PR reviews", icon: "🔍" },
      { time: "11:00 AM", activity: "Feature development & coding", icon: "💻" },
      { time: "1:00 PM", activity: "Lunch break", icon: "🍽️" },
      { time: "2:00 PM", activity: "Sprint planning / architecture meeting", icon: "📋" },
      { time: "3:30 PM", activity: "Debugging & testing", icon: "🐛" },
      { time: "5:00 PM", activity: "Documentation & knowledge sharing", icon: "📝" },
      { time: "6:00 PM", activity: "Wrap up & end of day", icon: "✅" },
    ],
    jobRoles: ["Backend Developer", "Frontend Developer", "Full Stack Developer", "DevOps Engineer", "Mobile Developer", "ML Engineer", "Cloud Architect"],
    companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Infosys", "TCS", "Wipro", "Razorpay", "Zepto", "CRED"],
    tags: ["High Salary", "Remote Work", "Global Opportunities", "Fast Growth", "Startup Friendly"],
    pros: ["Extremely high demand", "Remote work flexibility", "High salary potential", "Global opportunities", "Continuous learning"],
    cons: ["Can be stressful with deadlines", "Constant upskilling needed", "Sedentary lifestyle", "Can feel isolating working remotely"],
    workLifeBalance: 3,
    creativityIndex: 4,
    socialImpact: 3,
    technicalDepth: 5,
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    shortName: "DS",
    icon: "📊",
    emoji: "📊",
    color: "#0ea5e9",
    gradient: "from-sky-500 to-blue-600",
    stream: ["Science (PCM)", "Commerce (with Maths)"],
    sector: "Technology / Analytics",
    description:
      "Data Scientists extract insights from large datasets using statistical analysis, machine learning, and visualization. They help companies make data-driven decisions. With India becoming a data economy, demand for Data Scientists is exploding across BFSI, e-commerce, and healthcare.",
    shortDescription: "Extract insights from data to drive business decisions",
    salaryRange: { min: 600000, max: 6000000, avg: 2000000, currency: "INR" },
    growthRate: 35,
    jobOpenings: "2.8L+",
    matchScore: 88,
    requiredEducation: "B.Tech/BSc Statistics/M.Sc",
    workMode: ["Remote", "Hybrid"],
    skills: [
      { name: "Python & R", level: "advanced", category: "technical" },
      { name: "Machine Learning", level: "advanced", category: "technical" },
      { name: "Statistics & Probability", level: "advanced", category: "technical" },
      { name: "SQL & BigQuery", level: "intermediate", category: "technical" },
      { name: "TensorFlow / PyTorch", level: "intermediate", category: "technical" },
      { name: "Data Visualization (Tableau)", level: "intermediate", category: "technical" },
      { name: "Analytical Thinking", level: "advanced", category: "soft" },
      { name: "Business Communication", level: "intermediate", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Fresher", years: "0-1", min: 600000, max: 1400000, avg: 900000 },
      { label: "Junior", years: "1-3", min: 1000000, max: 2500000, avg: 1700000 },
      { label: "Mid-Level", years: "3-6", min: 2000000, max: 4500000, avg: 3000000 },
      { label: "Senior", years: "6-10", min: 3500000, max: 7000000, avg: 5000000 },
      { label: "Principal/Director", years: "10+", min: 5000000, max: 15000000, avg: 9000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 55, openings: 80000 },
      { year: "2021", demand: 65, openings: 120000 },
      { year: "2022", demand: 75, openings: 180000 },
      { year: "2023", demand: 85, openings: 240000 },
      { year: "2024", demand: 92, openings: 280000 },
      { year: "2025", demand: 98, openings: 340000 },
    ],
    educationPath: [
      { stage: "Class 10", duration: "Till Age 16", options: ["CBSE", "ICSE"], description: "Strong foundation in Mathematics" },
      { stage: "Class 11-12 (PCM/Commerce+Maths)", duration: "2 years", options: ["Maths", "Statistics", "CS"], description: "Mathematics is crucial — aim 90%+" },
      { stage: "Bachelor's Degree", duration: "3-4 years", options: ["B.Tech CSE/Data Science", "BSc Statistics", "BSc Mathematics"], description: "Foundational programming, stats, and ML concepts" },
      { stage: "Master's / Certifications", duration: "1-2 years", options: ["M.Sc Data Science", "MBA Analytics", "Online certifications"], description: "Specialize in ML, NLP, or domain-specific analytics" },
    ],
    topColleges: [
      { name: "IIT Madras", city: "Chennai", ranking: 1, course: "BS Data Science", fees: "₹2.5L total (online)", nirf: 1 },
      { name: "ISI Kolkata", city: "Kolkata", ranking: 2, course: "B.Stat / M.Stat", fees: "₹1.2L total" },
      { name: "IIT Bombay", city: "Mumbai", ranking: 3, course: "B.Tech CSE + Data Science minor", fees: "₹8.5L total" },
      { name: "IIMA", city: "Ahmedabad", ranking: 4, course: "PGP Business Analytics", fees: "₹28L total" },
      { name: "Praxis Business School", city: "Kolkata", ranking: 5, course: "PG Data Science", fees: "₹12L total" },
    ],
    certifications: [
      { name: "IBM Data Science Professional", provider: "IBM/Coursera", duration: "11 months", cost: "₹3,000", difficulty: "intermediate" },
      { name: "Google Data Analytics", provider: "Google/Coursera", duration: "6 months", cost: "₹2,500", difficulty: "beginner" },
      { name: "Deep Learning Specialization", provider: "DeepLearning.ai", duration: "5 months", cost: "₹3,000", difficulty: "advanced" },
      { name: "Kaggle Competitions", provider: "Kaggle", duration: "Ongoing", cost: "Free", difficulty: "advanced" },
    ],
    famousPeople: [
      { name: "DJ Patil", role: "First US Chief Data Scientist", achievement: "Coined the term 'Data Scientist'", nationality: "American", imageInitials: "DP" },
      { name: "Yann LeCun", role: "Chief AI Scientist", company: "Meta", achievement: "Pioneer of Deep Learning & CNNs", nationality: "French-American", imageInitials: "YL" },
      { name: "Fei-Fei Li", role: "Co-Director, Stanford AI Lab", achievement: "Created ImageNet dataset", nationality: "Chinese-American", imageInitials: "FL" },
    ],
    dayInLife: [
      { time: "9:30 AM", activity: "Check model performance dashboards", icon: "📊" },
      { time: "10:00 AM", activity: "Data cleaning & EDA", icon: "🧹" },
      { time: "12:00 PM", activity: "Model training & experimentation", icon: "🤖" },
      { time: "1:30 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:30 PM", activity: "Present insights to stakeholders", icon: "📈" },
      { time: "4:00 PM", activity: "Feature engineering & optimization", icon: "⚙️" },
      { time: "5:30 PM", activity: "Documentation & Jupyter notebooks", icon: "📓" },
    ],
    jobRoles: ["Data Analyst", "ML Engineer", "AI Researcher", "Business Intelligence Analyst", "NLP Scientist", "Computer Vision Engineer"],
    companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Ola", "PhonePe", "Zomato", "IBM", "Accenture", "EY"],
    tags: ["AI Era", "High Demand", "Research Oriented", "Data Economy"],
    pros: ["Highest salary growth rate", "Central to AI revolution", "Diverse applications", "Intellectually stimulating"],
    cons: ["Data quality challenges", "Requires strong math background", "Results not always immediately visible"],
    workLifeBalance: 4,
    creativityIndex: 4,
    socialImpact: 4,
    technicalDepth: 5,
  },
  {
    id: "doctor-mbbs",
    name: "Medical Doctor (MBBS)",
    shortName: "MBBS",
    icon: "🏥",
    emoji: "🏥",
    color: "#ef4444",
    gradient: "from-red-500 to-rose-600",
    stream: ["Science (PCB)"],
    sector: "Healthcare",
    description:
      "Medical Doctors diagnose, treat, and prevent diseases. MBBS is the gateway to India's healthcare sector. With growing health awareness and government investment in healthcare, doctors remain one of the most respected and stable careers with immense social impact.",
    shortDescription: "Diagnose and treat patients to improve public health",
    salaryRange: { min: 600000, max: 8000000, avg: 2500000, currency: "INR" },
    growthRate: 15,
    jobOpenings: "1.2L+",
    matchScore: 85,
    requiredEducation: "MBBS (5.5 years) + Residency",
    workMode: ["On-site"],
    skills: [
      { name: "Clinical Diagnosis", level: "advanced", category: "domain" },
      { name: "Anatomy & Physiology", level: "advanced", category: "domain" },
      { name: "Pharmacology", level: "advanced", category: "domain" },
      { name: "Patient Communication", level: "advanced", category: "soft" },
      { name: "Emergency Medicine", level: "intermediate", category: "domain" },
      { name: "Empathy & Compassion", level: "advanced", category: "soft" },
      { name: "Medical Ethics", level: "advanced", category: "domain" },
    ],
    salaryByExperience: [
      { label: "Intern / Junior Resident", years: "0-2", min: 300000, max: 800000, avg: 500000 },
      { label: "Senior Resident", years: "2-5", min: 800000, max: 1800000, avg: 1200000 },
      { label: "Consultant", years: "5-10", min: 1500000, max: 4000000, avg: 2500000 },
      { label: "Senior Consultant", years: "10-20", min: 3000000, max: 8000000, avg: 5000000 },
      { label: "HOD / Director", years: "20+", min: 5000000, max: 20000000, avg: 10000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 70, openings: 80000 },
      { year: "2021", demand: 80, openings: 90000 },
      { year: "2022", demand: 82, openings: 100000 },
      { year: "2023", demand: 85, openings: 110000 },
      { year: "2024", demand: 88, openings: 120000 },
      { year: "2025", demand: 92, openings: 135000 },
    ],
    educationPath: [
      { stage: "Class 10", duration: "Till Age 16", options: ["CBSE", "ICSE", "State"], description: "Build strong Biology and Chemistry base" },
      { stage: "Class 11-12 (PCB)", duration: "2 years", options: ["Physics", "Chemistry", "Biology"], description: "Biology is key — aim 90%+ for NEET" },
      { stage: "NEET-UG", duration: "1-2 year preparation", options: ["NEET coaching", "Self-study"], description: "Rank under 15,000 for government MBBS seats" },
      { stage: "MBBS", duration: "5.5 years", options: ["AIIMS", "Government Medical College", "Private Medical College"], description: "4.5 years academics + 1 year mandatory internship" },
      { stage: "PG (MD/MS) - Optional", duration: "3 years", options: ["NEET-PG", "Specialization"], description: "Specialize for higher salary and expertise" },
    ],
    topColleges: [
      { name: "AIIMS New Delhi", city: "New Delhi", ranking: 1, course: "MBBS", fees: "₹7,000/year (Govt)", nirf: 1 },
      { name: "AIIMS Bangalore", city: "Bengaluru", ranking: 2, course: "MBBS", fees: "₹7,000/year (Govt)" },
      { name: "Maulana Azad Medical College", city: "New Delhi", ranking: 3, course: "MBBS", fees: "₹60,000 total" },
      { name: "CMC Vellore", city: "Vellore", ranking: 4, course: "MBBS", fees: "₹1.2L total" },
      { name: "Armed Forces Medical College", city: "Pune", ranking: 5, course: "MBBS", fees: "Free (Military Bond)" },
    ],
    certifications: [
      { name: "BLS/ACLS Certification", provider: "American Heart Association", duration: "1 day", cost: "₹5,000", difficulty: "intermediate" },
      { name: "USMLE (US License)", provider: "NBME", duration: "2-3 years", cost: "₹3,00,000", difficulty: "advanced" },
      { name: "PLAB (UK License)", provider: "GMC UK", duration: "1-2 years", cost: "₹2,00,000", difficulty: "advanced" },
    ],
    famousPeople: [
      { name: "Dr. Devi Shetty", role: "Cardiac Surgeon", company: "Narayana Health", achievement: "Affordable heart surgery pioneer", nationality: "Indian", imageInitials: "DS" },
      { name: "Dr. Prathap Reddy", role: "Founder", company: "Apollo Hospitals", achievement: "Built India's largest hospital chain", nationality: "Indian", imageInitials: "PR" },
      { name: "Dr. Harsh Vardhan", role: "Union Minister of Health", achievement: "Led India's polio eradication", nationality: "Indian", imageInitials: "HV" },
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Ward rounds & patient check-ups", icon: "🏥" },
      { time: "10:00 AM", activity: "OPD consultations", icon: "👨‍⚕️" },
      { time: "1:00 PM", activity: "Lunch & case discussions", icon: "🍽️" },
      { time: "2:00 PM", activity: "Surgeries / Procedures", icon: "🔬" },
      { time: "4:30 PM", activity: "Medical reports & documentation", icon: "📋" },
      { time: "6:00 PM", activity: "Research / CME sessions", icon: "📚" },
    ],
    jobRoles: ["General Physician", "Surgeon", "Cardiologist", "Neurologist", "Pediatrician", "Psychiatrist", "Radiologist"],
    companies: ["AIIMS", "Apollo Hospitals", "Fortis", "Max Healthcare", "Medanta", "Government Hospitals", "Private Practice"],
    tags: ["Social Impact", "Respected Profession", "Job Security", "Serving Humanity"],
    pros: ["High social respect and trust", "Job security always", "Variety of specializations", "Direct impact on lives"],
    cons: ["Very long education (10+ years)", "Expensive private college fees", "High stress and long hours", "Emotional burden"],
    workLifeBalance: 2,
    creativityIndex: 3,
    socialImpact: 5,
    technicalDepth: 5,
  },
  {
    id: "civil-engineer",
    name: "Civil Engineer",
    shortName: "Civil Engg",
    icon: "🏗️",
    emoji: "🏗️",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    stream: ["Science (PCM)"],
    sector: "Infrastructure / Construction",
    description:
      "Civil Engineers design, build, and maintain infrastructure — roads, bridges, buildings, dams, and water systems. With India's massive infrastructure push under PM GatiShakti and Smart Cities Mission, civil engineers are in strong demand in government and private sectors.",
    shortDescription: "Design and build infrastructure like roads, bridges, and buildings",
    salaryRange: { min: 350000, max: 3500000, avg: 900000, currency: "INR" },
    growthRate: 18,
    jobOpenings: "3.5L+",
    matchScore: 78,
    requiredEducation: "B.Tech Civil Engineering",
    workMode: ["On-site", "Hybrid"],
    skills: [
      { name: "AutoCAD & Revit", level: "advanced", category: "technical" },
      { name: "Structural Analysis", level: "advanced", category: "domain" },
      { name: "Project Management", level: "intermediate", category: "soft" },
      { name: "Geotechnical Engineering", level: "intermediate", category: "domain" },
      { name: "STAAD Pro", level: "intermediate", category: "technical" },
      { name: "Site Supervision", level: "advanced", category: "domain" },
      { name: "Construction Laws & Codes", level: "intermediate", category: "domain" },
    ],
    salaryByExperience: [
      { label: "Fresher", years: "0-1", min: 350000, max: 700000, avg: 500000 },
      { label: "Junior Engineer", years: "1-4", min: 600000, max: 1200000, avg: 850000 },
      { label: "Site Engineer", years: "4-8", min: 1000000, max: 2000000, avg: 1400000 },
      { label: "Project Manager", years: "8-15", min: 1800000, max: 4000000, avg: 2500000 },
      { label: "Director / VP", years: "15+", min: 3000000, max: 8000000, avg: 5000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 60, openings: 200000 },
      { year: "2021", demand: 65, openings: 220000 },
      { year: "2022", demand: 72, openings: 280000 },
      { year: "2023", demand: 78, openings: 320000 },
      { year: "2024", demand: 84, openings: 360000 },
      { year: "2025", demand: 88, openings: 400000 },
    ],
    educationPath: [
      { stage: "Class 10", duration: "Till Age 16", options: ["Any Board"], description: "Strong Maths & Science base" },
      { stage: "Class 11-12 PCM", duration: "2 years", options: ["Physics", "Chemistry", "Maths"], description: "Focus on Physics and Maths" },
      { stage: "JEE / State Entrance", duration: "1-2 years prep", options: ["JEE Main", "State CET"], description: "Get into NIT or state engineering colleges" },
      { stage: "B.Tech Civil", duration: "4 years", options: ["NIT", "SVNIT", "State Engineering Colleges"], description: "Learn structural, transportation, environmental engineering" },
    ],
    topColleges: [
      { name: "IIT Roorkee", city: "Roorkee", ranking: 1, course: "B.Tech Civil", fees: "₹8.5L total", nirf: 8 },
      { name: "IIT Bombay", city: "Mumbai", ranking: 2, course: "B.Tech Civil", fees: "₹8.5L total" },
      { name: "NIT Trichy", city: "Trichy", ranking: 3, course: "B.Tech Civil", fees: "₹6L total" },
      { name: "BITS Pilani", city: "Pilani", ranking: 4, course: "B.E. Civil", fees: "₹20L total" },
      { name: "Delhi Technological University", city: "Delhi", ranking: 5, course: "B.Tech Civil", fees: "₹5.5L total" },
    ],
    certifications: [
      { name: "PMP Certification", provider: "PMI", duration: "3 months", cost: "₹25,000", difficulty: "advanced" },
      { name: "LEED Green Associate", provider: "USGBC", duration: "2 months", cost: "₹15,000", difficulty: "intermediate" },
      { name: "Primavera P6", provider: "Oracle", duration: "1 month", cost: "₹8,000", difficulty: "intermediate" },
    ],
    famousPeople: [
      { name: "M. Visvesvaraya", role: "Engineer & Statesman", achievement: "Designed Krishna Raja Sagara dam", nationality: "Indian", imageInitials: "MV" },
      { name: "E. Sreedharan", role: "Metro Man", company: "Delhi Metro", achievement: "Built Delhi Metro on time and budget", nationality: "Indian", imageInitials: "ES" },
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Site inspection & safety check", icon: "🔍" },
      { time: "10:00 AM", activity: "Team briefing & task allocation", icon: "📋" },
      { time: "12:00 PM", activity: "Design review with architects", icon: "📐" },
      { time: "1:00 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:00 PM", activity: "Procurement & vendor meetings", icon: "🤝" },
      { time: "4:00 PM", activity: "Progress report & documentation", icon: "📊" },
    ],
    jobRoles: ["Structural Engineer", "Site Engineer", "Project Manager", "Urban Planner", "Environmental Engineer", "Transportation Engineer"],
    companies: ["L&T", "NHAI", "DLF", "Shapoorji Pallonji", "RITES", "CPWD", "Afcons Infrastructure"],
    tags: ["Nation Building", "Government Jobs", "Stable Career", "UPSC Optional"],
    pros: ["GATE can lead to PSU jobs", "Massive infrastructure boom", "Visible results of work", "Government opportunities"],
    cons: ["Lower starting salary vs IT", "Field work in harsh conditions", "Slow growth initially"],
    workLifeBalance: 3,
    creativityIndex: 4,
    socialImpact: 4,
    technicalDepth: 4,
  },
  {
    id: "chartered-accountant",
    name: "Chartered Accountant",
    shortName: "CA",
    icon: "📈",
    emoji: "📈",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    stream: ["Commerce", "Science (PCM)", "Science (PCB)"],
    sector: "Finance / Accounting",
    description:
      "Chartered Accountants are finance professionals who handle auditing, taxation, financial reporting, and advisory services. The CA designation from ICAI is one of India's most prestigious qualifications. CAs work in Big 4 firms, corporates, government, or own practice.",
    shortDescription: "Financial expert handling audits, taxes, and advisory",
    salaryRange: { min: 700000, max: 8000000, avg: 2000000, currency: "INR" },
    growthRate: 20,
    jobOpenings: "2.2L+",
    matchScore: 82,
    requiredEducation: "CA (ICAI) — Foundation, Intermediate, Final",
    workMode: ["On-site", "Hybrid"],
    skills: [
      { name: "Financial Accounting", level: "advanced", category: "domain" },
      { name: "Taxation (GST, IT)", level: "advanced", category: "domain" },
      { name: "Auditing & Assurance", level: "advanced", category: "domain" },
      { name: "Tally ERP / SAP", level: "intermediate", category: "technical" },
      { name: "MS Excel (Advanced)", level: "advanced", category: "technical" },
      { name: "Corporate Law", level: "intermediate", category: "domain" },
      { name: "Analytical Skills", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "CA Fresher", years: "0-1", min: 700000, max: 1500000, avg: 1000000 },
      { label: "Senior CA", years: "2-5", min: 1200000, max: 3000000, avg: 2000000 },
      { label: "Manager", years: "5-10", min: 2500000, max: 5000000, avg: 3500000 },
      { label: "Partner/Director", years: "10-20", min: 4000000, max: 15000000, avg: 7000000 },
      { label: "Own Practice", years: "10+", min: 1000000, max: 50000000, avg: 5000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 72, openings: 150000 },
      { year: "2021", demand: 75, openings: 165000 },
      { year: "2022", demand: 79, openings: 185000 },
      { year: "2023", demand: 83, openings: 200000 },
      { year: "2024", demand: 87, openings: 220000 },
      { year: "2025", demand: 91, openings: 250000 },
    ],
    educationPath: [
      { stage: "Class 10", duration: "Till Age 16", options: ["Any Board"], description: "Build math and commerce understanding" },
      { stage: "Class 11-12 Commerce", duration: "2 years", options: ["Accountancy", "Business Studies", "Economics", "Maths"], description: "Commerce with Maths preferred. 55%+ needed" },
      { stage: "CA Foundation", duration: "4 months after 12th", options: ["Self study", "Coaching"], description: "First step — 4 papers on accounting, law, economics, maths" },
      { stage: "CA Intermediate", duration: "8 months + 3 years articleship", options: ["ICAI study material", "Coaching"], description: "Core accounting, taxation, auditing papers" },
      { stage: "CA Final", duration: "After 3 years articleship", options: ["Self study", "Elite coaching"], description: "Advanced financial reporting, SFM, audit — clear to get CA designation" },
    ],
    topColleges: [
      { name: "ICAI (Institute)", city: "Pan India", ranking: 1, course: "CA Foundation/Inter/Final", fees: "₹50,000 total" },
      { name: "SRCC Delhi", city: "New Delhi", ranking: 2, course: "B.Com (H) + CA", fees: "₹30,000/year" },
      { name: "Loyola College", city: "Chennai", ranking: 3, course: "B.Com + CA", fees: "₹40,000/year" },
    ],
    certifications: [
      { name: "CPA (US CPA)", provider: "AICPA", duration: "1-2 years", cost: "₹2,50,000", difficulty: "advanced" },
      { name: "CFA Level 1", provider: "CFA Institute", duration: "6 months", cost: "₹60,000", difficulty: "intermediate" },
      { name: "Certified Information Systems Auditor", provider: "ISACA", duration: "4 months", cost: "₹25,000", difficulty: "intermediate" },
    ],
    famousPeople: [
      { name: "Kumar Mangalam Birla", role: "Chairman", company: "Aditya Birla Group", achievement: "Built a $60B empire after CA", nationality: "Indian", imageInitials: "KB" },
      { name: "Deepak Parekh", role: "Chairman", company: "HDFC", achievement: "Built India's largest housing finance company", nationality: "Indian", imageInitials: "DP" },
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Client tax filing review", icon: "📊" },
      { time: "10:30 AM", activity: "Audit fieldwork at client site", icon: "🔍" },
      { time: "1:00 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:00 PM", activity: "GST return preparation", icon: "📋" },
      { time: "4:00 PM", activity: "Client advisory call", icon: "📞" },
      { time: "5:30 PM", activity: "MIS reports & documentation", icon: "📝" },
    ],
    jobRoles: ["Statutory Auditor", "Tax Consultant", "CFO", "Finance Manager", "Internal Auditor", "Cost Accountant"],
    companies: ["Deloitte", "PWC", "KPMG", "EY", "Grant Thornton", "HDFC", "Tata Group", "Infosys"],
    tags: ["Prestigious", "High Earning", "Entrepreneurship", "UPSC Optional", "Always in Demand"],
    pros: ["One of India's most respected designations", "Entrepreneurship opportunity", "Global recognition", "Finance is always needed"],
    cons: ["Very difficult exams (low pass rate ~5%)", "Long articleship period", "Very demanding during tax season"],
    workLifeBalance: 2,
    creativityIndex: 2,
    socialImpact: 3,
    technicalDepth: 4,
  },
  {
    id: "ias-officer",
    name: "IAS Officer (UPSC)",
    shortName: "IAS",
    icon: "🏛️",
    emoji: "🏛️",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-700",
    stream: ["Science (PCM)", "Science (PCB)", "Commerce", "Arts/Humanities"],
    sector: "Government / Public Service",
    description:
      "Indian Administrative Service officers are the backbone of India's bureaucracy. They implement government policies, manage districts, and drive development at grassroots. IAS is considered the most prestigious exam in India, open to all graduates regardless of stream.",
    shortDescription: "Lead governance and public administration at highest levels",
    salaryRange: { min: 600000, max: 2500000, avg: 1200000, currency: "INR" },
    growthRate: 10,
    jobOpenings: "200 seats/year",
    matchScore: 75,
    requiredEducation: "Any Graduate + UPSC CSE",
    workMode: ["On-site"],
    skills: [
      { name: "Current Affairs & GS", level: "advanced", category: "domain" },
      { name: "Essay Writing", level: "advanced", category: "soft" },
      { name: "Decision Making", level: "advanced", category: "soft" },
      { name: "Leadership", level: "advanced", category: "soft" },
      { name: "Policy Analysis", level: "advanced", category: "domain" },
      { name: "Public Speaking", level: "advanced", category: "soft" },
      { name: "Crisis Management", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "SDM / Joint Collector", years: "0-5", min: 600000, max: 900000, avg: 750000 },
      { label: "District Collector", years: "5-12", min: 900000, max: 1400000, avg: 1100000 },
      { label: "Secretary Level", years: "12-25", min: 1400000, max: 2000000, avg: 1700000 },
      { label: "Additional Secretary", years: "25-30", min: 1800000, max: 2500000, avg: 2100000 },
      { label: "Cabinet Secretary", years: "30+", min: 2500000, max: 3000000, avg: 2700000 },
    ],
    marketDemand: [
      { year: "2020", demand: 75, openings: 180 },
      { year: "2021", demand: 75, openings: 712 },
      { year: "2022", demand: 75, openings: 861 },
      { year: "2023", demand: 75, openings: 1105 },
      { year: "2024", demand: 75, openings: 1056 },
      { year: "2025", demand: 75, openings: 979 },
    ],
    educationPath: [
      { stage: "Class 10-12", duration: "Till 18", options: ["Any Stream"], description: "Any stream works — choose wisely based on UPSC optional" },
      { stage: "Graduation", duration: "3-4 years", options: ["BA", "B.Tech", "MBBS", "B.Com", "LLB — any degree"], description: "Choose subject that aligns with your UPSC optional subject" },
      { stage: "UPSC Preparation", duration: "1-3 years", options: ["Delhi coaching", "Self-study", "Online"], description: "Cover Prelims (GS + CSAT) and Mains (9 papers) thoroughly" },
      { stage: "UPSC CSE", duration: "Year-long exam", options: ["Prelims → Mains → Interview"], description: "Top 1000 out of 10 lakh applicants clear all stages" },
      { stage: "LBSNAA Training", duration: "2 years", options: ["Mussoorie", "State training"], description: "Post-selection training at Lal Bahadur Shastri National Academy" },
    ],
    topColleges: [
      { name: "SRCC, Delhi University", city: "New Delhi", ranking: 1, course: "BA Economics (Good UPSC Optional base)", fees: "₹15,000/year" },
      { name: "Jawaharlal Nehru University", city: "New Delhi", ranking: 2, course: "BA/MA Social Sciences", fees: "₹500/year (highly subsidized)" },
      { name: "IIT (any)", city: "Pan India", ranking: 3, course: "Any B.Tech (optional: Geography/Economics)", fees: "₹8.5L total" },
      { name: "Drishti IAS / Vision IAS", city: "Delhi", ranking: 4, course: "UPSC Coaching", fees: "₹1.5-2L" },
    ],
    certifications: [
      { name: "UPSC CSE Cleared", provider: "UPSC India", duration: "1-3 years prep", cost: "₹50,000-2,00,000", difficulty: "advanced" },
    ],
    famousPeople: [
      { name: "T.N. Seshan", role: "Chief Election Commissioner", achievement: "Transformed India's election process", nationality: "Indian", imageInitials: "TS" },
      { name: "Durga Shakti Nagpal", role: "IAS Officer", achievement: "Courageously took on sand mafia", nationality: "Indian", imageInitials: "DN" },
      { name: "Armstrong Pame", role: "IAS Officer (Manipur)", achievement: "Built 100km road using Facebook crowdfunding", nationality: "Indian", imageInitials: "AP" },
    ],
    dayInLife: [
      { time: "7:00 AM", activity: "Morning briefing & newspaper review", icon: "📰" },
      { time: "9:00 AM", activity: "District/office meetings", icon: "🤝" },
      { time: "11:00 AM", activity: "Field visits & inspections", icon: "🚗" },
      { time: "1:00 PM", activity: "Lunch & press briefing", icon: "🍽️" },
      { time: "2:00 PM", activity: "Policy implementation review", icon: "📋" },
      { time: "5:00 PM", activity: "Public grievance hearing", icon: "👥" },
      { time: "7:00 PM", activity: "Emergency duty if required", icon: "🚨" },
    ],
    jobRoles: ["District Collector", "SDM", "State Secretary", "Joint Secretary GOI", "Cabinet Secretary", "Ambassador"],
    companies: ["Government of India", "State Governments", "PSUs", "International Organizations"],
    tags: ["Nation Building", "Prestige", "Power & Responsibility", "All Streams"],
    pros: ["Highest prestige in India", "Massive power to change lives", "Job security for life", "Perks: bungalow, car, staff"],
    cons: ["Extremely competitive (0.1% selection)", "Years of preparation", "Transfers away from family", "Political interference sometimes"],
    workLifeBalance: 2,
    creativityIndex: 3,
    socialImpact: 5,
    technicalDepth: 2,
  },
  {
    id: "product-manager",
    name: "Product Manager",
    shortName: "PM",
    icon: "🚀",
    emoji: "🚀",
    color: "#f97316",
    gradient: "from-orange-500 to-red-500",
    stream: ["Science (PCM)", "Commerce", "Arts/Humanities"],
    sector: "Technology / Business",
    description:
      "Product Managers define the vision, strategy, and roadmap for tech products. They bridge engineering, design, and business teams. PMs at top startups and tech companies are among the highest-paid professionals in India, especially with AI driving product innovation.",
    shortDescription: "Define product vision and lead cross-functional teams",
    salaryRange: { min: 1200000, max: 8000000, avg: 3000000, currency: "INR" },
    growthRate: 30,
    jobOpenings: "80,000+",
    matchScore: 86,
    requiredEducation: "Any Degree + MBA (preferred)",
    workMode: ["Remote", "Hybrid"],
    skills: [
      { name: "Product Roadmapping", level: "advanced", category: "domain" },
      { name: "User Research & UX", level: "advanced", category: "domain" },
      { name: "Agile / Scrum", level: "advanced", category: "technical" },
      { name: "Data Analytics", level: "intermediate", category: "technical" },
      { name: "Stakeholder Management", level: "advanced", category: "soft" },
      { name: "Strategic Thinking", level: "advanced", category: "soft" },
      { name: "SQL basics", level: "intermediate", category: "technical" },
    ],
    salaryByExperience: [
      { label: "APM", years: "0-2", min: 1200000, max: 2000000, avg: 1500000 },
      { label: "PM", years: "2-5", min: 2000000, max: 4000000, avg: 2800000 },
      { label: "Senior PM", years: "5-8", min: 3500000, max: 7000000, avg: 5000000 },
      { label: "Group PM / Director", years: "8-12", min: 5000000, max: 12000000, avg: 8000000 },
      { label: "VP Product / CPO", years: "12+", min: 8000000, max: 30000000, avg: 15000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 60, openings: 30000 },
      { year: "2021", demand: 68, openings: 42000 },
      { year: "2022", demand: 76, openings: 58000 },
      { year: "2023", demand: 84, openings: 72000 },
      { year: "2024", demand: 90, openings: 85000 },
      { year: "2025", demand: 95, openings: 100000 },
    ],
    educationPath: [
      { stage: "Any Bachelor's", duration: "3-4 years", options: ["B.Tech", "BBA", "BA Economics", "B.Com"], description: "Technical background preferred but not mandatory" },
      { stage: "Work Experience", duration: "2-4 years", options: ["Software Engineering", "Business Analysis", "Consulting"], description: "Build domain expertise before PM transition" },
      { stage: "MBA (preferred)", duration: "2 years", options: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "ISB Hyderabad"], description: "MBA from top school dramatically accelerates PM career" },
      { stage: "PM Bootcamp (Alternative)", duration: "3-6 months", options: ["Product Space", "Pragmatic", "Exponent", "PM School"], description: "Direct path without MBA through structured PM programs" },
    ],
    topColleges: [
      { name: "IIM Ahmedabad", city: "Ahmedabad", ranking: 1, course: "PGP MBA", fees: "₹33L total" },
      { name: "IIM Bangalore", city: "Bengaluru", ranking: 2, course: "PGP MBA", fees: "₹28L total" },
      { name: "ISB Hyderabad", city: "Hyderabad", ranking: 3, course: "PGP MBA", fees: "₹43L total" },
      { name: "IIT (B.Tech → PM)", city: "Pan India", ranking: 4, course: "B.Tech + PM transition", fees: "₹8.5L" },
    ],
    certifications: [
      { name: "Product Management Certification", provider: "Product School", duration: "3 months", cost: "₹1,50,000", difficulty: "intermediate" },
      { name: "Agile Certified Practitioner", provider: "PMI", duration: "2 months", cost: "₹20,000", difficulty: "intermediate" },
      { name: "Google UX Design", provider: "Google/Coursera", duration: "6 months", cost: "₹2,500", difficulty: "beginner" },
    ],
    famousPeople: [
      { name: "Kevin Systrom", role: "Co-founder & CPO", company: "Instagram", achievement: "Built Instagram from idea to 1B users", nationality: "American", imageInitials: "KS" },
      { name: "Marissa Mayer", role: "CEO", company: "Yahoo / Ex-Google PM", achievement: "First female CEO of Fortune 500 tech company", nationality: "American", imageInitials: "MM" },
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Review product metrics & KPIs", icon: "📊" },
      { time: "10:00 AM", activity: "Standup with engineering team", icon: "🤝" },
      { time: "11:00 AM", activity: "User interviews / research sessions", icon: "👥" },
      { time: "1:00 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:00 PM", activity: "Write PRDs & feature specs", icon: "📝" },
      { time: "4:00 PM", activity: "Stakeholder alignment call", icon: "📞" },
      { time: "5:30 PM", activity: "Roadmap review & prioritization", icon: "🗺️" },
    ],
    jobRoles: ["APM", "PM", "Senior PM", "Group PM", "Director of Product", "CPO", "VP Product"],
    companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Swiggy", "Razorpay", "CRED", "Meesho", "PhonePe"],
    tags: ["Highest Salaries", "Startup Hot Role", "MBA Track", "Strategy + Tech"],
    pros: ["One of highest paid tech roles", "High impact on millions of users", "Dynamic, never routine", "MBA + tech combo"],
    cons: ["High responsibility without direct authority", "Needs experience before entry", "MBA fees can be very high"],
    workLifeBalance: 3,
    creativityIndex: 5,
    socialImpact: 3,
    technicalDepth: 3,
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer / UI/UX",
    shortName: "Design",
    icon: "🎨",
    emoji: "🎨",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-500",
    stream: ["Arts/Humanities", "Commerce", "Science (PCM)"],
    sector: "Creative / Technology",
    description:
      "Graphic Designers and UI/UX designers create visual experiences for brands, apps, and digital products. With India's design industry growing rapidly, especially in tech startups, skilled designers command premium salaries. UI/UX has become a critical tech role.",
    shortDescription: "Create visual experiences for brands and digital products",
    salaryRange: { min: 300000, max: 4000000, avg: 1200000, currency: "INR" },
    growthRate: 22,
    jobOpenings: "1.5L+",
    matchScore: 79,
    requiredEducation: "B.Des / BFA / Diploma",
    workMode: ["Remote", "Freelance", "Hybrid"],
    skills: [
      { name: "Figma & Adobe XD", level: "advanced", category: "technical" },
      { name: "Adobe Illustrator & Photoshop", level: "advanced", category: "technical" },
      { name: "UI/UX Design Principles", level: "advanced", category: "domain" },
      { name: "Typography & Color Theory", level: "advanced", category: "domain" },
      { name: "User Research & Prototyping", level: "intermediate", category: "domain" },
      { name: "Motion Design (After Effects)", level: "intermediate", category: "technical" },
      { name: "Creativity", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Junior Designer", years: "0-2", min: 300000, max: 700000, avg: 450000 },
      { label: "Mid Designer", years: "2-5", min: 700000, max: 1800000, avg: 1200000 },
      { label: "Senior Designer", years: "5-8", min: 1500000, max: 3500000, avg: 2200000 },
      { label: "Lead Designer", years: "8-12", min: 2500000, max: 6000000, avg: 4000000 },
      { label: "Design Director / Head", years: "12+", min: 4000000, max: 12000000, avg: 7000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 58, openings: 80000 },
      { year: "2021", demand: 65, openings: 95000 },
      { year: "2022", demand: 72, openings: 115000 },
      { year: "2023", demand: 80, openings: 140000 },
      { year: "2024", demand: 87, openings: 165000 },
      { year: "2025", demand: 92, openings: 195000 },
    ],
    educationPath: [
      { stage: "Class 12 (Any Stream)", duration: "Till 18", options: ["Arts preferred but any stream"], description: "Strong visual arts aptitude matters more than stream" },
      { stage: "Design Entrance", duration: "Preparation", options: ["NID DAT", "NIFT Entrance", "UCEED"], description: "Crack premier design entrances" },
      { stage: "B.Des Degree", duration: "4 years", options: ["NID Ahmedabad", "NIFT Delhi", "MIT Institute of Design"], description: "Foundation, communication design, digital design" },
    ],
    topColleges: [
      { name: "NID Ahmedabad", city: "Ahmedabad", ranking: 1, course: "B.Des Communication Design", fees: "₹7.5L total" },
      { name: "NIFT Delhi", city: "New Delhi", ranking: 2, course: "B.Des Fashion / Communication", fees: "₹6L total" },
      { name: "IDC IIT Bombay", city: "Mumbai", ranking: 3, course: "M.Des (Post B.Tech)", fees: "₹2L total" },
      { name: "MIT Institute of Design", city: "Pune", ranking: 4, course: "B.Des", fees: "₹12L total" },
    ],
    certifications: [
      { name: "Google UX Design Certificate", provider: "Google/Coursera", duration: "6 months", cost: "₹2,500", difficulty: "beginner" },
      { name: "Interaction Design Foundation", provider: "IDF", duration: "Ongoing", cost: "₹4,000/yr", difficulty: "intermediate" },
      { name: "Adobe Certified Expert", provider: "Adobe", duration: "2 months", cost: "₹10,000", difficulty: "intermediate" },
    ],
    famousPeople: [
      { name: "Jonathan Ive", role: "Chief Design Officer", company: "Apple", achievement: "Designed iPhone, iMac, MacBook", nationality: "British-American", imageInitials: "JI" },
      { name: "Sagmeister & Walsh", role: "Design Studio", achievement: "World's most awarded design firm", nationality: "American", imageInitials: "SW" },
    ],
    dayInLife: [
      { time: "9:30 AM", activity: "Design critique & team review", icon: "🎨" },
      { time: "10:30 AM", activity: "Wireframing in Figma", icon: "📱" },
      { time: "12:00 PM", activity: "User testing sessions", icon: "👥" },
      { time: "1:30 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:30 PM", activity: "Visual design & branding", icon: "✨" },
      { time: "5:00 PM", activity: "Client presentation", icon: "🖥️" },
    ],
    jobRoles: ["UI Designer", "UX Designer", "Brand Designer", "Motion Designer", "Product Designer", "Creative Director"],
    companies: ["Flipkart", "Swiggy", "Zomato", "Adobe", "Design agencies", "Startups", "Freelance"],
    tags: ["Creative", "Remote Friendly", "Freelance Possible", "High Demand in Startups"],
    pros: ["Creative freedom", "Massive freelance potential", "Remote work easy", "Fast growing field with AI"],
    cons: ["Portfolio-dependent hiring", "Client revisions can be draining", "Takes time to build name"],
    workLifeBalance: 4,
    creativityIndex: 5,
    socialImpact: 2,
    technicalDepth: 3,
  },
  {
    id: "lawyer",
    name: "Lawyer / Legal Professional",
    shortName: "Law",
    icon: "⚖️",
    emoji: "⚖️",
    color: "#64748b",
    gradient: "from-slate-600 to-gray-700",
    stream: ["Arts/Humanities", "Commerce", "Science (PCM)", "Science (PCB)"],
    sector: "Legal / Government",
    description:
      "Lawyers provide legal advice, represent clients in court, and draft legal documents. India's legal profession is transforming with tech law, IPR, and corporate law booming. Top lawyers at elite firms command salaries rivaling IT professionals.",
    shortDescription: "Provide legal expertise and represent clients in legal matters",
    salaryRange: { min: 300000, max: 10000000, avg: 1500000, currency: "INR" },
    growthRate: 15,
    jobOpenings: "1.8L+",
    matchScore: 71,
    requiredEducation: "LLB (3yr after graduation) or BA LLB (5yr integrated)",
    workMode: ["On-site", "Hybrid"],
    skills: [
      { name: "Legal Research & Analysis", level: "advanced", category: "domain" },
      { name: "Court Procedure & Advocacy", level: "advanced", category: "domain" },
      { name: "Contract Drafting", level: "advanced", category: "domain" },
      { name: "Constitutional Law", level: "advanced", category: "domain" },
      { name: "Critical Thinking", level: "advanced", category: "soft" },
      { name: "Public Speaking & Debate", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Junior Associate", years: "0-3", min: 300000, max: 800000, avg: 500000 },
      { label: "Associate", years: "3-7", min: 700000, max: 2000000, avg: 1200000 },
      { label: "Senior Associate", years: "7-12", min: 1500000, max: 4000000, avg: 2500000 },
      { label: "Partner", years: "12-20", min: 3000000, max: 15000000, avg: 7000000 },
      { label: "Senior Partner", years: "20+", min: 5000000, max: 50000000, avg: 15000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 62, openings: 100000 },
      { year: "2021", demand: 65, openings: 115000 },
      { year: "2022", demand: 69, openings: 135000 },
      { year: "2023", demand: 73, openings: 155000 },
      { year: "2024", demand: 78, openings: 175000 },
      { year: "2025", demand: 83, openings: 200000 },
    ],
    educationPath: [
      { stage: "Class 12 (Any stream)", duration: "Till 18", options: ["Any stream works"], description: "Arts with Humanities gives good background for law" },
      { stage: "Law Entrance", duration: "Preparation", options: ["CLAT", "AILET", "LSAT India", "State CETs"], description: "CLAT is gateway to 22 National Law Universities" },
      { stage: "BA LLB (Integrated)", duration: "5 years", options: ["NLSIU Bangalore", "NLU Delhi", "NALSAR Hyderabad"], description: "Preferred route — combines legal with humanities education" },
      { stage: "LLM (Optional)", duration: "1-2 years", options: ["Specialization in IP Law", "Corporate Law", "International Law"], description: "Abroad LLM (Oxford, Harvard) dramatically boosts career" },
    ],
    topColleges: [
      { name: "NLSIU Bangalore", city: "Bengaluru", ranking: 1, course: "BA LLB", fees: "₹2.5L/year" },
      { name: "NLU Delhi", city: "New Delhi", ranking: 2, course: "BA LLB", fees: "₹2L/year" },
      { name: "NALSAR Hyderabad", city: "Hyderabad", ranking: 3, course: "BA LLB", fees: "₹1.8L/year" },
      { name: "NUJS Kolkata", city: "Kolkata", ranking: 4, course: "BA LLB", fees: "₹1.5L/year" },
    ],
    certifications: [
      { name: "Bar Council Enrollment", provider: "Bar Council of India", duration: "After LLB", cost: "₹5,000", difficulty: "intermediate" },
      { name: "IP Law Certification", provider: "WIPO Academy", duration: "3 months", cost: "Free", difficulty: "intermediate" },
    ],
    famousPeople: [
      { name: "Ram Jethmalani", role: "Senior Advocate", achievement: "India's most celebrated criminal lawyer", nationality: "Indian", imageInitials: "RJ" },
      { name: "Harish Salve", role: "Senior Advocate", company: "Supreme Court of India", achievement: "Represented India in Kulbhushan Jadhav case (ICJ)", nationality: "Indian", imageInitials: "HS" },
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Case research & legal reading", icon: "📚" },
      { time: "10:00 AM", activity: "Court appearances / hearings", icon: "⚖️" },
      { time: "1:00 PM", activity: "Lunch with clients or colleagues", icon: "🍽️" },
      { time: "2:30 PM", activity: "Client consultations", icon: "👥" },
      { time: "4:00 PM", activity: "Drafting petitions & contracts", icon: "📝" },
      { time: "6:00 PM", activity: "Legal research for upcoming cases", icon: "🔍" },
    ],
    jobRoles: ["Advocate", "Corporate Lawyer", "Criminal Lawyer", "IP Attorney", "Public Prosecutor", "In-house Counsel", "Judge (via judiciary exam)"],
    companies: ["AZB & Partners", "Cyril Amarchand Mangaldas", "Luthra & Luthra", "J. Sagar Associates", "Khaitan & Co", "Supreme Court of India"],
    tags: ["Prestigious", "Social Justice", "High Earning Potential", "Entrepreneurship"],
    pros: ["High earning potential at top", "Great intellectual work", "Advocacy for justice", "Always in demand"],
    cons: ["Very slow early career growth", "Dependent on mentors and contacts", "Long hours during trials"],
    workLifeBalance: 2,
    creativityIndex: 3,
    socialImpact: 4,
    technicalDepth: 3,
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur / Startup Founder",
    shortName: "Founder",
    icon: "🦁",
    emoji: "🦁",
    color: "#f59e0b",
    gradient: "from-yellow-400 to-orange-500",
    stream: ["Science (PCM)", "Commerce", "Arts/Humanities"],
    sector: "All Sectors",
    description:
      "Entrepreneurs identify market problems and build businesses to solve them. India's startup ecosystem — the world's 3rd largest — offers unprecedented opportunities. With unicorn factories like Y Combinator, IIT incubators, and massive VC funding, this is the golden era for Indian founders.",
    shortDescription: "Build innovative businesses and create value for society",
    salaryRange: { min: 0, max: 100000000, avg: 3000000, currency: "INR" },
    growthRate: 40,
    jobOpenings: "Unlimited",
    matchScore: 80,
    requiredEducation: "Any Degree (or Dropout with idea)",
    workMode: ["Anywhere"],
    skills: [
      { name: "Business Strategy", level: "advanced", category: "domain" },
      { name: "Sales & Marketing", level: "advanced", category: "domain" },
      { name: "Financial Management", level: "intermediate", category: "domain" },
      { name: "Leadership & Team Building", level: "advanced", category: "soft" },
      { name: "Problem Solving", level: "advanced", category: "soft" },
      { name: "Resilience & Grit", level: "advanced", category: "soft" },
      { name: "Networking", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Idea Stage", years: "0-1", min: 0, max: 500000, avg: 100000 },
      { label: "Early Stage", years: "1-3", min: 500000, max: 3000000, avg: 1000000 },
      { label: "Growth Stage", years: "3-5", min: 2000000, max: 15000000, avg: 5000000 },
      { label: "Scale Stage", years: "5-10", min: 5000000, max: 100000000, avg: 20000000 },
      { label: "Unicorn Founder", years: "10+", min: 10000000, max: 10000000000, avg: 100000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 60, openings: 5000 },
      { year: "2021", demand: 70, openings: 8000 },
      { year: "2022", demand: 78, openings: 11000 },
      { year: "2023", demand: 82, openings: 15000 },
      { year: "2024", demand: 88, openings: 20000 },
      { year: "2025", demand: 93, openings: 28000 },
    ],
    educationPath: [
      { stage: "Any Education", duration: "Flexible", options: ["College", "Dropout", "Online courses"], description: "Education helps but isn't mandatory — learn what your business needs" },
      { stage: "Domain Expertise", duration: "1-5 years", options: ["Work in the industry first", "Build projects"], description: "Deep understanding of the problem space is critical" },
      { stage: "Build MVP", duration: "3-6 months", options: ["No-code tools", "Developer co-founder", "Freelancers"], description: "Launch a minimum viable product fast and iterate" },
      { stage: "Fundraising / Bootstrapping", duration: "Ongoing", options: ["Angel investors", "VC funding", "Revenue bootstrapping"], description: "Build to profitability or raise smart money" },
    ],
    topColleges: [
      { name: "IIT Bombay (E-Cell)", city: "Mumbai", ranking: 1, course: "Any + Entrepreneurship Cell", fees: "₹8.5L" },
      { name: "IIM Ahmedabad (CIIE)", city: "Ahmedabad", ranking: 2, course: "MBA + CIIE Incubator", fees: "₹33L" },
      { name: "BITS Pilani (BOSM)", city: "Pilani", ranking: 3, course: "Any + Startup Hub", fees: "₹22L" },
      { name: "Y Combinator (Online)", city: "Global", ranking: 1, course: "YC Startup Program", fees: "7% equity" },
    ],
    certifications: [
      { name: "Y Combinator Startup School", provider: "Y Combinator", duration: "8 weeks", cost: "Free", difficulty: "intermediate" },
      { name: "Entrepreneurship Specialization", provider: "Wharton/Coursera", duration: "4 months", cost: "₹3,000", difficulty: "beginner" },
    ],
    famousPeople: [
      { name: "Ritesh Agarwal", role: "Founder & CEO", company: "OYO Rooms", achievement: "World's youngest billionaire at 24", nationality: "Indian", imageInitials: "RA" },
      { name: "Byju Raveendran", role: "Founder", company: "BYJU's", achievement: "India's first EdTech unicorn", nationality: "Indian", imageInitials: "BR" },
      { name: "Falguni Nayar", role: "Founder & CEO", company: "Nykaa", achievement: "Built $7B beauty empire after 50", nationality: "Indian", imageInitials: "FN" },
    ],
    dayInLife: [
      { time: "7:00 AM", activity: "Review overnight metrics & emails", icon: "📊" },
      { time: "9:00 AM", activity: "Team standup", icon: "🤝" },
      { time: "10:00 AM", activity: "Product / strategy deep work", icon: "🧠" },
      { time: "1:00 PM", activity: "Investor / partner meetings", icon: "💼" },
      { time: "3:00 PM", activity: "Customer calls", icon: "📞" },
      { time: "5:00 PM", activity: "Sales & growth hacking", icon: "🚀" },
      { time: "8:00 PM", activity: "Reading, learning, networking", icon: "📚" },
    ],
    jobRoles: ["Founder/CEO", "Co-founder", "Solopreneur", "Angel Investor", "Startup Advisor"],
    companies: ["Your own startup!", "Y Combinator alumni", "Sequoia backed", "Blume Ventures portfolio"],
    tags: ["Unlimited Upside", "High Risk", "Innovation", "India Startup Boom"],
    pros: ["Unlimited income potential", "Build your vision", "Create jobs", "Global impact"],
    cons: ["Very high risk of failure (90%)", "Irregular income especially early", "Extreme stress", "Long hours with no guaranteed reward"],
    workLifeBalance: 1,
    creativityIndex: 5,
    socialImpact: 5,
    technicalDepth: 3,
  },
  {
    id: "content-creator",
    name: "Content Creator / Influencer",
    shortName: "Creator",
    icon: "🎬",
    emoji: "🎬",
    color: "#ef4444",
    gradient: "from-red-500 to-pink-500",
    stream: ["Arts/Humanities", "Commerce", "Science (PCM)"],
    sector: "Media / Digital",
    description:
      "Content creators build audiences on YouTube, Instagram, LinkedIn, and podcasts. India's creator economy is valued at ₹2,200 crore and growing. Top creators earn crores through brand deals, courses, merchandise, and community subscriptions.",
    shortDescription: "Build audiences and monetize content across digital platforms",
    salaryRange: { min: 100000, max: 20000000, avg: 1500000, currency: "INR" },
    growthRate: 45,
    jobOpenings: "Open",
    matchScore: 73,
    requiredEducation: "Any Background",
    workMode: ["Remote", "Freelance"],
    skills: [
      { name: "Video Production & Editing", level: "advanced", category: "technical" },
      { name: "Storytelling", level: "advanced", category: "soft" },
      { name: "Social Media Marketing", level: "advanced", category: "domain" },
      { name: "SEO & Analytics", level: "intermediate", category: "technical" },
      { name: "Niche Expertise", level: "advanced", category: "domain" },
      { name: "Consistency & Discipline", level: "advanced", category: "soft" },
    ],
    salaryByExperience: [
      { label: "Nano Creator (<10K)", years: "0-1", min: 50000, max: 300000, avg: 150000 },
      { label: "Micro (10K-100K)", years: "1-2", min: 300000, max: 1500000, avg: 700000 },
      { label: "Mid-tier (100K-1M)", years: "2-4", min: 1000000, max: 5000000, avg: 2500000 },
      { label: "Macro (1M+)", years: "4-7", min: 3000000, max: 15000000, avg: 7000000 },
      { label: "Mega (10M+)", years: "7+", min: 10000000, max: 200000000, avg: 30000000 },
    ],
    marketDemand: [
      { year: "2020", demand: 50, openings: 100000 },
      { year: "2021", demand: 62, openings: 200000 },
      { year: "2022", demand: 74, openings: 350000 },
      { year: "2023", demand: 83, openings: 500000 },
      { year: "2024", demand: 90, openings: 700000 },
      { year: "2025", demand: 95, openings: 1000000 },
    ],
    educationPath: [
      { stage: "Start Anytime", duration: "No fixed path", options: ["Any age, any stream"], description: "Passion and consistency matter more than degree" },
      { stage: "Pick Your Niche", duration: "1-3 months", options: ["Education", "Finance", "Tech", "Fitness", "Comedy", "Travel"], description: "Find your unique angle in a niche you're passionate about" },
      { stage: "Build & Grow", duration: "6-18 months", options: ["YouTube", "Instagram", "LinkedIn", "Podcast"], description: "Consistent posting, audience engagement, collaborations" },
      { stage: "Monetize", duration: "After 10K followers", options: ["Brand deals", "Courses", "Merchandise", "Consulting"], description: "Multiple revenue streams are key to sustainable income" },
    ],
    topColleges: [
      { name: "Creator Academy (YouTube)", city: "Online", ranking: 1, course: "YouTube Creator Academy", fees: "Free" },
      { name: "Symbiosis Media College", city: "Pune", ranking: 2, course: "Mass Media / Journalism", fees: "₹3L/year" },
    ],
    certifications: [
      { name: "HubSpot Content Marketing", provider: "HubSpot Academy", duration: "6 hours", cost: "Free", difficulty: "beginner" },
      { name: "Meta Social Media Marketing", provider: "Meta/Coursera", duration: "7 months", cost: "₹2,500", difficulty: "intermediate" },
    ],
    famousPeople: [
      { name: "Sandeep Maheshwari", role: "Motivational Speaker & Creator", achievement: "50M+ YouTube subscribers", nationality: "Indian", imageInitials: "SM" },
      { name: "Ankur Warikoo", role: "Entrepreneur & Content Creator", achievement: "Built ₹200Cr business + 6M followers", nationality: "Indian", imageInitials: "AW" },
      { name: "Niharika NM", role: "Comedy Creator", achievement: "5M+ subscribers, Netflix special", nationality: "Indian", imageInitials: "NN" },
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Idea brainstorming & scripting", icon: "💡" },
      { time: "10:00 AM", activity: "Filming content", icon: "🎥" },
      { time: "1:00 PM", activity: "Lunch", icon: "🍽️" },
      { time: "2:00 PM", activity: "Video editing & post-production", icon: "✂️" },
      { time: "4:00 PM", activity: "Brand partnership meetings", icon: "🤝" },
      { time: "5:30 PM", activity: "Community engagement & comments", icon: "💬" },
      { time: "7:00 PM", activity: "Analytics review & strategy", icon: "📊" },
    ],
    jobRoles: ["YouTuber", "Instagram Influencer", "Podcaster", "LinkedIn Thought Leader", "Brand Ambassador", "Digital Marketer"],
    companies: ["Self-employed", "MCN Agencies", "Brand deals", "Streaming platforms"],
    tags: ["Freedom", "Creator Economy Boom", "Work From Anywhere", "No Ceiling"],
    pros: ["Complete freedom and creativity", "Income scales with audience", "Work from anywhere", "Be your own boss"],
    cons: ["Highly unpredictable income", "Algorithm changes can hurt overnight", "Very competitive", "Mental health challenges"],
    workLifeBalance: 3,
    creativityIndex: 5,
    socialImpact: 3,
    technicalDepth: 2,
  },
];

// Helper functions
export function getCareerById(id: string): Career | undefined {
  return careers.find((c) => c.id === id);
}

export function getCareersByStream(stream: string): Career[] {
  return careers.filter((c) => c.stream.some((s) => s.toLowerCase().includes(stream.toLowerCase())));
}

export function getCareersBySector(sector: string): Career[] {
  return careers.filter((c) => c.sector.toLowerCase().includes(sector.toLowerCase()));
}

export function getTopMatchedCareers(limit = 5): Career[] {
  return [...careers].sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)).slice(0, limit);
}

export function formatSalary(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
}

export const streams = [
  "Science (PCM)",
  "Science (PCB)",
  "Commerce",
  "Arts/Humanities",
];

export const sectors = [
  "Technology",
  "Healthcare",
  "Finance",
  "Government",
  "Creative",
  "Legal",
  "Infrastructure",
  "Media",
];
