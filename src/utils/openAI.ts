
import { generateLocalResponse } from './localResponses';

interface DeepSeekResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
  error?: {
    message: string;
  };
}

/**
 * Sends a message to DeepSeek API and returns the response
 * Falls back to local responses if API key is invalid
 */
export async function getOpenAIResponse(
  message: string, 
  apiKey: string
): Promise<string> {
  try {
    if (!apiKey) {
      return "Please provide a DeepSeek API key in the settings to enable AI responses.";
    }

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a helpful college assistant that provides accurate and concise information about college-related questions. Keep responses under 150 words when possible."
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json() as DeepSeekResponse;

    if (data.error) {
      console.error("DeepSeek API error:", data.error);
      
      // If it's an authentication error, use local responses instead
      if (data.error.message && data.error.message.includes("Authentication Fails")) {
        // Return a local response instead
        return generateLocalResponse(message);
      }
      
      return `Error: ${data.error.message || "Failed to get response from DeepSeek"}`;
    }

    return data.choices[0].message.content || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error calling DeepSeek:", error);
    // Fallback to local responses on any error
    return generateLocalResponse(message);
  }
}
