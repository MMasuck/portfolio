import "./contact.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Maps from "../../img/maps.png";
import Gmail from "../../img/gmail.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_7k6mt0b', 'template_487efoy', formRef.current, 'QwRevxpz-F0Cjfz78')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Github} classname="c-icon" alt="github"></img>
                            <a href="https://github.com/MMasuck" target="_blank" rel="noreferrer">/MMasuck</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Linkedin} classname="c-icon" alt="linkedin"></img>
                            <a href="https://www.linkedin.com/in/mariel-masuck/" target="_blank" rel="noreferrer">/mariel-masuck</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Gmail} classname="c-icon" alt="gmail"></img>
                            mvmasuck@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Maps} classname="c-icon" alt="maps"></img>
                            CABA, Buenos Aires, Argentina.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                        <p className="c-desc"></p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name"></input>
                            <input type="text" placeholder="Subject" name="user_subject"></input>
                            <input type="text" placeholder="Mail" name="user_mail"></input>
                            <textarea rows="5" placeholder="Message" name="message"></textarea>
                            <button>Submit</button>
                            {done && " Thanks for your message, I'll get in touch soon!"}
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact