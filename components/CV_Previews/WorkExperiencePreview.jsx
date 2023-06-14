import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

const WorkExperiencePreview = () => {
    const { workExperiences, setWorkExperiences } = useContext(ResumeContext);
    
    
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
    <>
      {workExperiences.length > 0 && (
        //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
      <div className='flex flex-col ml-8 mt-6'>
      <h2 className="text-base font-medium underline mb-2 mr-14">Work Experience:</h2>
      <div className="my-5 px-10 mr-10">
        {workExperiences.map((job) => (

            <div className="flex flex-col content-center justify-center gap-2 space-y-1 mb-14" key={job.id}>
              <p className="text-sm" >
                <span className="font-medium">-Company:</span> {job.company}
              </p>
              <p className="text-sm ml-2">
                <span className="font-medium ">Position:</span> {job.jobTitle}
              </p>
              <p className="text-sm ml-2">
                <span className="font-medium">Start Date:</span>  {job.startDate} <span className="font-medium ml-7">End Date:</span> {job.endDate}
              </p>
              <p className="text-sm ml-2">
                <span className="font-medium">Responsibilities:</span>
              </p>
              <p className="list-disc pl-6 max-w-7xl text-sm">
              {formatText(job.responsibilities)}
              </p>
            </div>
        ))}

      </div>

      </div>

      )}
  </>
  )
}

export default WorkExperiencePreview
