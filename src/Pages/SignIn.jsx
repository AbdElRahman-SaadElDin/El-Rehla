import React, { useState } from "react";
import Header from "../Components/Header.jsx";
import style from './SignIn.module.css';
import axios from "axios";
import "@fontsource/mulish";


function SignIn() {
    const url = "https://localhost:7068/api/Auth/login";
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      submitData();
    };

    function handle(e) {
      const newdata = { ...data };
      newdata[e.target.id] = e.target.value;
      setData(newdata);
      console.log(data)
    }
    const submitData = () => {
      axios.post(url, { data })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('token',token);
      })
    }
  return (
    <div className={style.SignIn}>
      <Header />
      <h1 className={style.title}>Sign-In to your Account</h1>
      <div className={style.par}>
        <div className={style.cont}>
          <form action="#" className={style.FormSignIn} onSubmit={(e) => {
            handleSubmit(e);
          }}>
            <p className={style.welcome}>Welcome back!&#128075;</p>
            <h2 className={style.signTitle}>Sign in to your account</h2>
            <label htmlFor="email" className={style.LogEmail}>Your email</label>
            <input type="email" name="email" id="email" required className={style.inLogEmail} value={data.email} onChange={e => handle(e)} />
            <label htmlFor="password" className={style.LogPass}>Password</label>
            <input type="password" name="password" id="password" className={style.inLogPass} value={data.password} onChange={e => handle(e)}/>
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
