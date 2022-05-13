import "./intro.css";
import Me1 from "../../img/me1.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-introduction">Hello! My name is</h2>
                    <h1 className="i-name">Mariel Masuck</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">I'm a Developer</div>
                            <div className="i-title-item">I'm a Student</div>
                            <div className="i-title-item">I'm adaptable</div>
                            <div className="i-title-item">I'm a team player</div>
                            <div className="i-title-item">I'm eager to learn!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-img-bg"></div>
                <img src={Me1} alt="Yo" className="i-img" />
            </div>
        </div>
    )
}

export default Intro