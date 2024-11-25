import { useEffect } from "react";
import Contents from "./Contents";
import Section from "./Section";
import Nav from "./modules/Nav";
import ProfileBanner from "./modules/ProfileBanner";
import MobNav from "./modules/MobNav";

function LandingPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex flex-col">
      <Nav />
      <MobNav />
      <ProfileBanner />
      <Contents />
      <Section />
    </div>
  );
}

export default LandingPage;
