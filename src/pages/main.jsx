import Experience from "./experience";
import Introduction from "./introduction";
import About from "./about";
import Skill from "./skill";
 
function MainPage() {
  return (
    <>
      <div className="h-screen">
        <Introduction />
      </div>
      <div className="py-[8rem] px-[6vw] experiences text-white grid gap-y-24">
          <div className="h-screen flex justify-center items-center">
            <About /> 
          </div>
          <div className="h-auto">
            <Experience />
          </div>
          <div className="lg:h-screen">
            <Skill />
          </div>
      </div>
    </>
  );
};

export default MainPage;
