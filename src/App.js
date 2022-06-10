import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './App.css'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Web from './Components/Web';
import Tools from './Components/Tools';
import Other from './Components/Other';
import AllProjects from './Components/AllProjects';

function App() {
  return (
    <div className='body'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route index element={<Web></Web>}></Route>
          <Route path='tools' element={<Tools></Tools>}></Route>
          <Route path='other' element={<Other></Other>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/allprojects' element={<AllProjects></AllProjects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
