import { createContext, useState} from 'react';

export const SavedResumeContext = createContext();

export const SavedResumeProvider =  ({ children })=> {
  const [savedCvId, setSavedCvId] = useState(null)
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });


  const [objective, setObjective] = useState({objectiveText:''});
  const [summary, setSummary] = useState({summaryText:''});
  const [workExperiences, setWorkExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [cvSummary, setCvSummary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvTitle, setCvTitle] = useState("");




  const contextValue = {
    savedCvId,
    setSavedCvId,
    personalDetails,
    setPersonalDetails,
    workExperiences,
    setWorkExperiences,
    certificates,
    setCertificates,
    educations,
    setEducations,
    objective,
    setObjective,
    summary,
    setSummary,
    skills,
    setSkills,
    links,
    setLinks,
    projects,
    setProjects,
    volunteers,
    setVolunteers,
    languages,
    setLanguages,
    cvSummary,
    setCvSummary,
    jobDescription,
    setJobDescription,
    coverLetter,
    setCoverLetter,
    cvTitle,
    setCvTitle,
 
  };


  return (
    <SavedResumeContext.Provider value={contextValue}>
      {children}
    </SavedResumeContext.Provider>
  );
};

export default SavedResumeContext;


