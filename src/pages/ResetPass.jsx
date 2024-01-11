import React, { useState } from 'react'
import '.././App.css';
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams } from "react-router-dom";
function ResetPass() {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {id, token} = useParams()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/reset-password/${id}/${token}`, {password})
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/user-login')
               
            }
        }).catch(err => console.log(err))
    }
    return (
        <>
            <ToastContainer />
            <div className="mt-4 grow flex items-center justify-around ">
                <div className="mb-64 shadow-2xl rounded-lg p-10 ">
                    <h1 className="text-3xl text-center mb-4">Forgot PassWord</h1>
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <input type="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        <button className="primary">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPass