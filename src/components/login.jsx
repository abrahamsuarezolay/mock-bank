
export function Login(){

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