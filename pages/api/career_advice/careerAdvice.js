import { Configuration, OpenAIApi } from "openai";


const openAiConfiguration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openAi = new OpenAIApi(openAiConfiguration);

async function generateCareerAdvice (cvData, formData) {
  

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

      function convertFormDataToText(formdata){

        let text = '';
      
        // add interests section
        if (formdata.interests) {
          text += 'My Interests and passions:\n';
          text += `${formdata.interests}\n`;
        }

        // add career goals
        if (formdata.careerGoals) {
          text += 'My career short term goals are:\n';
          text += `${formdata.careerGoals.shortTermGoals}\n`;
          text += ' and my career long term goals are:\n';
          text += `${formdata.careerGoals.longTermGoals}\n`;
        }
        // add Industry Preferences section
        if (formdata.industryPreferences) {
          text += ' and my Industry Preferences are:\n';
          text += `${formdata.industryPreferences}\n`;
        }

        // add Geographic Preferences section
        if (formdata.geographicPreferences) {
          text += 'and here my answer if i am willing to relocate:\n';
          text += `${formdata.geographicPreferences.relocation}\n`;
          text += ' and my preferred location to work in is/are:\n';
          text += `${formdata.geographicPreferences.preferredLocation}\n`;
        }

        // add Work Environment and Culture section
        if (formdata.workEnvironmentCulture) {
          text += 'and my ideal work environment:\n';
          text += `${formdata.workEnvironmentCulture.workEnvironment}\n`;
          text += ' and Companies with cultures I admire:\n';
          text += `${formdata.workEnvironmentCulture.companyCulture}\n`;
        }

        // add Professional Development section
        if (formdata.professionalDevelopment) {
          text += 'and i am interested in these professional development opportunities:\n';
          text += `${formdata.professionalDevelopment.professionalDevelopmentOpp}\n`;
          text += ' and my preferred modes of learning or skills to enhance:\n';
          text += `${formdata.professionalDevelopment.preferredLearning}\n`;
        }
        return text
      }


      const CvText = convertCvDataToText(cvData)
      const formDataText = convertFormDataToText(formData)
       try {

        const CvSummaryResponse = await openAi.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[
                {"role":"system","content":"you are an expert and professional recruiter and career coach"},
                {"role":"user","content":`Create a concise and compelling summary of the provided CV data. The summary should highlight the my key skills, qualifications, and experiences. Keep the summary length between 2 to 3 paragraphs. The summary should be well-structured and engaging to grab the attention of potential employers.
                CV Data: 
                ${CvText}`}
            ],
            temperature: 0.6,
            max_tokens: 3000,
        });

        const CvSummary = CvSummaryResponse.data.choices[0].message.content;

        const careerAdviceResponse = await openAi.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[
              {"role":"system","content":"you are an expert professional recruiter and proffessional career coach"},
              {"role":"user","content":`Provide comprehensive and professional career advice, What are the key steps, skills, and resources 
              I should consider in order to make informed decisions and progress in my career path?. 
              Your advice,recommendations, and actionable insights must consider my resume summary here ${CvSummary},
              and my interests, goals, industry preferences, geographic preferences, work environment preferences,
              and my professional development aspirations which I included in my Responses here: ${formDataText}.
              provide the career advice in a professional but friendly manner,please no side talk or irrelevant topic.
              `}, 

          ],
          temperature: 0.6,
          max_tokens: 3000,
      });

      const careerAdvice = careerAdviceResponse.data.choices[0].message.content;

      return careerAdvice

    }catch(error){
      console.log(error);
      throw new Error("Failed to generate career advice")
    }
}

export default async function careerAdviceApi(req, res) {
  const { cvData, formData } = req.body;

  try {
    const careerAdvice = await generateCareerAdvice(cvData, formData);

    res.status(200).json(careerAdvice);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
}

