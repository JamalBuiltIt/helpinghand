import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import InputForm from './inputForm.js';
import Home from './home.js';
import Navbar from './navbar.js';

function LayoutWrapper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donate" element={<InputForm />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
