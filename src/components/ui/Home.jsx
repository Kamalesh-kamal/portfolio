import Profile from "../modules/Profile";

function Home() {
  return (
    <div id="home">
      <div className="w-full h-[100%] flex items-center  absolute top-0 z-20 sm:h-[100vh]">
        <Profile />
      </div>
    </div>
  );
}

export default Home;
