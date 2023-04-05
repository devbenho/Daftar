import React from "react";
import HeaderLogo from "./HeaderLogo";
import UserProfileName from "./component/UserInfo";
import { FaUserCircle } from "react-icons/fa";
import HeaderPic from "./Header-pic";

function App() {
  return (
    <>
      {/* strat header */}
      <div
        className={
          "header mx-auto h-96 flex justify-center items-center px-6 py-6 pt-8 bg-[#186B7A] overflow-y-hidden"
        }
      >
        {/* strat box */}
        <div className="header-box flex flex-col justify-center w-11/12 h-96 font-extralight">
          {/* start nav logo+links+profile */}
          <div className="box-nav w-full h-24 flex justify-between flex-row items-center">
            <div className="box-nav-logo">
              <HeaderLogo />
            </div>
            <div className="box-nav-links ml-14 flex items-center justify-center gap-8 text-[#E9F7FA] ">
              <a
                href="www.google.com"
                className="btn-hover
                relative
                 before:content-[''] 
                 before:absolute
                 before:bottom-0
                  before:left-0
                   before:w-0
                    before:h-0.5
                     before:transition-all
                      before:duration-500
                       before:bg-white 
                       hover:before:w-full
                       after:content-[''] 
                 after:absolute
                 after:top-0
                  after:right-0
                   after:w-0
                    after:h-1
                     after:transition-all
                      after:duration-500
                       after:bg-white 
                       hover:after:w-full "
              >
                Home
              </a>
              <span>l</span>
              <a href="www.google.com" className="btn-hover">
                Subscriptions
              </a>
              <span>l</span>
              <a href="www.google.com">Courses</a>
              <span>l</span>
              <a href="www.google.com">About</a>
              <span>l</span>
              <a href="www.google.com">Contact Us</a>
            </div>
            <div className="box-nav-profile-profilepic text-[#E9F7FA] flex gap-3 flex-row">
              <div className="flex justify-center items-center ">
                <FaUserCircle size="1.5rem" />
              </div>
              <div>
                <UserProfileName name="Motaz" />
              </div>
              <div>
                <a
                  href="www.google.com"
                  className="bg-[#E9F7FA] text-[#E9F7FA] p-3 rounded bg-opacity-5"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
          {/* nav end logo+links+profile */}
          {/* Start body of the header image + text */}
          <div className="header-body flex flex-row w-full h-full">
            <div className="right-col gap-12 w-1/3 flex flex-col justify-center items-center">
              <div className="quotes text-6xl text-[#E9F7FA] text-left">
                <h1>Find the Best Teachers & Learn</h1>
              </div>
              <div className="btns gap-2 font-bold flex flex-row justify-between items-center ">
                <button class="p-1 w-56 h-14 border border-[#E9F7FA] text-[#E9F7FA]">
                  Watch Demo Video
                </button>
                <button class="p-1 w-56 h-14 text-[#186B7A] bg-[#E9F7FA]">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="left-col w-2/3 flex justify-end items-end">
              <div className="headerpic">
                <HeaderPic />
              </div>
            </div>
          </div>
          {/* body of the header image + text End*/}
        </div>
        {/* box end */}
      </div>
      {/* header End */}
    </>
  );
}

export default App;
