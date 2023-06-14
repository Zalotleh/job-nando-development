import React from 'react';
import Link from 'next/link';
 
const ResumeSelection = ({ cvsList, selectedResumeId, onSelectResume }) => {

  return (
    <div>
      <h1 className='text-base font-bold ml-5 mb-4 text-cyan-900' >Select a resume:</h1>
      <ul>
        {cvsList.map(cv => (
          <button 
          key={cv.id}
          >
            <label >
              <input
                type="radio"
                value={cv.id}
                checked={selectedResumeId === cv.id}
                onChange={() => onSelectResume(cv.id)}
                className=' ml-5 mt-2 mb-4 mr-10 px-6 py-2 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-cyan-800 focus:ring-2 dark:bg-cyan-700 dark:border-cyan-600'
              />
              <Link 
                href={`../../account/cvs/${cv.id}`} 
                as={`../../account/cvs/${cv.id}`}
                className={
                      `flex flex-col content-center justify-center gap-3 ml-5 mt-2 mb-4 mr-10 px-6 py-2 border shadow-lg text-sm font-medium rounded-md text-cyan-900 hover:bg-slate-100 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 
                      ${selectedResumeId === cv.id ? 'bg-cyan-200' : ''}`
                    }                
                target="_blank"
                >
                {cv.cvTitle}
                <p className='text-xs'>
                  Click to view...
                </p>
            </Link>
            </label>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSelection;
