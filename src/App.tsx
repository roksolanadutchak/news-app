import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState("");
  type Greeting = string;
  useEffect(() => {
    axios.get<Greeting>('http://localhost:8000/ping',
        {
            headers: {
                Accept: 'application/json',
            },
        }
            )
        .then(res => {
            console.log(res.data);
          setGreeting(res.data)

        });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>
            {greeting}
        </p>
      </header>
    </div>
  );
}

export default App;
