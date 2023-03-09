import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Google from "../images/Google Logo.png"
import BooksImage from "../images/books.avif"


export default function Login() {
    const [email , setEmail] = useState("")
    const [password , setPassword] =useState("")
    const history = useNavigate()
    const [error , setError] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/v1/api/login',{
                email  , password
            })
            .then(()=>{
                history('/welcome')
            })
            .catch((err)=>{
                console.log(err.response.data);
                setError(err.response.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full login">
            <form className="flex flex-col w-fit h-fit items-center justify-center bg-white py-5 px-2 rounded-md" method="POST" onSubmit={handleSubmit}>
                <h3 className="font-semibold text-2xl font-[Poppins]">
                Hi, Welcome Back! 👋
                </h3>
                <label className="self-start w-10/12 mt-5 mb-1 pl-2 mx-auto" htmlFor="email">Email</label>
                <input className="border-2 border-slate-400  w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                type="email"
                name="email"
                id="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Enter Your Email"
                required
                />
                <label className="self-start w-10/12 mt-5 mb-1 pl-2 mx-auto" htmlFor="password">
                Password
                </label>
                <div className="border-2 border-slate-400  w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
                <input
                    className="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                />
                </div>
                <div className="flex justify-between w-10/12 mt-5">
                <div className="text-black font-semibold flex items-center gap-2">
                    <input
                    className="h-4 w-4"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    />
                    <span>Remember Me</span>
                </div>
                <div>
                    <a className="text-slate-600 hover:text-slate-800" href="#">
                    Forgot Password?
                    </a>
                </div>
                </div>
                {error && <p className="text-red-500 flex gap-1 items-center justify-center"><Icon icon="gg:danger" />{error}</p>}
                <button
                className="bg-blue-600 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center text-white font-semibold"
                type="submit"
                >
                Login
                </button>
                <div className="flex items-center gap-5 w-10/12 whitespace-nowrap mt-24">
                <hr className="w-36 border-[0.1px] border-slate-400 " />
                Or with
                <hr className="w-36 border-[0.1px] border-slate-400" />
                </div>
                <button
                className="bg-blue-500 mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-white font-semibold"
                type="submit"
                >
                <Icon width="32px" icon="gg:facebook" />
                <span className="mx-auto">Login with Facebook</span>
                </button>
                <button
                className="border-2 border-slate-400 bg-white mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-slate-600 font-semibold"
                type="submit"
                >
                <img src={Google} alt="google logo png" />
                <span className="mx-auto">Login with Google</span>
                </button>
                <div className="flex gap-2 mt-8">
                <span className="font-semibold text-slate-600 ">
                    Don't have an account?
                </span>{" "}
                <a className="text-blue-700 font-semibold hover:underline" href="/signup">
                    Sign Up
                </a>
                </div>
            </form>
        </div>
    );
}
