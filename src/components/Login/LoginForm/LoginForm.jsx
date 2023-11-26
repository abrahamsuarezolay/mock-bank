import "./LoginForm.css";
import { useContext, useState } from "react";
import Register from "../RegisterForm/Register"
import AuthContext from "./../../../contexts/AuthContext";

const LoginForm = () => {

    //AuthContext
    const { handleSubmit, handleChange } = useContext(AuthContext);

    const [displayRegister, setDisplayRegister] = useState(false)

    const closeRegister = () => {
        setDisplayRegister(false);
    }

    return (
        <>
        <div className="main">
             {displayRegister ? (
                <Register closeRegister={closeRegister}/>
            ) : (
                <></>
            )}
            <div className={`form-container ${displayRegister ? 'hide' : ''}`}>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                    </div>
                    <div className="login-button">
                        <button type="submit">Log In</button>
                    </div>
                    <div className="register-button">
                        <p>You still don't have an account? <button type="button" onClick={(()=>{setDisplayRegister(true)})}>Register here</button></p>
                    </div>
                </form>
            </div>
        </div>
        </>
        )
}

export default LoginForm;