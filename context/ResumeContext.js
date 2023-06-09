import { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '04 414 414 414',
    address: '123 Main Street',
  });
  const [objective, setObjective] = useState({objectiveText:'my objectives are: o secure a challenging web developer position in a progressive organization that offers opportunities for advancement and growth.'});
  const [summary, setSummary] = useState({summaryText:'Highly skilled web developer with 5+ years of experience in designing and developing user-friendly and innovative websites. Proficient in HTML, CSS, JavaScript, and React.js. Strong problem-solving abilities and a passion for creating seamless user experiences. Excited to contribute to the success of a dynamic and collaborative team.'});
  const [workExperiences, setWorkExperiences] = useState([
    {
      id: 1,
      jobTitle: 'Web Developer',
      company: 'ABC Company',
      startDate: '1/2017',
      endDate: '12/2022',
      responsibilities: '• Developed and maintained responsive websites using HTML, CSS, and JavaScript.\n• Collaborated with cross-functional teams to implement new features and improve website performance.\n• Conducted thorough testing and debugging to ensure seamless user experience.\n• Implemented SEO best practices to improve website visibility and organic traffic.\n• Integrated third-party APIs to enhance website functionality.\n• Optimized websites for speed and performance using modern web development techniques.',
    },
    {
      id: 2,
      jobTitle: 'Junior Web Developer',
      company: 'XYZ Corporation',
      startDate: '6/2015',
      endDate: '12/2016',
      responsibilities: '• Assisted in the development and maintenance of websites using HTML, CSS, and JavaScript.\n• Collaborated with senior developers to implement new features and fix bugs.\n• Conducted website testing and troubleshooting to ensure optimal performance.\n• Assisted in the integration of content management systems (CMS) for client websites.\n• Participated in code reviews and provided feedback for code improvements.',
    },
  ]);
  const [educations, setEducations] = useState([
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      fieldOfStudy: 'Computer Science',
      institutionName: 'University of ABC',
      location: 'USA',
      graduationDate: '2014',
      additionalInfo: 'GPA: 3.8/4.0',
    },
    {
      id: 2,
      degree: 'Diploma in Web Development',
      fieldOfStudy: 'Web Development',
      institutionName: 'Online Learning Platform',
      location: 'Online',
      graduationDate: '2015',
      additionalInfo: 'Completed online courses in HTML, CSS, JavaScript, and React.js',
    },
  ]);
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: 'React.js Developer Certification',
      issuingOrganization: 'React.js Academy',
      issueDate: '01/01/2018',
      description: 'Certificate of completion for the React.js Developer course covering advanced concepts and best practices in React.js development.',
    },
    {
      id: 2,
      title: 'Responsive Web Design Certification',
      issuingOrganization: 'Online Learning Platform',
      issueDate: '01/01/2016',
      description: 'Certificate of completion for the Responsive Web Design course, demonstrating proficiency in creating mobile-friendly and responsive websites.',
    },
  ]);
  const [skills, setSkills] = useState([
    { id: 1 , name: 'HTML' },
    { id: 2 ,name: 'CSS' },
    { id: 3 ,name: 'JavaScript' },
    { id: 4 ,name: 'React.js' },
    { id: 5 ,name: 'Responsive Design' },
    { id: 6 ,name: 'UI/UX Design' },
    { id: 7 ,name: 'Git' },
  ]);
  const [links, setLinks] = useState([
    { id: 1 ,url: 'www.linkedin.com/in/johndoe' },
    { id: 2 ,url: 'www.github.com/johndoe' },
    { id: 3 ,url: 'www.johndoeportfolio.com' },
  ]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectTitle: 'E-commerce Website',
      description: 'Developed a fully functional e-commerce website using React.js and integrated with a backend API for product management and user authentication.',
    },
    {
      id: 2,
      projectTitle: 'Portfolio Website',
      description: 'Designed and developed a personal portfolio website showcasing past projects, skills, and contact information. Implemented responsive design for optimal viewing across devices.',
    },
  ]);
  const [volunteers, setVolunteers] = useState([
  {
    id: 1,
    organizationName: 'Tech for Good',
    role: 'Web Development Volunteer',
    startDate: '01/2013',
    endDate: '12/2014',
    description: 'Collaborated with a team of developers to create websites for non-profit organizations. Developed custom features and provided technical support.',
  },
  {
    id: 2,
    organizationName: 'Code for Change',
    role: 'Frontend Development Volunteer',
    startDate: '06/2012',
    endDate: '12/2012',
    description: 'Contributed to the development of a web application aimed at promoting social change. Implemented frontend features and resolved user interface issues.',
  },
]);
const [languages, setLanguages] = useState([
  { id: 1 ,languageName: 'English', languageProficiency: 'Fluent' },
  { id: 2 ,languageName: 'Spanish', languageProficiency: 'Intermediate' },
]);
  const [cvSummary, setCvSummary] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cvTitle, setCvTitle] = useState('Web Developer Resume');
  const [cvsList, setCvsList] = useState([])
  const [coverLettersList, setCoverLettersList] = useState([])


  const contextValue = {
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
    cvsList, 
    setCvsList,
    coverLettersList,
     setCoverLettersList,
  };


  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeContext;
