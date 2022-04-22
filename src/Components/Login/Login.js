import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={signInWithGoogle}>Google Sing In</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' /> <br></br>
                <input type="password" placeholder='Password' /> <br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;