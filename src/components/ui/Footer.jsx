/* eslint-disable react/no-unescaped-entities */
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black text-[#fff] h-[25svh] flex flex-col justify-around items-center mb-[3rem]  sm:h-[50vh] sm:mb-0">
      <h2 className=" text-[14px] hover:text-[#ec1818] font-semibold  sm:text-[25px]">
        LET'S CREATE SOMETHING AMAZING TOGETHER!
      </h2>

      <h2 className="w-[85%]  text-[13px] hover:text-[#ec1818] hover:font-semibold text-justify sm:text-[20px]">
        Let's collabrate and turn ideas into reality. if you have a project in
        mind or just want to connect. feel free to reach out.
      </h2>
      <div className="">
        <div className=" flex justify-around w-[7rem] text-[#fff] slide-down  text-[22px] gap-6 sm:text-[25px] sm:gap-10">
          <Link
            to={"https://github.com/Kamalesh-kamal"}
            className=" hover:text-[rgb(244,31,31)] hover:text-[30px]  "
          >
            <IoLogoGithub />
          </Link>
          <Link
            to={
              "https://www.linkedin.com/in/kamalesh-s-25398625a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXZ78mdQYRaKIcIjB25Fp%2FQ%3D%3D"
            }
            className="hover:text-[rgb(244,31,31)] hover:text-[30px]"
          >
            <FaLinkedin />
          </Link>
          <a
            href="mailto:kamaleshk784@gmail.com"
            className="hover:text-[rgb(244,31,31)] hover:text-[30px]"
          >
            <BiLogoGmail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
