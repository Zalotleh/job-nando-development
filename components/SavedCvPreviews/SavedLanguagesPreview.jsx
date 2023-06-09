import React, { useContext } from 'react';
import SavedResumeContext from '@/context/SavedResumeContext';

export default function SavedLanguagesPreview () {
  const { languages } = useContext(SavedResumeContext);

  return (
    <>
      {languages.length >0 &&(
       //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
       <div className='flex flex-col ml-8'>
          <h2 className="text-2xl font-medium underline mb-4 mr-14" >Languages</h2>
          <div className="my-5 px-10 mr-10">
          {languages.map((language) => (
            <div key={language.id} className="flex flex-col content-center justify-center gap-1 space-y-2 mb-7">
              <p> <span className="font-medium">Language: </span> {language.languageName}</p>
              <p><span className="font-medium">Proficiency: </span> {language.languageProficiency}</p>
            </div>
          ))}
          </div>
        </div>
      )}

    </>
  );
}