import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

export function Register(){

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const auth = getAuth();
    const db = getDatabase();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const registerUser = () => {
        set(ref(db, "users/" + email), {
            name: name,
            email: email
        });
        
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
    }

    return(
     <div>
        <div>
            <form method="POST" onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={handleNameChange}></input>
                </div>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}></input>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;