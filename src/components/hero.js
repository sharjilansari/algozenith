import "./css/hero.css";
import Heroimg from "./css/images/Group316.png"
import Rectangle from "./svg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__main">
          <div className="hero__first">
            <h1>Be better at DSA & CP</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="hero__btn">
              <a href="#" className="join">
                Join now &rarr;
              </a>
              <a href="#" className="view">
                View curriculum
              </a>
            </div>
          </div>
          <div className="hero__svg">
            <div className="box">
              <div className="text">
                <Rectangle />
                Lorem ipsum dolor sit amet
              </div>
              <div className="text">
                <Rectangle />
                Lorem ipsum dolor sit amet
              </div>
            </div>
            <div className="box">
              <div className="text">
                <Rectangle />
                Lorem ipsum dolor sit amet
              </div>
              <div className="text">
                <Rectangle />
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
        <div className="hero__img">
          <img src={Heroimg} />
        </div>
      </div>
    </section>
  );
}
