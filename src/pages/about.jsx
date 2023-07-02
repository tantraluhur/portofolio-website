import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function About() {
  return (
    <div className="grid gap-y-12">
        <div className="md:text-[4.5vw] text-[5.5vw] text-center font-bold font-[Inconsolata]">
            ABOUT ME
        </div>
        <div className="text-justify lg:text-[1.5vw] text-[14px]">
            Hello, I'm Tantra &#128075;, undergraduate Computer Science &#128187; student from University of Indonesia with a strong passion for 
            software engineering, specializing in web development. With experience in both frontend and backend development, 
            I possess a strong &#128170;command over languages such as Javascript, Python, and Java. Additionally, I am skilled &#128526; in 
            utilizing frameworks such as React.js, Django, Express.js, and Springboot. With a solid foundation in computer 
            science and a diverse skill set, I am motivated to contribute to the ever-evolving world of software development 
            and create impactful solutions, so feel free to contact me &#128516;.
        </div>  
        <div className="md:text-[2.5vw] text-[3.5vw] font-bold flex gap-x-[5vw]">
          <div className="flex justify-left items-center">
            Reach Me Out!
          </div>
          <div className="md:text-[4.5vw] text-[5.5vw]">
            <a href="https://www.linkedin.com/in/aprilian-tantra/" class="fa fa-linkedin-square" target="_blank"></a>  
          </div>
          <div className="md:text-[4.5vw] text-[5.5vw]">
            <a href="https://github.com/tantraluhur" class="fa fa-github-square" target="_blank"></a>  
          </div>
          <div className="md:text-[4.5vw] text-[5.5vw]">
            <a href="https://www.instagram.com/apriliantantra/" class="fa fa-instagram" target="_blank"></a>  
          </div>
          <div className="md:text-[4.5vw] text-[5.5vw]">
            <a href="mailto:tantraluhur@gmail.com" class="fa fa-envelope-square" target="_blank"></a>  
          </div>
        </div>
    </div>
  );
};

export default About;
