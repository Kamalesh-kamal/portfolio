/* eslint-disable react/no-unescaped-entities */
import img from "../../images/kamlesh profile.png";
import HeaderTitle from "../header-text/HeaderTitle";
function About() {
  return (
    <div className="h-auto w-full flex flex-col py-5 gap-5" id="about">
      <div>
        <HeaderTitle title1={"ABOUT"} title2={"ABOUT ME"} />
      </div>
      <div className="flex flex-col gap-5 w-[100%] h-[50%]  justify-center sm:flex-row sm:items-center  sm:justify-around sm:h-[100%] sm:gap-0 ">
        <div className="flex  justify-center w-[100%] sm:w-[auto] sm:justify-start ">
          <img
            src={img}
            className="h-[250px] w-[240px] rounded-full sm:h-[350px] sm:w-[300px] sm:rounded-lg"
          />
        </div>
        <div className="ml-5  w-[90%]  text-justify text-[16px] gap-3 sm:w-[50%] sm:flex sm:flex-col sm:gap-8">
          <div className="sm:flex sm:flex-col sm:gap-2">
            <p>
              Hello! I'm Kamalesh, a passionate and dedicated front-end
              developer building engaging, responsive, and user-friendly web
              applications. My expertise lies in translating design concepts
              into interactive websites and applications that enhance the user
              experience.{" "}
            </p>
            <p>
              My focus is not just on making products enjoyable but also
              ensuring the code is easy to maintain and understand. I've had the
              chance to build memorable, user-friendly projects that showcase
              the perfect blend of creativity and functionality
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 ">
            <div className="flex ">
              <p className="text-[#f96e6e] inline-block w-[5rem]">Name:</p>
              <p className=" text-[#161515]"> Kamalesh</p>
            </div>
            <div className="flex">
              <p className="inline-block w-[5rem] text-[#f96e6e]">Birthday:</p>
              <p className=" text-[#161515]">12 Nov 2002</p>
            </div>
            <div className="flex">
              <p className="inline-block w-[5rem] text-[#f96e6e]">Degree:</p>
              <p className=" text-[#161515]">Bsc.Computer Science</p>
            </div>
            <div className="flex ">
              <p className="inline-block w-[5rem] text-[#f96e6e]">E-mail:</p>
              <p className=" text-[#161515]">kamaleshk784@gmail.com</p>
            </div>
            <div className="flex ">
              <p className="inline-block w-[5rem] text-[#f96e6e]">Phone:</p>
              <p className=" text-[#161515]">+91 8825774928</p>
            </div>
            <div className="flex">
              <p className="inline-block w-[5rem] text-[#f96e6e]">Address:</p>
              <p className=" text-[#161515]">
                Wellington, Coonoor, The Nilgiris, Tamilnadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
