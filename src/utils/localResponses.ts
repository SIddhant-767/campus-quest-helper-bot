
import { matchQuestionToFAQ } from './faqMatcher';
import { faqData } from '@/data/faqData';

/**
 * Generates a local response based on the user's message
 * Uses the FAQ matcher for common questions, or provides generic responses
 */
export function generateLocalResponse(message: string): string {
  // First, try to match with our FAQ database
  const faqMatch = matchQuestionToFAQ(message, faqData);
  if (faqMatch) {
    return faqMatch.answer;
  }

  // If no FAQ match, generate a generic response based on keywords
  const lowercaseMessage = message.toLowerCase();
  
  if (lowercaseMessage.includes('application') || lowercaseMessage.includes('apply')) {
    return "Most college applications require completing an online form, submitting transcripts, standardized test scores, and sometimes essays or recommendation letters. Application deadlines typically fall between November and January for fall admission. Check the specific college's admissions website for detailed requirements and deadlines.";
  }
  
  if (lowercaseMessage.includes('scholarship') || lowercaseMessage.includes('financial aid')) {
    return "To apply for financial aid, start by completing the FAFSA (Free Application for Federal Student Aid). For scholarships, research opportunities through the college's financial aid office, community organizations, and online scholarship databases. Many scholarships require essays, recommendation letters, and demonstration of academic achievement or other talents.";
  }
  
  if (lowercaseMessage.includes('dorm') || lowercaseMessage.includes('housing') || lowercaseMessage.includes('accommodation') || lowercaseMessage.includes('hostel')) {
    return "College housing applications typically open shortly after admission decisions and require a deposit to secure a space. Most colleges offer various housing options including traditional dorms, suites, or apartments. Some schools guarantee housing for freshmen but may have limited space for upperclassmen. Apply early for the best selection of housing options.";
  }
  
  if (lowercaseMessage.includes('major') || lowercaseMessage.includes('course') || lowercaseMessage.includes('study')) {
    return "When choosing a major, consider your interests, strengths, and career goals. Many colleges don't require declaring a major until sophomore year, allowing time to explore different subjects. Talk to academic advisors, take introductory courses in areas of interest, and consider career prospects when making your decision.";
  }
  
  if (lowercaseMessage.includes('exam') || lowercaseMessage.includes('test')) {
    return "College exams typically occur at the middle (midterms) and end (finals) of each semester. The exact schedule varies by institution but is usually published at the beginning of the semester. Professors often provide study guides or review sessions before major exams. Check your syllabus or the academic calendar for specific exam dates.";
  }
  
  if (lowercaseMessage.includes('library') || lowercaseMessage.includes('resource')) {
    return "Most college libraries are open daily with extended hours during exam periods. They offer study spaces, research materials, digital resources, and assistance from librarians. Many also provide technology loans, study rooms, and specialized research databases. Check the library website for specific hours and available resources.";
  }
  
  // Default response if no patterns match
  return "I'm your college assistant, ready to help with questions about applications, financial aid, campus life, academics, and more. For this question, I recommend checking your college's specific website or contacting their student services office for the most accurate information.";
}
