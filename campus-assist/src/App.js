// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/AuthContext'; // Import the AuthProvider
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Service from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Logout from './components/auth/Logout';
import Request from './pages/Request';

function App() {
  return (
    <div className="App">
      {/* Wrap your entire application with AuthProvider */}
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/requestservice" element={<Request />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
