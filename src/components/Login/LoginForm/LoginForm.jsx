import "./LoginForm.css";
import { useContext, useEffect, useState } from "react";
import Register from "../RegisterForm/Register"
import AuthContext from "./../../../contexts/AuthContext";
import { ErrorComponent } from "../../Error/ErrorComponent";
import useError from "../../../hooks/useError";
import PasswordRestore from "../PasswordRestore/PasswordRestore";

const LoginForm = () => {

    //AuthContext
    const { handleSubmit, handleChange, errorInput, setErrorInput, setSuccessMessage } = useContext(AuthContext);

    const [displayRegister, setDisplayRegister] = useState(false)
    const [displayPasswordRestore, setDisplayPasswordRestore] = useState(false)

    const closeRegister = () => {
        setDisplayRegister(false);
        setErrorInput({
            display: false,
            message: ""
                })
    }

    const showRegister = () => {
        setDisplayRegister(true);
        setErrorInput({
            display: false,
            message: ""
                })
    }

    const showPasswordRestore = () => {
        setDisplayPasswordRestore(true)
        setSuccessMessage(false)
        setErrorInput({
            display: false,
            message: ""
                })
    }

    const closePasswordRestore = () => {
        setDisplayPasswordRestore(false)
        setErrorInput({
            display: false,
            message: ""
                })
    }

    return (
        <>
        <div className="main">
             {displayRegister ? (
                <Register closeRegister={closeRegister}/>
            ) : (
                <></>
            )}
            {displayPasswordRestore ? (
                <PasswordRestore closePasswordRestore={closePasswordRestore}/>
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
                    <div className="text-center">
                    {errorInput.display ? (
                    <ErrorComponent type="text" message={errorInput.message}/>
                ) : (
                    <></>
                )}
                    </div>
                    <div className="login-button">
                        <button type="submit">Log In</button>
                    </div>
                    <div className="register-button">
                        <p>You still don't have an account? <button type="button" onClick={showRegister}>Register here</button></p>
                    </div>
                    <div className="register-button">
                        <p><button type="button" onClick={showPasswordRestore}> Have you forgot your password?  </button></p>
                    </div>
                </form>
            </div>
        </div>
        </>
        )
}

export default LoginForm;