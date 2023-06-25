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
                <div className="text-5xl text-center font-bold font-[Inconsolata] mb-12">
                    MY SKILLS
                </div>
                <div className="grid gap-8">
                    <div className="flex gap-32">
                        <div className="text-2xl font-bold flex justify-center items-center w-36">
                            Programming Languages
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={JavaLogo} className="w-20 h-20 object-contain"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={PythonLogo} className="w-20 h-20 object-cover"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={JavaScriptLogo} className="w-20 h-20 object-cover"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={TypeScriptLogo} className="w-20 h-20 object-cover"/>
                        </div>
                    </div>
                    <div className="flex gap-32">
                        <div className="text-2xl font-bold flex justify-center items-center w-36">
                            Frameworks
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={DjangoLogo} className="w-20 h-20 object-contain"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={NodeJSLogo} className="w-20 h-20 object-cover"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={SpringBootLogo} className="w-20 h-20 object-cover"/>
                        </div>
                        <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center transition hover:scale-[1.3]">
                            <img src={ReactLogo} className="w-20 h-20 object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Skill;