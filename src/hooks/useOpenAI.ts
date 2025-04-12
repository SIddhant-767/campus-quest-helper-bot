
import { useState } from 'react';

export function useOpenAI() {
  // Get API key from localStorage or empty string if not set
  const [apiKey, setApiKey] = useState<string>(
    () => localStorage.getItem('openai_api_key') || ''
  );

  const saveApiKey = (key: string) => {
    localStorage.setItem('openai_api_key', key);
    setApiKey(key);
  };

  return {
    apiKey,
    setApiKey: saveApiKey,
    hasApiKey: !!apiKey
  };
}
