import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Activity from "./pages/Activity";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";
// import Dashboard from "./pages/Dashboard";
import React from 'react';
// import './App.css';

// var user = null;



function App() {
//   React.useEffect(() =>{
//     user = localStorage.getItem('user');
//  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/activity" element = {<Activity/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/profile" element = {<Profile/>} />
        <Route path="/adminlogin" element = {<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
