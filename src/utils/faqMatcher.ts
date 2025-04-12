
import { FAQ, faqData } from "../data/faqData";

/**
 * Simple matching algorithm to find relevant FAQs based on user query
 */
export function findMatchingFAQ(query: string): FAQ | null {
  // Normalize the query
  const normalizedQuery = query.toLowerCase().trim();
  
  // Direct question match
  const directMatch = faqData.find(
    faq => faq.question.toLowerCase().includes(normalizedQuery)
  );
  
  if (directMatch) return directMatch;
  
  // Keyword matching with scores
  const matches = faqData.map(faq => {
    let score = 0;
    
    // Check keywords
    faq.keywords.forEach(keyword => {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 10;
      }
    });
    
    // Check for partial matches in question
    const words = normalizedQuery.split(/\s+/);
    words.forEach(word => {
      if (word.length > 3 && faq.question.toLowerCase().includes(word)) {
        score += 5;
      }
      if (word.length > 3 && faq.answer.toLowerCase().includes(word)) {
        score += 3;
      }
    });
    
    return { faq, score };
  });
  
  // Sort by score and get the best match
  matches.sort((a, b) => b.score - a.score);
  
  // Return the best match if it has a score above threshold
  return matches[0]?.score > 5 ? matches[0].faq : null;
}

/**
 * Generate a fallback response when no FAQ match is found
 */
export function generateFallbackResponse(query: string): string {
  return `I don't have specific information about "${query}". Would you like to submit this as a new question to our team?`;
}
