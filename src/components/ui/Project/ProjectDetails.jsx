/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectData } from "../../../data/data";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import HeaderTitle from "../../header-text/HeaderTitle";
import ImageSlider from "./ImageSlider";
function ProjectDetails() {
  const [currentStack, setCurrentStack] = useState("");
  const [activeStack, setActiveStack] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  const prjData = projectData.find((data) => data.id == id);

  if (!prjData) {
    return <div>Project not found</div>;
  }

  const {
    id: prjId,
    Name,
    description,
    Type,
    stacks,
    img,
    website,
    github,
  } = prjData;

  const selectedDesc = stacks.find((data) => data.id == currentStack);
  console.log(selectedDesc);

  function handleClick(id) {
    setActiveStack(id);
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-[30px] text-[#1b1a1a]"
      >
        <IoArrowBackCircle />
      </button>
      <div className="flex flex-col gap-10 sm:gap-6">
        <h1 className="block text-center text-[25px] font-semibold ">
          <HeaderTitle title1={Type} title2={Name} />
        </h1>
        <h2 className="ml-4 text-[15px] text-[#ee1212] font-bold sm:ml-[70px] sm:text-[20px]">
          PROJECT{" "}
          <span className="text-[#939191] text-[13px] font-extrabold sm:text-[17px]">
            Description
          </span>{" "}
          :
        </h2>
        <div className="  w-[full]  flex gap-2  justify-center  ">
          <h2 className="w-[90%] bg-gradient-to-r from-gray-400  to-stone-400 rounded-2xl  text-[#fff] p-5">
            {description}
          </h2>
        </div>
        <div className="flex justify-around w-[100%] sm:w-[40%]">
          <Link
            to={website}
            className="flex justify-center items-center bg-red-500 text-slate-50 p-2 rounded-lg gap-2"
          >
            View Site
            <TbWorld className="text-[20px]" />
          </Link>
          <Link
            to={github}
            className=" flex justify-centr items-center gap-2 bg-red-500  text-slate-50 rounded-lg p-2"
          >
            Github
            <VscGithub className="text-[20px]" />
          </Link>
        </div>
        <div className=" flex items-center justify-center my-[3rem] ">
          <div className="h-[300px] w-full sm:h-[300px] sm:w-[600px]">
            <ImageSlider datas={img} />
          </div>
        </div>

        <h2 className="ml-[10px] text-[15px] text-[#ee1212] font-bold sm:ml-[110px] sm:text-[20px]">
          TECH{" "}
          <span className="text-[#939191] text-[13px] font-extrabold sm:text-[17px]">
            Stack
          </span>{" "}
          :
        </h2>
        <div className=" flex flex-col justify-center items-center gap-10 mb-[3rem]">
          <div className=" flex justify-around items-center border-[0px] border-double border-red-600  py-5 rounded-3xl w-[100%]">
            {stacks.map((stk, i) => {
              const { id, Name, Img, desc } = stk;
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-5 "
                >
                  <div
                    className={`${activeStack == id ? "active" : ""}`}
                    onClick={() => handleClick(id)}
                  >
                    <img
                      src={Img}
                      alt={id}
                      className="h-[30px] w-[30px] sm:h-[70px] sm:w-[70px] "
                      onClick={(e) => {
                        setCurrentStack(e.target.alt);
                      }}
                    />
                  </div>

                  <h2 className="text-[9px] sm:text-[18px] ">{Name}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="ml-[10px] text-[15px] text-[#ee1212] font-bold sm:ml-[110px] sm:text-[20px]">
          STACK{" "}
          <span className="text-[#939191] text-[13px] font-extrabold sm:text-[17px]">
            Description
          </span>{" "}
          :
        </h2>
        <div className="flex justify-center items-center w-[100%] mb-5 ">
          {currentStack ? (
            <h2 className="w-[90%]  h-auto bg-gradient-to-r from-gray-400  to-stone-400  p-5 text-[#fff] rounded-2xl sm:h-[100px]">
              {selectedDesc.desc}
            </h2>
          ) : (
            <h2 className="w-[90%] h-auto bg-gradient-to-r from-gray-400  to-stone-400  p-5 text-[#fff] rounded-2xl sm:h-[100px]">
              {stacks.at(0).desc}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
