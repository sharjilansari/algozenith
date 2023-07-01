import Card from "./card";
import Rectangle from "./svg";
import "./css/pricing.css";
export default function Pricing() {
  return (
    <div className="flex">
      <section className="pricing">
        <div className="container">
          <div className="pricing__main">
            <div className="pricing__first">
              <h2>
                Invest in skills, <br />
                <span>earn 10X</span> of what you paid.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="pricing__svg">
              <div className="pricing__box">
                <div className="pricing__text">
                  <Rectangle />
                  <div className="text__info">
                    <h3>1.2 Cr/Year</h3>
                    <p>highest fresher package</p>
                  </div>
                </div>
                <div className="pricing__text">
                  <Rectangle />
                  <div className="text__info">
                    <h3>1000+ Offers</h3>
                    <p>from top companies</p>
                  </div>
                </div>
              </div>
              <div className="pricing__box">
                <div className="pricing__text">
                  <Rectangle />
                  <div className="text__info">
                    <h3>Multiple &lt; 100 Ranks</h3>
                    <p>in kickstart last year</p>
                  </div>
                </div>
                <div className="pricing__text">
                  <Rectangle />
                  <div className="text__info">
                    <h3>Trusted by IITians</h3>
                    <p>for their career prep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Card />
    </div>
  );
}
