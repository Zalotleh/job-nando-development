import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
export const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
export const openAi = new OpenAIApi(openAiConfiguration);

// A helper function to make OpenAI API requests
export default async function openAiRequest(req, res) {
    
    const {text} = req.body;
    console.log(text)
   
    
    if (!text) {
        res.status(400).json({ error: "Missing input" });
        return;
    } 
    

    try {
        console.log(`prompt: ${text}`);

        const response = await openAi.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[
                // {"role":"system","content":"you are an expert professional resume and cover letter writer"},
                // {"role":"user","content":`this is the job description for the job that i am applying, and my experience and skills ${text}, i want you to write me a professional cover letter`},   
                {"role":"user","content":`hello, i am a candidate ${text}, who are you?`},   

            ],
            temperature: 0.6,
            max_tokens: 4000,
        });

        const resultStr = response.data.choices[0].message.content;

        console.log(`result: ${resultStr}`);


        res.status(200).json(resultStr);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });

    }

};
