import React from "react"
import Loginpic from '../assets/login.png';

export const SignUp = () =>{
    return (
        <>
        <div className="h-screen flex justify-center items-center w-full bg-brand-100">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-brand-50 rounded">
                <div className="flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto p-8 px-8 justify-center">
                        <h2 className="text-4xl text-brand-500  text-center font-bold mb-10 ">Sign In</h2>
                        <div className="flex flex-col py-2">
                            <label className="text-brand-500">User Name</label>
                            <input className=" mt-1 p-1 outline-none border-b-2 border-brand-500 bg-transparent " type="text"></input>
                        </div>
                        <div className="flex flex-col py-2">
                            <label className="text-brand-500">Email</label>
                            <input className=" mt-1 p-1 outline-none border-b-2 border-brand-500 bg-transparent " type="email"></input>
                        </div>
                        <div className="flex flex-col  py-2">
                            <label className="text-brand-500">Password</label>
                            <input className=" mt-1 p-1 outline-none bg-transparent border-b-2 border-brand-500" type="password"></input>
                        </div>
                        <div className="flex flex-col  py-2">
                            <label className="text-brand-500">Confirm Password</label>
                            <input className=" mt-1 p-1 outline-none bg-transparent border-b-2 border-brand-500" type="password"></input>
                        </div>
                        <button className="w-full my-5 py-5 bg-brand-500 shadow-lg rounded text-brand-50">Register</button>
                        <div className="flex justify-start">
                            <a href="/client/src/page/Login.jsx" className="text-[#A6AEBB] font-thin">Have An Account? <span className="text-brand-500 font-bold underline">Log In</span></a>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:block">
                    <img className="lg:w-full lg:h-full lg:object-cover" src={Loginpic} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
} 