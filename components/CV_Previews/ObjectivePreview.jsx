import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

const ObjectivePreview = () => {
  const { objective, setObjective } = useContext(ResumeContext);

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
      {objective.objectiveText && (
        //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.

        <div className="mt-7 mb-4 ml-8 flex flex-col">
          <h2 className="text-base font-medium underline mb-2 mr-16">Objective:</h2>
          <div className="mb-4 mt-2 mx-8 ">
            <p className='max-w-7xl text-sm'>
              {formatText(objective.objectiveText)}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
  
  export default ObjectivePreview
  