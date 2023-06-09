import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openAi = new OpenAIApi(openAiConfiguration);

export default async function workExperienceTunning(req,res) {
    
    const {text} = req.body;
    console.log(text)
    try {

        const workExperienceResponse = await openAi.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[
              {"role":"system","content":"you are an expert professional recruiter and career coach"},
              {"role":"user","content":`I am writing my resume and i need you to improve my wok experience description here ${text},provide relevant and specific details that highlight my responsibilities, achievements, and impact, Start with a strong action verb, Be specific and provide details, Highlight achievements and outcomes, Use industry-specific keywords, Keep it concise, Show progression and growth, Use a consistent format, please provide only the improved text, no side talk. `}, 

          ],
          temperature: 0.6,
          max_tokens: 3000,
      });

      const gpt3response = workExperienceResponse.data.choices[0].message.content;

      console.log(`result: ${gpt3response}`);

        res.status(200).json(gpt3response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });

    } 

}
