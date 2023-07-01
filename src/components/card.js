import "./css/card.css";
import Rectangle from "./svg";
export default function Card() {
  return (
    <section className="card">
      <div className="card__background">
        <div className="card__head">
          <div className="card__container">
            <h1>Premium Victory batch</h1>
            <span className="original_price">&#8377;19,999</span>
            <span className="discount">&#8377;13,999</span>
          </div>
        </div>
      </div>
      <div className="card__body">
      <div className="card__container">
        <div classaName="card__svg">
          <div className="card__box">
            <div className="card__text">
              <Rectangle />
              <p>100+ Hrs Live Content</p>
            </div>
            <div className="card__text">
              <Rectangle />
              <p>50+ Hrs Contest</p>
            </div>
            <div className="card__text">
              <Rectangle />
              <p>500+ Problems</p>
            </div>
            <div className="card__text">
              <Rectangle />
              <p>
                Includes an interview bootcamp and access to a mentor network
              </p>
            </div>
            <div className="card__text">
              <Rectangle />
              <p>
                Enjoy access to our content for one year &#40;paid extensions
                available &#41;
              </p>
            </div>
            <div className="card__text">
              <Rectangle />
              <p>
                Flexible payment options, including no-cost EMI, are available.
              </p>
            </div>
          </div>
        </div>
        <div className="card__btn">
          <a href="#" className="card__join">
            Join now &rarr;
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
