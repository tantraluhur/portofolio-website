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
            h-[10rem] w-[10rem] lg:h-[12rem] lg:w-[12rem]
            flex justify-center items-center">
                <img src={img} className="w-[10rem] lg:w-[12rem]"/>
            </div>
            <div className="w-[80vw] lg:w-[60vw]">
                <div className="lg:text-[24px] sm:text-[26px] text-[20px] font-bold text-justify">
                    {props.title}
                </div>
                <div>
                    <div className="font-semibold sm:text-[16px] text-[14px]">
                        {props.techstack}
                    </div>
                    <div className="text-justify sm:text-[16px] text-[14px]">           
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default CardLeft;