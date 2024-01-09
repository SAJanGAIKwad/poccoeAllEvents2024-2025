import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Register = () => {
    function showAlert() {
        toast.success("SuccessFully! Registered");
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    async function handleSubmit1  (ev) {
        ev.preventDefault()
        try{
            await axios.post('http://localhost:3001/register', { 
                name, 
                email, 
                mobile, 
                password 
            });
                    navigate('/user-login')
                alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
    }
    return (
        <>
            <ToastContainer />
            <div className="mt-4 grow flex items-center justify-around">
                <div className="mb-64 shadow-2xl rounded-lg p-10">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit1}>
                        <input type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <input type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)} />
                        <input type="tel"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={ev => setMobile(ev.target.value)} />
                        <input type="password"
                            placeholder="password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)} />
                        <button className="primary" onClick={showAlert}>Register</button>
                        <div className="text-center py-2 text-gray-500">
                            Already a member? <Link className="underline text-black" to={'/user-login'}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register