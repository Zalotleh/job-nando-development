import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

export default function LinksPreview  ()  {
    const { links, setLinks } = useContext(ResumeContext);

  return (
    <>
      {links.length > 0 && (
        //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
         
        <div className='flex flex-col ml-8'>
          <h2 className="text-base font-medium underline mb-4 mr-14">Social Media & Links:</h2>
          <div className="mt-2 mb-8 px-10 mr-10 text-sm">
          {links.map((link) => (
            <div className="flex mb-1" key={link.id}>
              <p className="font-medium">
                - {link.url}
              </p>
              
            </div>
          ))}
          </div>
        </div>
      )}
    </>
  )
}

