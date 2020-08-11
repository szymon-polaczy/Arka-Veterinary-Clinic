import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect( () => {
    fetch('http://localhost:5000')
    .then((response) => response.json())
    .then((data) => {
      setMessage(data.message);
    })
    .catch((error) => {
      console.error(error);
    });
  });

  return (
    <div className="App">
      <h1>{ message }</h1>
    </div>
  );
}

export default App;
