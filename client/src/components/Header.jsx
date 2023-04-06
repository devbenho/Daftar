import HeaderPic from "../assets/svg/Header-pic"
import HeaderLogo from "../assets/svg/HeaderLogo"
import { Spacer } from "./Spacer"

export const Header = () => {
    return (
        <>
            {/* Container */}
            <header className="h-120 w-full flex flex-col bg-brand-500 px-20 py-8 overflow-y-hidden">
                {/* NavBar */}
                <nav className="flex items-center h-fit justify-between gap-8 text-brand-50  py-[32px] px-[16px] w-full">
                    {/* Logo */}
                    <h1 className="font-semibold text-3xl text-brand-50"><HeaderLogo /></h1>
                    {/* Navbar Links */}
                    <ul className="flex justify-center items-center text-brand-50">
                        <a href="/">Home</a>
                        <Spacer spacer='|' />
                        <a href="/subsciptions">Subscriptions</a>
                        <Spacer spacer='|' />
                        <a href="/courses">Courses</a>
                        <Spacer spacer='|' />
                        <a href="/profile">Profile</a>
                        <Spacer spacer='|' />
                        <a href="/about">About</a>
                        <Spacer spacer='|' />
                        <a href="/contact">Contact Us</a>
                    </ul>
                    {/* Navbar Buttons */}
                    <div className="flex gap-8">
                        <button className="bg-[#E9F7FA] px-8 py-[14px] text-[#186B7A] hover:text-brand-50 border-[1px] border-brand-50 rounded-[6px] hover:bg-brand-500"><a href="http://localhost:3000/login">Login</a></button>
                        <button className="bg-[#E9F7FA] px-8 py-[14px] text-[#186B7A] rounded-[6px] hover:bg-brand-75"><a href="http://localhost:3000/signup">Sign Up</a></button>
                    </div>
                </nav>
                {/* Grid */}
                <div className="grid grid-cols-2 grid-rows-1 w-full h-full bg-brand-500">
                    {/* Left column */}
                    <div className="flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white absolute top-[221px] left-[144px] w-[707px] h-[137px] leading-[68.5px]">
                            Find the Best Teachers & Learn
                    </h2>
                    </div>
                    {/* Right column */}
                    <div className="flex items-center justify-center ">
                            {/* <circle cx="250" cy="250" r="250" fill="#E9F7FA" /> */}
                        <HeaderPic />



                    </div>
                </div>
            </header>
        </>
    )
}