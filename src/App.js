import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './Components/partials/Navbar';


function App() {
  return (
    <Router>

      <div className='App'>
        <Navbar />

        ali and tea just in case
      </div>
    </Router>
  );
}

export default App;
