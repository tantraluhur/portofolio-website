import FEXB from "../assets/experiences/fexb.jpg"
import TOKODIZITAL from "../assets/experiences/TOKO_DIZITAL-transformed.png"
import BEMFIA from "../assets/experiences/BEMFIApng.png"

function CardLeft(props) {
    const image = {
        "BEMFIA" : BEMFIA,
        "TOKODIZITAL" : TOKODIZITAL
    }

    const img = image[props.image]
  return (
    <>
        <div className="flex flex-col lg:flex-row lg:mx-12 justify-between gap-[2rem] h-auto items-center">
            <div className=" rounded-full bg-white 
            h-[18rem] w-[18rem] lg:h-[12rem] lg:w-[12rem]
            flex justify-center items-center">
                <img src={img} className="w-[18rem] lg:w-[12rem]"/>
            </div>
            <div className="w-[80vw] lg:w-[60vw]">
                <div className="lg:text-[24px] text-[40px] font-bold">
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
        </div>
    </>
  );
};

export default CardLeft;