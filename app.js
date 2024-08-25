import React, { useState } from 'react';
import InputForm from './InputForm';
import ResponseDisplay from './ResponseDisplay';

function App() {
  const [response, setResponse] = useState(null);

  const handleResponse = (data) => {
    setResponse(data);
  };

  return (
    <div className="App">
      <h1>Roll Number: ABCD123</h1>
      <InputForm onResponse={handleResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
