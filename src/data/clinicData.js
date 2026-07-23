export const clinicInfo = {
  name: "New Life Diagnostic Centre & Polyclinic",
  tagline: "Your Health, Our Priority",
  city: "Chaibasa",
  district: "West Singhbhum",
  state: "Jharkhand",
  pincode: "833201",
  address: "Main Road, Opp. Sadar Hospital, Chaibasa, West Singhbhum, Jharkhand - 833201",
  phonePrimary: "+91 94313 88900",
  phoneSecondary: "+91 6582 255100",
  emergencyPhone: "+91 94313 88900",
  whatsapp: "+919431388900",
  email: "info@newlifediagnostic.in",
  appointmentEmail: "appointments@newlifediagnostic.in",
  workingHours: {
    weekdays: "Monday - Saturday: 7:00 AM - 8:00 PM",
    sunday: "Sunday: 8:00 AM - 2:00 PM",
    emergency: "Emergency Hotline 24/7 Available"
  },
  rating: 4.9,
  reviewsCount: 384,
  accreditations: ["NABL Quality Aligned Lab", "ISO 9001:2015 Certified", "Government Approved Diagnostic Facility"]
};

export const doctorsData = [
  {
    id: "dr-ak-sharma",
    name: "Dr. A. K. Sharma",
    degree: "MD (Medicine), DM (Cardiology)",
    speciality: "Cardiology",
    title: "Senior Consultant Cardiologist",
    experience: "18+ Years",
    visitingDays: "Mon, Wed, Fri (4:00 PM - 7:00 PM)",
    fee: "₹700",
    image: "/assets/dr_ak_sharma.jpg",
    bio: "Dr. A. K. Sharma is a renowned senior cardiologist with over 18 years of expertise in non-invasive cardiology, echocardiography, hypertension management, and preventive heart care in Chaibasa.",
    expertise: ["Echocardiography (ECHO)", "Treadmill Test (TMT)", "Hypertension & BP Management", "Heart Attack Recovery & Rehab", "Coronary Risk Assessment"],
    education: "MBBS (RIMS), MD Medicine (PMCH), DM Cardiology (AIIMS)",
    faqs: [
      { q: "When should I consult Dr. A. K. Sharma?", a: "If you experience chest pain, breathlessness, irregular heartbeat, high blood pressure, or family history of heart disease." },
      { q: "Is 2D Echo available during consultation?", a: "Yes, state-of-the-art color Doppler 2D Echo is conducted on-site during visiting hours." }
    ]
  },
  {
    id: "dr-meera-roy",
    name: "Dr. Meera Roy",
    degree: "MBBS, MD (Gynecology & Obstetrics), DGO",
    speciality: "Gynecology & Obstetrics",
    title: "Senior Gynecologist & High-Risk Pregnancy Specialist",
    experience: "14+ Years",
    visitingDays: "Tue, Thu, Sat (10:00 AM - 2:00 PM)",
    fee: "₹600",
    image: "/assets/dr_meera_roy.jpg",
    bio: "Dr. Meera Roy specializes in comprehensive women's health, high-risk pregnancy care, PCOS management, laparoscopic gynecological advice, and menopausal wellness.",
    expertise: ["High-Risk Pregnancy Management", "PCOS / PCOD Treatment", "Fetal Ultrasound Monitoring", "Infertility Counseling", "Menopause Care"],
    education: "MBBS (KGMU Lucknow), MD Gynecology (RIMS Ranchi)",
    faqs: [
      { q: "Does Dr. Meera Roy perform routine fetal ultrasound scans?", a: "Yes, advanced pregnancy ultrasound scans including anomaly scans are arranged at our polyclinic." }
    ]
  },
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    degree: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement",
    speciality: "Orthopedics",
    title: "Consultant Orthopedic & Joint Replacement Surgeon",
    experience: "16+ Years",
    visitingDays: "Mon, Wed, Sat (11:00 AM - 3:00 PM)",
    fee: "₹650",
    image: "/assets/dr_rajesh_kumar.jpg",
    bio: "Dr. Rajesh Kumar is a leading orthopedic specialist in Chaibasa expertise in arthritis care, fracture management, joint replacement advice, and sports injury rehabilitation.",
    expertise: ["Knee & Hip Arthritis Treatment", "Fracture Care & Trauma", "Spine & Back Pain Care", "Osteoporosis Management", "Physiotherapy Protocol"],
    education: "MBBS (BHU Varanasi), MS Orthopedics (NMC Patna)",
    faqs: [
      { q: "Is digital X-ray available immediately during orthopedic consultation?", a: "Yes, our high-frequency digital X-ray delivers instant reports directly to the doctor." }
    ]
  },
  {
    id: "dr-sn-mahato",
    name: "Dr. S. N. Mahato",
    degree: "MBBS, MD (General Medicine)",
    speciality: "General Medicine",
    title: "Senior Consultant Physician & Diabetologist",
    experience: "20+ Years",
    visitingDays: "Daily Mon - Sat (8:00 AM - 1:00 PM, 5:00 PM - 8:00 PM)",
    fee: "₹500",
    image: "/assets/dr_sn_mahato.jpg",
    bio: "Dr. S. N. Mahato is one of Chaibasa's most trusted senior physicians, providing expert care for diabetes, thyroid disorders, infectious fever, respiratory ailments, and chronic disease management.",
    expertise: ["Diabetes Management", "Thyroid Disorders", "Seasonal Fevers & Dengue/Malaria", "Hypertension", "Geriatric Care"],
    education: "MBBS (PMCH Dhanbad), MD General Medicine (RIMS)",
    faqs: [
      { q: "Can I get my blood sugar and HbA1c tested before seeing Dr. Mahato?", a: "Yes, our lab offers express blood testing so your reports are ready for your doctor consultation." }
    ]
  },
  {
    id: "dr-priyanshu-das",
    name: "Dr. Priyanshu Das",
    degree: "MBBS, MD (Pathology), DCP",
    speciality: "Pathology",
    title: "Chief Pathologist & Laboratory Director",
    experience: "15+ Years",
    visitingDays: "Daily Mon - Sat (8:00 AM - 6:00 PM)",
    fee: "Included in Lab Tests",
    image: "/assets/dr_priyanshu_das.jpg",
    bio: "Dr. Priyanshu Das oversees all high-precision clinical pathology, hematology, biochemistry, and histopathology testing at New Life Diagnostic Centre.",
    expertise: ["Clinical Biochemistry", "Hematology & Blood Morphology", "Hormonal Assays", "Tumor Markers", "Cytopathology"],
    education: "MBBS (Medical College Kolkata), MD Pathology (PGIMER Chandigarh)",
    faqs: [
      { q: "Are lab reports verified by Dr. Priyanshu Das?", a: "100% of diagnostic reports are meticulously verified and digitally signed by Dr. Priyanshu Das." }
    ]
  },
  {
    id: "dr-ananya-verma",
    name: "Dr. Ananya Verma",
    degree: "MBBS, MS (General Surgery), FMAS",
    speciality: "General Surgery",
    title: "Consultant General & Laparoscopic Surgeon",
    experience: "12+ Years",
    visitingDays: "Tue, Fri (2:00 PM - 6:00 PM)",
    fee: "₹600",
    image: "/assets/dr_ananya_verma.jpg",
    bio: "Dr. Ananya Verma specializes in general surgical consultations, minor surgical procedures, wound management, hernia evaluations, and gallbladder disease care.",
    expertise: ["Laparoscopic Surgery Consultation", "Hernia & Gallbladder Care", "Minor Surgical Procedures", "Diabetic Foot & Wound Care"],
    education: "MBBS (RIMS), MS General Surgery (IPGMER Kolkata)",
    faqs: [
      { q: "Does the centre offer daycare surgical wound dressing?", a: "Yes, dedicated day care aseptic surgical dressing and minor procedures are available." }
    ]
  }
];

export const servicesData = [
  {
    id: "pathology",
    title: "Pathology & Blood Tests",
    shortDesc: "Complete blood counts, lipid profiles, liver function, renal panel, thyroid assays & tumor markers using automated analyzers.",
    fullDesc: "New Life Pathology Laboratory is equipped with fully automated chemiluminescence analyzers, hematology counters, and biochemistry workstations. We adhere to rigorous NABL standards to ensure pinpoint diagnostic accuracy.",
    testsIncluded: ["CBC & ESR", "Lipid Profile", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "HbA1c & Blood Glucose", "Thyroid Profile (T3, T4, TSH)", "Vitamin D & B12", "Dengue/Malaria Elisa"],
    turnaround: "Same Day Reports (3 to 6 Hours)",
    homeSample: true,
    prepInstruction: "10-12 hours fasting required for lipid profile & fasting blood sugar.",
    icon: "FlaskConical",
    image: "/assets/lab_suite.jpg"
  },
  {
    id: "ultrasound",
    title: "Ultrasound (USG) & Color Doppler",
    shortDesc: "Advanced 3D/4D ultrasound imaging for abdominal, pelvic, obstetric, thyroid, and vascular color Doppler scans.",
    fullDesc: "Our ultrasound unit features high-resolution probes providing crystal-clear imaging for abdominal diagnostic evaluation, fetal health monitoring, soft tissue scans, and arterial/venous color Doppler studies.",
    testsIncluded: ["USG Whole Abdomen & Pelvis", "Obstetric / Pregnancy Scan", "Anomaly / Level II Scan", "Thyroid & Neck Ultrasound", "Color Doppler (Legs/Carotid)", "KUB Scan"],
    turnaround: "Instant Report & Film Post-Scan",
    homeSample: false,
    prepInstruction: "Full bladder required for pelvic/KUB scans. Fasting for 6 hours for upper abdomen scans.",
    icon: "Scan",
    image: "/assets/ultrasound.jpg"
  },
  {
    id: "ecg",
    title: "ECG (Electrocardiogram)",
    shortDesc: "High-resolution 12-lead digital ECG recording for immediate detection of cardiac arrhythmias, ischemia, and heart rate irregularities.",
    fullDesc: "A 12-lead digital ECG records the electrical signals of your heart to detect conditions such as heart attacks, abnormal heart rhythms, and cardiac strain quickly and painlessly.",
    testsIncluded: ["12-Lead Digital ECG", "Computerized Rhythm Analysis", "Instant Cardiologist Verification"],
    turnaround: "Within 15 Minutes",
    homeSample: true,
    prepInstruction: "No special preparation needed. Avoid tight clothing around chest.",
    icon: "HeartPulse",
    image: "/assets/cardiac_ecg.jpg"
  },
  {
    id: "echo",
    title: "2D Echo (Echocardiogram)",
    shortDesc: "Color Doppler 2D Echocardiography to evaluate heart muscle function, valve health, wall motion, and ejection fraction.",
    fullDesc: "2D Echocardiography uses sound waves to create live motion pictures of your heart, assessing valve leaks, heart chamber sizes, pumping efficiency (ejection fraction), and congenital defects.",
    testsIncluded: ["Color Doppler 2D Echo", "Ejection Fraction (EF) Calculation", "Valvular Function Study"],
    turnaround: "Same Day Verified Report",
    homeSample: false,
    prepInstruction: "No fasting required. Wear comfortable clothing.",
    icon: "Activity",
    image: "/assets/cardiac_ecg.jpg"
  },
  {
    id: "pft",
    title: "PFT (Pulmonary Function Test)",
    shortDesc: "Computerized spirometry testing to diagnose asthma, COPD, bronchitis, and assess total lung capacity and airflow.",
    fullDesc: "Pulmonary Function Tests evaluate how well your lungs take in and release air and how efficiently they move oxygen into the bloodstream. Vital for asthma and smoker lung checks.",
    testsIncluded: ["Digital Spirometry", "FVC, FEV1, PEFR Metrics", "Post-Bronchodilator Reversibility Test"],
    turnaround: "Instant Digital Report",
    homeSample: false,
    prepInstruction: "Do not smoke 4 hours before test. Avoid heavy meals prior to test.",
    icon: "Wind",
    image: "/assets/lab_suite.jpg"
  },
  {
    id: "physiotherapy",
    title: "Advanced Physiotherapy & Rehab",
    shortDesc: "Pain management, electrotherapy, TENS, ultrasound therapy, joint rehabilitation, and post-surgery recovery.",
    fullDesc: "Our dedicated rehabilitation clinic offers personalized physiotherapy for back pain, cervical spondylosis, knee osteoarthritis, stroke recovery, and post-fracture joint stiffness.",
    testsIncluded: ["IFT & TENS Therapy", "Therapeutic Ultrasound", "Shortwave Diathermy (SWD)", "Manual Traction & Mobilization", "Post-Op Rehab"],
    turnaround: "Per Session (45-60 Mins)",
    homeSample: false,
    prepInstruction: "Wear loose, flexible athletic clothing.",
    icon: "UserCheck",
    image: "/assets/physiotherapy.jpg"
  },
  {
    id: "general-surgery",
    title: "General & Laparoscopic Consultation",
    shortDesc: "Expert surgical evaluation for hernia, gallbladder stones, appendix, piles, hydrocele, and minor day-care procedures.",
    fullDesc: "Consult with experienced laparoscopic surgeons for surgical evaluations, pre-op fitness certifications, minor surgical dressings, and post-operative follow-up care.",
    testsIncluded: ["Surgical Assessment", "Pre-Operative Clearance", "Minor Aseptic Dressing", "Suture Removal"],
    turnaround: "Consultation On Spot",
    homeSample: false,
    prepInstruction: "Bring prior ultrasound or blood report files.",
    icon: "Stethoscope",
    image: "/assets/dr_ananya_verma.jpg"
  },
  {
    id: "day-care",
    title: "Day Care & Observation Unit",
    shortDesc: "Comfortable air-conditioned day care beds for short-term IV hydration, nebulization, antibiotic infusions, and post-test recovery.",
    fullDesc: "Equipped with patient monitoring monitors, comfortable beds, oxygen support, and trained nursing staff for non-critical day procedures and recovery.",
    testsIncluded: ["Nebulization Therapy", "IV Fluid Administration", "IV Antibiotic Support", "Vital Monitoring"],
    turnaround: "As Required (1 to 6 Hours)",
    homeSample: false,
    prepInstruction: "Doctor prescription required for day care administration.",
    icon: "Bed",
    image: "/assets/reception.jpg"
  },
  {
    id: "home-sample-collection",
    title: "Home Sample Collection",
    shortDesc: "Safe, sterile, doorstep blood and urine sample collection at your convenience across Chaibasa and surrounding areas.",
    fullDesc: "Cannot visit the clinic? Our certified phlebotomists collect blood samples from your home following strict hygiene, vacuum tubes, and temperature-controlled transport.",
    testsIncluded: ["Sterile Sample Collection", "Digital Report Delivery on WhatsApp & Email"],
    turnaround: "Same Day Digital Report",
    homeSample: true,
    prepInstruction: "Book appointment 12 hours prior. Keep fasting instructions in mind.",
    icon: "Truck",
    image: "/assets/lab_suite.jpg"
  },
  {
    id: "x-ray",
    title: "Digital X-Ray & Radiography",
    shortDesc: "High-frequency low-radiation digital radiography for chest, bones, joints, spine, and abdominal evaluation.",
    fullDesc: "Digital X-Ray delivers crystal clear skeletal and thoracic images with minimal radiation exposure, helping doctors diagnose fractures, lung infections, and joint degeneration rapidly.",
    testsIncluded: ["Chest X-Ray PA View", "Bone & Joint Radiography", "Spine X-Ray (Cervical/Lumbar)", "Paranasal Sinus (PNS) View"],
    turnaround: "Instant Digital Film & Report",
    homeSample: false,
    prepInstruction: "Remove metal objects, jewelry, or metallic buttons prior to scan.",
    icon: "FileText",
    image: "/assets/lab_suite.jpg"
  }
];

export const specialitiesData = [
  {
    id: "cardiology",
    name: "Cardiology",
    desc: "Comprehensive diagnostic heart care, ECG, 2D Echocardiography, hypertension management, and preventive heart attack risk assessments.",
    doctorsCount: "1 Senior Consultant",
    icon: "Heart",
    image: "/assets/cardiac_ecg.jpg"
  },
  {
    id: "general-medicine",
    name: "General Medicine & Diabetology",
    desc: "Diagnosis and care for fever, viral infections, diabetes, hypertension, thyroid conditions, and chronic adult medical illness.",
    doctorsCount: "2 Consultant Physicians",
    icon: "Stethoscope",
    image: "/assets/dr_sn_mahato.jpg"
  },
  {
    id: "gynecology",
    name: "Gynecology & Obstetrics",
    desc: "Complete women's healthcare, antenatal care, high-risk pregnancy monitoring, PCOS therapy, and cervical health screening.",
    doctorsCount: "1 Senior Specialist",
    icon: "User",
    image: "/assets/dr_meera_roy.jpg"
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    desc: "Specialized care for bone fractures, knee osteoarthritis, back pain, joint stiffness, osteoporosis, and post-injury rehab.",
    doctorsCount: "1 Orthopedic Specialist",
    icon: "Activity",
    image: "/assets/dr_rajesh_kumar.jpg"
  },
  {
    id: "pathology-dept",
    name: "Pathology & Biochemistry",
    desc: "State-of-the-art laboratory testing using automated hematology, biochemistry, and hormone immunoassay systems.",
    doctorsCount: "1 Chief Pathologist",
    icon: "FlaskConical",
    image: "/assets/lab_suite.jpg"
  },
  {
    id: "general-surgery-dept",
    name: "General & Laparoscopic Surgery",
    desc: "Expert surgical evaluations for hernia, gallbladder issues, minor procedures, pre-operative fitness, and post-op wound care.",
    doctorsCount: "1 Consultant Surgeon",
    icon: "ShieldAlert",
    image: "/assets/dr_ananya_verma.jpg"
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Wellness",
    desc: "Childhood health checks, vaccination guidance, growth monitoring, and treatment for pediatric infections.",
    doctorsCount: "Visiting Pediatricians",
    icon: "Smile",
    image: "/assets/ultrasound.jpg"
  },
  {
    id: "neurology",
    name: "Neurology & Spine Care",
    desc: "Consultations for chronic headache, migraine, stroke rehabilitation guidance, neuropathy, and nerve pain management.",
    doctorsCount: "Visiting Neurologists",
    icon: "Zap",
    image: "/assets/physiotherapy.jpg"
  }
];

export const workflowSteps = [
  { step: "01", title: "Book Appointment", desc: "Select your required test or doctor online or via WhatsApp/Call.", image: "/assets/reception.jpg" },
  { step: "02", title: "Visit Clinic / Home Collection", desc: "Walk into our Chaibasa polyclinic or request certified phlebotomist doorstep sample collection.", image: "/assets/lab_suite.jpg" },
  { step: "03", title: "Sample Collection & Scan", desc: "Painless blood draw or comfortable diagnostic imaging scan in a sterile environment.", image: "/assets/ultrasound.jpg" },
  { step: "04", title: "Automated Testing", desc: "High-precision analysis on NABL-standard automated laboratory machines.", image: "/assets/lab_suite.jpg" },
  { step: "05", title: "Doctor Verification", desc: "Meticulous verification and digital signing of reports by Chief Pathologist & Specialists.", image: "/assets/dr_priyanshu_das.jpg" },
  { step: "06", title: "Receive Reports & Consult", desc: "Get instant digital report link on WhatsApp/Email and consult our specialist doctors.", image: "/assets/hero_doctor.jpg" }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Rameshwar Tiu",
    location: "Chaibasa Main Road",
    rating: 5,
    date: "1 week ago",
    comment: "New Life Diagnostic Centre is by far the cleanest and most professional diagnostic lab in Chaibasa. I got my father's 2D Echo done. Reports were delivered on WhatsApp within 4 hours, and Dr. Sharma explained everything very kindly."
  },
  {
    id: 2,
    name: "Priyanka Sinku",
    location: "Jhinkpani, West Singhbhum",
    rating: 5,
    date: "2 weeks ago",
    comment: "I booked Home Sample Collection for my mother's diabetes profile. Phlebotomist reached on time with sterile equipment. Extremely polite staff!"
  },
  {
    id: 3,
    name: "Amitabh Deogharia",
    location: "Sadar Bazaar, Chaibasa",
    rating: 5,
    date: "1 month ago",
    comment: "Dr. S. N. Mahato is an exceptional physician. The polyclinic infrastructure is modern, staff is prompt, and ultrasound scan quality is top notch. Highly recommended hospital level facility in our city."
  },
  {
    id: 4,
    name: "Sunita Gope",
    location: "Hatgamharia",
    rating: 5,
    date: "1 month ago",
    comment: "Excellent experience with Dr. Meera Roy for antenatal care. The ultrasound room is very clean and comfortable. Same-day accurate reports gave us immense peace of mind."
  }
];

export const galleryData = [
  { id: 1, category: "Clinic", title: "Modern Polyclinic Exterior & Entrance", image: "/assets/reception.jpg" },
  { id: 2, category: "Reception", title: "Air-Conditioned Patient Waiting Lounge", image: "/assets/reception.jpg" },
  { id: 3, category: "Laboratory", title: "Automated Pathology Blood Analyzer Unit", image: "/assets/lab_suite.jpg" },
  { id: 4, category: "Equipment", title: "High-Resolution 4D Ultrasound Suite", image: "/assets/ultrasound.jpg" },
  { id: 5, category: "Equipment", title: "12-Lead Digital ECG & Echo Workstation", image: "/assets/cardiac_ecg.jpg" },
  { id: 6, category: "Patient Care", title: "Advanced Physiotherapy Rehab Clinic", image: "/assets/physiotherapy.jpg" },
  { id: 7, category: "Doctors", title: "Dr. A. K. Sharma Consultation Room", image: "/assets/dr_ak_sharma.jpg" },
  { id: 8, category: "Doctors", title: "Dr. Meera Roy Gynecological Suite", image: "/assets/dr_meera_roy.jpg" }
];

export const faqsData = [
  {
    category: "Diagnostic & Lab Tests",
    questions: [
      { q: "What are the lab timings at New Life Diagnostic Centre Chaibasa?", a: "Our pathology laboratory and sample collection counter are open Monday to Saturday from 7:00 AM to 8:00 PM, and Sunday from 8:00 AM to 2:00 PM." },
      { q: "How long does it take to receive blood test reports?", a: "Routine blood tests (CBC, Glucose, LFT, KFT, Lipid Profile) reports are delivered on the same day within 3 to 6 hours. Special hormonal assays or viral markers take 12 to 24 hours." },
      { q: "Is fasting required before blood tests?", a: "Fasting for 10-12 hours is recommended for Fasting Blood Sugar and Lipid Profile (Cholesterol). Plain water can be consumed during fasting." },
      { q: "How can I collect my test reports?", a: "Reports can be collected directly from our clinic counter or received digitally in high-resolution PDF format via WhatsApp and Email." },
      { q: "Are your lab reports NABL standard aligned?", a: "Yes, all testing equipment, controls, and calibration protocols strictly align with NABL and ISO 9001 quality guidelines." }
    ]
  },
  {
    category: "Appointments & Doctor Consultations",
    questions: [
      { q: "How do I book an appointment with a specialist doctor?", a: "You can book an appointment online using our website booking wizard, call us directly at +91 94313 88900, or send a WhatsApp message with your name and preferred date." },
      { q: "Can I get an instant doctor consultation on the same day?", a: "Yes, walk-in consultations are available for General Medicine with Dr. S. N. Mahato. Specialist doctors visit on fixed days and prior booking is recommended." },
      { q: "What is the consultation fee for doctors?", a: "Consultation fees range between ₹500 to ₹700 depending on the specialist. Follow-up consultations within 7 days carry discounted rates." },
      { q: "What documents should I bring for doctor consultation?", a: "Please bring your previous medical records, past prescriptions, current medications list, and any prior lab/scan reports." },
      { q: "Do you offer emergency doctor consultations?", a: "While we operate as a polyclinic and diagnostic centre, our day care unit and physicians handle acute non-critical medical needs during clinic hours." }
    ]
  },
  {
    category: "Home Sample Collection",
    questions: [
      { q: "Is Home Sample Collection available in Chaibasa?", a: "Yes! We provide safe, sterile doorstep blood sample collection across all areas of Chaibasa town and nearby locations." },
      { q: "How do I request home blood collection?", a: "Call +91 94313 88900 or select 'Home Sample Collection' in our online appointment form at least 12 hours prior to your preferred time slot." },
      { q: "Are there extra charges for home sample collection?", a: "Home sample collection is provided for a nominal conveyance fee of ₹50 across Chaibasa town." },
      { q: "How are blood samples transported safely?", a: "Samples are drawn using single-use vacuum tubes (Vacutainers) and transported in temperature-controlled insulated cold boxes to preserve sample integrity." },
      { q: "Can elderly or bedridden patients use home collection?", a: "Absoluty. Our certified phlebotomists are specifically trained in gentle blood draw techniques for senior citizens and pediatric patients." }
    ]
  },
  {
    category: "Ultrasound, ECG & Scans",
    questions: [
      { q: "Is prior appointment needed for Ultrasound (USG) scan?", a: "Prior appointment is recommended to minimize waiting time. Emergency USG scans are accommodated as per radiologist availability." },
      { q: "Do I need a doctor's prescription for an ultrasound scan?", a: "Yes, as per statutory regulations, a valid doctor's prescription is required for all Ultrasound (USG) scans." },
      { q: "Is 2D Echo available for cardiac patients?", a: "Yes, digital 2D Color Doppler Echocardiography is performed by Senior Cardiologist Dr. A. K. Sharma." },
      { q: "Is digital X-Ray report given immediately?", a: "Digital X-Ray films and initial radiological findings are provided within 20-30 minutes of scan completion." },
      { q: "What preparation is needed for abdominal ultrasound?", a: "For upper abdominal ultrasound, 6 hours of fasting is required. For pelvic or urinary tract (KUB) ultrasound, drink 1 liter of water to maintain a full bladder." }
    ]
  }
];

export const blogPostsData = [
  {
    id: "essential-annual-health-tests",
    title: "10 Essential Annual Health Tests Every Adult Over 30 Should Take",
    slug: "essential-annual-health-tests",
    author: "Dr. Priyanshu Das (Chief Pathologist)",
    date: "July 18, 2026",
    category: "Preventive Care",
    readTime: "5 min read",
    image: "/assets/lab_suite.jpg",
    excerpt: "Discover the critical blood and diagnostic screening tests every individual over 30 needs to monitor heart health, diabetes risk, kidney function, and metabolic balance.",
    content: `
### Why Preventive Diagnostics Matter After Age 30

Modern lifestyles, desk jobs, stress, and dietary changes have dramatically increased the early incidence of lifestyle diseases such as hypertension, type 2 diabetes, fatty liver, and high cholesterol across India—including tier-2 cities like Chaibasa.

Preventive health screening acts as an early warning radar. Many metabolic and cardiovascular conditions remain completely silent for years before causing noticeable symptoms.

---

### The Top 10 Annual Tests You Should Never Skip

1. **Complete Blood Count (CBC)**: Measures red blood cells, hemoglobin, white blood cells, and platelets. Essential for detecting anemia, hidden infections, and blood disorders.
2. **Fasting Blood Glucose & HbA1c**: Evaluates your 3-month average blood sugar level. Crucial for detecting prediabetes before permanent organ damage occurs.
3. **Lipid Profile (Cholesterol Panel)**: Checks Total Cholesterol, Triglycerides, HDL ('good' cholesterol), and LDL ('bad' cholesterol) to estimate heart attack and arterial plaque risk.
4. **Liver Function Test (LFT)**: Assesses liver enzymes (SGOT, SGPT, Bilirubin, Alkaline Phosphatase) to identify fatty liver disease, alcohol strain, or hepatitis early.
5. **Kidney Function Test (KFT)**: Evaluates Serum Creatinine, Blood Urea, and Uric Acid to ensure optimal renal filtration and detect silent kidney strain.
6. **Thyroid Profile (T3, T4, TSH)**: Thyroid imbalance causes unexplained fatigue, weight gain/loss, hair loss, and mood swings.
7. **Vitamin D3 & Vitamin B12**: Over 70% of adults suffer from low Vitamin D3, leading to bone aches, low immunity, and muscle weakness.
8. **12-Lead Digital ECG**: Records your heart's electrical rhythm, checking for silent ischemic changes or irregular heartbeats.
9. **Urine Routine & Microscopic**: Detects early protein leakage, urinary tract infections (UTI), or kidney stone crystals.
10. **Blood Pressure Audit**: High blood pressure is known as the 'silent killer'. Regular monitoring keeps stroke and cardiac strain at bay.

---

### How New Life Diagnostic Centre Helps Chaibasa Stay Healthy

At New Life Diagnostic Centre, our laboratory provides high-precision testing with doorstep sample collection and doctor verification. Take charge of your family's health today!
    `
  },
  {
    id: "early-cardiac-screening-guide",
    title: "Early Cardiac Screening: A Chaibasa Specialist's Guide to Heart Safety",
    slug: "early-cardiac-screening-guide",
    author: "Dr. A. K. Sharma (Senior Cardiologist)",
    date: "July 10, 2026",
    category: "Heart Care",
    readTime: "6 min read",
    image: "/assets/cardiac_ecg.jpg",
    excerpt: "Learn how ECG, 2D Echocardiography, and lipid biomarkers help detect cardiac risks early and protect your heart against unexpected cardiac events.",
    content: `
### The Rising Need for Cardiac Awareness

Cardiovascular diseases are no longer confined to elderly individuals. We are witnessing an increasing number of cardiac events in adults in their 30s and 40s. Timely screening is the single most effective shield.

---

### Key Diagnostic Scans for Heart Health

#### 1. Digital 12-Lead ECG
An Electrocardiogram (ECG) is a quick, non-invasive test that records electrical pulses traveling through your heart. It instantly flags:
- Past or ongoing silent heart attacks
- Abnormal heart rhythms (arrhythmias)
- Poor blood supply to heart muscle (ischemia)

#### 2. Color Doppler 2D Echocardiogram
While ECG shows electrical activity, 2D Echo acts as an ultrasound movie of your heart. It measures:
- Pumping capacity (Ejection Fraction - EF %)
- Heart valve leakage or tightness
- Thickening of heart chamber walls

#### 3. Cardiac Biomarkers & Lipid Ratios
Elevated LDL cholesterol, high triglycerides, and elevated hs-CRP (High-Sensitivity C-Reactive Protein) signal active arterial inflammation and plaque formation.

---

### Warning Signals: When to See a Cardiologist Immediately

- Unexplained tightness or heaviness in the center of the chest
- Pain radiating to the left arm, jaw, neck, or back
- Shortness of breath during normal walking or stair climbing
- Unexplained dizziness, cold sweats, or sudden palpitations

---

### Comprehensive Cardiac Care in Chaibasa

At **New Life Diagnostic Centre & Polyclinic**, Dr. A. K. Sharma provides expert non-invasive cardiac evaluation, 2D Echo, digital ECG, and personalized cardiac rehabilitation plans.
    `
  }
];

// JSON-LD Schema Generator Helpers
export const generateClinicSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
  "name": clinicInfo.name,
  "description": "Premier diagnostic centre and multispeciality polyclinic in Chaibasa offering pathology blood tests, 3D ultrasound, 2D echo, ECG, physiotherapy, and specialist doctor consultations.",
  "url": "https://newlifediagnostic.in",
  "logo": "https://newlifediagnostic.in/logo.png",
  "image": "https://newlifediagnostic.in/assets/reception.jpg",
  "telephone": clinicInfo.phonePrimary,
  "email": clinicInfo.email,
  "priceRange": "₹100 - ₹3000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Road, Opp. Sadar Hospital",
    "addressLocality": "Chaibasa",
    "addressRegion": "Jharkhand",
    "postalCode": "833201",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.5532",
    "longitude": "85.8087"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": clinicInfo.rating,
    "reviewCount": clinicInfo.reviewsCount
  },
  "medicalSpecialty": [
    "Cardiovascular",
    "Gynecology",
    "Orthopedic",
    "Pathology",
    "GeneralMedicine",
    "Surgery"
  ]
});
