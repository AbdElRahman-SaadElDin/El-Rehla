import React, { useState }  from "react";
import './SignUp.css';
import Header from '../Components/Header.jsx';
import img from '../imgs/sebastian-svenson-scaled.jpg'

function SignUp() {

    const [Pass1, setPass1] = useState('');
    const [Pass2, setPass2] = useState('');
    const [isEqual, setIsEqual] = useState(null);


    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasDigit, setHasDigit] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handlePass1Change = (e) => {
        const value = e.target.value;
        setPass1(value)
        checkPasswordCriteria(value)
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
        setIsEqual(Pass1 === Pass2 ? '' : 'The password and confirmation do not match! Please try again.');
        checkPasswordCriteria(Pass1);
        setSubmitted(true);
    };

    return(
    <div class="SignUp">
        <Header/>
        <div className="Container">
            <form action="#" onSubmit={handleSubmit}> 
                <h2>Student Registration</h2>
                <div className="input-group">
                    <div style={{marginRight: 10 + 'px'}}>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" required></input>
                    </div>
                    <div>
                        <label htmlFor="secondname">First Name</label>
                        <input type="text" id="secondname" name="secondname" required></input>
                    </div>
                </div>

                <div><label htmlFor="email">E-mail</label></div>

                <input type="email" id="email" name="email" required></input>

                <div className="input-group">
                    <div style={{marginRight: 10 + 'px'}}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" required></input>
                    </div>
                    <div>
                        <label htmlFor="ParentPhone">Parent Phone Number</label>
                        <input type="text" id="ParentPhone" name="ParentPhone" required></input>
                    </div>
                </div>

                <div className="input-group">
                    <div style={{marginRight: 10 + 'px'}}>
                        <label htmlFor="birthday">Date of Birth</label>
                        <input type="date" id="birthday" name="birthday"></input>
                    </div>
                    <div>
                        <label id="level" htmlFor="level">Level</label>
                        {/* <input type="text" id="level" name="level" required></input> */}
                        <select id="level" name="level">
                            <option value="First Level">First Level</option>
                            <option value="Second Level">Second Level</option>
                            <option value="Third Level">Third Level</option>
                        </select>
                    </div>
                </div>

                <div className="input-group">
                    <div style={{marginRight: 10 + 'px'}}>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={Pass1} onChange={handlePass1Change} id="password" name="password" placeholder="Enter Your Password" required></input>
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" value={Pass2} onChange={handlePass2Change} id="confirm" name="confirm" placeholder="Password Confirmation" required></input>
                        
                    </div>
                </div>
                
                {submitted && (
                    <ul className="criteria-list">
                        <li className={hasLowercase ? 'invisible' : 'visible'}>At least one lowercase letter: {hasLowercase ? '✅' : '❌'}</li>
                        <li className={hasUppercase ? 'invisible' : 'visible'}>At least one uppercase letter: {hasUppercase ? '✅' : '❌'}</li>
                        <li className={hasDigit ? 'invisible' : 'visible'}>At least one digit: {hasDigit ? '✅' : '❌'}</li>
                        <li className={hasSpecialCharacter ? 'invisible' : 'visible'}>At least one special character: {hasSpecialCharacter ? '✅' : '❌'}</li>
                        <li className={isLengthValid ? 'invisible' : 'visible'}>At least 8 characters long: {isLengthValid ? '✅' : '❌'}</li>
                    </ul>
                )}
                <div className="Checked">
                    {submitted && <p className={isEqual ? 'Message' : 'PassMessage' }>{isEqual}</p>}
                </div>                
                
                <button type="submit" value="Register">Register</button>
                
                <div class="register-page">
                    <p>Have an account? <a href="login.html">Login</a></p>
                </div>

            </form>
            <img src={img} className="Img"/>
        </div>
    </div>
    )
}
export default SignUp;