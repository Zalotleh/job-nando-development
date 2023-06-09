import { useContext } from 'react';
import { ResumeContext } from '@/context/ResumeContext';

export default function PersonalDetailsForm() {
  const { personalDetails, setPersonalDetails } = useContext(ResumeContext);

  const handleChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };
 
  return (
    <div className="mb-8 shadow-lg border py-4">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
      <form className="space-y-4 px-2">
        <div>
          <label htmlFor="name" className="block text-lg font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={personalDetails.name}
            onChange={handleChange}
            className="w-full text-lg border border-gray-300 px-4 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalDetails.email}
            onChange={handleChange}
            className="w-full border text-lg border-gray-300 px-4 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-bold mb-1">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={personalDetails.phone}
            onChange={handleChange}
            className="w-full text-lg border border-gray-300 px-4 py-2 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-lg font-bold mb-1">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            value={personalDetails.address}
            onChange={handleChange}
            className="w-full text-lg border border-gray-300 px-4 py-2 rounded-sm"
            rows="4"
          />
        </div>
      </form>
    </div>
  );
}
