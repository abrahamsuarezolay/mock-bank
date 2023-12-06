import { useContext, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { ErrorComponent } from "../../Error/ErrorComponent";


const PasswordRestore = ( {closePasswordRestore} ) => {

    const { handleChange, handlePasswordReset, errorInput, successMessage } = useContext(AuthContext);

    return (
        <div className="overlay">
            <div className="register-form-container">
                <form method="POST" onSubmit={handlePasswordReset}>
                    <div className="form-field-register">
                        <p>Please enter the email used in your account. An email will be send to restore your password.</p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleChange} ></input>
                    </div>
                    <div>
                    {errorInput.display ? (
                            <ErrorComponent type="text" message={errorInput.message} />
                        ) : (
                            <></>
                        )}
                        {successMessage ? (
                            <p>Email sent. Please follow the instructions.</p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="register">
                        <button type="submit">Recover</button>
                        <button type="button" onClick={closePasswordRestore}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default PasswordRestore;