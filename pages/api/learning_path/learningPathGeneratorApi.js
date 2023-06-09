import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openAi = new OpenAIApi(openAiConfiguration);

export default async function learningPathGeneratorApi(req, res) {
  const { userData } = req.body;

  const generatePrompt = (uData) => {
    if (uData) {
      return Object.entries(uData)
        .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
        .join('\n');
    }
    return '';
  };
  const convertedUserData = generatePrompt(userData);
  
  try {

    const learningPathResponse = await openAi.createChatCompletion({
      model:"gpt-3.5-turbo",
      messages:[
          {"role":"system","content":"you are an expert professional career advisor and trainings expert also a javascript objects expert "},
          {"role":"user","content":`use this information i provided here ${convertedUserData} 
          and please provide a comprehensive and professional learning path advice based on the following criteria:
          Domain and Industry:
          Provide information about the domain to which the skills belong and the industry it is associated with.
          Discuss the current trends, opportunities, and challenges within this domain and how it aligns with my career goals.
          Identify the key skills required to excel in this domain and explain why they are important.
          University Degree:
          Clarify whether obtaining a university degree is necessary to learn and pursue this skill.
          Discuss the advantages and disadvantages of pursuing a degree versus alternative learning methods.
          Online Learning:
          Explore the availability of online tutorials and courses for acquiring this skill.
          Discuss the effectiveness of online learning platforms and provide recommendations for credible institutions that offer quality online courses.
          Additional Skills and Tools:
          Identify any complementary skills or tools that are beneficial to acquire alongside the main skill.
          Explain how these additional skills enhance my proficiency in the domain.
          Statistics and Popularity:
          Provide relevant statistics about the domain, such as market growth, job prospects, or industry trends.
          Highlight the popularity of this skill within the industry and its future potential.
          Salary Insights:
          Offer insights into the potential salary range associated with this skill.
          Discuss factors that may influence salary levels, such as experience, location, and industry demand.
          Learning Steps and Employability:
          Outline in details the necessary steps to learn this skill and become employable.
          Provide a detailed roadmap that includes recommended courses, books, and resources from reputable platforms such as Udemy, Amazon, edX, Coursera, and others.
          Please provide a detailed learning path that addresses these aspects and helps me progress in my desired domain.
          Feel free to include any additional information or specific preferences you may have."
          `,
        }, 

      ],
      temperature: 0.1,
      // max_tokens: 3000,
  });

    const learningPath = learningPathResponse.data.choices[0].message.content;

    console.log(`learning Path: ${learningPath}`);

        res.status(200).json(learningPath);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Server error" });

    } 
}