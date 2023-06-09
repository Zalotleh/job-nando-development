import { useState, useRef } from 'react';
import axios from 'axios';

const LearningPathForm = () => {
    const formRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [learningPath, setLearningPath] = useState('')
    const [learningPathGenerated, setLearningPathGenerated] = useState(false);
    const [skills, setSkills] = useState('');
    const [proficiencyLevel, setProficiencyLevel] = useState('');
    const [learningMotivation, setLearningMotivation] = useState('');
    const [targetedCertifications, setTargetedCertifications] = useState('');
    const [learningStyle, setLearningStyle] = useState('');
    const [weeklyTimeCommitment, setWeeklyTimeCommitment] = useState('');
    const [targetedIndustries, setTargetedIndustries] = useState('');
    const [priorExperience, setPriorExperience] = useState('');
    const [practicalProjectsPreference, setPracticalProjectsPreference] = useState('');
    const [preferredPlatform, setPreferredPlatform] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gather form data
        const formData = new FormData(formRef.current);// Use the formRef to get the form element
        const userData = {};

        // Iterate through form fields and capture the question-answer pairs
        for (let [key, value] of formData.entries()) {
            userData[key] = value;
        }
        console.log(userData)
        try{

            setLoading(true)
            // Send the data to the API
            const gptresponse = await axios.post('api/learning_path/learningPathGeneratorApi',{userData});
            setLoading(false)
            setLearningPath(gptresponse.data)
            setLearningPathGenerated(true);

        }catch(error){
            setErrorMessage("Something wrong happened, please try again..")
        }
    };

    const handleRestart = () => {
        setLearningPathGenerated(false);
        // Reset other state variables here...
      };

      const formatText = (text) =>{
        const lines = text.split('\n');
        const formattedLines = lines.map((line,index) =>(
          <span key={index}>
            {line}
            <br/>
          </span>
        ));
        return formattedLines
      }

  return (
        <div className="max-w-100% mx-auto bg-white p-8 shadow-lg rounded-lg mt-20">
            {loading && !learningPathGenerated ? (
                <>
                    <div className="text-center">
                        <h2 className="text-2xl text-cyan-900 font-bold m-10">Thank you for submitting your answers!</h2>
                        <p className="text-cyan-700">This may take a while, we are working on providing you with a personalized learning path based on your answers.</p>
                    </div>
                    <div className="flex items-center justify-center h-24">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-900">
                        </div>
                        <span className="ml-2">Loading...</span>
                    </div>
                </>
            ) : (
                <>
                    {learningPath && learningPathGenerated ? (
                        // Render the learning path response
                        <>
                            <div mb-20>
                                <h1 className='text-2xl text-cyan-900 mb-16 font-bold'>Here we go...</h1>
                                <p className='text-xl text-cyan-900 leading-10 mb-10'>{formatText(learningPath)}</p>
                                <button
                                    onClick={handleRestart}
                                    className="ml-5 mt-2 mr-2 px-5 py-4 border border-transparent text-xl font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                    >
                                    Start Over
                                </button>
                            </div> 
                        </>

                    ) : (
                        <>
                            <h2 className="text-2xl  text-cyan-900 px-4 font-bold mb-4">Discover Your Personalized Learning Path</h2>
                            <p className="text-lg text-cyan-700 px-4 mb-4">**It is important to answer all the questions to receive comprehensive learning recommendations</p>

                            <form ref={formRef} className='mt-20 px-4'>
                                <div className="mb-20">
                                    <label htmlFor="skills" className="text-xl text-cyan-900 font-medium mb-4">
                                        What specific skills or knowledge do you want to acquire or improve upon?
                                    </label>
                                    <input
                                        type="text"
                                        id="skills"
                                        name="skills"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                        placeholder='Example answers: "Web development," "Digital marketing," "Data analysis," "Graphic design," "Project management," etc.'
                                        required
                                        className=" text-lg font-normal text-cyan-900 w-full p-2 mt-2 border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    />
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="proficiency_Level" className="text-xl text-cyan-900  font-medium mb-2">
                                        What is your current proficiency level in the desired skills?
                                    </label>
                                    <select
                                        id="proficiency_Level"
                                        name="proficiency_Level"
                                        value={proficiencyLevel}
                                        onChange={(e) => setProficiencyLevel(e.target.value)}
                                        className=" text-lg  text-cyan-900 font-normal w-full p-2 mt-2 border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    >
                                        <option value="" >Select proficiency level</option>
                                        <option value="Beginner" > Beginner </option>
                                        <option value="Intermediate" >Intermediate</option>
                                        <option value="Advanced" >Advanced</option>
                                        <option value="No prior experience" >No prior experience</option>
                                    </select>
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="learning_Motivation" className="text-xl  text-cyan-900 font-medium mb-2">
                                        Why do you want to learn these skills? How do you envision using them in your career or personal life?
                                    </label>
                                    <textarea
                                        rows={8}
                                        id="learning_Motivation"
                                        name="learning_Motivation"
                                        value={learningMotivation}
                                        onChange={(e) => setLearningMotivation(e.target.value)}
                                        placeholder='Example answers: "To transition into a new career," "To enhance my job prospects," "To start my own business," "To pursue a hobby or personal interest," etc.'
                                        className="text-lg font-normal text-cyan-900  w-full p-2 mt-2 border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    ></textarea>
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="targeted_Certifications" className="text-xl text-cyan-900  font-medium mb-2">
                                        Do you have any specific certifications or qualifications you are targeting?
                                    </label>
                                    <input
                                        type="text"
                                        id="targeted_Certifications"
                                        name="targeted_Certifications"
                                        value={targetedCertifications}
                                        placeholder='Example answers: "Microsoft Azure certification," "Google Ads certification," "Project Management Professional (PMP) certification," etc.'
                                        onChange={(e) => setTargetedCertifications(e.target.value)}
                                        className="text-lg font-normal text-cyan-900  w-full p-2 mt-2 border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    />
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="learning_Style" className="text-xl text-cyan-900  font-medium mb-2">
                                        What is your preferred learning style? Do you prefer self-paced online courses, interactive tutorials,books, or other formats?
                                    </label>
                                    <textarea
                                        rows={2}
                                        id="learning_Style"
                                        name="learning_Style"
                                        value={learningStyle}
                                        onChange={(e) => setLearningStyle(e.target.value)}
                                        placeholder='Example answers: "Online courses with video lectures," "Hands-on coding exercises," "Written tutorials with practical examples," "Live webinars and workshops," etc.'
                                        className="text-lg font-normal w-full p-2 mt-2 text-cyan-900 border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    ></textarea>
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="weekly_Time_Commitment" className="text-xl  text-cyan-900 font-medium mb-2">
                                        How much time are you willing to commit to learning per week? Are there any time constraints or deadlines?
                                    </label>
                                    <input
                                        type="text"
                                        id="weekly_Time_Commitment"
                                        name="weekly_Time_Commitment"
                                        value={weeklyTimeCommitment}
                                        placeholder='Example answers: "5-10 hours per week," "Flexible schedule," "I need to complete the learning within 3 months," etc.'
                                        onChange={(e) => setWeeklyTimeCommitment(e.target.value)}
                                        className="text-lg font-normal w-full p-2 mt-2 border text-cyan-900  border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    />
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="targeted_Industries" className="text-xl text-cyan-900  font-medium mb-2">
                                        Are there any specific industries or job roles you are targeting with your newly acquired skills?
                                    </label>
                                    <input
                                        type="text"
                                        id="targeted_Industries"
                                        name="targeted_Industries"
                                        value={targetedIndustries}
                                        placeholder='Example answers: "Software development in the tech industry," "Digital marketing for e-commerce companies," "Data analysis for healthcare organizations," etc.'
                                        onChange={(e) => setTargetedIndustries(e.target.value)}
                                        className="text-lg font-normal w-full p-2 mt-2 border text-cyan-900  border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    />
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="prior_Experience" className="text-xl  text-cyan-900 font-medium mb-2">
                                        Have you taken any courses or gained any experience in the desired skills before? If yes, please provide details.
                                    </label>
                                    <textarea
                                        rows={8}
                                        id="prior_Experience"
                                        name="prior_Experience"
                                        value={priorExperience}
                                        placeholder='Example answers: "I have completed an introductory web development course," "I have basic knowledge of digital marketing through previous work experience," etc.'
                                        onChange={(e) => setPriorExperience(e.target.value)}
                                        className="text-lg font-normal w-full p-2 mt-2 border text-cyan-900  border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    ></textarea>
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="practical_Projects_Preference" className="text-xl  text-cyan-900 font-medium mb-2">
                                        Do you prefer courses with practical projects or real-world applications?
                                    </label>
                                    <textarea
                                        id="practical_Projects_Preference"
                                        name="practical_Projects_Preference"
                                        value={practicalProjectsPreference}
                                        placeholder='Example answers: "Yes, I want to apply my learning through hands-on projects," "I prefer courses that provide real-life examples and case studies," "I want to build a portfolio of projects," etc.'
                                        onChange={(e) => setPracticalProjectsPreference(e.target.value)}
                                        className="text-lg font-normal w-full p-2 mt-2 border border-cyan-300 text-cyan-900  rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    ></textarea>
                                </div>

                                <div className="mb-20">
                                    <label htmlFor="preferred_Platform" className="text-xl  text-cyan-900 font-medium mb-2">
                                        Is there any specific learning platform or website you prefer for online courses?
                                    </label>
                                    <input
                                        type="text"
                                        id="preferred_Platform"
                                        name="preferred_Platform"
                                        value={preferredPlatform}
                                        placeholder='Example answers: "Udemy," "Coursera," "LinkedIn Learning," "edX," etc.'
                                        onChange={(e) => setPreferredPlatform(e.target.value)}
                                        className="text-lg font-normal w-full p-2 mt-2 border text-cyan-900  border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-[#37C9EF]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="text-lg w-full bg-cyan-900  text-white font-semibold py-2 px-4 rounded hover:bg-cyan-500 transition-colors duration-300"
                                >
                                    Discover My Learning Path
                                </button>
                            </form>

                            {errorMessage&& <p className="ml-5 mt-2 py-4 text-red-500" >{errorMessage}</p> }
                        </>
                        
                    )}
                </>
            )}
        </div>
    );
};

export default LearningPathForm;
