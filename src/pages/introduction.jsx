import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function Introduction() {
  return (
    <>
      <div className="flex justify-center items-center text-white">
          <Tsparticle />
          <div className="relative flex w-full justify-between mr-20 ml-20">
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <NameAnimation/>
                    </div>
                    <div className="text-xl font-sans">
                        Undergraduate Computer Science student at the University of Indonesia
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-full bg-opacity-50 h-[26rem] w-[26rem] absolute bottom-0"></div>
                <img src={profileImage} className="rounded-full w-[26rem] h-[30rem] object-cover relative"/>
            </div>
          </div>
      </div>
    </>
  );
};

export default Introduction;