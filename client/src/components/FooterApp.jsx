import HeaderLogo from "../assets/svg/HeaderLogo"
import { FiArrowUpCircle } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
export const FooterApp = () =>{
    return(
        <>
        <footer className="grid grid-cols-5 w-full h-80 bg-brand-500 px-6 py-10">
        <div className="flex justify-center">
            <HeaderLogo/>
        </div>
        <div className="flex flex-col text-brand-50">
                <div> <p className="text-[24px]  text-start  mb-10 flex justify-center items-center gap-1"><CiLocationOn/> Nasr City, Cairo Egypt</p></div>
            <div><p className="text-1xl text-start underline mb-10 relative left-9"><a href="/number">(111) 111-1111</a></p></div>
            <div><a href="/gmail" className="text-1xl text-start underline mb-10 relative left-9">contact@daftar.com</a></div>
        </div>
        <div className="ml-8">
        <ul className="text-[16px] text-brand-50 text-start mt-3">
                <li className="m-3 hover:text-[#A6AEBB] transition-all "><a href="/About us">About us</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="/Developers">Developers</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="/Courses">Courses</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="/Partners">Partners</a></li>
        </ul>
        </div>
        <div className="ml-5">
        <ul className="text-[16px] text-brand-50 text-start mt-3">
        <li className="m-3 hover:text-[#A6AEBB] transition-all "><a href="Contact us">Contact us</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="/Facebook">Facebook</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="/Twitter">Twitter</a></li>
                <li className="m-3 hover:text-[#A6AEBB] transition-all"><a href="Instagram">Instagram</a></li>
        </ul>
        <p className="text-sm text-brand-50 text-star mt-11">© 2023 Daftar Platform. All rights reserved.</p>
        </div>
        <div className="flex justify-center text-brand-50 text-7xl">
        <button className="hover:text-[#FFD5D0] h-fit mt-8">
            <FiArrowUpCircle/>
        </button>
        </div>
        </footer>
        </>
    )

}
//TODO Reem