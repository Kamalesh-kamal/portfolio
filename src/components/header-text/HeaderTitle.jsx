/* eslint-disable react/prop-types */
function HeaderTitle(props) {
  const { title1, title2 } = props;

  return (
    <div className="flex  width-[100%] justify-center items-center my-[3rem]">
      <div className=" flex flex-col  z-10">
        <h2 className="inline text-center text-[3rem] text-[#e7e4e4] font-extrabold w-[full] sm:text-[5rem]">
          {title1}
        </h2>
        <div className="flex  z-10 h-[1px] w-[100%] bg-red-600">
          
        </div>
      </div>

      <h1 className="text-center text-[1.5rem] ] z-10 absolute sm:text-[2.5rem] mt-4">{title2}</h1>
    </div>
  );
}

export default HeaderTitle;
