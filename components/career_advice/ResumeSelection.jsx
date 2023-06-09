import React from 'react';
import Link from 'next/link';
 
const ResumeSelection = ({ cvsList, selectedResumeId, onSelectResume }) => {

  return (
    <div>
      <h1 className='text-lg font-bold mb-8 text-cyan-900' >Select a resume:</h1>
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
                className=' ml-5 mt-2 mb-5 mr-16 px-8 py-4 text-cyan-600 bg-gray-100 border-gray-300 focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-cyan-800 focus:ring-2 dark:bg-cyan-700 dark:border-cyan-600'
              />
              <Link 
                href={`../../account/cvs/${cv.id}`} 
                as={`../../account/cvs/${cv.id}`}
                className={`flex flex-col content-center justify-center gap-3 ml-5 mt-2 mb-5 mr-16 px-8 py-4 border shadow-lg text-lg font-medium rounded-md text-cyan-900 hover:bg-slate-100 hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${
                  selectedResumeId === cv.id ? 'bg-cyan-200' : ''
                }`}                target="_blank"
                >
                {cv.cvTitle}
                <p className='text-sm'>
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
