import FEXB from "../assets/experiences/fexb.jpg"
import TOKODIZITAL from "../assets/experiences/TOKO DIZITAL.jpg"

function CardRight(props) {
  return (
    <>
        <div className="flex justify-between gap-[2rem] h-auto">
            <div className="basis-3/4">
                <div className="text-2xl font-bold">
                    Backend Developer, Faculty Exhibition at Faculty of Business and Economics’s Ticketing Website
                </div>
                <div>
                    <div className="font-semibold">
                        Tech stacks: Express.js, Heroku, Git, Postgresql, Xendit API, Google Sheets API, AWS S3 & SES
                    </div>
                    <div className="text-justify">
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
            <div className="bg-gradient-to-b from-[#844EB9] to-[#E58132] rounded-full  h-[15rem] w-[15rem] flex justify-center items-center">
                <img src={FEXB} className="w-[14rem]"/>
            </div>
        </div>
    </>
  );
};

export default CardRight;