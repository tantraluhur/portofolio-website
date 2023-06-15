import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function Introduction() {
  return (
    <>
      <div className="flex justify-center items-center h-full text-white">
          <Tsparticle />
          <div className="relative flex w-full justify-between mr-20 ml-20">
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <NameAnimation/>
                    </div>
                    <div className="text-xl">
                        Undergraduate Computer Science student from the University of Indonesia
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src={profileImage} className="rounded-full w-[28rem] h-[30rem] object-cover"/>
            </div>
          </div>
      </div>
    </>
  );
};

export default Introduction;