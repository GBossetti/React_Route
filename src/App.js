import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import NavBarExample from './layouts/navbar.js';
import Footer from './layouts/footer.js';
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Test1 from './layouts/test1.js';
import Test2 from './layouts/test02.js';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <><NavBarExample/>ESTO APARECE EN LA PANTALLA <Test2/> <NavBarExample/> <Footer/></>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<><About/><Test1/></>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<Navigate replace to='/'/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
