import { Configuration, OpenAIApi } from "openai";

// Create an OpenAI API client
const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openAi = new OpenAIApi(openAiConfiguration);

async function GenerateCoverLetter (cvData, jobDescription) {
  

    function convertCvDataToText(cv){

        let text = '';
      
        // add personal details section
        if (cv.personalDetails) {
          text += 'Personal Details:\n';
          text += `Name: ${cv.personalDetails.name}\n`;
          text += `Email: ${cv.personalDetails.email}\n`;
          text += `Phone: ${cv.personalDetails.phone}\n`;
          text += `Address: ${cv.personalDetails.address}\n\n`;
        }
      
        // add work experiences section
        if (cv.workExperiences && cv.workExperiences.length > 0) {
          text += 'Work Experiences:\n';
          cv.workExperiences.forEach((workExperience) => {
            text += `Company: ${workExperience.company}\n`;
            text += `Job Title: ${workExperience.jobTitle}\n`;
            text += `Start Date: ${workExperience.startDate}\n`;
            text += `End Date: ${workExperience.endDate}\n`;
            text += `Responsibilities: ${workExperience.responsibilities}\n\n`;
          });
        }
      
        // add certificates section
        if (cv.certificates && cv.certificates.length > 0) {
          text += 'Certificates:\n';
          cv.certificates.forEach((certificate) => {
            text += `Title: ${certificate.title}\n`;
            text += `Issuing Organization: ${certificate.issuingOrganization}\n`;
            text += `Issue Date: ${certificate.issueDate}\n`;
            text += `Description: ${certificate.description}\n\n`;
          });
        }
      
        // add educations section
        if (cv.educations && cv.educations.length > 0) {
          text += 'Educations:\n';
          cv.educations.forEach((education) => {
            text += `Degree: ${education.degree}\n`;
            text += `Field Of Study: ${education.fieldOfStudy}\n`;
            text += `Institution Name: ${education.institutionName}\n`;
            text += `Location: ${education.location}\n`;
            text += `Graduation Date: ${education.graduationDate}\n`;
            text += `Additional Info: ${education.additionalInfo}\n\n`;
          });
        }
      
        // add objective section
        if (cv.objective && cv.objective.objctiveText) {
          text += 'Objective:\n';
          text += `${cv.objective.objctiveText}\n\n`;
        }
      
        // add summary section
        if (cv.summary && cv.summary.summaryText) {
          text += 'Summary:\n';
          text += `${cv.summary.summaryText}\n\n`;
        }
      
        // add skills section
        if (cv.skills && cv.skills.length > 0) {
          text += 'Skills:\n';
          cv.skills.forEach((skill) => {
            text += `${skill.name}\n`;
          });
          text += '\n';
        }
      
        // add links section
        if (cv.links && cv.links.length > 0) {
          text += 'Links:\n';
          cv.links.forEach((link) => {
            text += `${link.url}\n`;
          });
          text += '\n';
        }
      
        // add projects section
        if (cv.projects && cv.projects.length > 0) {
          text += 'Projects:\n';
          cv.projects.forEach((project) => {
            text += `Project Title: ${project.projectTitle}\n`;
            text += `Description: ${project.description}\n\n`;
          });
        }
      
        // add volunteers section
        if (cv.volunteers && cv.volunteers.length >0){
            text += 'Volunteers:\n';
            cv.volunteers.forEach((volunteer) => {
            text += `Organization Name: ${volunteer.organizationName}\n`;
            text += `Role: ${volunteer.role}\n\n`;
            text += `Start Date: ${volunteer.startDate}\n\n`;
            text += `End Date: ${volunteer.endDate}\n\n`;
            text += `Description: ${volunteer.description}\n\n`;

          });
        }

        // add languages section
        if (cv.languages && cv.languages.length >0){
            text += 'Languages:\n';
            cv.languages.forEach((language) => {
            text += `Langauge: ${language.languageName}\n`;
            text += `Level: ${language.languageProficiency}\n\n`;
          });
        }

        return text;
      }

      const cvText = convertCvDataToText(cvData)
      
       try {

        const cvSummaryResponse = await openAi.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[
                {"role":"system","content":"you are an expert professional recruiter and career coach"},
                {"role":"user","content":`Create a concise and compelling summary of the provided CV data. The summary should highlight the candidate's key skills, qualifications,achievments,and experiences. Keep the summary length between 2 to 3 paragraphs. The summary should be well-structured and engaging to grab the attention of potential employers.
                CV Data: 
                ${cvText}`}, 

            ],
            temperature: 0.6,
            max_tokens: 3000,
        });

        const cvSummary = cvSummaryResponse.data.choices[0].message.content;


        const coverLetterResponse = await openAi.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[
              {"role":"system","content":"you are an expert professional recruiter and career coach"},
              {"role":"user","content":`create a cover letter using the following data: ${cvSummary} which is a summary we created from the candidate resume, and ${jobDescription} this is the job descrition which the candidate applies to`}, 

          ],
          temperature: 0.6,
          max_tokens: 3000,
      });

      const coverLetter = coverLetterResponse.data.choices[0].message.content;

      return coverLetter
    } catch (error) {
        console.log(error)
        throw new Error("Failed to generate cover Letter")
      } 
}

export default async function createCoverLetter( req,res){
  const {cvData, jobDescription } = req.body;

  try{
    const coverLetter = await GenerateCoverLetter(cvData, jobDescription)
    res.status(200).json(coverLetter);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }

}