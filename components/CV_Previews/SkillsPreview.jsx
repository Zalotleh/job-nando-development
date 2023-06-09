import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

const SkillsPreview = () => {
    const { skills, setSkills } = useContext(ResumeContext);

  return (
    <>
      {skills.length > 0 && (
       //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.

       <div className='flex flex-col ml-8'>
            <h2 className="text-2xl font-medium underline mb-4 mr-14">Skills:</h2>
            <div className="my-5 px-10 mr-10">
            {skills.map((skill) => (
              <div className="flex mb-2" key={skill.id}>
                <p className="font-medium">
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

export default SkillsPreview