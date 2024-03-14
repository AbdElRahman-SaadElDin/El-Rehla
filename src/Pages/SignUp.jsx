import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Header from "../Components/Header.jsx";
import img from "../imgs/sebastian-svenson-scaled.jpg";
import axios from "axios";

function SignUp() {
  const url = "";
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm: "",
    fName: "",
    lName: "",
    phoneNumber: "",
    dateOfBirth: "",
    level: "",
  });
  const [Pass1, setPass1] = useState("");
  const [Pass2, setPass2] = useState("");
  const [isEqual, setIsEqual] = useState(null);

  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasDigit, setHasDigit] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePass1Change = (e) => {
    const value = e.target.value;
    setPass1(value);
    checkPasswordCriteria(value);
  };

  const checkPasswordCriteria = (value) => {
    setHasLowercase(/[a-z]/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
    setHasDigit(/\d/.test(value));
    setHasSpecialCharacter(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value));
    setIsLengthValid(value.length >= 8);
  };

  const handlePass2Change = (e) => {
    setPass2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEqual(
      Pass1 === Pass2
        ? ""
        : "The password and confirmation do not match! Please try again."
    );
    checkPasswordCriteria(Pass1);
    setSubmitted(true);
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e) {
    e.preventDefault();
    axios.post(url, {data});
  }

  return (
    <div className="SignUp">
      <Header />
      <div className={styles.Container}>
        <form
          action="#"
          onSubmit={(e) => {
            handleSubmit(e);
            submit(e);
          }}
          className={styles.FormReg}
        >
          <h2>Student Registration</h2>
          <div className={styles.inputgroup}>
            <div style={{ marginRight: 10 + "px" }}>
              <label htmlFor="firstname" className={styles.FirstName}>
                First Name
              </label>
              <input
                type="text"
                id="fName"
                name="firstname"
                value={data.fName}
                onChange={(e) => handle(e)}
                required
                className={styles.inFirst}
              ></input>
            </div>
            <div>
              <label htmlFor="secondname" className={styles.LastName}>
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                name="secondname"
                value={data.lName}
                onChange={(e) => handle(e)}
                required
                className={styles.inLast}
              ></input>
            </div>
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
          </div>

          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={(e) => handle(e)}
            required
            className={styles.inEmail}
          ></input>

          <div className={styles.inputgroup}>
            <div style={{ marginRight: 10 + "px" }}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phone"
                value={data.phoneNumber}
                onChange={(e) => handle(e)}
                required
                className={styles.inTel}
              ></input>
            </div>
            <div>
              <label htmlFor="ParentPhone">Parent Phone Number</label>
              <input
                type="tel"
                id="ParentPhone"
                name="ParentPhone"
                required
                className={styles.inTelP}
                readOnly
              ></input>
            </div>
          </div>

          <div className={styles.inputgroup}>
            <div style={{ marginRight: 10 + "px" }}>
              <label htmlFor="birthday">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="birthday"
                value={data.dateOfBirth}
                onChange={(e) => handle(e)}
                className={styles.inDate}
              ></input>
            </div>
            <div>
              <label id={styles.level} htmlFor="level">
                Level
              </label>
              {/* <input type="text" id="level" name="level" required></input> */}
              <select
                id="level"
                name="level"
                value={data.level}
                onChange={(e) => handle(e)}
                className={styles.select_level}
              >
                <option value="FirstElementary">First Elementary</option>
                <option value="SecondElementary">Second Elementary</option>
                <option value="ThirdElementary">Third Elementary</option>
                <option value="FourthElementary">Fourth Elementary</option>
                <option value="FifthElementary">Fifth Elementary</option>
                <option value="SixthElementary">Sixth Elementary</option>
                <option value="FirstPrimary">First Primary</option>
                <option value="SecondPrimary">Second Primary</option>
                <option value="ThirdPrimary">Third Primary</option>
                <option value="FirstSecondary">First Secondary</option>
                <option value="SecondSecondary">Second Secondary</option>
                <option value="ThirdSecondary">Third Secondary</option>
              </select>
            </div>
          </div>

          <div className={styles.inputgroup}>
            <div style={{ marginRight: 10 + "px" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={Pass1}
                onChange={(e) => {
                  handlePass1Change(e);
                  handle(e);
                }}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                required
                className={styles.inPass}
              ></input>
            </div>
            <div>
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type="password"
                value={Pass2}
                onChange={(e) => {
                  handlePass2Change(e);
                  handle(e);
                }}
                id="confirm"
                name="confirm"
                placeholder="Password Confirmation"
                required
                className={styles.inCoPass}
              ></input>
            </div>
          </div>

          {submitted && (
            <ul className={styles.criterialist}>
              <li className={hasLowercase ? styles.invisible : styles.visible}>
                At least one lowercase letter: {hasLowercase ? "✅" : "❌"}
              </li>
              <li className={hasUppercase ? styles.invisible : styles.visible}>
                At least one uppercase letter: {hasUppercase ? "✅" : "❌"}
              </li>
              <li className={hasDigit ? styles.invisible : styles.visible}>
                At least one digit: {hasDigit ? "✅" : "❌"}
              </li>
              <li
                className={
                  hasSpecialCharacter ? styles.invisible : styles.visible
                }
              >
                At least one special character:{" "}
                {hasSpecialCharacter ? "✅" : "❌"}
              </li>
              <li className={isLengthValid ? styles.invisible : styles.visible}>
                At least 8 characters long: {isLengthValid ? "✅" : "❌"}
              </li>
            </ul>
          )}
          <div className={styles.Checked}>
            {submitted && (
              <p className={isEqual ? "styles.Message" : "styles.PassMessage"}>
                {isEqual}
              </p>
            )}
          </div>

          <button type="submit" value="Register" className={styles.RegSub}>
            Register
          </button>

          <div className={styles.registerpage}>
            <p>
              Have an account? <a href="/SignIn">Login</a>
            </p>
          </div>
        </form>
        <img src={img} className={styles.Img} />
      </div>
    </div>
  );
}
export default SignUp;
