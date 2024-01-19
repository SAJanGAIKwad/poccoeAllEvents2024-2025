import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Register = () => {
    function showAlert1() {
        toast.success("SuccessFully! Registered");
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [password, setPassword] = useState()
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate()
    async function handleSubmit1(ev) {
        ev.preventDefault()
        setFormErrors(validate(name, email, mobile, password));
        await axios.post('http://localhost:3001/register', {
            name,
            email,
            mobile,
            password
        });
        showAlert1();
        navigate('/user-login')
    }

    const validate = (name, email, mobile, password) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const MobileNumberPattern = /^\d{10}$/;
        if (!name) {
            errors.name = "Name is required!";
        }
        if (!email) {
            errors.email = "Email is required!";
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!mobile) {
            errors.mobile = "Mobile is required!";
        }
        else if (!MobileNumberPattern.test(mobile)) {
            errors.mobile = "Please Enter 10 Digits Mobile";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    return (
        <>
            <ToastContainer />
            <div className="mt-4 grow flex items-center justify-around">
                <div className="mb-64 shadow-2xl rounded-lg p-10">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form className="max-w-md mx-auto" onSubmit={handleSubmit1}>
                        <div className='w-[400px]'>
                            <div className='flex items-center rounded-2xl'>
                                <FaUser className='mx-2' />
                                <input type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)} />
                            </div>
                            <p className='text-rose-700'>{formErrors.name}</p>
                            <div className='flex items-center rounded-2xl'>
                                <MdEmail className='mx-2' />
                                <input type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)} />
                            </div>
                            <p className='text-rose-700'>{formErrors.email}</p>
                            <div className='flex items-center rounded-2xl'>
                                <FaMobile className='mx-2'/>
                                <input type="tel"
                                    value={mobile}
                                    country={'in'}
                                    placeholder='Mobile'
                                    onChange={ev => setMobile(ev.target.value)} />
                            </div>
                            <p className='text-rose-700'>{formErrors.mobile}</p>
                            <div className='flex items-center rounded-2xl'>
                            <RiLockPasswordFill className='mx-2'/>
                                <input type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={ev => setPassword(ev.target.value)} />
                            </div>
                            <p className='text-rose-700'>{formErrors.password}</p>
                            <button className="primary">Register</button>
                            <div className="text-center py-2 text-gray-500">
                                Already a Registerd ? <Link className="underline text-black" to={'/user-login'}>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register