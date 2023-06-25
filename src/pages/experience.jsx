import CardLeft from "../components/card-left-image";
import CardRight from "../components/card-right-image";

 
function Experience() {
  return (
    <>
        <div className="text-5xl font-bold mb-12 font-[Inconsolata] flex justify-center">
            WORKING EXPERIENCES
        </div>
        <div className="grid gap-20">
            <CardLeft 
            image="TOKODIZITAL" 
            title="Backend Developer Internship, Toko Dizital"
            techstack="Tech stacks: Django REST, Git, Postgresql,  Google Cloud App Engine, Google Cloud Storage"
            desc="I developed mobile application that empowers users to 
            identify plant diseases by capturing photos of the plant's condition. 
            To ensure efficient storage and deployment, I integrated the application with Google Cloud Storage 
            for storing image files and utilized Google Cloud App Engine for seamless deployment.
            This comprehensive system enables users to easily detect
            plant diseases and take appropriate measures for plant care."
            />


            <CardRight/>


            <CardLeft 
            image="BEMFIA" 
            title="Frontend Developer, Student Executive Board of the Faculty of Administrative Sciences’s Website"
            techstack="Tech stacks: React.js, Git, Heroku."
            desc="I designed and developed a dynamic web application specifically for 
            the Student Executive Board of the Faculty of Administrative Sciences, 
            catering to their profile and open recruitment of BEM (Board of Executive Members) members. 
            The application successfully processed over 100 registrations from enthusiastic users. 
            To ensure a seamless user experience, I implemented a responsive web design using ReactJS and Tailwind CSS, 
            allowing the application to adapt seamlessly across various devices. Furthermore, 
            I integrated backend APIs endpoints to fetch and manage data effectively, 
            creating a robust and efficient system for the organization's needs."
            />
        </div>
    </>
  );
};

export default Experience;