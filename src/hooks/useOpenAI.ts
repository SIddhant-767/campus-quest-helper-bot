
import { useState } from 'react';

// Hardcoded API key - replace with your actual OpenAI API key
const HARDCODED_API_KEY = "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";

export function useOpenAI() {
  // Use the hardcoded API key instead of getting from localStorage
  const [apiKey] = useState<string>(HARDCODED_API_KEY);

  return {
    apiKey,
    hasApiKey: true
  };
}
