// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Top from './components/Top';
import Service from './components/Service';
import Contact from './components/Contact';
import Serch from './components/Serch';
import Footer from './components/Footer';


const App = () => (
  <Router>
    <AuthProvider>
      <div>
        {/* Navbar コンポーネントを追加 */}
        <Navbar />
　　　　　
        {/* Routes コンポーネントを使用 */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/top" element={<Top />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/serch" element={<Serch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  </Router>
);

export default App;

