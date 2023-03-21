import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';

export const Startup = () => {

  return (
    <section className="startup" id="startup">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="startup-bx wow zoomIn">
              <h2>Startup</h2>
              <p>
                Investing in startups or mutual funds that invest in startups can be a smart financial decision with the potential for high returns. These investments provide the opportunity to support emerging businesses and spread your risk across multiple companies. While they do come with some risk, investing a small amount of savings and diversifying your portfolio can help manage that risk. Overall, investing in startups or startup-focused mutual funds can be a smart way to grow your wealth and support innovative businesses.
              </p>

              {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Public</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            Startup.map((startup, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...startup}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>} */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
