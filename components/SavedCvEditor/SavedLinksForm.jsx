import React, { useContext, useState, useEffect } from "react";
import { SavedResumeContext } from '@/context/SavedResumeContext';

export default function SavedLinksForm (props) {
  const { links, setLinks } = useContext(SavedResumeContext);

  useEffect(() => {
    setLinks(props.links)
  }, [])


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
      <div className="mb-4 shadow-lg border py-4">
      <h2 className="text-base font-bold mb-4">Social Media & Websites:</h2>
        {links.map((link) => (
          <>
              <div key={link.id} className="mb-6 mt-5 px-2">
              <label htmlFor={`link_${link.id}`}className="text-sm px-2 py1 font-bold">Link:</label>
            <input
                  type="url"
                  name="url"
                  id={`link_${link.id}`}
                  value={link.url}
                  initialvalues = {props.InitialValues.url}
                  onChange={(e) => handleChange(e, link.id)}
                  className="block w-full text-sm px-2 py1 mb-2 rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
      
                <button
                  type="button"
                  onClick={() => handleDeleteLink(link.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent text-sm py1 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
          className="mt-4 px-4 py-2 border border-transparent text-sm  py1 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Link
        </button>
      </div>
    </>
  );
  
}  



