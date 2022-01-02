import React from 'react';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { signinUsinggoogle } = useFirebase();
    const handelGooglelogin = () => {
        signinUsinggoogle().then(result => {
            console.log('login ')

        })
    }
    return (
        <div className='container'>
            <div className='row '>
                <div className='col-md-6'> <button>Login</button></div>
                <div className='col-md-6'> <button onClick={handelGooglelogin}>Login with google</button></div>
            </div>

        </div>
    );
};

export default Login;