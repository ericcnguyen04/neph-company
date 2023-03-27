import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './Components/partials/Navbar';
import Staff from './Components/pages/Staff';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* home page / feed */}

        {/* search */}

        {/* staff */}
        <Route 
          path="/staff"
          element={<Staff />}
          />

        {/* profile */}

        {/* login */}

        {/* register */}
      </Routes>
    </Router>
  );
}

export default App;
