import React, { useState } from 'react'
import './Login.css'
import { assets } from './assets/assets'
const Login = ({ setShowLogin }) => {
    const [currstate, setCurrState] = useState("Login")
    return (
        <div className='login'>
            <form className="login-container">
                <div className="login-tittle">
                    <h2>{currstate}</h2>
                    
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-input">
                    {currstate === "Login" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currstate === "sign up" ? "create account" : "Login"}</button>
                <div className='login-condition'>
                    <input type="checkbox" required />
                    <p>By contiuning ,i agree  to the terms of use &privacy policy</p>

                </div>
                {currstate === "Login" ?
                    <p>create a new account? <span onClick={() => setCurrState("Sign up")}>click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }

                

            </form>

        </div>
    )
}

export default Login