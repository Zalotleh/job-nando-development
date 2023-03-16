import React, { useState } from 'react'
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';

function coverLetter() {

  const [text, setText] = useState("");
  const [response, setResponse]= useState(null)

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios.post('/api/openaiApi', {
          text
      });
      setResponse(response.data);
      console.log(response.data);
  } catch (error) {
      console.log(error);
  }
  }

  function handleInputChange(e){
    setText(e.target.value)

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

      <h2>output</h2>
      <p>{response}</p>
      
      </ProtectedRoute>

  )
}

export default coverLetter