import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './App.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
