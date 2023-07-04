import FEXB from "../assets/experiences/fexb.jpg"
import PSIKO from "../assets/experiences/Logo-BEM-FPsi-UI-23.png"

function CardRight(props) {
    const image = {
        "FEXB" : FEXB,
        "PSIKO" : PSIKO
    }

    const img = image[props.image]

  return (
    <>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-[2rem] h-auto items-center lg:mx-12">
            <div className="w-[80vw] lg:w-[60vw]">
                <div className="text-[40px] font-bold lg:text-[24px]">
                    {props.title}
                </div>
                <div>
                    <div className="font-semibold lg:text-[16px] text-[32px]">
                        {props.techstack}
                    </div>
                    <div className="text-justify lg:text-[16px] text-[32px]">
                        {props.desc}
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-full h-[19rem] w-[19rem] lg:h-[12rem] lg:w-[12rem] flex justify-center items-center">
                <img src={img} className="w-[18rem] lg:w-[11rem]"/>
            </div>
        </div>
    </>
  );
};

export default CardRight;