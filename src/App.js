import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AccountPage from './Components/Accountpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
