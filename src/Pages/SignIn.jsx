import React, { useState } from "react";
import Header from "../Components/Header.jsx";
import style from './SignIn.module.css';
import axios from "axios";
import "@fontsource/mulish";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const url = "https://quality-touching-seahorse.ngrok-free.app/api/Auth/login";
    const [data, setData] = useState({
      email: "",
      password: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      toast.info('Signing in...', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: 'signin-toast'
      });
      submitData();
    };
    function handle(e) {
      const newdata = { ...data };
      newdata[e.target.id] = e.target.value;
      setData(newdata);
      console.log(newdata)
    }
    const submitData = () => {
      axios.post(url, data)
      .then(res => {
        const token = res.data;
        localStorage.setItem('token', token);
        console.log("Our Great Token has come: ", token);
        toast.dismiss('signin-toast');
        toast.success('Sign-In succeeded', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            setTimeout(() => {
              navigate("/home");
            }, 0); // Adjust delay time (in milliseconds) as needed
          }
        });
      }).catch(err => {
          toast.dismiss('signin-toast');
          setTimeout(() => {
            toast.error('Sign-In failed', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }, 500); // Adjust delay time (in milliseconds) as needed
        });
    };
    
  return (
    <div className={style.SignIn}>
      <ToastContainer
        position="top-right"
        autoClose={5000} // Auto-close toast after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick // Close toast when clicked
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className={style.title}>Sign-In to your Account</h1>
      <div className={style.par}>
        <div className={style.cont}>
          <form action="#" className={style.FormSignIn} onSubmit={(e) => handleSubmit(e) }>
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
            Don't have an account? <a href="/signup" className={style.up}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
