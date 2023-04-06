import HeaderPic from "../assets/svg/Header-pic";
import HeaderLogo from "../assets/svg/HeaderLogo";
import { Spacer } from "./Spacer";

export const Header = () => {
  return (
    <>
      {/* Container */}

      <header
        className="h-[720px] w-full flex flex-col bg-brand-500 py-8 overflow-y-hidden"
        id="header"
      >
        {/* NavBar */}
        <div className="mx-[140px]">
          <nav className="flex items-center h-fit justify-between gap-8 text-brand-50 py-[32px] w-full sticky top-0">
            {/* Logo */}
            <h1 className="font-semibold text-3xl text-brand-50">
              <HeaderLogo />
            </h1>
            {/* Navbar Links */}
            <ul className="flex justify-center items-center font-['poppins'] transition-all duration-300 ease-in-out text-brand-50">
              <a href="/" className=" hover:text-brand-300  transition-all duration-300 ease-in-out">
                Home
              </a>
              <Spacer spacer="|" />
              <a href="/subsciptions" className="hover:text-brand-300 transition-all duration-300 ease-in-out">
                Subscriptions
              </a>
              <Spacer spacer="|" />
              <a href="/courses" className=" hover:text-brand-300 transition-all duration-300 ease-in-out">
                Courses
              </a>
              <Spacer spacer="|" />
              <a href="/profile" className=" hover:text-brand-300 transition-all duration-300 ease-in-out">
                Profile
              </a>
              <Spacer spacer="|" />
              <a href="/about" className=" hover:text-brand-300 transition-all duration-300 ease-in-out">
                About
              </a>
              <Spacer spacer="|" />
              <a href="/contact" className=" hover:text-brand-300 transition-all duration-300 ease-in-out">
                Contact Us
              </a>
            </ul>
            {/* Navbar Buttons */}
            <div className="flex gap-8">
              <button className="bg-[#E9F7FA] px-8 py-[14px] text-[#186B7A] hover:text-brand-50 border-[1px] border-brand-50 rounded-[6px] hover:bg-brand-500">
                <a href="http://localhost:3000/login">Login</a>
              </button>
              <button className="bg-[#E9F7FA] px-8 py-[14px] text-[#186B7A] rounded-[6px] hover:bg-brand-75">
                <a href="http://localhost:3000/signup">Sign Up</a>
              </button>
            </div>
          </nav>
          {/* Grid */}
          <div className="grid grid-cols-2 grid-rows-1 w-full h-full bg-brand-500">
            {/* Left column */}
            <div className="flex items-center justify-center">
              <h2 className="text-4xl font-extrabold font-['Poppins'] text-[72px] text-white absolute top-[280px] w-[707px] h-[137px] leading-[68.5px]">
                <span className="">Find the Best</span> <br /> Teachers & Learn
              </h2>
            </div>
            {/* Right column */}
            <div className="flex items-center justify-center ">
              <HeaderPic />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
