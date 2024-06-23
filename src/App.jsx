import React from "react";
import "./App.css";
import SignUp from "./Pages/SignUp.jsx";
import { BrowserRouter as Router, Route, useLocation, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import Update from "./Pages/Update.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import OneCourse from "./Pages/Courses/OneCourse.jsx";
import Content from "./Pages/CourseContent/Content.jsx"

import Header from "./Components/Header.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Course_Details from "./Pages/Course_Details.jsx";
import test from "./Pages/test.jsx";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const shouldRenderSidebar = !['/', '/signup'].includes(location.pathname);
  const shouldRenderHeader = !(
    location.pathname === '/home' ||
    location.pathname === '/dashboard' ||
    location.pathname === '/courses' ||
    location.pathname.startsWith('/course-details')
  );

  return (
    <div className="App">
      {shouldRenderHeader && <Header />}
      {shouldRenderSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<OneCourse />} />
        <Route path="/course-details/:courseId" element={<Course_Details />} />
        <Route path="/test" element={<test />} />
      </Routes>
    </div>
  );
}

export default App;
