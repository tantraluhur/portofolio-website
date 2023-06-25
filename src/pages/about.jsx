import NameAnimation from "../components/name-animation";
import Tsparticle from "../components/tsparticle";
import profileImage from "../assets/profile-image3.png"
 
function About() {
  return (
    <div className="grid gap-y-12">
        <div className="text-5xl text-center font-bold font-[Inconsolata]">
            ABOUT ME
        </div>
        <div className="text-justify text-xl">
            Hello, I'm Tantra &#128075;, undergraduate Computer Science &#128187; student from University of Indonesia with a strong passion for 
            software engineering, specializing in web development. With experience in both frontend and backend development, 
            I possess a strong &#128170;command over languages such as Javascript, Python, and Java. Additionally, I am skilled &#128526; in 
            utilizing frameworks such as React.js, Django, Express.js, and Springboot. With a solid foundation in computer 
            science and a diverse skill set, I am motivated to contribute to the ever-evolving world of software development 
            and create impactful solutions, so feel free to contact me &#128516;.
        </div>  
        <div className="text-2xl font-bold flex gap-x-24">
          <div className="flex justify-center items-center">
            Reach Me Out!
          </div>
          <div className="text-6xl">
            <a href="https://www.linkedin.com/in/aprilian-tantra/" class="fa fa-linkedin-square" target="_blank"></a>  
          </div>
          <div className="text-6xl">
            <a href="https://github.com/tantraluhur" class="fa fa-github-square" target="_blank"></a>  
          </div>
          <div className="text-6xl">
            <a href="https://www.instagram.com/apriliantantra/" class="fa fa-instagram" target="_blank"></a>  
          </div>
        </div>
    </div>
  );
};

export default About;