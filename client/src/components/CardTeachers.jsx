import ModelTeacherImg from "../assets/model-teacher.jpg";
import StarDarkSVG from "../assets/svg/StarDarkSVG";
import StarYellowSVG from "../assets/svg/StarYellowSVG";
import Avatar from "./Avatar";
import RattingBar from "./RattingBar";

export function CardTeachers({ img, teacherName, subjectName, rating }) {
  return (
    <>
      <div className="w-[300px] h-[450px] flex flex-col rounded-xl mx-auto  bg-brand-399 my-16  bg-brand-75">
        <div className="bg-black rounded-t-xl overflow-hidden h-1/2">
          <img src={img} alt="TeacherModel" className="" />
        </div>
        <p className="font-['Poppins'] text-[18px] ml-4 mt-8">{teacherName}</p>
        <p className="text-text-meta text-[18px] ml-4">{subjectName}</p>
        <div className=" ml-4 bg-bottom mt-24 justify-end align-bottom">
          <RattingBar rating={rating}/>
        </div>
      </div>
    </>
  );
}

{
  /* <CardTeachers
name=""
subject=""
photo=""
id=""
demoLink=""
stars=""
isFav=""
/> */
}
