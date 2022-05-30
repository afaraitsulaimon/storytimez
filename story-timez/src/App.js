import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/CONTACT' element={<Contact/>} />

      </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
