import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Google from "../images/Google Logo.png"

export default function Signup() {

    const history = useNavigate()

    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [tel , setTel] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [error , setError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/v1/api/signup", {
            username,
            email,
            tel,
            password,
            confirmPassword,
          }).then(()=>{
            history('/welcomenewuser')
          }).catch((err) => {
            console.log(err.response.data)
            setError(err.response.data)
        })} catch (error) {
          console.log(error);
        }
      };  
    return (
        <div className="flex items-center justify-center h-[100vh] mx-auto sm:w-full signup">
            <form
                className="flex flex-col w-fit h-fit items-center justify-center bg-white py-5 px-2 rounded-md"
                method="POST"
                onSubmit={handleSubmit}
            >
                <h3 className="font-semibold text-3xl">Create an account</h3>
                <p className="text-md font-normal mb-3">Connect with your friends  today!</p>
                <input
                    className="border-2 border-slate-400 mt-4 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Your Username"
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required
                />
                <input
                    className="border-2 border-slate-400 mt-4 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                />
                <input
                    className="border-2 border-slate-400 mt-4 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Enter Your Phone Number"
                    onChange={(e)=>{setTel(e.target.value)}}
                    required
                />
                <div className="border-2 border-slate-400 mt-4 w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
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
                <div className="border-2 border-slate-400 mt-4 w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
                    <input
                        className="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Your Password"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        required
                    />
                </div>

                {error && <p className="text-red-600 w-[300px] mt-2 flex gap-2"><Icon icon="gg:danger" />{error}</p>}

                <button
                    className="bg-blue-600 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center text-white font-semibold"
                    type="submit"
                >
                    Sign Up
                </button>
                <div className="flex items-center gap-5 w-10/12 whitespace-nowrap mt-7">
                    <hr className="w-36 border-[0.1px] border-slate-400" />
                    Or with
                    <hr className="w-36 border-[0.1px] border-slate-400" />
                </div>
                <button
                    className="bg-blue-500 mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-white font-semibold"
                    type="submit"
                >
                    <Icon width="32px" icon="gg:facebook" />
                    <span className="mx-auto">Signup with Facebook</span>
                </button>
                <button
                    className="border-2 border-slate-400 bg-white mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-slate-600 font-semibold"
                    type="submit"
                >
                    <img src={Google} alt="google logo png" />
                    <span className="mx-auto">Signup with Google</span>
                </button>
                <div className="flex gap-2 mt-8">
                    <span className="font-semibold text-slate-600 ">
                        Already have an account?
                    </span>{" "}
                    <a className="text-blue-700 font-semibold hover:underline" href="/login">
                        Login
                    </a>
                </div>
            </form>
        </div>
    );
}
