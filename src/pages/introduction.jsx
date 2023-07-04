import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function Introduction() {
  return (
      <div className="flex justify-center items-center text-white h-full">
          <Tsparticle />
          <div className="flex relative flex-col-reverse gap-8 lg:flex-row lg:w-full lg:justify-between lg:mx-16">
            <div className="flex items-center justify-center">
                <div className="">
                    <div>
                        <NameAnimation/>
                    </div>
                    <div className="text-[2.2vw] lg:text-[1.5vw] font-sans">
                        Undergraduate Computer Science student at the University of Indonesia
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-center">
                <div className="bg-white rounded-full bg-opacity-50 w-[18rem] h-[18rem] absolute"></div>
                <img src={profileImage} className="rounded-full w-[18rem] h-[20rem] object-cover relative"/>
            </div>
          </div>
      </div>
  );
};

export default Introduction;
