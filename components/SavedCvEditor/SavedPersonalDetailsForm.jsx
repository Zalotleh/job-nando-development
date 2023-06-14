import { useContext, useEffect } from 'react';
import { SavedResumeContext } from '@/context/SavedResumeContext';

export default function SavedPersonalDetailsForm(props) {
  const { personalDetails, setPersonalDetails } = useContext(SavedResumeContext);

  useEffect(() => {
    setPersonalDetails(props.personalDetails)
  }, [])

  const handleChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-8 shadow-lg border py-4">
      <h2 className="text-base font-bold mb-4">Personal Details</h2>
      <form className="space-y-4 px-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={personalDetails.name}
            initialvalues={props.InitialValues.name}
            onChange={handleChange}
            className="w-full text-sm border border-gray-300 px-2 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalDetails.email}
            initialvalues={props.InitialValues.email}
            onChange={handleChange}
            className="w-full text-sm border border-gray-300 px-2 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold mb-1">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={personalDetails.phone}
            initialvalues={props.InitialValues.phone}
            onChange={handleChange}
            className="w-full text-sm border border-gray-300 px-2 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-bold mb-1">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            value={personalDetails.address}
            initialvalues={props.InitialValues.address}
            onChange={handleChange}
            className="w-full text-sm border border-gray-300 px-2 py-2 rounded-sm"
            rows="2"
          />
        </div>
      </form>
    </div>
  );
}
