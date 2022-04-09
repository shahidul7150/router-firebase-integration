import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;