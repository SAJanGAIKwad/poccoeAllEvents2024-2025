import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import GTop from './components/Gtop';
import LoginG from './pages/Login/LoginG';
import Ulogin from './pages/User-Login/Login';
import Uregister from './pages/User-Login/Register';
import Alogin from './pages/Admin-Login/Login';
import Aregister from './pages/Admin-Login/Register';
import { UserContextProvider } from './UserContext';
import ForgotPass from './pages/ForgotPass';
import Footer from './pages/Footer';
import axios from 'axios';
import "./App.css";
import ResetPass from './pages/ResetPass';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './components/eventForm/EventForm';
import UserDashboard from './components/profilePage/UserDashboard';

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/Event' element={<Event />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<LoginG />} />
          <Route exact path='/user-login' element={<Ulogin />} />
          <Route exact path='/admin-login' element={<Alogin />} />
          <Route exact path='/user-register' element={<Uregister />} />
          <Route exact path='/admin-register' element={<Aregister />} />
          <Route exact path='/forgot-password' element={<ForgotPass />} />
          <Route exact path='/reset-password/:id/:token' element={<ResetPass />} />
          <Route exact path='/event-form' element={<EventForm />} />
          <Route exact path='/profile' element={<UserDashboard />} />
        </Routes>
        <GTop />
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
