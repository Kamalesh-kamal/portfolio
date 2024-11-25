import HeaderTitle from "../../header-text/HeaderTitle.jsx";
import { skillsLogo } from "./LogoData.jsx";

function Skills() {
  return (
    <div id="skills" className=" ">
      <div>
        <HeaderTitle title1={"MY SKILLS"} title2={"MY LEARNINGS"} />
      </div>

      <div className="h-[100svh] grid grid-cols-2 gap-[2rem] items-center justify-center pl-6 pr-6 sm:grid-cols-3 sm:h-[60vh] sm:gap-0">
        {skillsLogo.map((data) => {
          const { id, Name, Logo } = data;
          return (
            <div key={id} className="flex flex-col items-center gap">
              <div className="text-[60px] hover:text-[#f4121a]">{Logo}</div>
              <h2 className="text-[#8f8a8a] font-bold">{Name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
