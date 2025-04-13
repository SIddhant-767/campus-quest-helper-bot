
import { useState } from 'react';

// Hardcoded API key - replace with your actual DeepSeek API key
const HARDCODED_API_KEY = "sk-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

export function useOpenAI() {
  // Use the hardcoded API key instead of getting from localStorage
  const [apiKey] = useState<string>(HARDCODED_API_KEY);

  return {
    apiKey,
    hasApiKey: true
  };
}
