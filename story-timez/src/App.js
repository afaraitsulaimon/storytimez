import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AllStory from './pages/AllStory';

function App() {
  return (
    <BrowserRouter>
     
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/stories' element={<AllStory/>} />

      </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
