import './App.css';
import {Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import Home from './components/Home'
import Navbar from './components/Navbar'
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Symptom from './components/Symptom';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='*'  element={<NotFound/>}/> 
      <Route path='/'  element={<Home/>}/>
      <Route path='/auth/login'  element={<LoginForm/>}/>
      <Route path='/auth/register'  element={<RegisterForm/>}/>
      <Route path='/profile/edit'  element={<Profile/>}/>
      <Route path='/symptoms'  element={<Symptom/>}/>
    </Routes>
    </>
    
  );
}

export default App;
