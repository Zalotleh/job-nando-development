import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

const EducationsPreview = () => {
  const { educations } = useContext(ResumeContext);
  
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
      {educations.length > 0 && (
        // the education section will show in the previews only if the user add an education.
        <div className='flex flex-col ml-8'>
          <h2 className="text-base font-medium underline mb-4 mr-14">Educations:</h2>
          <div className="my-5 px-10 mr-10">
          {educations.map((education) => (
            <div className="flex flex-col content-center justify-center gap-1 space-y-1 mb-16" key={education.id}>
              <p className='text-sm'>
                <span className="font-medium">{education.id}-Degree:</span> {education.degree}
              </p>
              <p className='text-sm'>
                <span className="font-medium">Field of Study:</span> {education.fieldOfStudy}
              </p>
              <p className='text-sm'>
                <span className="font-medium">Instituin Name:</span> {education.institutionName}
              </p>
              <p className='text-sm'>
                <span className="font-medium">Location:</span> {education.location}
              </p>
              <p className='text-sm'>
                <span className="font-medium">Graduation Date:</span> {education.graduationDate}
              </p>
              
              <p className='text-sm'>
                <span className="font-medium">Additional Info:</span>
              </p>
              <p className="list-disc pl-6 max-w-7xl text-sm">{formatText(education.additionalInfo)} </p>
            </div>
          ))}
        </div>
        </div>

        
      )}
    </>
  )
}

export default EducationsPreview
