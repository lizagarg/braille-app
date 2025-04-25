import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UploadDocument from './pages/UploadDocument';
import ReadBook from './pages/ReadBook';
import ReadNews from './pages/ReadNews';
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadDocument />} />
          <Route path="/book" element={<ReadBook />} />
          <Route path="/news" element={<ReadNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
