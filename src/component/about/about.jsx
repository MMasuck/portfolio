import "./about.css";
import Me2 from "../../img/me2.jpg";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import Rlogo from "../../img/rlogo.png";

 const About = () => {
     return (
         <div className="a">
             <div className="a-left">
                 <div className="a-card bg"></div>
                 <div className="a-card">
                     <img src={Me2} className="a-img" alt=""/>
                 </div>
             </div>
             <div className="a-right">
                 <h1 className="a-title">About me</h1>
                 <p className="a-descr">I've been working with human groups and teams of professionals in Health business for the last 8 years, always giving everything from myself to exceed at the task. Communication, flexibility and service vocation were an essential part of my job.</p>
                 <p className="a-descr">Recently I've taken my first steps into IT, and I'm excited to keep on learning and improving every day. I'm reliable and responsible, adaptable and great at teamwork. I'm currently looking for a job opportunity to improve myself, learn from my enviroment and build a succesfull career in the IT world.</p>
                 <div className="a-abi">
                 <p className="a-abi-title">My abilities so far</p>
                 <img src={Html} alt="" className="a-icon"/>
                 <img src={Css} alt="" className="a-icon"/>
                 <img src={Js} alt="" className="a-icon"/>
                 <img src={Rlogo} alt="" className="a-icon"/>
                 </div>
             </div>
         </div>
     )
 }

export default About
