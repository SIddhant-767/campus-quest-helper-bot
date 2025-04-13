
import { generateLocalResponse } from './localResponses';
import OpenAI from 'openai';

/**
 * Sends a message to OpenRouter API using OpenAI SDK and returns the response
 * Falls back to local responses if API key is invalid
 */
export async function getOpenAIResponse(
  message: string, 
  apiKey: string
): Promise<string> {
  try {
    if (!apiKey) {
      return "Please provide an API key in the settings to enable AI responses.";
    }

    // Initialize the OpenAI client with OpenRouter configuration
    // Added dangerouslyAllowBrowser: true to allow client-side usage
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // Allow browser usage
      defaultHeaders: {
        'HTTP-Referer': window.location.origin, // Current site URL
        'X-Title': 'College Quest', // Site title
      },
    });

    // Make the API call using the OpenAI SDK
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-4o', // Using GPT-4o through OpenRouter
      messages: [
        {
          role: 'system',
          content: "You are a helpful college assistant that provides accurate and concise information about college-related questions. Keep responses under 150 words when possible."
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Extract the response from the completion
    return completion.choices[0].message.content || "I couldn't generate a response. Please try again.";

  } catch (error) {
    console.error("Error calling OpenRouter:", error);
    
    // Check if it's an authentication error
    if (error instanceof Error && error.message.includes("Authentication")) {
      console.log("Authentication error, falling back to local responses");
      return generateLocalResponse(message);
    }
    
    // Fallback to local responses on any error
    return generateLocalResponse(message);
  }
}
