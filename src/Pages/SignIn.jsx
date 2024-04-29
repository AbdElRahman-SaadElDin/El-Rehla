import React, { useState } from "react";
import Header from "../Components/Header.jsx";
import style from './SignIn.module.css';
import "@fontsource/mulish";

function SignIn() {
  return (
    <div className={style.SignIn}>
      <Header />
      <h1 className={style.title}>Sign-In to your Account</h1>
      <div className={style.par}>
        <div className={style.cont}>
          <form action="#" className={style.FormSignIn}>
            <p className={style.welcome}>Welcome back!&#128075;</p>
            <h2 className={style.signTitle}>Sign in to your account</h2>
            <label htmlFor="email" className={style.LogEmail}>Your email</label>
            <input type="email" name="" id="" required className={style.inLogEmail} />
            <label htmlFor="password" className={style.LogPass}>Password</label>
            <input type="password" name="" id="" className={style.inLogPass}/>
            <button type="submit" className={style.continue}>CONTINUE</button>
            <a href="#" className={style.Forget}>Forget your password?</a>
          </form>
          <p>
            Don't have an account? <a href="/" className={style.up}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
