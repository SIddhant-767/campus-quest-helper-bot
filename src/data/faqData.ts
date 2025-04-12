
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export const faqData: FAQ[] = [
  {
    id: "1",
    question: "When are the semester exams?",
    answer: "Semester exams typically start in the first week of May for the spring semester and the first week of December for the fall semester. Check the academic calendar on the college portal for specific dates.",
    keywords: ["exam", "semester", "schedule", "dates", "timetable", "final", "test"],
    category: "Academic"
  },
  {
    id: "2",
    question: "How do I apply for hostel accommodation?",
    answer: "To apply for hostel accommodation, log in to the student portal, navigate to 'Housing Services', and fill out the online application form. Applications typically open 2 months before the start of each semester. First-year students are given priority.",
    keywords: ["hostel", "accommodation", "dorm", "housing", "stay", "living", "residence"],
    category: "Housing"
  },
  {
    id: "3",
    question: "What is the course registration deadline?",
    answer: "Course registration deadlines are usually two weeks before the semester begins. For the fall semester, this is typically mid-August, and for the spring semester, it's early January. Late registration incurs a fee of $50.",
    keywords: ["course", "registration", "deadline", "enroll", "sign up", "classes"],
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
    id: "5",
    question: "What are the library hours?",
    answer: "The main library is open from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 6:00 PM on weekends. During exam periods, the library extends its hours to midnight on weekdays.",
    keywords: ["library", "hours", "timing", "books", "study"],
    category: "Campus Facilities"
  },
  {
    id: "6",
    question: "How do I apply for financial aid?",
    answer: "To apply for financial aid, submit the Financial Aid Application Form available on the college website under 'Student Services' > 'Financial Aid'. Supporting documents including income proof must be uploaded. The application deadline is March 31st for the upcoming academic year.",
    keywords: ["financial aid", "scholarship", "fee", "money", "fund", "assistance"],
    category: "Financial"
  },
  {
    id: "7",
    question: "Where can I get my ID card replaced?",
    answer: "For ID card replacement, visit the Student Services Center in the Administration Building, Room 105. Bring your old ID card (if available) and a valid photo ID. The replacement fee is $15, which can be paid in cash or charged to your student account.",
    keywords: ["id", "card", "lost", "replace", "stolen", "identity"],
    category: "Administrative"
  },
  {
    id: "8",
    question: "How do I join student clubs?",
    answer: "Information about student clubs is available on the Student Activities Portal. You can browse through available clubs and sign up during the Club Fair held in the second week of each semester, or contact club representatives directly through the portal.",
    keywords: ["club", "society", "join", "extracurricular", "activity"],
    category: "Student Life"
  },
  {
    id: "9",
    question: "What mental health resources are available?",
    answer: "The Counseling Center provides free counseling services to all students. You can schedule an appointment through the health portal or by calling 555-123-4567. For urgent mental health concerns, a counselor is available 24/7 at the Emergency Helpline: 555-999-8888.",
    keywords: ["mental health", "counseling", "therapy", "stress", "depression", "anxiety", "psychologist"],
    category: "Health Services"
  },
  {
    id: "10",
    question: "How do I access Wi-Fi on campus?",
    answer: "To access campus Wi-Fi, connect to the 'Campus-Net' network and sign in with your student credentials. If you're experiencing connection issues, visit the IT Help Desk in the Technology Building or submit a support ticket online.",
    keywords: ["wifi", "internet", "connection", "network", "online"],
    category: "Technology"
  }
];
