import { useContext } from 'react'
import SavedResumeContext from '@/context/SavedResumeContext';

export default function SavedSkillsPreview () {
    const { skills, setSkills } = useContext(SavedResumeContext);

    return (
      <>
      {skills.length > 0 && (
       //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.

       <div className='flex flex-col mb-8 ml-8'>
            <h2 className="text-base font-medium underline mb-4 mr-14">Skills:</h2>
            <div className="my-2 px-10 mr-10">
            {skills.map((skill) => (
              <div className="flex mb-2" key={skill.id}>
                <p className="text-sm font-medium">
                  - {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
    )
}