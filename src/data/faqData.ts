
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export const faqData: FAQ[] = [
  // Academic Category
  {
    id: "1",
    question: "When are the semester exams?",
    answer: "Semester exams typically start in the first week of May for the spring semester and the first week of December for the fall semester. Check the academic calendar on the college portal for specific dates.",
    keywords: ["exam", "semester", "schedule", "dates", "timetable", "final", "test"],
    category: "Academic"
  },
  {
    id: "4",
    question: "How can I check my attendance?",
    answer: "You can check your attendance record by logging into the student portal and navigating to 'My Academics' > 'Attendance'. The minimum attendance requirement to be eligible for exams is 75%.",
    keywords: ["attendance", "present", "absent", "class", "record"],
    category: "Academic"
  },
  {
    id: "3",
    question: "What is the course registration deadline?",
    answer: "Course registration deadlines are usually two weeks before the semester begins. For the fall semester, this is typically mid-August, and for the spring semester, it's early January. Late registration incurs a fee of $50.",
    keywords: ["course", "registration", "deadline", "enroll", "sign up", "classes"],
    category: "Academic"
  },
  
  // Housing Category
  {
    id: "2",
    question: "How do I apply for hostel accommodation?",
    answer: "To apply for hostel accommodation, log in to the student portal, navigate to 'Housing Services', and fill out the online application form. Applications typically open 2 months before the start of each semester. First-year students are given priority.",
    keywords: ["hostel", "accommodation", "dorm", "housing", "stay", "living", "residence"],
    category: "Housing"
  },
  {
    id: "21",
    question: "Is there a hostel facility?",
    answer: "Yes, our campus offers extensive hostel facilities for both male and female students. We have 8 hostel blocks with modern amenities including Wi-Fi, laundry services, gym, and 24-hour security. Rooms are available in single, double, and triple occupancy options.",
    keywords: ["hostel", "accommodation", "dorm", "housing", "stay", "living", "residence", "facility"],
    category: "Housing"
  },
  {
    id: "22",
    question: "What are the hostel fees?",
    answer: "Hostel fees vary by room type: ₹60,000 per year for triple sharing, ₹75,000 for double sharing, and ₹95,000 for single occupancy. This includes accommodation, basic utilities, and Wi-Fi. Mess charges are an additional ₹45,000 per year. A security deposit of ₹10,000 is also required (refundable).",
    keywords: ["hostel", "fee", "cost", "charges", "price", "accommodation"],
    category: "Housing"
  },
  
  // Campus Facilities
  {
    id: "5",
    question: "What are the library hours?",
    answer: "The main library is open from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 6:00 PM on weekends. During exam periods, the library extends its hours to midnight on weekdays.",
    keywords: ["library", "hours", "timing", "books", "study"],
    category: "Campus Facilities"
  },
  {
    id: "23",
    question: "What are the lab timings?",
    answer: "Computer labs are open from 9:00 AM to 8:00 PM on weekdays and 10:00 AM to 5:00 PM on Saturdays. Science and engineering labs operate based on scheduled classes, with open lab hours from 2:00 PM to 6:00 PM on weekdays for project work.",
    keywords: ["lab", "laboratory", "timing", "computer", "science", "engineering"],
    category: "Campus Facilities"
  },
  
  // Financial
  {
    id: "6",
    question: "How do I apply for financial aid?",
    answer: "To apply for financial aid, submit the Financial Aid Application Form available on the college website under 'Student Services' > 'Financial Aid'. Supporting documents including income proof must be uploaded. The application deadline is March 31st for the upcoming academic year.",
    keywords: ["financial aid", "scholarship", "fee", "money", "fund", "assistance"],
    category: "Financial"
  },
  {
    id: "24",
    question: "What is the fee for B.Tech?",
    answer: "The total fee for the 4-year B.Tech program is ₹4,80,000 (₹1,20,000 per year). This includes tuition, examination fees, and basic laboratory charges. Additional charges apply for specialized labs, hostel accommodation, and transportation. Various scholarship options and installment payment plans are available.",
    keywords: ["fee", "b.tech", "engineering", "cost", "tuition", "btech", "charges"],
    category: "Financial"
  },
  {
    id: "25",
    question: "Is there an installment facility for paying fees?",
    answer: "Yes, we offer a semester-wise installment facility. Students can pay 60% of the annual fee at the beginning of the academic year and the remaining 40% before the start of the second semester. A nominal processing fee of ₹1,500 applies for the installment option. For special hardship cases, more flexible payment plans can be arranged through the financial aid office.",
    keywords: ["installment", "payment", "fee", "emi", "pay", "semester"],
    category: "Financial"
  },
  
  // Administrative
  {
    id: "7",
    question: "Where can I get my ID card replaced?",
    answer: "For ID card replacement, visit the Student Services Center in the Administration Building, Room 105. Bring your old ID card (if available) and a valid photo ID. The replacement fee is $15, which can be paid in cash or charged to your student account.",
    keywords: ["id", "card", "lost", "replace", "stolen", "identity"],
    category: "Administrative"
  },
  {
    id: "26",
    question: "When does admission start?",
    answer: "Admissions for the upcoming academic year typically open in January and continue until May. Early applications (January-February) receive priority consideration. The exact dates vary by program, with undergraduate admissions opening earlier than postgraduate programs. Check the admission portal for program-specific deadlines and entrance exam schedules.",
    keywords: ["admission", "application", "enrollment", "start", "date", "apply", "when"],
    category: "Administrative"
  },
  {
    id: "27",
    question: "How are admissions done?",
    answer: "Admissions are based on a combination of entrance exam scores (JEE Main/State CETs for B.Tech, GATE for M.Tech, etc.), academic records, and in some cases, personal interviews. Direct admission quotas exist for exceptional academic performers and certain reserved categories. The admission process is entirely online, from application submission to offer acceptance and fee payment.",
    keywords: ["admission", "process", "application", "selection", "criteria"],
    category: "Administrative"
  },
  
  // Student Life
  {
    id: "8",
    question: "How do I join student clubs?",
    answer: "Information about student clubs is available on the Student Activities Portal. You can browse through available clubs and sign up during the Club Fair held in the second week of each semester, or contact club representatives directly through the portal.",
    keywords: ["club", "society", "join", "extracurricular", "activity"],
    category: "Student Life"
  },
  {
    id: "28",
    question: "What are the career paths after 12th grade?",
    answer: "After 12th grade, students can pursue various undergraduate programs depending on their stream. Science students can opt for engineering (B.Tech), medicine (MBBS), basic sciences (B.Sc), or architecture (B.Arch). Commerce students can pursue B.Com, BBA, CA, or CS, while Arts students can choose from BA, BFA, BPA, law, design, or mass communication. Our college offers career counseling services to help students choose the right path based on their interests and aptitudes.",
    keywords: ["career", "12th", "after", "path", "option", "course"],
    category: "Student Life"
  },
  {
    id: "29",
    question: "What streams are available in B.Tech?",
    answer: "Our B.Tech program offers specializations in: Computer Science & Engineering, Information Technology, Electronics & Communication, Electrical Engineering, Mechanical Engineering, Civil Engineering, Chemical Engineering, and Artificial Intelligence & Data Science. Each stream has a limited intake based on demand and infrastructure. The first year curriculum is common to all streams, allowing students to make an informed choice when selecting their specialization at the end of the first year.",
    keywords: ["stream", "btech", "branch", "engineering", "specialization", "department"],
    category: "Academic"
  },
  
  // Health Services
  {
    id: "9",
    question: "What mental health resources are available?",
    answer: "The Counseling Center provides free counseling services to all students. You can schedule an appointment through the health portal or by calling 555-123-4567. For urgent mental health concerns, a counselor is available 24/7 at the Emergency Helpline: 555-999-8888.",
    keywords: ["mental health", "counseling", "therapy", "stress", "depression", "anxiety", "psychologist"],
    category: "Health Services"
  },
  {
    id: "30",
    question: "Is there a medical facility on campus?",
    answer: "Yes, we have a comprehensive health center on campus with resident doctors available 24/7. The center provides basic medical care, first aid, and has tie-ups with nearby hospitals for emergencies and specialized care. Regular health check-ups are organized each semester, and the facility also includes a pharmacy that offers medicines at subsidized rates for students.",
    keywords: ["medical", "doctor", "health", "clinic", "hospital", "emergency"],
    category: "Health Services"
  },
  
  // Technology
  {
    id: "10",
    question: "How do I access Wi-Fi on campus?",
    answer: "To access campus Wi-Fi, connect to the 'Campus-Net' network and sign in with your student credentials. If you're experiencing connection issues, visit the IT Help Desk in the Technology Building or submit a support ticket online.",
    keywords: ["wifi", "internet", "connection", "network", "online"],
    category: "Technology"
  },
  {
    id: "31",
    question: "How can I apply for free online courses?",
    answer: "The college provides free access to various online learning platforms like Coursera, edX, and LinkedIn Learning. To apply, log in to the student portal, navigate to 'E-Learning Resources', and select the platform and course you're interested in. You'll receive an enrollment link via email within 24 hours. There's a limit of 3 concurrent courses per student to ensure completion.",
    keywords: ["online", "course", "free", "apply", "mooc", "e-learning"],
    category: "Technology"
  },
  {
    id: "32",
    question: "Are elective subjects offered?",
    answer: "Yes, elective subjects are an integral part of our curriculum. Starting from the 5th semester, students can choose from a variety of departmental and open electives. Departmental electives deepen knowledge in your specialization, while open electives allow exploration of other disciplines. Each student must complete a minimum of 4 departmental and 2 open electives before graduation. Registration for electives opens one month before the semester begins.",
    keywords: ["elective", "subject", "choice", "optional", "course"],
    category: "Academic"
  }
];
