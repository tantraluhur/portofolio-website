import DjangoLogo from "../assets/skills/django-logo-negative.png"
import NodeJSLogo from "../assets/skills/node-js-svgrepo-com.svg"
import SpringBootLogo from "../assets/skills/springboot.png"
import ReactLogo from "../assets/skills/react.png"
import JavaLogo from "../assets/skills/Java-Logo.png"
import PythonLogo from "../assets/skills/Python-logo-notext.svg.png"
import JavaScriptLogo from "../assets/skills/javascript-logo-transparent-logo-javascript-images-3.png"
import TypeScriptLogo from "../assets/skills/typescript-svgrepo-com.svg"


function Skill() {
  return (
    <>
        <div className="flex justify-center items-center h-full">
            <div className="w-full">
                <div className="md:text-[4.5vw] text-[5.5vw] text-center font-bold font-[Inconsolata] mb-12">
                    MY SKILLS
                </div>
                <div className="grid gap-12">
                    <div className="jusitfy-center">
                        <div className="lg:text-[26px] text-[32px] font-bold flex justify-center items-center w-full mb-8">
                            Programming Languages
                        </div>
                        <div className="flex gap-[3vw] lg:gap-[10vw] md:gap-[5vw] justify-center">
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={JavaLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-contain"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={PythonLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-cover"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={JavaScriptLogo} className="lg:w-20 w-29 lg:h-20 h-29 object-cover"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={TypeScriptLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center">
                        <div className="lg:text-[26px] text-[32px] font-bold flex justify-center items-center w-full mb-8">
                            Frameworks
                        </div>
                        <div className="flex gap-[3vw] lg:gap-[10vw] md:gap-[5vw] justify-center">
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={DjangoLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-contain"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={NodeJSLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-cover"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={SpringBootLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-cover"/>
                            </div>
                            <div className="lg:w-24 w-32 lg:h-24 h-32 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={ReactLogo} className="lg:w-20 w-28 lg:h-20 h-28 object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Skill;
