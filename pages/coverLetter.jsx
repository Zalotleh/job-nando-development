import React, { useState, useContext  } from 'react'
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from "@/context/AuthContext";
import CoverLetter1 from '@/components/CoverLetter1';


function CoverLetter() {
  const { user } = useAuth(); // get user object from AuthContext

  const [text, setText] = useState("");
  const [responseData, setResponseData] = useState("");
  const [coverLetter, setCoverLetter] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('/api/openaiApi', { text });
      setResponseData(response.data);
      setCoverLetter(response.data);

      console.log(response.data + " this is response.data");
    } catch (error) {
      console.log(error);
    }
  }

  function handleInputChange(e) {
    setText(e.target.value)
  }

  async function handleSave() {

    const coverLetterText = responseData;
    const user_id = user.uid; // access uid property from user object
    const response =await axios.post('/api/saveCoverLetter', {coverLetterText, user_id})
 
  }

  return (
    <ProtectedRoute>
      <form onSubmit={handleSubmit}>
        <label>
          Input Text:
          <input type="text" value={text} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Output:</h2>
      <p>{responseData}</p>

      <button onClick={handleSave}>Save Cover Letter</button>
      <CoverLetter1/>
    </ProtectedRoute>
  )
}

export default CoverLetter;
