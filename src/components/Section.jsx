import About from "./ui/About";
import Projects from "./ui/Project/Projects";
import Skills from "./ui/skills/Skills";
import Education from "./ui/Education";
import Footer from "./ui/Footer";
function Section() {
  return (
    <div className="h-auto">
      <div className="flex flex-col justify-between z-20  w-full bg-slate-50 relative">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default Section;
