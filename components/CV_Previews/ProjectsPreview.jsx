import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

export default function ProjectsPreview () {
  const { projects, setProjects } = useContext(ResumeContext);

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
      {projects.length > 0 && (
        //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.

        <div className='flex flex-col ml-8'>
            <h2 className="text-2xl font-medium underline mb-4 mr-14">Projects:</h2>
            <div className="my-5 px-10 mr-10">
            {projects.map((project) => (
              <div className="flex flex-col content-center justify-center gap-1 space-y-2 mb-10" key={project.id}>
                <p>
                  <span className="font-medium">Project Title:</span> {project.projectTitle}
                </p>
                <p>
                  <span className="font-medium">Description:</span>
                </p>
                <p className="list-disc pl-6 max-w-7xl">{formatText(project.description)} </p>
              </div>
            ))}
            </div>
        </div>
      )}
    </>
  )
}