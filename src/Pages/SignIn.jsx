import React, { useState } from "react";
import Header from "../Components/Header.jsx";
import './SignIn.module.css';
import "@fontsource/mulish";

function SignIn() {
  return (
    <div className="SignIn">
      <Header />
      <h1 className="title">Sign-In to your Account</h1>
      <div className="par">
        <div className="cont">
          <form action="#" className="FormSignIn">
            <p className="welcome">Welcome back!&#128075;</p>
            <h2 className="signTitle">Sign in to your account</h2>
            <label htmlFor="email" className="LogEmail">Your email</label>
            <input type="email" name="" id="" required className="inLogEmail" />
            <label htmlFor="password" className="LogPass">Password</label>
            <input type="password" name="" id="" className="inLogPass"/>
            <button type="submit" className="continue">CONTINUE</button>
            <a href="#" className="Forget">Forget your password?</a>
          </form>
          <p>
            Don't have an account?<a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
