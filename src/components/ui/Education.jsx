import { datasEducation } from "../../data/data";
import HeaderTitle from "../header-text/HeaderTitle";
/* eslint-disable react/no-unescaped-entities */
function Education() {
  return (
    <div className=" sm:h-[100vh]" id="education">
    <div>
    <HeaderTitle title1={"EDUCATION"} title2={"MY EDUCATION"} />
    </div>
      <div className="flex flex-col h-auto  items-center justify-center text-center gap-[1rem] w-[100%] py-5  sm:flex-row">
        {datasEducation.map((datas, i) => {
          const { course, studiedIn, year } = datas;
          return (
            <div key={i} className="w-[80%] shadow-xl rounded-md p-8 ">
              <h1 className="hover:text-[18px]">{course}</h1>
              <div>
                <p>{studiedIn}</p>
                <p>{year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
