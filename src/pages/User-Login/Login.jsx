import React, { useContext, useState } from 'react'
import '../../App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from "../../UserContext";
const Login = () => {
    function showAlert() {
        toast.error("Please Check Credentials");
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { setUser } = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);

    async function handleSubmit(ev) {
        ev.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:3001/login', { email, password });
            setUser(data);
            setRedirect(true);

        } catch (e) {
            alert('Login failed. Please check credentails');
        }

        if (redirect) {
            return <Navigate to={'/'} />
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="mt-4 grow flex items-center justify-around ">
                <div className="mb-64 shadow-2xl rounded-lg p-10 ">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <input type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)} />
                        <input type="password"
                            placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                        <button className="primary" onClick={showAlert}>Login</button>
                        <div className='py-3 flex justify-center text-sky-600 font-bold'>
                            <Link to={'/forgot-password'}>Forgot Password</Link>
                        </div>
                        <GoogleOAuthProvider className='m-10 bg-danger' clientId="446061591121-opbuk29t8r85tdq2uia6am4m54ioqleh.apps.googleusercontent.com">
                            <div className='m-5 flex justify-center'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        var decoded = jwt_decode(credentialResponse.credential);
                                        console.log(decoded);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed')
                                    }}
                                />
                            </div>
                        </GoogleOAuthProvider>
                        <div className="text-center py-2 text-gray-500">
                            Don't have an account yet? <Link className="underline text-black" to={'/user-register'}>Register now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login