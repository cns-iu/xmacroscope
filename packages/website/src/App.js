import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactGA from 'react-ga';
import './App.css';
import IntroHeader from './IntroHeader';
import FooterSite from './FooterSite';

// Initialize Google Analytics for the website
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Fragment>
      <main>
        <IntroHeader />
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={8}
              md={12}
              lg={12}
            >
              <h2 className="text-center">Our work</h2>
              <Row>
                <Col
                  xs={12}
                  md={4}
                >
                  <h3>Technology development</h3>
                  <p>
                    We are developing the open-source xMacroscope platform. This software and
                    technology platform will allow us to build science center exhibit experiences
                    that let
                    visitor construct data visualization using their own experiences in interactive
                    science exhibits.
                  </p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                >
                  <h3>Exhibit development</h3>
                  <p>
                    We are building this technology platform into several existing exhibit
                    experiences
                    at the Center of Science and Industry (COSI) in Columbus, Ohio and the Science
                    Museum of Minnesota in Saint Paul, Minnesota.
                  </p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                >
                  <h3>Research</h3>
                  <p>
                    As we build out these experiences we will observe how visitors interact with
                    these experiences, surveying them about their experiences. This learning
                    research will allow us to iterate on the technology and exhibit platform
                    while expanding out understanding of data visualization literacy in the
                    science center environment.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col
              xs={8}
              md={12}
              lg={12}
            >
              <h2 className="text-center">Partners</h2>
              <p>
                The xMacroscope project is a partnership between:
              </p>
              <Row>
                <Col
                  xs={12}
                  md={3}
                >
                  Cyberinfrastructure for Network Science Center at Indiana University, Bloomington
                </Col>
                <Col
                  xs={12}
                  md={3}
                >
                  Creativity Labs at the University of California, Irvine
                </Col>
                <Col
                  xs={12}
                  md={3}
                >
                  Center of Science and Industry, COSI, in Columbus Ohio
                </Col>
                <Col
                  xs={12}
                  md={3}
                >
                  Science Museum of Minnesota in Saint Paul, Minnesota
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <FooterSite />

    </Fragment>
  );
}

export default App;
