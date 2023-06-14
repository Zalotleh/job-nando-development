import { useContext } from 'react'
import SavedResumeContext from '@/context/SavedResumeContext';

export default function SavedCertificatesPreview () {
  const { certificates, setCertificates } = useContext(SavedResumeContext);
  
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
      {certificates.length > 0 && (
        //The section will be displayed only if .length is greater than 0. Otherwise, it won't render anything.
        <div className='flex flex-col ml-8'>
        <h2 className="text-base font-medium underline mb-4 mr-14">Certificates:</h2>
        <div className="my-5 px-10 mr-10">
          {certificates.map((certificate) => (
            <div className="flex flex-col content-center justify-center gap-1 space-y-1 mb-16" key={certificate.id}>
              <p className="text-sm">
                <span className="font-medium">-Title:</span> {certificate.title}
              </p>
              <p className="text-sm ml-2">
                <span className="font-medium">Issuing Organization:</span> {certificate.issuingOrganization}
              </p>
              <p className="text-sm ml-2">
                <span className="font-medium">Issue Date:</span> {certificate.issueDate}
              </p>
              
              <p className="text-sm ml-2">
                <span className="font-medium">Description:</span>
              </p>
              <p className="list-disc pl-6 max-w-7xl text-sm">{formatText(certificate.description)} </p>
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  )
}