import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';

export const Invest = () => {

  return (
    <section className="startup" id="startup">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="startup-bx wow zoomIn">
              <h2>Why Should You Invest?</h2>
              <p>
                Investing in startups or mutual funds that invest in startups can be a smart financial decision with the potential for high returns. These investments provide the opportunity to support emerging businesses and spread your risk across multiple companies. While they do come with some risk, investing a small amount of savings and diversifying your portfolio can help manage that risk. Overall, investing in startups or startup-focused mutual funds can be a smart way to grow your wealth and support innovative businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={'.../assets/img/color-sharp.png'} alt="Image" />
    </section>
  );
};
