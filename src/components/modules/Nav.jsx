import { Link } from "react-router-dom";
import { navData } from "../../data/data";
import { scrollToSection } from "../../helpers/scrollIntoView";
import Socialmedia from "./Socialmedia";
import { useEffect, useState } from "react";

function Nav() {
  const [isActive, setIsActive] = useState("home");

  useEffect(() => {
    const determineSection = () => {
      let foundActive = false;

      navData.map((data) => {
        const { id } = data;
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < 120 && rect.bottom >= 120) {
            if (isActive !== id) {
              setIsActive(id);
            }
            foundActive = true;
          }
        }
      });
      if (!foundActive && isActive !== "home") {
        setIsActive("home");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300) determineSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div className="flex  flex-row-reverse justify-between items-center bg-black  h-[3rem] z-40 fixed w-[100%] slide-down sm:flex-row sm:justify-around">
      <div className="hidden sm:flex justify-around items-center  text-slate-50  w-[50%] sm:w-auto sm:gap-10">
        {navData.map((data, i) => {
          const { id, Name } = data;
          return (
            <div key={i}>
              <Link
                className={`${isActive === id ? "activeNav" : ""}`}
                onClick={() => {
                  scrollToSection(id);
                  // setIsActive(id);
                }}
              >
                {Name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-[50%] sm:w-auto">
        <Link
          to={
            "https://drive.google.com/file/d/1GwY3VCy3qNI7w7paoh_aq2TPGuT-nrJA/view?usp=sharing"
          }
          className="flex justify-center text-[10px] items-center  gap-2 list-none text-[#f60808] sm:text-[15px]"
        >
          <li>K</li>
          <li>A</li>
          <li>M</li>
          <li>A</li>
          <li>L</li>
          <li>E</li>
          <li>S</li>
          <li>H</li>
        </Link>
      </div>
      <div className="w-[50%] sm:w-auto">
        <Socialmedia />
      </div>
    </div>
  );
}

export default Nav;
