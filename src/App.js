import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from '../src/components/AdminPanel';
import User from './components/User';
import Event from './components/Event';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/datauser" element={<User />} />
          <Route path="/dataEvent" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
