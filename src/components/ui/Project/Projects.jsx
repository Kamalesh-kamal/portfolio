import { Link } from "react-router-dom";
import { projects } from "../../../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import HeaderTitle from "../../header-text/HeaderTitle";

function Projects() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="projects" className="h-auto">
      <div>
        <HeaderTitle title1={"PROJECTS"} title2={"MY WORKS"} />
      </div>
      <div className="flex flex-col justify-center  items-center h-auto w-[100%] sm:flex-row ">
        {projects.map((data, i) => {
          const { id, Name, img, description } = data;
          return (
            <div
              key={i}
              className=" flex flex-col justify-center items-center gap-3 h-auto w-[100%] my-5"
            >
              <img
                src={img}
                className="h-[200px] w-[300px] rounded-xl shadow-md my-5 sm:w-[500px] sm:h-[250px]"
                alt={Name}
              />
              <div className="flex w-[90%] justify-between">
                <h1 className="font-bold">{Name}</h1>
                <Link to={`/project/${id}`} onClick={() => scrollToTop()}>
                  <p className="flex text-[#5c5b5b] hover:text-[#f84545] hover:font-bold">
                    View Details
                    <span className="text-[15px]  relative top-[5px] ml-1">
                      <FaExternalLinkAlt />
                    </span>
                  </p>
                </Link>
              </div>
              <h2 className="text-justify w-[90%] mb-[2rem]">{description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
