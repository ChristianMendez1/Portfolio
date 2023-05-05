import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
