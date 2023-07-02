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
        <div className="flex justify-between gap-[2rem] h-auto items-center">
            <div className="border-[2px] border-white rounded-full bg-white h-[15rem] w-[15rem] justify-center items-center hidden lg:flex">
                <img src={img} className="w-[10rem] hidden lg:block"/>
            </div>
            <div className="w-[80vw] lg:w-[60vw]">
                <div className="lg:text-[36px] sm:text-[26px] text-[20px] font-bold text-justify">
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