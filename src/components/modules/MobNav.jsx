/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { scrollToSection } from "../../helpers/scrollIntoView";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";
import { RiFolderUserLine } from "react-icons/ri";
import { navData } from "../../data/data";

function MobNav() {
  const [isActive, setIsActive] = useState("home");

  const navDatas = [
    {
      id: "home",
      Name: "Home",
      icon: <FaHome />,
    },
    {
      id: "about",
      Name: "About",
      icon: <IoMdContact />,
    },
    {
      id: "education",
      Name: "Education",
      icon: <FaGraduationCap />,
    },
    {
      id: "skills",
      Name: "Skills",
      icon: <BsGearWideConnected />,
    },
    {
      id: "projects",
      Name: "Projects",
      icon: <RiFolderUserLine />,
    },
  ];

  useEffect(() => {
    const determineSection = () => {
      let foundActive = false;
      navData.map((data) => {
        const { id } = data;
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setIsActive(id);
            foundActive = true;
          }
        }
      });
      if (!foundActive && setIsActive !== "home") {
        setIsActive("home");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300) determineSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-[#fff] flex justify-around  items-center mobNav z-30 slide-up  sm:hidden ">
      {navDatas.map((data, i) => {
        const { id, Name, icon } = data;
        return (
          <div
            key={i}
            className={`${
              isActive === id ? "activeNav" : ""
            } flex flex-col items-center`}
            onClick={() => {
              scrollToSection(id);
              // setIsActive(id);
            }}
          >
            <p className={``}>
              <span
                className={`text-[18px] text-[#fff] ${
                  isActive === id ? "activeNav" : ""
                }`}
              >
                {" "}
                {icon}
              </span>
            </p>
            <p className="text-[12px]">{Name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MobNav;
