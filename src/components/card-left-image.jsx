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
        <div className="flex justify-between gap-[2rem] h-auto">
            <div className="border-[2px] border-white rounded-full bg-white h-[15rem] w-[15rem] flex justify-center items-center">
                <img src={img} className="w-[10rem]"/>
            </div>
            <div className="basis-3/4">
                <div className="text-2xl font-bold text-justify">
                    {props.title}
                </div>
                <div>
                    <div className="font-semibold">
                        {props.techstack}
                    </div>
                    <div className="text-justify">           
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default CardLeft;