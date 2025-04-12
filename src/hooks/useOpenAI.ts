
import { useState } from 'react';

// Hardcoded API key - replace with your actual OpenAI API key
const HARDCODED_API_KEY = "AIzaSyBGWVW8vJ7H_Nyo6gSRBpln9u7CikA9kzs";

export function useOpenAI() {
  // Use the hardcoded API key instead of getting from localStorage
  const [apiKey] = useState<string>(HARDCODED_API_KEY);

  return {
    apiKey,
    hasApiKey: true
  };
}
