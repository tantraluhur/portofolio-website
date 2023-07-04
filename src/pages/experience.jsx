import CardLeft from "../components/card-left-image";
import CardRight from "../components/card-right-image";

 
function Experience() {
  return (
    <>
        <div className="lg:text-[60px] text-[5.5vw] font-bold mb-12 font-[Inconsolata] flex justify-center">
            WORKING EXPERIENCES
        </div>
        <div className="grid gap-[50px] lg:gap-20 justify-center lg:justify-normal">
            <CardLeft 
            image="TOKODIZITAL" 
            title="Backend Developer Internship, Toko Dizital"
            techstack="Tech stacks: Python, Django REST, Git, Postgresql,  Google Cloud App Engine, Google Cloud Storage"
            desc="I developed mobile application that empowers users to 
            identify plant diseases by capturing or uploading photos of the plant's condition. 
            To ensure efficient storage and deployment, I integrated the application with Google Cloud Storage 
            for storing image files and utilized Google Cloud App Engine for seamless deployment.
            This comprehensive system enables users to easily detect
            plant diseases and take appropriate measures for plant care."
            />


            <CardRight
            image="FEXB"
            title="Backend Developer, Faculty Exhibition at Faculty of Business and Economics’s Ticketing Website"
            techstack="Tech stacks: Javascript, Express.js, Heroku, Git, Postgresql, Xendit API, Google Sheets API, AWS S3 & SES"
            desc="I developed a web application to facilitate 
            tryouts and the sale of open house tickets. 
            By integrating the Xendit API, I successfully implemented
             a secure and reliable payment system, 
             processing over 300 transactions. 
             To enhance the user experience, 
             I established a seamless connection with AWS SES, 
             enabling automated ticket delivery to buyers via email. 
             Furthermore, I utilized AWS S3 to securely store all buyer's tickets."
            />


            <CardLeft 
            image="BEMFIA" 
            title="Frontend Developer, Student Executive Board of the Faculty of Administrative Sciences’s Website"
            techstack="Tech stacks: Javascript, React.js, Git, Heroku."
            desc="I designed and developed a dynamic web application specifically for 
            the Student Executive Board of the Faculty of Administrative Sciences, 
            catering to their profile and open recruitment of BEM (Board of Executive Members) members. 
            The application successfully processed over 100 registrations from enthusiastic users. 
            To ensure a seamless user experience, I implemented a responsive web design using ReactJS and Tailwind CSS, 
            allowing the application to adapt seamlessly across various devices. Furthermore, 
            I integrated backend APIs endpoints to fetch and manage data effectively, 
            creating a robust and efficient system for the organization's needs."
            />

            <CardRight
            image="PSIKO"
            title="Backend Developer, Psychology Executive Board Evaluation’s Website"
            techstack="Tech stacks: Django REST, Heroku, Git, Postgresql, Google Sheets API"
            desc="I developed a web application for the Student Executive Board of the Faculty of Psychology, 
            University of Indonesia, enabling them to conduct appraisal forms. 
            The application includes APIs created using custom Django REST serialization, 
            which are utilized by over 150 users every quarter year. Additionally, 
            I integrated the evaluation results seamlessly into Google Sheets using the Google Sheets API."
            />
        </div>
    </>
  );
};

export default Experience;
