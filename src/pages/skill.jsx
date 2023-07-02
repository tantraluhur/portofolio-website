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
                <div className="grid gap-8">
                    <div className="lg:flex gap-0 lg:gap-[10vw] md:gap-[5vw] lg:justify-center">
                        <div className="md:text-[26px] text-[20px] font-bold flex justify-center items-center lg:w-36 mb-4">
                            Programming Languages
                        </div>
                        <div className="flex gap-[3vw] lg:gap-[10vw] md:gap-[5vw] justify-center">
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={JavaLogo} className="md:w-20 w-16 md:h-20 h-16 object-contain"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={PythonLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={JavaScriptLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={TypeScriptLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex gap-0 lg:gap-[10vw] md:gap-[5vw] lg:justify-center">
                        <div className="md:text-[26px] text-[20px] font-bold flex justify-center items-center lg:w-36 mb-4">
                            Frameworks
                        </div>
                        <div className="flex gap-[3vw] lg:gap-[10vw] md:gap-[5vw] justify-center">
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={DjangoLogo} className="md:w-20 w-16 md:h-20 h-16 object-contain"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={NodeJSLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={SpringBootLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
                            </div>
                            <div className="md:w-24 w-20 md:h-24 h-20 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                                <img src={ReactLogo} className="md:w-20 w-16 md:h-20 h-16 object-cover"/>
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
