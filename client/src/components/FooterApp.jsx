import HeaderLogo from "../assets/svg/HeaderLogo"
import { FiArrowUpCircle } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
export const FooterApp = () =>{
    return(
        <>
        <footer className="grid grid-cols-5 w-full h-80 bg-brand-500 px-6 py-6">
        <div>
            <HeaderLogo/>
        </div>
        <div className="flex flex-col">
                <div> <p className="text-4xl text-brand-50 text-start  mb-10 "><span></span> Nasr City, Cairo Egypt</p></div>
            <div><p className="text-3xl text-brand-50 text-start underline mb-10 "><a href="/number">(111) 111-1111</a></p></div>
            <div><a href="/gmail" className="text-3xl text-brand-50  text-start underline mb-10 ">contact@daftar.com</a></div>
        </div>
        <div className="ml-3">
        <ul className="text-3xl text-brand-50 text-center mt-3">
                <li className="m-1"><a href="/About us">About us</a></li>
                <li className="m-1"><a href="/Developers">Developers</a></li>
                <li className="m-1"><a href="/Courses">Courses</a></li>
                <li className="m-1"><a href="/Partners">Partners</a></li>
        </ul>
        </div>
        <div className="ml-5">
        <ul className="text-3xl text-brand-50 text-center mt-3">
        <li className="m-1"><a href="Contact us">Contact us</a></li>
                <li className="m-1"><a href="/Facebook">Facebook</a></li>
                <li className="m-1"><a href="/Twitter">Twitter</a></li>
                <li className="m-1"><a href="Instagram">Instagram</a></li>
        </ul>
        <p className="text-sm text-brand-50 text-star   mt-11">© 2023 Daftar Platform. All rights reserved.</p>
        </div>
    <button className="flex justify-center text-brand-50 text-7xl mt-20 hover:text-[#FFD5D0]">
            <FiArrowUpCircle/>
        </button>
        </footer>
        </>
    )

}
//TODO Reem
