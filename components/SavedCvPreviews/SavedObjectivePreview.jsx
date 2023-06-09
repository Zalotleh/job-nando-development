import { useContext } from 'react'
import {SavedResumeContext} from '@/context/SavedResumeContext';

const SavedObjectivePreview = () => {
  const { objective, setobjective } = useContext(SavedResumeContext);

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

        <div className="my-8 mx-8 flex flex-col">
          <h2 className="text-2xl font-medium underline mb-4 mr-16">Objective:</h2>
          <div className="space-y-2 mb-8 mt-4 mx-8 ">
            <p className='max-w-7xl'>
              {formatText(objective.objectiveText)}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
  
export default SavedObjectivePreview
  