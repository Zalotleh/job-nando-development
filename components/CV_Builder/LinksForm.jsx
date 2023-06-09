import React, { useContext } from "react";
import { ResumeContext } from '@/context/ResumeContext';

export default function LinksForm () {
  const { links, setLinks } = useContext(ResumeContext);


  const handleAddLink = () => {
    setLinks([
      ...links,
      {
        id: Date.now(),
        url: "",
      },
    ]);
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setLinks(
      links.map((link) =>
      link.id === id ? { ...link, [name]: value } : link
      )
    );
  };

  
    return (
        <>
          <div className="mb-8 shadow-lg border py-4">
            <h2 className="text-2xl font-bold mb-4">Social Media & Websites:</h2>
            {links.map((link) => (
              <>
              <div key={link.id} className="mb-10 mt-5 px-2">
                <label htmlFor={`link_${link.id}`}className="text-lg font-bold">Link:</label>
                <input
                  type="url"
                  name="url"
                  id={`link_${link.id}`}
                  value={link.url}
                  onChange={(e) => handleChange(e, link.id)}
                  className="block w-full text-lg rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
      
                <button
                  type="button"
                  onClick={() => handleDeleteLink(link.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                  Delete
                </button>
              </div>
              <hr />
            </>
            ))}
        <button
          type="button"
          onClick={handleAddLink}
          className="mt-4 px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Link
        </button>
      </div>
    </>
  );
  
}  



