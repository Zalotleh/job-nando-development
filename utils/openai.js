import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
export const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
export const openAi = new OpenAIApi(openAiConfiguration);

// A helper function to make OpenAI API requests
export async function openAiRequest(req, res, promptGenerator, parseResult) {
    if (!openAiConfiguration.apiKey) {
        res.status(500).json({ error: "Missing OpenAI API key" });
        return;
    }

    const input = req.body;
    
    if (!input) {
        res.status(400).json({ error: "Missing input" });
        return;
    }

    try {
        const prompt = promptGenerator(input);
    
        console.log(`prompt: ${prompt}`);

        const response = await openAi.createChatCompletion({
            model:"gpt-3.5-turbo",
            mesages:[
                {"role":"system","content":"you are an expert professional resume and cover letter writer"},
                {"role":"user","content":`this is the job description for the job that i am applying, and my experience and skills ${prompt}, i want you to write me a professional cover letter`},   
        ],
            temperature: 0.6,
            max_tokens: 4000,
        });

        const resultStr = response.data.choices[0].message.content;

        console.log(`result: ${resultStr}`);

        const result = parseResult(resultStr);

        res.status(200).json(result);
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json({
                error: error.response.data
            });
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({ 
                error: `An error occurred during the request to OpenAI: ${error.message}`
            });
        }
    }
};
