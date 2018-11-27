import React from 'react';
import {
  Nav,
  NavItem,
  Col,
  Container,
  Row,
  Navbar,
  NavbarBrand,
  NavbarToggler,
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
      <Container>
        <Navbar
          color="light"
          light
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
                Item
              </NavItem>
            </Nav>

          </Collapse>

        </Navbar>

        <Row>
          <Col sm={12}>
            <h1>xMacroscope.org</h1>
            <p>Abstract - Project Description</p>
            <p>Partners</p>
            <p>Video of the Run experience</p>
            <p>Footer with funding</p>
          </Col>
        </Row>
        <footer className="text-center">
          The xMacroscope project is supported by the
          {' '}
          <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1713567">
            National Science Foundation award #1713567
          </a>
        </footer>
      </Container>
    );
  }
}

export default App;
