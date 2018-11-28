/* eslint-disable */
import React, { Fragment } from 'react';
import {
  Container,
  Nav,
  NavItem,
  Col,
  Row,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Jumbotron,
  Collapse,
} from 'reactstrap';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Fragment>
        <header>
          <Navbar
            dark
            expand="md"
          >
            <NavbarBrand href="/">xMacroscope</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={isOpen}
              navbar
            >

              <Nav
                className="mr-auto"
                navbar
              >
                <NavItem>
                  <a href="/publications">Publications</a>
                </NavItem>
              </Nav>

            </Collapse>

          </Navbar>
        </header>
        <main>
          <Jumbotron className="text-center">
            <h1>xMacroscope</h1>
            <Row className="justify-content-center">
              <Col xs={8}>
                <p className="lead">
                  xMacroscope is a
                  {' '}
                  <strong>design</strong>
                  {', '}
                  <strong>build</strong>
                  {', '}
                  <strong>research</strong>
                  {' '}
                  project
                  to study how visitors to science centers understand data visualization
                  techniques.
                </p>
              </Col>
            </Row>
          </Jumbotron>
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
                      technology platform will allow us to build science center exhibit experience
                      that let
                      visitor build data visualization using their own experiences in interactive
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
                      research will allow us to itterate on the technology and exhibit platform
                      while expanding out undestanding of data visualization literacy in the
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
                    Cyberinfrastructure for Network Science Center at Indiana University in
                    Bloomington, Indiana
                  </Col>
                  <Col
                    xs={12}
                    md={3}
                  >
                    Creativity Labs at Indiana University in Bloomington, Indiana</Col>
                  <Col
                    xs={12}
                    md={3}
                  >
                    Center of Science and Industry, COSI, in Columbus Ohio</Col>
                  <Col
                    xs={12}
                    md={3}
                  >
                    Science Museum of Minnesota in Saint Paul, Minnesota</Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="text-center">
          <Container>
            <Row className="justify-content-center">
              <Col
                className="pt-4 mt-4 footer-body"
                xs={6}
              >
                The xMacroscope project is supported by<br />the
                {' '}
                <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1713567">
                  National Science Foundation, award #1713567
                </a>
              </Col>
            </Row>
          </Container>
        </footer>

      </Fragment>
    );
  }
}

export default App;
