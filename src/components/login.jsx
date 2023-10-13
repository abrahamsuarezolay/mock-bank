import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Login(){

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