import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

export default function VolunteersPreview () {
  const { volunteers, setVolunteers } = useContext(ResumeContext);

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
      {volunteers.length > 0 && (
       //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
       <div className='flex flex-col ml-8'>
          <h2 className="text-2xl font-medium underline mb-4 mr-14">Volunteers:</h2>
          <div className="my-5 px-10 mr-10">
          {volunteers.map((volunteer) => (
            <div className="flex flex-col content-center justify-center gap-1 space-y-2 mb-10" key={volunteer.id}>
              <p>
                <span className="font-medium">Organization Name:</span> {volunteer.organizationName}
              </p>
              <p>
                <span className="font-medium">Role:</span> {volunteer.role}
              </p>
              <p>
                <span className="font-medium">Start Date:</span> {volunteer.startDate}
              </p>
              <p>
                <span className="font-medium">End Date:</span> {volunteer.endDate}
              </p>
              <p>
                <span className="font-medium">Description:</span>
              </p>
              <p className="list-disc pl-6 max-w-7xl">{formatText(volunteer.description)}</p>
            </div>
          ))}
          </div>
        </div>
      )}
    </>
  )
}

