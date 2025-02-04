import React, { useContext, useEffect } from "react";
import SavedResumeContext from "@/context/SavedResumeContext";
import { languages_list, languages_proficiency } from "@/utils/languages";

export default function SavedLanguagesForm (props) {
  const { languages, setLanguages } = useContext(SavedResumeContext);

  useEffect(() => {
    setLanguages(props.languages)
  }, [])

  const handleAddLanguage = () => {
    setLanguages([
      ...languages,
      {
        id: Date.now(),
        languageName: null,
        languageProficiency: null,
      },
    ]);
  };


  
  const handleDeleteLanguage = (id)=>{
    setLanguages(languages.filter((langauge) => langauge.id !== id));

  }

  const handleLanguageChange = (e, language) => {
    const { value } = e.target;
    setLanguages(
      languages.map((lang) =>
        lang.id === language.id ? { ...lang, languageName: value } : lang
      )
    );
  };

  const handleProficiencyChange = (e, language) => {
    const { value } = e.target;
    setLanguages(
      languages.map((lang) =>
        lang.id === language.id ? { ...lang, languageProficiency: value } : lang
      )
    );
  };

  return (
    <div className="mb-8 shadow-lg border py-4">
      <h2 className="text-base font-bold mb-4">Languages:</h2>
      {languages.map((language) => (
        <>
        <div key={language.id} className="mb-6 mt-5 px-2">
          <div>
            <label htmlFor={`language-select-${language.id}`}></label>
            <select
              id={`language-select-${language.id}`}
              value={language.languageName}
              initialvalues = {props.InitialValues.languageName}
              onChange={(e) => handleLanguageChange(e, language)}
              className="block text-sm mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

            >
              <option value="">--Please select a language--</option>
              {languages_list.map((lang) => (
                <option key={lang.code} value={lang.name} className=" text-sm">
                {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`proficiency-select-${language.id}`}>
            </label>
            <select
              id={`proficiency-select-${language.id}`}
              value={language.languageProficiency}
              initialvalues = {props.InitialValues.languageProficiency}
              onChange={(e) => handleProficiencyChange(e, language)}
              className="block text-sm mb-5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

            >
              <option value="">--Please select a proficiency level--</option>
              {languages_proficiency.map((proficiency) => (
                <option key={proficiency.name} value={proficiency.name} className=" text-sm">
                  {proficiency.name}
                </option>
              ))}
            </select>
          </div>
          <button
                  type="button"
                  onClick={() => handleDeleteLanguage(language.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent  font-medium rounded-md text-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
        </div>
        <hr />
        </>
      ))}
      <button 
        onClick={handleAddLanguage}
        className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
        Add NeW Language
        </button>
    </div>
  );
};


