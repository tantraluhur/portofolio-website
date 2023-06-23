import Experience from "./experience";
import Introduction from "./introduction";
import About from "./about";
 
function MainPage() {
  return (
    <>
      <div className="h-screen">
        <Introduction />
      </div>
      <div className="p-10 px-32 experiences text-white grid gap-y-24">
          <About />
          <Experience />
      </div>
    </>
  );
};

export default MainPage;