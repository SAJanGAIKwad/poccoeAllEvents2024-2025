import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import { BrowserRouter as BroweRouter, Routes, Route } from "react-router-dom"
import GTop from './components/Gtop';
import LoginG from './pages/Login/LoginG';
import Userlogin from './pages/Login/Userlogin';
import Adminlogin from './pages/Login/adminlogin';

function App() {
  return (
    <BroweRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/Event' element={<Event />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        <Route exact path='/login' element={<LoginG />}></Route>
        <Route exact path='/user' element={<Userlogin />}></Route>
        <Route exact path='/admin' element={<Adminlogin />}></Route>
      </Routes>
      <GTop />
    </BroweRouter>
  );
}

export default App;
