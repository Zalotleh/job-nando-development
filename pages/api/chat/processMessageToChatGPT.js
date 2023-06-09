import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
export const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
export const openAi = new OpenAIApi(openAiConfiguration);

async function processMessageToChatGPT(req, res) {
  
  const {systemMessage,apiMessages } = req.body;

  console.log(systemMessage, apiMessages)

  try {

    const response = await openAi.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages: [
            systemMessage,  // The system message DEFINES the logic of our chatGPT
            ...apiMessages // The messages from our chat with ChatGPT
          ],
        temperature: 0.1,
    });

    const resultStr = response.data.choices[0].message.content;

    console.log(`result: ${resultStr}`);

    res.status(200).json(resultStr);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default processMessageToChatGPT;