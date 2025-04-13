
import { useState } from 'react';

// Hardcoded API key - replace with your actual DeepSeek API key
const HARDCODED_API_KEY = "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";

export function useOpenAI() {
  // Use the hardcoded API key instead of getting from localStorage
  const [apiKey] = useState<string>(HARDCODED_API_KEY);

  return {
    apiKey,
    hasApiKey: true
  };
}
