import React  from "react";
import './SignUp.css';
import Header from '../Components/Header.jsx';

const SignUp = () =>{
    return(
    <div class="SignUp">
        <Header/>
        <form action="#" method="POST" >
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
                    <label htmlFor="level">Level</label>
                    <input type="text" id="level" name="level" required></input>
                </div>
            </div>

            <div className="input-group">
                <div style={{marginRight: 10 + 'px'}}>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" required></input>
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="text" id="confirm" name="confirm" required></input>
                </div>
            </div>

            

            <button type="submit" value="Register">Register</button>
            
            <div class="register-page">
                <p>Have an account? <a href="login.html">Login</a></p>
            </div>

        </form>
        
    </div>
    )
}
export default SignUp;