import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import Navs from "./Navs";

export const Domain = () => {

  return (
    <>
      <Navs />
      <div className="black-box">
        <p>.
          <br />
          .
          <br />
          .
        </p>
      </div>
      <section className="startup" id="startup">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="startup-bx wow zoomIn">
                <h1 className="domain-h">Domains</h1>
                <br />
                <hr />
                <h3>Ed-Tech</h3>
                <p> Educational technology (commonly abbreviated as edutech, or edtech) is the combined use of computer hardware, software, and educational theory and practice to facilitate learning. When referred to with its abbreviation, edtech, it often refers to the industry of companies that create educational technology.</p>
                <hr />
                <h3>Fin-Tech</h3>
                <p> Fintech refers to the integration of technology into offerings by financial services companies to improve their use and delivery to consumers.</p>
                <hr />
                <h3>Healthcare</h3>
                <p> Online pharmacy that sells medicines, diagnostics and telehealth online. It is an online platform for users to order prescribed medicines, OTC pharmaceuticals, and other healthcare products.</p>
                <hr />
                <h3>Agri based</h3>
                <p>An agritech startup is a business that employs technology in the agricultural sector to support Indian farmers.</p>

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
      </section>
    </>
  );
};

export default Domain;