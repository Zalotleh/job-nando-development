import { useContext } from 'react'
import ResumeContext from '@/context/ResumeContext';

const PersonalDetailsPreview = () => {
    const { personalDetails} = useContext(ResumeContext);

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
 
export default PersonalDetailsPreview
