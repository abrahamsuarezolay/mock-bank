import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import  db  from "../API/index";
import { useState } from "react";
export function Register(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
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
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
    )

}

export default Register;