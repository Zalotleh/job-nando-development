import { useContext } from 'react'
import { SavedResumeContext } from '@/context/SavedResumeContext';

export default function SavedPersonalDetailsPreview () {
    const { personalDetails } = useContext(SavedResumeContext);

    return ( 
      <div className="mt-8">
        <h2 className="text-2xl font-medium mb-4">Personal Details</h2>
        <div className="flex flex-col space-y-2">
          <p>
            <span className="font-medium">Name:</span> {personalDetails.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {personalDetails.email}
          </p>
          <p>
            <span className="font-medium">Tel:</span> {personalDetails.phone}
          </p>
          <p>
            <span className="font-medium">Address:</span> {personalDetails.address}
          </p>
        </div>
      </div>
    )
}