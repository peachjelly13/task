import React from 'react';

const ResponseDisplay = ({ response }) => {
  const { numbers, alphabets, highest_lowercase_alphabet } = response;

  return (
    <div>
      <h2>Response:</h2>
      <ul>
        {numbers.length > 0 && (
          <li><strong>Numbers:</strong> {numbers.join(', ')}</li>
        )}
        {alphabets.length > 0 && (
          <li><strong>Alphabets:</strong> {alphabets.join(', ')}</li>
        )}
        {highest_lowercase_alphabet.length > 0 && (
          <li><strong>Highest Lowercase Alphabet:</strong> {highest_lowercase_alphabet.join(', ')}</li>
        )}
      </ul>
    </div>
  );
};

export default ResponseDisplay;
