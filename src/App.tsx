import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import BookTable from './pages/BookTable';
import Contact from './pages/Contact';
import MenuDemo from './pages/MenuDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-yellow-50 pt-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu-demo" element={<MenuDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;