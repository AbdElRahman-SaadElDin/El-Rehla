import React, { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import Update from "./Pages/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path:"",
    element:<Update />,
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
