import { useContext } from 'react'
import SavedResumeContext from '@/context/SavedResumeContext';

export default function SavedLinksPreview  ()  {
    const { links, setLinks } = useContext(SavedResumeContext);

    return (
      <>
        {links.length > 0 && (
          //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
           
          <div className='flex flex-col ml-8'>
            <h2 className="text-2xl font-medium underline mb-4 mr-14">Social Media & Links:</h2>
            <div className="my-5 px-10 mr-10">
            {links.map((link) => (
              <div className="flex mb-2" key={link.id}>
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

