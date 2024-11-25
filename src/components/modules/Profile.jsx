import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function Profile() {
  return (
    <div className="z-30">
      <h1 className="text-[25px] font-serif text-slate-50 slide-down lg:text-[60px]">
        Hi i'm Kamalesh
      </h1>
      {/* <h1 className="text-[60px] font-serif text-slate-50 slide-in">Kamalesh</h1> */}
      <h3 className=" text-[#ea2626] slide-in lg:text-[20px] ">
        Front<span className="text-[#fff] ">-end</span> Developer
      </h3>
      <div className="inline-block mt-3">
        <Link
          to={
            "https://drive.google.com/file/d/1GwY3VCy3qNI7w7paoh_aq2TPGuT-nrJA/view?usp=sharing"
          }
          className="text-[#fff] bg-red-600 p-[6.5px] rounded-full text-[17px] font-semibold slide-down"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}

export default Profile;
