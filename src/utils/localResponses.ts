
import { findMatchingFAQ } from './faqMatcher';
import { faqData } from '@/data/faqData';

/**
 * Generates a local response based on the user's message
 * Uses the FAQ matcher for common questions, or provides generic responses
 */
export function generateLocalResponse(message: string): string {
  // First, try to match with our FAQ database
  const faqMatch = findMatchingFAQ(message);
  if (faqMatch) {
    return faqMatch.answer;
  }

  // If no FAQ match, generate a generic response based on keywords
  const lowercaseMessage = message.toLowerCase();
  
  // Admissions related responses
  if (lowercaseMessage.includes('admission') || lowercaseMessage.includes('apply') || lowercaseMessage.includes('enroll')) {
    return "Our college admissions typically open in January each year for the academic session beginning in August. Application requirements include completed online form, academic transcripts, entrance exam scores (JEE/NEET/CAT depending on program), and sometimes letters of recommendation. Special quotas exist for exceptional students and certain categories. Visit our admissions page for program-specific details and deadlines.";
  }
  
  // Fees and financial aid
  if (lowercaseMessage.includes('fee') || lowercaseMessage.includes('tuition') || lowercaseMessage.includes('cost') || lowercaseMessage.includes('financial aid') || lowercaseMessage.includes('scholarship')) {
    return "Tuition fees vary by program, with undergraduate programs ranging from ₹1-2 lakhs per year for domestic students. Additional fees apply for laboratories, hostels, and other facilities. We offer merit scholarships covering 25-100% of tuition for academically outstanding students. Need-based financial aid and installment payment options are also available. Contact our financial aid office for detailed program-specific fee structures and scholarship opportunities.";
  }
  
  // Hostel and accommodation
  if (lowercaseMessage.includes('hostel') || lowercaseMessage.includes('dorm') || lowercaseMessage.includes('accommodation') || lowercaseMessage.includes('residence')) {
    return "Our campus offers 8 hostel blocks with modern amenities including Wi-Fi, laundry services, gym, and 24-hour security. Rooms are available in single, double, and triple sharing options, with fees ranging from ₹60,000-95,000 per year based on occupancy type. Mess charges are separate at approximately ₹45,000 annually. First-year students are given priority for on-campus accommodation. Applications open two months before semester start.";
  }
  
  // Courses and academics
  if (lowercaseMessage.includes('course') || lowercaseMessage.includes('program') || lowercaseMessage.includes('degree') || lowercaseMessage.includes('curriculum') || lowercaseMessage.includes('major') || lowercaseMessage.includes('branch')) {
    return "We offer undergraduate, postgraduate, and doctoral programs across various disciplines. Popular programs include B.Tech (with 8 specializations), BBA, MBA, M.Tech, MCA, and Ph.D. Each program has a structured curriculum combining theory, practical labs, and industry projects. Elective courses allow customization based on interests. Our academic system follows a choice-based credit system with continuous evaluation through assignments, projects, and exams.";
  }
  
  // Exams and evaluation
  if (lowercaseMessage.includes('exam') || lowercaseMessage.includes('test') || lowercaseMessage.includes('evaluation') || lowercaseMessage.includes('grade')) {
    return "Our evaluation system includes continuous assessment (40%) and end-semester examinations (60%). Continuous assessment consists of quizzes, assignments, projects, and mid-semester tests. Semester exams are held in May and December. A minimum of 75% attendance is mandatory to be eligible for exams. The grading follows a 10-point scale with letter grades from O (Outstanding) to F (Fail). Results are typically announced within three weeks of examinations.";
  }
  
  // Campus facilities
  if (lowercaseMessage.includes('facility') || lowercaseMessage.includes('amenity') || lowercaseMessage.includes('infrastructure') || lowercaseMessage.includes('laboratory') || lowercaseMessage.includes('lab')) {
    return "Our campus spans 150 acres with state-of-the-art facilities including: 60+ specialized laboratories, central library with 100,000+ volumes, 24-hour computing centers, sports complex with Olympic-size swimming pool, indoor and outdoor game facilities, auditorium, student activity center, food courts, banking services, and health center with 24/7 medical assistance. All buildings are Wi-Fi enabled and equipped with modern teaching aids and smart classrooms.";
  }
  
  // Placements and careers
  if (lowercaseMessage.includes('placement') || lowercaseMessage.includes('job') || lowercaseMessage.includes('career') || lowercaseMessage.includes('salary') || lowercaseMessage.includes('recruitment')) {
    return "Our dedicated Training & Placement Cell facilitates campus recruitment with 300+ companies visiting annually. Over 85% of eligible students secure placements, with average starting packages of ₹7-10 LPA. Top recruiters include Microsoft, Google, Amazon, TCS, Infosys, and Goldman Sachs. Pre-placement training includes aptitude, technical, and soft skills development. Internship opportunities are available through industry partnerships. Career counseling and higher education guidance are also provided.";
  }
  
  // Research
  if (lowercaseMessage.includes('research') || lowercaseMessage.includes('innovation') || lowercaseMessage.includes('project') || lowercaseMessage.includes('publication')) {
    return "Our institution emphasizes research with 20+ specialized research centers and laboratories. Faculty members publish in high-impact journals and secure substantial grants from government and industry. Undergraduate students can participate in research through special projects and innovation labs. The annual research budget exceeds ₹10 crores. Regular workshops, conferences, and seminars facilitate knowledge exchange with global academic communities. Student research is supported through dedicated funding and mentorship programs.";
  }
  
  // Faculty
  if (lowercaseMessage.includes('faculty') || lowercaseMessage.includes('professor') || lowercaseMessage.includes('teacher') || lowercaseMessage.includes('staff')) {
    return "Our faculty comprises 300+ academicians with doctorates from prestigious institutions worldwide. The student-faculty ratio is maintained at 15:1 to ensure personal attention. Many faculty members are industry veterans bringing practical experience to classrooms. Regular faculty development programs ensure up-to-date knowledge and teaching methodologies. Faculty achievements include patents, research publications, consultancy projects, and international collaborations.";
  }
  
  // Default response if no patterns match
  return "As your college assistant, I'm here to help with questions about admissions, courses, fees, facilities, and campus life. For this specific query, I'd recommend checking the college website or reaching out to the respective department for the most accurate information. You can also browse our comprehensive FAQ section for commonly asked questions.";
}
