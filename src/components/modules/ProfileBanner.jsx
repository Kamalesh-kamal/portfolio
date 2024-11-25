import profilepic from "../../images/kamalesh.jpg";
function ProfileBanner() {
  return (
    <div className="bg-black h-[100svh] w-full sticky top-0 left-0  z-0">
      <div
        style={{
          backgroundImage: `url(${profilepic})`,
        }}
        className="bg-cover h-[100svh] w-full z-0 sm:h-[98%] profileBanner"
      ></div>
    </div>
  );
}

export default ProfileBanner;
