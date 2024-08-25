import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highest_lowercase_alphabet', label: 'Highest Lowercase Alphabet' }
];

const InputForm = ({ onResponse }) => {
  const [input, setInput] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const parsedInput = JSON.parse(input);
      const response = await axios.post('http://localhost:3000/bfhl', parsedInput);
      onResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected || []);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        cols="40"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON here, e.g., { "data": ["A", "C", "z"] }'
      />
      <button type="submit">Submit</button>
      <Select
        isMulti
        options={options}
        onChange={handleSelectChange}
        value={selectedOptions}
      />
    </form>
  );
};

export default InputForm;
