import { useContext, useState } from "react";
import { db, auth } from "../../../API/index"
import AuthContext from "../../../contexts/AuthContext";
import "./Register.css"

const Register = ({ closeRegister }) => {

    const { handleChange, handleRegister } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState(false);

    return (
        <div className="overlay">
            <div className="register-form-container">
                <form method="POST" onSubmit={handleRegister}>
                    <div className="form-field-register">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={handleChange}></input>
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleChange} ></input>
                    </div>
                    <div className="form-field-register">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={handleChange}></input>
                    </div>
                    <div className="register">
                        <button type="submit">Register</button>
                        <button type="button" onClick={closeRegister}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;