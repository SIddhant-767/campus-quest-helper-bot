
import { useState } from 'react';

// Hardcoded API key for OpenRouter - this will need to be replaced with a valid key
const OPENROUTER_API_KEY = "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";

export function useOpenAI() {
  // Use the hardcoded API key instead of getting from localStorage
  const [apiKey] = useState<string>(OPENROUTER_API_KEY);
  const [isValidKey, setIsValidKey] = useState<boolean>(false);

  return {
    apiKey,
    hasApiKey: true,
    isValidKey,
    setIsValidKey
  };
}
