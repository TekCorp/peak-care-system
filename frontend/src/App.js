import './App.css';
import "./bootstrap.min.css"
import Home from './screens/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from "./screens/NotFound"
import ThankYou from './screens/ThankYou';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

