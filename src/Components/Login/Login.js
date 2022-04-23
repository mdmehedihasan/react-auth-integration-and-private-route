import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../Hooks/useFirebase';
const auth = getAuth(app);
const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div>
                <button onClick={handleGoogleSignIn}>Google Sing In</button>
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