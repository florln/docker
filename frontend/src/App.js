import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const base_url = process.env.REACT_APP_API_URI;
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(base_url + '/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Message from the backend: {message}
        </p>
      </header>
    </div>
  );
}

export default App;
