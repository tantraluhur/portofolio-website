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
      <div className="py-[2.5vw] px-[6vw] experiences text-white grid gap-y-24">
          <div className="my-[70px] lg:my-0 lg:h-screen flex justify-center items-center">
            <About /> 
          </div>
          <div className="h-auto">
            <Experience />
          </div>
          <div className="lg:h-screen my-[70px] lg:my-0">
            <Skill />
          </div>
      </div>
    </>
  );
};

export default MainPage;
