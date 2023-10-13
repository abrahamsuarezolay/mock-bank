import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import  db  from "../API/index";

export function Login(){

    const auth = getAuth();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });

    return(
    <div>
        <div>
            <form method="POST">
                <div>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div>
                    <input type="email" placeholder="Password"></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <p>You still don't have an account? Register here</p>
                </div>
            </form>
        </div>
    </div>)

}

export default Login;