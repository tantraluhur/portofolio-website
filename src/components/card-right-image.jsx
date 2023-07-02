import FEXB from "../assets/experiences/fexb.jpg"
import TOKODIZITAL from "../assets/experiences/TOKO DIZITAL.jpg"

function CardRight(props) {
  return (
    <>
        <div className="flex justify-between gap-[2rem] h-auto items-center">
            <div className="w-[80vw] lg:w-[60vw]">
                <div className="lg:text-[36px] sm:text-[26px] text-[20px] font-bold">
                    Backend Developer, Faculty Exhibition at Faculty of Business and Economics’s Ticketing Website
                </div>
                <div>
                    <div className="font-semibold sm:text-[16px] text-[14px]">
                        Tech stacks: Express.js, Heroku, Git, Postgresql, Xendit API, Google Sheets API, AWS S3 & SES
                    </div>
                    <div className="text-justify sm:text-[16px] text-[14px]">
                    I developed a web application to facilitate 
                    tryouts and the sale of open house tickets. 
                    By integrating the Xendit API, I successfully implemented
                     a secure and reliable payment system, 
                     processing over 300 transactions. 
                     To enhance the user experience, 
                     I established a seamless connection with AWS SES, 
                     enabling automated ticket delivery to buyers via email. 
                     Furthermore, I utilized AWS S3 to securely store all buyer's tickets.

                    </div>
                </div>
            </div>
            <div className="hidden lg:flex bg-gradient-to-b from-[#844EB9] to-[#E58132] rounded-full h-[15rem] w-[15rem] lg:justify-center lg:items-center">
                <img src={FEXB} className="w-[14rem] hidden lg:block"/>
            </div>
        </div>
    </>
  );
};

export default CardRight;