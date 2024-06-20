import React, { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp.jsx";
import {BrowserRouter as Router , Route,useLocation,Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import Update from "./Pages/Update.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Courses from "./Pages/Courses.jsx";
import Header from "./Components/Header.jsx";
import Sidebar from "./Components/Sidebar.jsx";
<<<<<<< HEAD
import Course_Details from "./Pages/Course_Details.jsx";
=======
import OneCourse from "./Pages/Courses/OneCourse.jsx"
>>>>>>> b3eb4ee47ebb820d4a3eb63f489c8b03392d503f

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Determine if Sidebar should be rendered based on current path
  const shouldRenderSidebar = !['/', '/signup'].includes(location.pathname);

  // Determine if Header should be rendered based on current path
  const shouldRenderHeader = !['/home','/dashboard', '/courses','/coursedetails'].includes(location.pathname);

  return (
    <div className="App">
      {shouldRenderHeader && <Header />}
      {shouldRenderSidebar && <Sidebar />}
      <Routes>
          <Route path="/" exact Component={SignIn}/>
          <Route path="/signup" Component={SignUp}/> 
          <Route path="/home" Component={Home}/> 
          <Route path="/dashboard" Component={Dashboard}/> 
          <Route path="/courses" Component={Courses}/>
          <Route path="/coursedetails" Component={Course_Details}/>
          </Routes>
    </div>
  );
}

export default App;
