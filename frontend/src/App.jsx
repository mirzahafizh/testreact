import React, { useState } from 'react';
import './App.css';
import Register from './pages/register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Register />
    </div>
  )
}

export default App
