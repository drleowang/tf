import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.rate);
  }

  return (
    <div>app.js</div>
  );
}

export default App;
