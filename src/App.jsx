import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import MovieList from './pages/MovieList.jsx';
import Login from './pages/Login.jsx';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'


axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true


function App() {
useEffect(() => {
  document.title = "Moodvie";
}, []);
  return (
    <Router>
      <Navbar />
      <Toaster position='bottom-right' toastOption={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/movies' element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;