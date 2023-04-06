export const TeamCard = () => {
  return (
    <>
      <div className="w-[1400px] h-[700px] bg-brand-0 rounded my- pt-16 mx-auto px-8">
        <h1 className="font-bold text-[32px] text-brand-500 mb-10">About</h1>
        <div className="flex justify-center items-center text-center h-4/5 ">
          <div className="rounded-xl  hover:opacity-100 transition-all opacity-60 translate-x-5 scale-90 bg-brand-50 h-[450px] w-[300px]  drop-shadow-md text-center ">
            <div>
              <img
                src={require("../assets/hamdy_pic.jpg")}
                alt=""
                className="rounded-xl object-cover w-full h-72"
              ></img>
            </div>
            <div className="mt-4">
              <span className="text-3xl text-brand-500">Hamdy</span>
            </div>
            <div className="mt-6">
              <span className="text-xl text-brand-500">Project Manager</span>
            </div>
          </div>
          <div className="hover:opacity-100 transition-all scale-95 opacity-95 bg-brand-50 h-[450px] w-[300px] rounded-xl drop-shadow-md text-center ">
            <div>
              <img
                src={require("../assets/bassil.jpg")}
                alt=""
                className="rounded-xl object-cover w-full h-72"
              ></img>
            </div>
            <div className="mt-4">
              <span className="text-3xl text-brand-500">Bassil</span>
            </div>
            <div className="mt-6">
              <span className="text-xl text-brand-500">Mobile Developer</span>
            </div>
          </div>
          <div className="rounded-xl hover:opacity-100 transition-all opacity-100 scale-105 bg-brand-50 h-[450px] w-[300px]  drop-shadow-md text-center ">
            <div>
              <img
                src={require("../assets/motaz.jpg")}
                alt=""
                className="rounded-xl object-center w-full h-72 overflow-hidden "
              ></img>
            </div>
            <div className="mt-4">
              <span className="text-3xl text-brand-500">moataz</span>
            </div>
            <div className="mt-6">
              <span className="text-xl text-brand-500">FrontEnd Developer</span>
            </div>
          </div>
          <div className="rounded-xl hover:opacity-100 transition-all scale-95 opacity-95 bg-brand-50 h-[450px] w-[300px]  drop-shadow-md text-center ">
            <div>
              <img
                src={require("../assets/reem.jpg")}
                alt=""
                className="rounded-xl object-cover w-full h-72"
              ></img>
            </div>
            <div className="mt-4">
              <span className="text-3xl text-brand-500">Reem</span>
            </div>
            <div className="mt-6">
              <span className="text-xl text-brand-500">Data Analyst</span>
            </div>
          </div>
          <div className="rounded-xl hover:opacity-100 transition-all opacity-60 -translate-x-5 scale-90 bg-brand-50 h-[450px] w-[300px]  drop-shadow-md text-center ">
            <div>
              <img
                src={require("../assets/Binhoo.jpg")}
                alt=""
                className="rounded-xl object-center w-full h-72"
              ></img>
            </div>
            <div className="mt-4">
              <span className="text-3xl text-brand-500">Banhawy</span>
            </div>
            <div className="mt-6">
              <span className="text-xl text-brand-500">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
