import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Socialmedia() {
  return (
    <div className=" flex justify-around w-[7rem] text-slate-50 slide-down  text-[12px] gap-1 sm:text-[15px] sm:gap-10">
      <Link
        to={"https://github.com/Kamalesh-kamal"}
        className="hover:text-[rgb(244,31,31)] hover:text-[25px]  "
      >
        <IoLogoGithub />
      </Link>
      <Link
        to={
          "https://www.linkedin.com/in/kamalesh-s-25398625a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXZ78mdQYRaKIcIjB25Fp%2FQ%3D%3D"
        }
        className="hover:text-[rgb(244,31,31)] hover:text-[25px]"
      >
        <FaLinkedin />
      </Link>
      <a
        href="mailto:kamaleshk784@gmail.com"
        className="hover:text-[rgb(244,31,31)] hover:text-[25px]"
      >
        <BiLogoGmail />
      </a>
    </div>
  );
}

export default Socialmedia;
