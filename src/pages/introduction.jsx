import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function Introduction() {
  return (
      <div className="flex justify-center items-center text-white h-full">
          <Tsparticle />
          <div className="relative lg:flex w-[100vw] justify-between mr-[4vw] ml-[4vw] flex-col-reverse lg:flex-row">
            <div className="flex items-center justify-center w-[80vw] lg:w-[60vw] mb-[-100.5rem] lg:mb-[0]">
                <div className="w-full mt-14 lg:mt-0">
                    <div>
                        <NameAnimation/>
                    </div>
                    <div className="text-[2.2vw] lg:text-[1.5vw] font-sans">
                        Undergraduate Computer Science student at the University of Indonesia
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-full bg-opacity-50 lg:h-[20vw] sm:h-[30vw] h-[40vw] lg:w-[20vw] sm:w-[30vw] w-[40vw] absolute bottom-0"></div>
                <img src={profileImage} className="rounded-full w-[40vw] sm:w-[30vw] lg:w-[20vw] h-[44vw] sm:h-[34vw] lg:h-[24vw] object-cover absolute lg:relative bottom-0"/>
            </div>
          </div>
      </div>
  );
};

export default Introduction;
