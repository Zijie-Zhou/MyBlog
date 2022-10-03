import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Blog from './Blog';
import Life from './Life';
import Gadgets from './Gadgets';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='APP'>



        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/Blog" element={<Blog />} />

          <Route path="/MyLife" element={<Life />} />

          <Route path="/Gadgets" element={<Gadgets />} />

          <Route path="/Contact" element={<Contact />} />


        </Routes>





      </div>

    </Router>

  );
}

export default App;
