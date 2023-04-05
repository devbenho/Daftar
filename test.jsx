<>
{/* start header */}
<div
  className={
    "mx-auto h-96 flex justify-center items-center px-6 py-6 pt-8 bg-[#186B7A] overflow-y-hidden"
  }
>
  {/* strat box */}
  <div className="header-box flex flex-col justify-center w-11/12 h-96 font-extralight">
    {/* start nav logo+links+profile */}
    <div className="box-nav w-full h-24 flex justify-between flex-row items-center">
      <div className="box-nav-logo">
        <HeaderLogo />
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



//  brand:{
//         50:'#E9F7FA',
//         75:'#A6DFE8',
//         100: '#82D1DF',
//         200: '#4CBDD1',
//         300:'#27B0C8',
//         400: '#1B7B8C',
//         500: '#186B7A',
//       }

// brand: {
//   50: '#12262F',
//   75: '#1A4550',
//   100: '#1F5662',
//   200: '#297A8C',
//   300: '#3A97B3',
//   400: '#6CBEDF',
//   500: '#8CD6E8',
// }

// brand: {
//   50: '#22363B',
//   75: '#2B4B52',
//   100: '#34595F',
//   200: '#3D6C72',
//   300: '#4B8594',
//   400: '#678F9D',
//   500: '#7BA4AE',
// }
