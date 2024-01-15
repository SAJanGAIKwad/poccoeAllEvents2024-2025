import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '.././App.css';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
const ForgotPass = () => {

    const [email, setEmail] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/forgot-password', { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/event')
                }
                else {
                    navigate('/user-login')
                }
            }).catch(err)
        console.log(err);
    }
    return (
        <>
            <div className="mt-4 grow flex items-center justify-around ">
                <div className="mb-64 shadow-2xl rounded-lg p-10 ">
                    <h1 className="text-3xl text-center mb-4">Forgot PassWord</h1>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <input type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <button exact className="primary">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPass